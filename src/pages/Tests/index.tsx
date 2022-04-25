import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Tests() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() =>  {
    const authExist = auth !== null;
    const haveToken = auth?.token !== null; 

    if (!authExist || !haveToken) navigate("/sign-in");
  }, [auth]);

  return (
    <h1>provas</h1>
  )
}