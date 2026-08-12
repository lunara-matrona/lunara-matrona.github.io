import { Box, Skeleton, Stack } from "@mui/material";
import PageContainer from "../../common/PageContainer";
import Section from "../../common/Section";

export default function ServiceDetailSkeleton() {
  return (
    <>
      {/* Esqueleto de la ficha de servicio mientras se carga el contenido remoto. */}
      <Section sx={{ pt: { xs: 12, md: 15 } }}>
        <PageContainer>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              alignItems: "center",
              gap: { xs: 4, md: 7 },
            }}
          >
            <Stack spacing={1.5}>
              <Skeleton width={120} height={22} />
              <Skeleton width="85%" height={62} />
              <Skeleton width="100%" height={26} />
              <Skeleton width="74%" height={26} />
            </Stack>
            <Skeleton variant="rounded" height={420} sx={{ borderRadius: 4 }} />
          </Box>
        </PageContainer>
      </Section>

      <Section sx={{ bgcolor: "background.default" }}>
        <PageContainer>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, md: 7 },
              alignItems: "center",
            }}
          >
            <Skeleton variant="rounded" height={430} sx={{ borderRadius: 4 }} />
            <Stack spacing={1.5}>
              <Skeleton width={110} height={22} />
              <Skeleton width="82%" height={55} />
              <Skeleton width="100%" height={24} />
              <Skeleton width="95%" height={24} />
              <Skeleton width="68%" height={24} />
              <Skeleton variant="rounded" height={150} sx={{ mt: 2, borderRadius: 3 }} />
            </Stack>
          </Box>
        </PageContainer>
      </Section>
    </>
  );
}
