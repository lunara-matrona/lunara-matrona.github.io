# Conexión Google Sheets → Apps Script → React

## 1. Crear el Apps Script

1. Abre la hoja de cálculo de LUNARA en Google Sheets.
2. Ve a **Extensiones → Apps Script**.
3. Reemplaza el contenido de `Code.gs` por el archivo `apps_script/Code.gs` de este proyecto.
4. Guarda.
5. Ejecuta manualmente `validarReferencias` y luego `probarConstruccion`.
6. Autoriza el script cuando Google lo solicite.

## 2. Desplegar como Web App

1. En Apps Script abre **Implementar → Nueva implementación**.
2. Tipo: **Aplicación web**.
3. Ejecutar como: **Yo**.
4. Acceso: selecciona una opción pública que permita acceder sin iniciar sesión (por ejemplo, **Cualquier persona**, cuando esté disponible para tu cuenta).
5. Implementa y copia la URL terminada en `/exec`.

La URL `/dev` es solo para pruebas de editores del script; el frontend debe usar `/exec`.

## 3. Conectar el frontend en desarrollo

Crea `.env.local` en la raíz:

```env
VITE_URL_CONTENIDO=https://script.google.com/macros/s/TU_ID/exec
```

Luego reinicia Vite:

```bash
npm run dev
```

## 4. GitHub Pages

El workflow ya lee la variable de repositorio `VITE_URL_CONTENIDO`.

En GitHub configura:

**Settings → Secrets and variables → Actions → Variables → New repository variable**

Nombre:

```text
VITE_URL_CONTENIDO
```

Valor: la URL `/exec` del Web App.

Después vuelve a desplegar el frontend.

## 5. Edición cotidiana

Cuando una persona cambia texto, precio, preguntas o datos en Google Sheets, **no necesita volver a desplegar Apps Script ni React**. El frontend consulta el Web App al cargar la página y recibe los datos actuales.

Si modificas el código de `Code.gs`, sí debes actualizar el despliegue del Web App.

## Imágenes

Las rutas locales existentes del Excel se resuelven mediante `src/api/resolverImagen.ts`.

Para que una imagen nueva pueda modificarse completamente desde la hoja sin tocar React, usa una URL pública `https://...` en la columna `imagen`. El resolver utiliza directamente cualquier URL que no coincida con una ruta local conocida.

## Testimonios configurables

Después de actualizar la hoja, reemplaza el código del Web App por `apps_script/Code.gs` y crea una nueva versión de la implementación. El JSON ahora incluye `mostrarSeccionTestimonios` y cada testimonio incluye `mostrarTestimonio`.
