# Publicar en GitHub Pages

1. Los archivos `package.json`, `index.html`, `vite.config.ts` y la carpeta `.github` deben estar directamente en la raíz del repositorio.
2. En GitHub abre `Settings > Pages` y selecciona `GitHub Actions` como `Source`.
3. Ejecuta `npm install` para instalar Material UI y generar un `package-lock.json` local.
4. Haz push a `main` o `master`.
5. Revisa `Actions > Deploy Vite app to GitHub Pages` y confirma que todos los pasos estén verdes.
6. Abre la URL entregada por el paso `Deploy to GitHub Pages`.

Para un repositorio normal, la URL será:

`https://USUARIO.github.io/NOMBRE-REPOSITORIO/`

No uses solamente `https://USUARIO.github.io/` salvo que el repositorio se llame exactamente `USUARIO.github.io`.
