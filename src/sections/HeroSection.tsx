import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack sx={{ direction: "column", spacing: 4, alignItems: "center" }}>
        <Avatar
          src=""
          sx={{
            width: 220,
            height: 220,
          }}
        />

        <Box>

          <Typography sx={{ fontWeight: 700 }}
            variant="h3"
            gutterBottom
          >
            María Pérez
          </Typography>

          <Typography
            variant="h5"
            color="primary"
            gutterBottom
          >
            Matrona
          </Typography>

          <Typography
            sx={{
              maxWidth: 500,
              mb: 4,
            }}
          >
            Acompañándote en cada etapa de tu salud
            femenina con cercanía, profesionalismo
            y atención personalizada.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
            >
              Agendar Consulta
            </Button>

            <Button
              variant="outlined"
            >
              Contactar
            </Button>
          </Stack>

        </Box>
      </Stack>
    </Box>
  );
}