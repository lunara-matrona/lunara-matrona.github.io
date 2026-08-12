import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import { Box, Typography } from "@mui/material";
import { useContenido } from "../../../hooks/useContenido";
import PageContainer from "../../common/PageContainer";
import EsqueletoSeccion from "../../ui/EsqueletoSeccion";

const iconos = {
  escudo: HealthAndSafetyRoundedIcon,
  destellos: AutoAwesomeRoundedIcon,
  hogar: HomeRoundedIcon,
  manos: VolunteerActivismRoundedIcon,
};

export default function HomeValues() {
  const { contenido, cargando } = useContenido();
  const { valoresInicio } = contenido;

  if (cargando) {
    return (
      <Box component="section" sx={{ py: { xs: 7.5, md: 8.75 }, bgcolor: "common.white" }}>
        <PageContainer>
          <EsqueletoSeccion cantidad={4} columnas={{ xs: 1, sm: 2, lg: 4 }} alturaTarjeta={205} mostrarEncabezado={false} />
        </PageContainer>
      </Box>
    );
  }
  return (
    <Box component="section" sx={{ py: { xs: 7.5, md: 8.75 }, bgcolor: "common.white" }}>
      {/* Valores principales que diferencian la atención de Lunara. */}
      <PageContainer sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }, gap: "1px" }}>
        {valoresInicio.map((valor) => {
          const Icono = iconos[valor.icono];
          return (
            <Box component="article" key={valor.titulo} sx={{ minHeight: 205, p: 3.75, bgcolor: "common.white" }}>
              <Icono sx={{ mb: 3, color: "secondary.dark", fontSize: 40 }} />
              <Typography variant="h3" sx={{ mb: 1.25, color: "primary.dark", fontSize: "1rem" }}>{valor.titulo}</Typography>
              <Typography sx={{ color: "text.secondary", fontSize: ".88rem", lineHeight: 1.65 }}>{valor.texto}</Typography>
            </Box>
          );
        })}
      </PageContainer>
    </Box>
  );
}
