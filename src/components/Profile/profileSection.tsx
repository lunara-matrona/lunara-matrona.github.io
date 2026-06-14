import { Avatar, Stack, Typography } from "@mui/material";

import type { Profile } from "../../types/portfolio.types";

interface Props {
  profile: Profile;
}

export default function ProfileSection({
  profile
}: Props) {

  return (
    <Stack spacing={2} alignItems="center">

      <Avatar
        src={profile.foto}
        sx={{
          width: 180,
          height: 180
        }}
      />

      <Typography variant="h3">
        {profile.nombre}
      </Typography>

      <Typography variant="h5">
        {profile.profesion}
      </Typography>

      <Typography>
        {profile.descripcion}
      </Typography>

    </Stack>
  );
}