import { FormGroup } from "@mui/material";
import { ReactNode } from "react";

interface  Props {
  children: ReactNode,
}

export default function Form({ children }: Props) {
  return (
    <FormGroup sx={{ m: 1, width: "464px", gap: "25px" }}>
      {children}
    </FormGroup>
  )
}