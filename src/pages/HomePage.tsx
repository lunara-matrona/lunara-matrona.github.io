import {
  Box,
  CircularProgress,
  Typography
} from "@mui/material";

import ProfileSection from "../components/Profile/ProfileSection";

import ProjectsSection from "../components/Projects/ProjectsSection";

import { usePortfolio } from "../hooks/usePortfolio";

export default function HomePage() {

  const {
    data,
    loading,
    error
  } = usePortfolio();

  if (loading) {
    return <CircularProgress />;
  }

  if (error || !data) {
    return (
      <Typography>
        Error cargando información
      </Typography>
    );
  }

  return (
    <Box p={4}>

      <ProfileSection
        profile={data.perfil}
      />

      <Box mt={6}>

        <ProjectsSection
          projects={data.trabajos}
        />

      </Box>

    </Box>
  );
}