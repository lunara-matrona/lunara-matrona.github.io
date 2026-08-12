# Mapeo Google Sheets → JSON

La hoja de cálculo y el frontend utilizan los mismos nombres de propiedades en español para evitar una capa de traducción innecesaria en Apps Script.

| Hoja | Estructura JSON objetivo |
|---|---|
| `Navegacion_Sitio` | `navegacion[]` |
| `Contacto_Sitio` | `informacionContacto` |
| `Configuracion_Sitio` | `urlReservaWhatsapp` |
| `Ruta_Inicio` | `pasosRuta[]` |
| `Valores_Inicio` | `valoresInicio[]` |
| `Principios_Nosotros` | `principiosNosotros[]` |
| `Testimonios` | `testimonios[]` |
| `Servicios` | `servicios[]` |
| `Avisos_Servicio` | `servicios[].avisos[]` |
| `Preguntas_Servicio` | `servicios[].preguntasFrecuentes[]` |
| `Prestaciones` | `servicios[].prestaciones[]` |
| `Detalles_Prestacion` | `servicios[].prestaciones[].detalles[]` |
| `Perfil_Profesional` | `perfilProfesional` |
| `Resumen_Profesional` | `perfilProfesional.resumen[]` |
| `Hitos_Profesionales` | `perfilProfesional.hitos[]` |

Las relaciones se realizan mediante `servicioId` y `prestacionId`. `orden` define el orden visual sin depender de la posición física de las filas.
