import { Box } from "@mui/system";
import { ReactNode } from "react";
import style from "./style";

interface Props {
  children: ReactNode
}

export default function Title({ children }: Props) {
  return <Box sx={style} component="h1">{children}</Box>;
}