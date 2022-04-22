import { Button } from "@mui/material";
import styled from "styled-components";
import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#424445',
      darker: '#0d1218',
    },
    neutral: {
      main: '#424445',
      contrastText: '#fff',
    },
  },
});

interface props {
  children: string 
}

export default function GitHubLoginButton({ children }: props) { 
  return (
    <ThemeProvider theme={theme}>
      <StyledButton
        variant="contained"
        size="medium"
      >
        {children}
      </StyledButton>
    </ThemeProvider>
  );
}

const StyledButton = styled(Button)`
  width: 464px;
  border-radius: 4px;
`;