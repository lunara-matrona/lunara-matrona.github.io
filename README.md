# Lunara Front

Frontend de Lunara construido con React, TypeScript y Vite.

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Compilar

```bash
npm run build
npm run preview
```

La compilación se genera en `dist/`.

## Publicar en GitHub Pages

Este proyecto ya incluye `.github/workflows/deploy.yml`.

1. Sube todos los archivos del proyecto a la rama `main` o `master`.
2. En GitHub entra a `Settings > Pages`.
3. En `Build and deployment`, selecciona `GitHub Actions` como fuente.
4. Ve a la pestaña `Actions` y espera a que finalice `Deploy to GitHub Pages`.
5. Abre la URL entregada por el workflow.

El proyecto usa `HashRouter`, por lo que las rutas se verán así:

```text
https://usuario.github.io/repositorio/#/
https://usuario.github.io/repositorio/#/servicios
```

También usa `base: "./"` e importa las imágenes desde `src/assets`, de modo que el build funciona aunque el repositorio cambie de nombre.

## Importante

No configures GitHub Pages como `Deploy from a branch` para publicar directamente el código fuente. Vite necesita compilar primero el proyecto y publicar la carpeta `dist`, proceso que realiza el workflow incluido.
