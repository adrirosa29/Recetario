# Mi Recetario — Guía de instalación

Esta es tu app personal de recetas. Funciona como una app real en tu móvil (PWA),
sin pasar por App Store ni Google Play, y guarda todo en tu propio dispositivo.

## Paso 1 — Crear el repositorio en GitHub

1. Entra en https://github.com y crea una cuenta si no tienes (es gratis).
2. Pulsa el botón **"New repository"** (o el `+` arriba a la derecha → "New repository").
3. Ponle un nombre, por ejemplo `mi-recetario`.
4. Marca la opción **"Public"** (tiene que ser público para que GitHub Pages funcione gratis).
5. NO marques "Add a README file" (ya tienes el tuyo).
6. Pulsa **"Create repository"**.

## Paso 2 — Subir los archivos

En la página del repositorio recién creado:

1. Pulsa el enlace **"uploading an existing file"** (o "Add file" → "Upload files").
2. Arrastra TODOS los archivos y carpetas que venían en este ZIP
   (`index.html`, `manifest.json`, `sw.js`, `fooddb.js`, `icon-192.png`, `icon-512.png`,
   y la carpeta `vendor` completa con sus 3 archivos dentro).
3. Abajo, escribe un mensaje como "Primera versión" y pulsa **"Commit changes"**.

> Importante: la carpeta `vendor` debe subirse como carpeta, manteniendo
> `vendor/react.production.min.js`, `vendor/react-dom.production.min.js` y
> `vendor/babel.min.js` dentro de ella. Si tu navegador no permite arrastrar carpetas
> completas, sube los archivos sueltos de `vendor` y luego edita las 3 líneas de
> `index.html` y `sw.js` que dicen `./vendor/...` quitando el `vendor/` si los subiste
> todos en la raíz (avísame si llegas a este punto y te ayudo).

## Paso 3 — Activar GitHub Pages

1. En el repositorio, ve a **Settings** (pestaña arriba).
2. En el menú lateral izquierdo, pulsa **Pages**.
3. En "Source", selecciona la rama **main** y la carpeta **/ (root)**.
4. Pulsa **Save**.
5. Espera 1-2 minutos. GitHub te mostrará una URL parecida a:
   `https://tu-usuario.github.io/mi-recetario/`

## Paso 4 — Instalar la app en tu móvil

1. Abre esa URL en el navegador de tu móvil (Chrome en Android, Safari en iPhone).
2. **Android (Chrome):** te aparecerá un aviso para "Añadir a pantalla de inicio" o
   "Instalar app". Si no aparece automáticamente, pulsa los tres puntos (⋮) arriba
   a la derecha → "Añadir a pantalla de inicio".
3. **iPhone (Safari):** pulsa el icono de compartir (cuadrado con flecha hacia arriba)
   → "Añadir a pantalla de inicio".
4. Listo. Tendrás un icono en tu móvil que abre la app a pantalla completa, como
   cualquier otra app.

## Actualizaciones futuras

Si en algún momento quieres que te haga cambios o mejoras a la app, puedo dártelos
de la misma forma: solo tendrás que repetir el Paso 2 (subir los archivos nuevos,
sobrescribiendo los anteriores) y los cambios se reflejarán en la misma URL.

## Sobre las calorías

La app incluye una tabla local de unos 130 alimentos básicos (carnes, verduras,
cereales, lácteos, etc.) para calcular calorías automáticamente sin necesitar
internet. Si un ingrediente no está en la tabla, simplemente introduce las
calorías a mano — el desplegable "Kcal manual" siempre está disponible.
