import { Button, Divider } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, GitHubLoginButton, Logo, StyledLink, Title } from "../../components";
import { Form, Input, Footer } from "../../components/FormComponents";
import api from "../../services/api";

interface OnChangeEvent {
  target: {
    type: string
    value: string
    name: string
  }
};

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange({ target }: OnChangeEvent) {
    const formDataValues = Object.values(formData);

    if (formDataValues.every(str => str.length > 0)) setError(false);

    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    setLoading(true);

    const haveEmptyFields = 
      !formData.email ||
      !formData.password || 
      !formData.confirmPassword;

    if (haveEmptyFields) {
      setLoading(false);
      setError(true)
      console.log(formData)
      return alert("Todos os campos devem ser preenchidos");
    }

    const passwordsDontMatch = formData.password !== formData.confirmPassword;

    if (passwordsDontMatch) {
      return alert("As senhas devem coincidir");
    }

    try {
			await api.signUp(formData);
			setLoading(false);
      navigate("/");
		} catch (error: Error | any) {
			setLoading(false);
			const errorMessage = error.response.data;
			alert(errorMessage);
		} 
  }

  return (
  <>
    <Logo/>
    <Container>
      <Title>Cadastrar</Title>
      <GitHubLoginButton>Entrar com GitHub</GitHubLoginButton>
      <Divider sx={{width:"100%"}}>ou</Divider>
      <Form onSubmit={handleSubmit}>
        <Input 
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={loading} 
          error={error}
        />
        <Input 
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          disabled={loading} 
          error={error}
          />
        <Input 
          label="Confirme sua senha"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          disabled={loading} 
          error={error}
        />
        <Footer>
          <StyledLink to="/">Já possuo cadastro</StyledLink>
          <Button  type="submit" disabled={loading} variant="contained">CADASTRAR</Button>
        </Footer>
      </Form>
    </Container>
  </>
  );
}