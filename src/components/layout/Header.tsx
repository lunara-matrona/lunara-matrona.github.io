import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { AppBar, Box, Button, Drawer, IconButton, Stack, Toolbar } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { recursos } from "../../assets";
import { navegacion, urlReservaWhatsapp } from "../../data/sitio";
import PageContainer from "../common/PageContainer";

export default function Header() {
  const [estaAbierto, setEstaAbierto] = useState(false);

  const elementosNavegacion = (
    <>
      {navegacion.map((elemento) => (
        <Button
          key={elemento.ruta}
          component={NavLink}
          to={elemento.ruta}
          end={elemento.ruta === "/"}
          onClick={() => setEstaAbierto(false)}
          sx={{
            color: "rgba(255,255,255,.88)",
            px: 1.25,
            minHeight: 42,
            borderRadius: 2,
            "&.active": { color: "common.white", bgcolor: "rgba(255,255,255,.10)" },
            "&:hover": { bgcolor: "rgba(255,255,255,.08)" },
          }}
        >
          {elemento.etiqueta}
        </Button>
      ))}
      <Button
        component="a"
        href={urlReservaWhatsapp}
        target="_blank"
        rel="noreferrer"
        onClick={() => setEstaAbierto(false)}
        variant="outlined"
        sx={{ color: "common.white", borderColor: "rgba(255,255,255,.65)", textTransform: "uppercase", letterSpacing: ".08em", fontSize: ".82rem", "&:hover": { bgcolor: "common.white", color: "primary.dark", borderColor: "common.white" } }}
      >
        Agendar
      </Button>
    </>
  );

  return (
    <AppBar component="header" position="static" elevation={0} sx={{ bgcolor: "primary.main", borderBottom: "1px solid rgba(255,255,255,.14)" }}>
      {/* Barra de navegación principal del sitio. */}
      <PageContainer>
        <Toolbar disableGutters sx={{ minHeight: { xs: 88, md: 104 }, justifyContent: "space-between", gap: 3 }}>
          <Box component={RouterLink} to="/" onClick={() => setEstaAbierto(false)} sx={{ flexShrink: 0 }}>
            <Box component="img" src={recursos.marca.logoBlanco} alt="Lunara, bienestar sexual y reproductivo" sx={{ width: { xs: 205, sm: 230, md: 275 }, height: "auto", maxHeight: { xs: 60, md: 76 }, objectFit: "contain", objectPosition: "left center" }} />
          </Box>

          <Stack component="nav" direction="row" alignItems="center" spacing={1.5} aria-label="Navegación principal" sx={{ display: { xs: "none", md: "flex" } }}>
            {elementosNavegacion}
          </Stack>

          <IconButton aria-label="Abrir menú" onClick={() => setEstaAbierto(true)} sx={{ display: { xs: "inline-flex", md: "none" }, color: "common.white", border: "1px solid rgba(255,255,255,.45)" }}>
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </PageContainer>

      <Drawer anchor="right" open={estaAbierto} onClose={() => setEstaAbierto(false)} slotProps={{ paper: { sx: { width: "min(86vw, 330px)", bgcolor: "primary.dark", color: "common.white", p: 2 } } }}>
        <Stack direction="row" justifyContent="flex-end" mb={2}>
          <IconButton aria-label="Cerrar menú" onClick={() => setEstaAbierto(false)} sx={{ color: "common.white" }}><CloseRoundedIcon /></IconButton>
        </Stack>
        <Stack component="nav" spacing={1} aria-label="Navegación móvil">{elementosNavegacion}</Stack>
      </Drawer>
    </AppBar>
  );
}
