import { Box } from "@mui/material";
import { ReactNode } from "react";
import style from "./style";

interface  Props {
  children: ReactNode,
  onSubmit: React.FormEventHandler<HTMLFormElement>
}



export default function Form({ children, onSubmit }: Props) {
  return (
    <Box onSubmit={onSubmit} component="form" sx={style}>
      {children}
    </Box>
  )
}