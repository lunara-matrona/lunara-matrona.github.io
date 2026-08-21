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
| `Opciones_Prestacion` | `servicios[].prestaciones[].opciones[]` |
| `Perfil_Profesional` | `perfilProfesional` |
| `Resumen_Profesional` | `perfilProfesional.resumen[]` |
| `Hitos_Profesionales` | `perfilProfesional.hitos[]` |

Las relaciones se realizan mediante `servicioId` y `prestacionId`. `orden` define el orden visual sin depender de la posición física de las filas.

## Opciones y subservicios de una prestación

Cuando una prestación tiene alternativas internas con tarifas distintas, no las escribas como un párrafo dentro de `incluye`. Agrega una fila por alternativa en `Opciones_Prestacion`.

Por ejemplo, PAP/VPH se transforma en:

```json
{
  "titulo": "Toma de exámenes preventivos PAP y VPH",
  "nota": "La toma se realiza a domicilio y el procesamiento se cobra por separado.",
  "opciones": [
    {
      "id": "toma-domicilio",
      "grupo": "Toma de muestra",
      "titulo": "Solo toma de PAP y/o VPH",
      "precio": "$20.000"
    },
    {
      "id": "pap-fonasa",
      "grupo": "Procesamiento PAP en Histomed",
      "titulo": "Fonasa",
      "precio": "$7.820",
      "descripcion": "Requiere comprar el bono directamente en Histomed."
    }
  ]
}
```

Las filas se agrupan visualmente por el valor de `grupo` y se vinculan usando la combinación `servicioId + prestacionId`.

## Control de testimonios

`Configuracion_Sitio.mostrarSeccionTestimonios` se transforma en:

```json
"mostrarSeccionTestimonios": true
```

`Testimonios.mostrarTestimonio` se transforma en un booleano por testimonio:

```json
{
  "id": "testimonio-1",
  "mostrarTestimonio": true
}
```

El frontend primero evalúa `mostrarSeccionTestimonios` y luego filtra únicamente los testimonios cuyo `mostrarTestimonio` sea `true`.
