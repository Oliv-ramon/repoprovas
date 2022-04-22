
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";

interface Props {
  type: string,
  disabled: boolean,
  label?: string
}

export default function Input({ type, disabled, label }: Props) {
  if (type !== "password") return (
    <>
      <TextField
        id="outlined-email-input"
        label="Email"
        type="email"
        disabled={disabled}
      />
    </>
  );

  return (
    <FormControl disabled={disabled} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={false ? 'text' : 'password'}
        label={label}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              edge="end"
            >
              {false ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}