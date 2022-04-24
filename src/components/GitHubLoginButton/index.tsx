import { Button } from "@mui/material";
import style from "./style";

interface props {
  children: string 
}

export default function GitHubLoginButton({ children }: props) { 
  return (
      <Button
        variant="contained"
        size="medium"
        sx={style}
      >
        {children}
      </Button>
  );
}