import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#A64EB5",
      light: "#D7A5DF",
      dark: "#55275D",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#D099D9",
      light: "#F3E7F5",
      dark: "#74317F",
    },
    background: {
      default: "#FBF5FC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#4A2F50",
      secondary: "#756278",
    },
    divider: "rgba(117, 49, 127, 0.14)",
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: '"Montserrat", system-ui, sans-serif',
    h1: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700,
      letterSpacing: "-0.035em",
    },
    h2: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700,
      letterSpacing: "-0.025em",
    },
    h3: {
      fontFamily: '"Montserrat", system-ui, sans-serif',
      fontWeight: 700,
    },
    button: {
      fontWeight: 800,
      textTransform: "none",
      letterSpacing: "0.02em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth" },
        body: { minWidth: 320, minHeight: "100vh" },
        "#root": { minHeight: "100vh" },
        img: { display: "block", maxWidth: "100%" },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 48,
          borderRadius: 999,
          paddingInline: 24,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 22,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
  },
});
