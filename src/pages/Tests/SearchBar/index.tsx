import { TextField } from "@mui/material";

export default function SearchBar() {
  return (
    <TextField
      variant="outlined"
      type="search"
      size="small"
      sx={{
        width: "40%",
      }}
      placeholder="Pesquise por disciplina"
    >
    </TextField>
  )
}