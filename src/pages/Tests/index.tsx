import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

import { Container, Header, Logo, SearchBar } from "../../components";
import TestsList from "./TestsList";
import useAuth from "../../hooks/useAuth";
import { Box, Button, Divider } from "@mui/material";

export default function Tests() {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() =>  {
    const authExist = auth !== null;
    const haveToken = auth?.token !== null; 

    if (!authExist || !haveToken) navigate("/sign-in");
  }, [auth]);

  return (
    <>
      <Header>
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
        <Logo/>
        <LogoutIcon 
          sx={{color: "black", fontSize: "40px"}}
          onClick={() => logout()}
        />
        </Box>
        <SearchBar/>
      </Header>
      <Divider sx={{width: "100%", margin: "20px 0"}}/>
      <Container>
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
          >
            DISCIPLINAS
          </Button>
          <Button
            variant="outlined"
          >
            PESSOA INSTRUTORA
          </Button>
          <Button
            variant="outlined"
          >
            ADICIONAR
          </Button>
        </Box>
        <TestsList></TestsList>
      </Container>
    </>
  )
}