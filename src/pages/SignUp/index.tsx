import { Button } from "@mui/material";
import { useState } from "react";

import { Container, Footer, GitHubLoginButton, Logo, Separator, StyledLink } from "../../components";
import { Form, Input } from "../../components/FormComponents";


export default function SignUp() {
  const [loading, setLoading] = useState(false);

  return (
  <>
    <Logo/>
    <Container>
      <h1>Cadastrar</h1>
      <GitHubLoginButton>
        Entrar com GitHub
      </GitHubLoginButton>
      <Separator/>
      <Form>
        <Input 
          disabled={loading} 
          type="email"
        />
        <Input 
          disabled={loading} 
          type="password"
          label="Confirme sua senha"
        />
        <Input 
          disabled={loading} 
          type="password"
          label="Password"
        />
        <Footer>
          <StyledLink 
            to="/"
          >
            Já possuo cadastro
          </StyledLink>
          <Button 
            variant="contained"
          >
            CADASTRAR
          </Button>
        </Footer>
      </Form>
    </Container>
  </>
  );
}