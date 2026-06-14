import { Box, Container } from "@mui/material";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({
  children,
}: Props) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#FAF8FD",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          py: 6,
        }}
      >
        {children}
      </Container>

      <Footer />
    </Box>
  );
}