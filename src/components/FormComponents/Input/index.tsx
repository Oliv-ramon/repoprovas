
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";

interface Props {
  type: string
  disabled: boolean
  label?: string
  showPassword?: boolean
}

export default function Input({ type, disabled, label, showPassword }: Props) {
  const endAdornment = type === "password" ? (
    <InputAdornment position="end">
      <IconButton 
        aria-label="toggle password visibility"
        edge="end"
      >
        {showPassword ? <VisibilityOff/> : <Visibility/>}
      </IconButton>
    </InputAdornment>
  ) : null;


  return (
    <TextField
      label={label}
      type={type}
      disabled={disabled}
      InputProps={{
        endAdornment
      }}
      InputLabelProps={{
        sx: { color: "#00000099" }
      }}
    />
  )
}