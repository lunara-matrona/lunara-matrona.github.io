import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";

export default function Footer() {
  return (
    <Box
      id="contact"
      sx={{
        mt: 8,
        py: 5,
        borderTop: "1px solid #E0E0E0",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Container maxWidth="lg">

        <Typography
          variant="h6"
          gutterBottom
        >
          Contacto
        </Typography>

        <Stack spacing={1}>
          <Typography>
            correo@ejemplo.cl
          </Typography>

          <Typography>
            +56 9 1234 5678
          </Typography>

          <Typography>
            Instagram: @matrona
          </Typography>
        </Stack>

      </Container>
    </Box>
  );
}