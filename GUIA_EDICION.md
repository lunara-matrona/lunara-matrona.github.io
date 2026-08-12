# Guía rápida de edición

## Contenido

Los textos y datos que cambian con mayor frecuencia se encuentran en `src/data`:

- `site.ts`: navegación, correo, teléfono, Instagram, ciudad y enlace de WhatsApp.
- `services.ts`: categorías, descripciones, imágenes, temas, elementos incluidos y preguntas frecuentes.
- `testimonials.ts`: testimonios mostrados en Inicio.
- `home.ts`: ruta de acompañamiento y valores de la marca.
- `about.ts`: principios de la página Nosotros.

## Colores y tipografía

Edita `src/theme/theme.ts`. Desde este archivo puedes cambiar:

- paleta principal y secundaria;
- fondo y colores de texto;
- tipografías de títulos y contenido;
- bordes generales de botones y tarjetas;
- estilos globales de Material UI.

## Secciones de cada página

Las secciones visuales están agrupadas en `src/components/sections`:

- `home`: página Inicio;
- `about`: página Nosotros;
- `contact`: información y formulario de contacto;
- `services`: catálogo y detalle de servicios.

Cada componente incluye un comentario breve que identifica la parte de la página que representa.

## Componentes reutilizables

- `src/components/common`: contenedor, sección y portada interior.
- `src/components/ui`: botones, títulos, tarjetas de servicios y testimonios.
- `src/components/layout`: navbar, menú móvil y footer.

## Imágenes

Reemplaza imágenes en `src/assets/images` conservando el nombre del archivo, o actualiza sus imports en `src/assets/index.ts`.

## Editar prestaciones de los servicios

Las prestaciones ahora están centralizadas en `src/data/prestations.ts`.

Cada prestación permite editar:

- `title`: nombre de la prestación.
- `description`: descripción mostrada junto a la imagen.
- `image`: imagen de la prestación.
- `price`: valor de la prestación.
- `duration`: duración, cuando corresponda.
- `modality`: modalidad de atención, cuando corresponda.
- `included`: elementos incluidos en el valor.
- `details`: lista opcional para talleres, etapas o contenidos específicos.

`ServiceDetailPage` muestra estas prestaciones mediante `ServicePrestations.tsx`, alternando automáticamente la posición de imagen/contenido y el fondo de cada bloque.

> Nota: la prestación N.º 3 de Adultez media figura incompleta en el documento entregado, por lo que no se inventó contenido y quedó marcada como pendiente dentro de `prestations.ts`.
