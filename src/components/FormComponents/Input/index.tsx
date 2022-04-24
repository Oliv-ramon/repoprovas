
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

interface Props {
  type: string
  disabled: boolean
  label?: string
}

export default function Input({ type, disabled, label }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const endAdornment = type === "password" ? (
    <InputAdornment position="end">
      <IconButton 
        aria-label="toggle password visibility"
        edge="end"
        onClick={() => setShowPassword(!showPassword)}
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