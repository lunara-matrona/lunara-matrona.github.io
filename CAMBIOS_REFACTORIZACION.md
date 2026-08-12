# Cambios de la refactorización

- Migración de la interfaz a Material UI.
- Eliminación de la hoja CSS global de aproximadamente 1.700 líneas.
- Tema centralizado para colores, tipografías, botones y tarjetas.
- Páginas divididas en componentes de sección independientes.
- Navbar responsive implementado con `AppBar`, `Toolbar` y `Drawer`.
- Formulario implementado con `TextField`, `MenuItem`, `Button` y `Alert`.
- Preguntas frecuentes implementadas con `Accordion`.
- Tarjetas implementadas con `Card`, `CardMedia` y `CardContent`.
- Contenido editable separado en archivos de datos.
- Comentarios breves agregados para identificar cada parte de la página.
- Workflow de GitHub Pages adaptado para instalar las nuevas dependencias.

## Refactor de prestaciones por servicio

- Se eliminaron `ServiceTopics.tsx` y `ServiceIncludes.tsx` de la vista de detalle.
- Se creó `ServicePrestations.tsx` para renderizar directamente cada prestación.
- Se agregó `src/data/prestations.ts` con descripción, imagen, precio, duración, modalidad e inclusiones.
- Las prestaciones alternan imagen/contenido y fondo para mantener el ritmo visual de la sección Nosotros.
- `ServiceDetailHero` ahora toma como contenido destacado la primera prestación configurada.
