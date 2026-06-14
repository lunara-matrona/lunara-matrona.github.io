import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={{
        borderBottom: "1px solid #EEE",
        backgroundColor: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: "#6A1B9A",
            }}
          >
            Matrona
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button href="#about">
              Sobre mí
            </Button>

            <Button href="#services">
              Servicios
            </Button>

            <Button href="#contact">
              Contacto
            </Button>
          </Stack>

        </Toolbar>
      </Container>
    </AppBar>
  );
}