import { Button } from "@mui/material";
import { useState } from "react";

import { Container, Footer, GitHubLoginButton, Logo, Separator, StyledLink } from "../../components";
import { Form, Input } from "../../components/FormComponents";


export default function SignIn() {
  const [loading, setLoading] = useState(false);

  return (
  <>
    <Logo/>
    <Container>
      <h1>Login</h1>
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
          label="Password"
        />
        <Footer>
          <StyledLink 
            to="/sign-up"
          >
            Não possuo cadastro
          </StyledLink>
          <Button 
            variant="contained"
          >
            Entrar
          </Button>
        </Footer>
      </Form>
    </Container>
  </>
  );
}