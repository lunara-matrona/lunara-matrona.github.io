# Guía rápida de edición

## Contenido editable

Todo el contenido modificable está centralizado en `src/data` y utiliza nombres de variables y propiedades en español:

- `sitio.ts`: navegación, correo, teléfono, Instagram, ciudad y reserva por WhatsApp.
- `inicio.ts`: ruta de acompañamiento y valores de la página de Inicio.
- `nosotros.ts`: principios de la página Nosotros.
- `servicios.ts`: categorías, descripciones, avisos y preguntas frecuentes.
- `prestaciones.ts`: prestaciones, precios, duración, modalidad, imágenes e inclusiones.
- `testimonios.ts`: testimonios mostrados en Inicio.
- `perfilProfesional.ts`: perfil, resumen, experiencia, formación y certificaciones.

Los tipos compartidos están en `src/types/contenido.ts`.

## Convención de nombres

La estructura editable utiliza propiedades en español, por ejemplo:

- `titulo`, `descripcion`, `imagen`, `precio`;
- `duracion`, `modalidad`, `incluye`, `detalles`;
- `segmentoUrl`, `rangoEdad`, `descripcionCorta`;
- `preguntasFrecuentes`, `prestaciones`, `avisos`;
- `nombre`, `comentario`, `puntuacion`;
- `sobretitulo`, `cargo`, `resumen`, `hitos`.

Los valores del tipo de hito profesional también están en español: `experiencia`, `certificado`, `educacion` y `reconocimiento`.

> Los nombres pertenecientes a APIs externas de React, JavaScript y Material UI se conservan tal como los define cada biblioteca (`sx`, `variant`, `map`, `href`, etc.).

## Colores y tipografía

Edita `src/theme/theme.ts`. El tema se exporta como `tema` y concentra la paleta, tipografías y estilos globales de Material UI.

## Imágenes

El registro de imágenes está en `src/assets/index.ts` y se exporta como `recursos`. Sus grupos principales son `marca`, `inicio`, `servicios` y `prestaciones`.

## Prestaciones

Cada prestación en `src/data/prestaciones.ts` puede contener:

- `id`;
- `titulo`;
- `descripcion`;
- `imagen`;
- `precio`;
- `duracion`;
- `modalidad`;
- `incluye`;
- `detalles`.

`ServiceDetailPage` obtiene la categoría desde `servicios` utilizando `segmentoUrl` y entrega la información a los componentes de detalle.

## Hoja de cálculo y Apps Script

El archivo `LUNARA_contenido_editable_espanol.xlsx` replica esta misma estructura en español. El siguiente paso consiste en hacer que Apps Script lea esas hojas y reconstruya un JSON con estas mismas propiedades, evitando transformaciones de nombres entre Google Sheets y React.
