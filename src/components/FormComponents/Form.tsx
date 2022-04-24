import { Box } from "@mui/material";
import { SxProps } from '@mui/system';
import { ReactNode } from "react";

interface  Props {
  children: ReactNode,
}

const styles: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "25px"
};

export default function Form({ children }: Props) {
  return (
    <Box component="form" sx={styles}>
      {children}
    </Box>
  )
}