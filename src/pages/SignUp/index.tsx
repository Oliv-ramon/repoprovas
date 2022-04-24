import { Button, Divider } from "@mui/material";
import { useState } from "react";

import { Container, GitHubLoginButton, Logo, StyledLink, Title } from "../../components";
import { Form, Input, Footer } from "../../components/FormComponents";


export default function SignIn() {
  const [loading, setLoading] = useState(false);

  return (
  <>
    <Logo/>
    <Container>
      <Title>Cadastrar</Title>
      <GitHubLoginButton>Entrar com GitHub</GitHubLoginButton>
      <Divider sx={{width:"100%"}}>ou</Divider>
      <Form>
        <Input 
          label="Email"
          type="email"
          disabled={loading} 
        />
        <Input 
          label="Confirme sua senha"
          type="password"
          disabled={loading} 
        />
        <Input 
          label="Password"
          type="password"
          disabled={loading} 
        />
        <Footer>
          <StyledLink to="/">Já possuo cadastro</StyledLink>
          <Button variant="contained">CADASTRAR</Button>
        </Footer>
      </Form>
    </Container>
  </>
  );
}