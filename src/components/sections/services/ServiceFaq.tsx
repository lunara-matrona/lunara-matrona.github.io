import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography } from "@mui/material";
import type { ServiceCategory } from "../../../types/content";
import PageContainer from "../../common/PageContainer";
import Section from "../../common/Section";

interface ServiceFaqProps {
  service: ServiceCategory;
}

export default function ServiceFaq({ service }: ServiceFaqProps) {
  return (
    <Section>
      {/* Preguntas frecuentes relacionadas con el servicio seleccionado. */}
      <PageContainer sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: ".8fr 1.2fr" }, gap: { xs: 5, lg: 8 } }}>
        <Box>
          <Typography sx={{ mb: 1.75, color: "primary.dark", fontSize: ".78rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase" }}>Preguntas frecuentes</Typography>
          <Typography variant="h2" sx={{ mb: 2.25, fontSize: { xs: "2.15rem", md: "3.65rem" }, lineHeight: 1.08 }}>Información antes de agendar</Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>Estas respuestas entregan una orientación general. La recomendación final depende de cada situación.</Typography>
        </Box>
        <Stack spacing={1.5}>
          {service.faq.map((item) => (
            <Accordion key={item.question} disableGutters elevation={0} sx={{ border: "1px solid", borderColor: "divider", borderRadius: "16px !important", overflow: "hidden", "&::before": { display: "none" } }}>
              <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />} sx={{ px: 2.5, py: .5 }}>
                <Typography fontWeight={800} color="primary.dark">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 2.5, pb: 2.5 }}>
                <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </PageContainer>
    </Section>
  );
}
