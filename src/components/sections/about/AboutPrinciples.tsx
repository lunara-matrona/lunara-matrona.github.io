import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { aboutPrinciples } from "../../../data/about";
import PageContainer from "../../common/PageContainer";
import Section from "../../common/Section";
import SectionHeading from "../../ui/SectionHeading";

const icons = {
  shield: HealthAndSafetyRoundedIcon,
  book: AutoStoriesRoundedIcon,
  hands: VolunteerActivismRoundedIcon,
  home: HomeRoundedIcon,
};

export default function AboutPrinciples() {
  return (
    <Section sx={{ background: "linear-gradient(145deg, #8D3D9A, #55275D)" }}>
      {/* Principios que explican el enfoque de atención de Lunara. */}
      <PageContainer>
        <SectionHeading eyebrow="Nuestro enfoque" title="Principios que orientan cada atención" description="Una forma de acompañar que prioriza la confianza, la información y la participación activa de cada persona." centered light />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }, gap: 3 }}>
          {aboutPrinciples.map((principle) => {
            const Icon = icons[principle.icon];
            return (
              <Card key={principle.title} component="article" variant="outlined" sx={{ height: "100%", color: "common.white", borderColor: "rgba(255,255,255,.14)", bgcolor: "rgba(255,255,255,.08)" }}>
                <CardContent sx={{ p: 3.5, "&:last-child": { pb: 3.5 } }}>
                  <Icon sx={{ mb: 3, color: "secondary.light", fontSize: 42 }} />
                  <Typography variant="h3" sx={{ mb: 1.5, fontSize: "1rem" }}>{principle.title}</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,.72)", fontSize: ".9rem", lineHeight: 1.7 }}>{principle.text}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </PageContainer>
    </Section>
  );
}
