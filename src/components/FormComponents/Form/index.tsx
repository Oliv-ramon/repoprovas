import { Box } from "@mui/material";
import { ReactNode } from "react";
import style from "./style";

interface  Props {
  children: ReactNode,
}



export default function Form({ children }: Props) {
  return (
    <Box component="form" sx={style}>
      {children}
    </Box>
  )
}