import { Box } from "@mui/system";
import { ReactNode } from "react";
import style from "./style";

interface Props {
  children: ReactNode
}



export default function Container({ children }: Props) {
  return (
    <Box component="main" sx={style}>
      {children}
    </Box>
  );
}