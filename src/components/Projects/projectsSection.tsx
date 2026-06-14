import {
  Card,
  CardContent,
  Grid,
  Typography
} from "@mui/material";

import type { Project } from "../../types/portfolio.types";

interface Props {
  projects: Project[];
}

export default function ProjectsSection({
  projects
}: Props) {

  return (
    <Grid container spacing={2}>

      {projects.map((project) => (

        <Grid size={{ xs: 12, md: 4 }}
          key={project.titulo}
        >
          <Card>

            <CardContent>

              <Typography variant="h6">
                {project.titulo}
              </Typography>

              <Typography>
                {project.descripcion}
              </Typography>

            </CardContent>

          </Card>

        </Grid>

      ))}

    </Grid>
  );
}