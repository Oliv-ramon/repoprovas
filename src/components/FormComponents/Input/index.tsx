
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

interface Props {
  type: string
  disabled: boolean
  label: string
  name: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  error: boolean
}

export default function Input({ 
  type,
  disabled,
  label,
  name,
  value,
  onChange,
  error
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputType = showPassword ? "text" : "password";



  const endAdornment = type === "password" ? (
    <InputAdornment position="end">
      <IconButton 
        aria-label="toggle password visibility"
        edge="end"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <Visibility/> : <VisibilityOff/>}
      </IconButton>
    </InputAdornment>
  ) : null;


  return (
    <TextField
      label={label}
      type={type !== "password" ? type : passwordInputType}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      error={error && value === ""}
      InputProps={{
        endAdornment
      }}
      InputLabelProps={{
        sx: { color: "#00000099" }
      }}
    />
  )
}