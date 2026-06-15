import {
  Card,
  CardContent,
  Grid,
  Rating,
  Typography,
} from "@mui/material";

import type { Review } from "../types/portfolio.types";

interface Props {
  reviews: Review[];
}

export default function ReviewSection({
  reviews,
}: Props) {
  return (
    <>
      <Typography sx={{ mb: 4 }}
        variant="h4"
      >
        Testimonios
      </Typography>

      <Grid container spacing={3}>
        {reviews.map((review, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
              }}
            >
              <CardContent>

                <Rating
                  value={review.puntuacion}
                  readOnly
                />

                <Typography
                  sx={{
                    mt: 2,
                    mb: 2,
                  }}
                >
                  "{review.comentario}"
                </Typography>

                <Typography sx={{ fontWeight: 600 }}>
                  {review.nombre}
                </Typography>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}