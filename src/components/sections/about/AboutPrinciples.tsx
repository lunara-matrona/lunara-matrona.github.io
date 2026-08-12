import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { principiosNosotros } from "../../../data/nosotros";
import PageContainer from "../../common/PageContainer";
import Section from "../../common/Section";
import SectionHeading from "../../ui/SectionHeading";

const iconos = {
  escudo: HealthAndSafetyRoundedIcon,
  libro: AutoStoriesRoundedIcon,
  manos: VolunteerActivismRoundedIcon,
  hogar: HomeRoundedIcon,
};

export default function AboutPrinciples() {
  return (
    <Section sx={{ background: "linear-gradient(145deg, #8D3D9A, #55275D)" }}>
      {/* Principios que explican el enfoque de atención de Lunara. */}
      <PageContainer>
        <SectionHeading sobretitulo="Nuestro enfoque" titulo="Principios que orientan cada atención" descripcion="Una forma de acompañar que prioriza la confianza, la información y la participación activa de cada persona." centrado claro />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }, gap: 3 }}>
          {principiosNosotros.map((principio) => {
            const Icono = iconos[principio.icono];
            return (
              <Card key={principio.titulo} component="article" variant="outlined" sx={{ height: "100%", color: "common.white", borderColor: "rgba(255,255,255,.14)", bgcolor: "rgba(255,255,255,.08)" }}>
                <CardContent sx={{ p: 3.5, "&:last-child": { pb: 3.5 } }}>
                  <Icono sx={{ mb: 3, color: "secondary.light", fontSize: 42 }} />
                  <Typography variant="h3" sx={{ mb: 1.5, fontSize: "1rem" }}>{principio.titulo}</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,.72)", fontSize: ".9rem", lineHeight: 1.7 }}>{principio.texto}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </PageContainer>
    </Section>
  );
}
