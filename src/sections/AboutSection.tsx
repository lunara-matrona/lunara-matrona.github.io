import {
  Box,
  Paper,
  Typography,
} from "@mui/material";
import type { Profile } from "../types/portfolio.types";

interface Props {
  profile: Profile;
}

export default function AboutSection({ profile }: Props) {
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
        {profile.sobre_mi}
      </Typography>
    </Paper>
  );
}