import {
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const services = [
  "Control ginecológico",
  "Atención prenatal",
  "Educación sexual",
  "Asesoría en lactancia",
  "Preparación para el parto",
  "Salud sexual y reproductiva",
];

export default function ServicesSection() {
  return (
    <>
      <Typography sx={{ mb: 4}}
        variant="h4"
      >
        Servicios
      </Typography>

      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            key={service}
          >
            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                >
                  {service}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}