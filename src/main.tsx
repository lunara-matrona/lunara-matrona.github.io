import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { theme } from "./theme/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ a: { color: "inherit", textDecoration: "none" } }} />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
