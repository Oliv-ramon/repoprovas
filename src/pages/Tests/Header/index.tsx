import { Box } from "@mui/system";

import style from "./style";

interface Props {
  children: React.ReactNode
}

export default function Header({ children }: Props) {
  return (
    <Box 
      component="header"
      sx={style}  
    >
      {children}
    </Box>
  )
}