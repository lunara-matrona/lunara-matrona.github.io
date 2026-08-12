# Lunara Front — refactor Material UI

Frontend de Lunara construido con React, TypeScript, Vite y Material UI.

## Estructura principal

- `src/theme/theme.ts`: colores, tipografías y estilos globales de Material UI.
- `src/data`: contenido editable con archivos y propiedades en español.
- `src/components/common`: contenedores y estructuras reutilizables.
- `src/components/layout`: header, menú móvil, footer y layout público.
- `src/components/sections`: secciones independientes agrupadas por página.
- `src/components/ui`: tarjetas, botones y encabezados reutilizables.
- `src/pages`: composición de cada página, con muy poca lógica visual.

## Instalación

```bash
npm install
npm run dev
```

## Compilación

```bash
npm run build
```

La presentación se gestiona principalmente mediante componentes y propiedades `sx` de Material UI. No existe una hoja CSS global extensa; los cambios generales se realizan desde el tema y los cambios particulares desde cada componente.

## Datos en español

La capa editable utiliza nombres en español para facilitar su correspondencia directa con Google Sheets y el JSON generado por Apps Script. Consulta `GUIA_EDICION.md`.
