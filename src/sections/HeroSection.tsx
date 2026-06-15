import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import type { Profile } from "../types/portfolio.types";

interface Props {
  profile: Profile;
}

export default function HeroSection({ profile }: Props) {
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
          src={profile.foto}
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
            {profile.nombre}
          </Typography>

          <Typography
            variant="h5"
            color="primary"
            gutterBottom
          >
            {profile.profesion}
          </Typography>

          <Typography
            sx={{
              maxWidth: 500,
              mb: 4,
            }}
          >
            {profile.descripcion}
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