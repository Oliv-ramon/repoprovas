import { Button, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, GitHubLoginButton, Logo, StyledLink, Title } from "../../components";
import { Form, Input, Footer } from "../../components/FormComponents";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

interface OnChangeEvent {
  target: {
    type: string
    value: string
  }
};

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { persistLogged, auth } = useAuth();
  const navigate = useNavigate();

  function handleChange({ target }: OnChangeEvent) {
    const formDataValues = Object.values(formData);

    if (formDataValues.every(str => str.length > 0)) setError(false);

    setFormData({ ...formData, [target.type]: target.value });
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    
    setLoading(true);

    const haveEmptyFields = 
      !formData.email ||
      !formData.password

    if (haveEmptyFields) {
      setLoading(false);
      setError(true);
      return alert("Todos os campos devem ser preenchidos");
    }

    try {
			const { data: Auth } = await api.signIn(formData);
			persistLogged(Auth);
			setLoading(false);
      navigate("/");
		} catch (error: Error | any) {
			setLoading(false);
			const errorMessage = error.response.data;
			alert(errorMessage);
		} 
  }

  useEffect(() => {
    console.log(auth)
    const authExist = auth !== null;
    const haveToken = auth?.token !== null; 

    if (authExist && haveToken) navigate("/");
  },[]);

  return (
  <>
    <Logo/>
    <Container>
      <Title>Login</Title>
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
        <Footer>
          <StyledLink to="/sign-up">Não possuo cadastro</StyledLink>
          <Button disabled={loading} type="submit" variant="contained">Entrar</Button>
        </Footer>
      </Form>
    </Container>
  </>
  );
}