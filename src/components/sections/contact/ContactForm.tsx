import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Alert, Box, Button, MenuItem, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState, type FormEvent } from "react";
import { contactInfo } from "../../../data/site";

const subjects = ["Consulta sobre servicios", "Solicitud de taller grupal", "Colaboración o actividad educativa", "Otra consulta"];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? "Consulta desde el sitio web");
    const message = String(form.get("message") ?? "");
    const body = `Hola Lunara, mi nombre es ${name}. Mi correo de contacto es ${email}.\n\n${message}`;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Paper component="form" onSubmit={handleSubmit} elevation={0} sx={{ p: { xs: 2.5, sm: 4, md: 5.25 }, borderRadius: 4, boxShadow: "0 22px 55px rgba(75,34,82,.16)" }}>
      {/* Formulario para preparar una consulta por correo electrónico. */}
      <Typography sx={{ mb: 1.75, color: "primary.dark", fontSize: ".78rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase" }}>Escríbenos</Typography>
      <Typography variant="h2" sx={{ mb: 4, fontSize: { xs: "2.15rem", md: "3rem" }, lineHeight: 1.08 }}>Envía una consulta</Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2.5 }}>
        <TextField name="name" label="Nombre" required placeholder="Tu nombre" />
        <TextField name="email" label="Correo" type="email" required placeholder="tu@email.com" />
        <TextField name="subject" label="Motivo" select defaultValue={subjects[0]} sx={{ gridColumn: { sm: "1 / -1" } }}>
          {subjects.map((subject) => <MenuItem key={subject} value={subject}>{subject}</MenuItem>)}
        </TextField>
        <TextField name="message" label="Mensaje" multiline minRows={6} required placeholder="Cuéntanos de manera general en qué podemos orientarte." sx={{ gridColumn: { sm: "1 / -1" } }} />
      </Box>
      <Typography sx={{ my: 2.25, color: "text.secondary", fontSize: ".77rem", lineHeight: 1.6 }}>Evita incluir diagnósticos, documentos clínicos u otros datos sensibles en este formulario.</Typography>
      <Stack spacing={2} alignItems="flex-start">
        <Button type="submit" variant="contained" endIcon={<SendRoundedIcon />} sx={{ bgcolor: "primary.dark", "&:hover": { bgcolor: "#3D2043" } }}>Preparar correo</Button>
        {sent && <Alert severity="success">Se abrió tu aplicación de correo con el mensaje preparado.</Alert>}
      </Stack>
    </Paper>
  );
}
