import {
  Box,
  Paper,
  Typography,
} from "@mui/material";

export default function AboutSection() {
  return (
    <Paper
      id="about"
      elevation={0}
      sx={{
        p: 5,
        borderRadius: 4,
        backgroundColor: "#F4EEFB",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
      >
        Sobre mí
      </Typography>

      <Typography>
        Soy matrona titulada con experiencia
        en atención integral de la mujer,
        acompañamiento durante el embarazo,
        control ginecológico y educación sexual.
      </Typography>
    </Paper>
  );
}