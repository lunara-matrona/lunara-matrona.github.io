import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import { Box, Typography } from "@mui/material";
import { values } from "../../../data/home";
import PageContainer from "../../common/PageContainer";

const icons = {
  shield: HealthAndSafetyRoundedIcon,
  sparkles: AutoAwesomeRoundedIcon,
  home: HomeRoundedIcon,
  hands: VolunteerActivismRoundedIcon,
};

export default function HomeValues() {
  return (
    <Box component="section" sx={{ py: { xs: 7.5, md: 8.75 }, bgcolor: "common.white" }}>
      {/* Valores principales que diferencian la atención de Lunara. */}
      <PageContainer sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }, gap: "1px" }}>
        {values.map((value) => {
          const Icon = icons[value.icon];
          return (
            <Box component="article" key={value.title} sx={{ minHeight: 205, p: 3.75, bgcolor: "common.white" }}>
              <Icon sx={{ mb: 3, color: "secondary.dark", fontSize: 40 }} />
              <Typography variant="h3" sx={{ mb: 1.25, color: "primary.dark", fontSize: "1rem" }}>{value.title}</Typography>
              <Typography sx={{ color: "text.secondary", fontSize: ".88rem", lineHeight: 1.65 }}>{value.text}</Typography>
            </Box>
          );
        })}
      </PageContainer>
    </Box>
  );
}
