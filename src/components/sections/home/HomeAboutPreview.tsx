import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Box, Typography } from "@mui/material";
import { assets } from "../../../assets";
import PageContainer from "../../common/PageContainer";
import Section from "../../common/Section";
import ButtonLink from "../../ui/ButtonLink";
import SectionHeading from "../../ui/SectionHeading";

export default function HomeAboutPreview() {
  return (
    <Section sx={{ background: "linear-gradient(135deg, #E5C3E9 0%, #D7A0DF 100%)" }}>
      {/* Presentación resumida de Lunara en la página de inicio. */}
      <PageContainer sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: ".7fr 1.3fr" }, alignItems: "center", gap: { xs: 5, md: 10.75 } }}>
        <Box sx={{ minHeight: { xs: 265, sm: 310, md: 390 }, display: "grid", placeItems: "center", borderRadius: 4, background: "linear-gradient(145deg, #A64EB5, #74317F)", boxShadow: "0 22px 55px rgba(75,34,82,.16)", overflow: "hidden", px: { xs: 3, sm: 4, md: 5 } }}>
          <Box component="img" src={assets.brand.logoWhite} alt="Lunara, bienestar sexual y reproductivo" sx={{ width: { xs: 250, sm: 300, md: 350 }, maxWidth: "100%" }} />
        </Box>
        <Box>
          <SectionHeading eyebrow="Sobre Lunara" title="Un espacio seguro para aprender, conversar y cuidarte" />
          <Typography sx={{ maxWidth: 700, mb: 4, color: "#5D4561", fontSize: "1.04rem", lineHeight: 1.85, textAlign: "justify" }}>
            Lunara acompaña tu ciclo vital individual y familiar desde una mirada cálida, profesional y centrada en tus necesidades. Cada encuentro busca entregarte información comprensible y herramientas prácticas para tu bienestar.
          </Typography>
          <ButtonLink to="/nosotros" variant="solid" endIcon={<ArrowForwardRoundedIcon />}>Conoce más sobre Lunara</ButtonLink>
        </Box>
      </PageContainer>
    </Section>
  );
}
