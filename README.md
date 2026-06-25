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

Cuando recibas una nueva versión de la app (un ZIP nuevo), la forma más fiable
de actualizarla es usando **GitHub Codespaces** (evita problemas con arrastrar
archivos a mano):

1. Ve a tu repositorio en `github.com` → botón verde **"<> Code"** → pestaña
   **Codespaces** → abre el que ya tenías, o crea uno nuevo.
2. En la terminal del Codespace, borra los archivos viejos:
   ```
   rm -f README.md fooddb.js icon-192.png icon-512.png index.html manifest.json sw.js
   rm -rf vendor
   ```
3. Sube el ZIP nuevo: clic derecho en el panel de archivos de la izquierda →
   **Upload...** → selecciona el ZIP descargado.
4. Descomprímelo y sube los cambios (ajusta el nombre del zip si tiene algo
   como " (1)" añadido por el navegador):
   ```
   unzip mi-recetario-app.zip
   rm mi-recetario-app.zip
   git add .
   git commit -m "Actualización"
   git push
   ```
5. Espera 1-2 minutos y abre tu app en el móvil **una vez en modo incógnito**
   para forzar que descargue la versión nueva (el service worker cachea la
   app para que funcione offline, así que a veces tarda un poco en notar que
   hay cambios).

## Sobre las calorías

La app calcula las calorías de cada ingrediente a partir de las **kcal por
cada 100g/100ml**, multiplicando por una sencilla regla de tres según la
cantidad que introduzcas. Hay dos formas de obtener ese valor de partida:

- **Kcal/100g manual**: lo escribes tú una vez. La app lo guarda automáticamente
  en tu "tabla personal", así que la próxima vez que uses ese mismo ingrediente
  en otra receta no tendrás que volver a escribirlo.
- **Buscar en tabla**: busca primero en tu tabla personal (lo que ya hayas
  guardado a mano antes) y, si no lo encuentra, en una tabla local incorporada
  de ~130 alimentos básicos (carnes, verduras, cereales, lácteos, etc.) —
  todo sin necesitar internet.

Mientras escribes el nombre de cualquier ingrediente, aparece un desplegable
de sugerencias combinando tu tabla personal y la tabla local — tocando una
sugerencia se rellena el nombre y las kcal/100g automáticamente.

Si un ingrediente no está en ninguna tabla, simplemente introduce las kcal/100g
a mano una vez y quedará disponible para siempre.

## Planificador / Calendario

En la pestaña "Calendario" puedes planificar tus comidas en una vista mensual:

- Cada día tiene 4 franjas: Desayuno, Comida, Cena y Otros (meriendas, snacks…).
- Toca un día para abrir el panel y asignar recetas a cada franja — puedes
  añadir **varias cosas a la misma franja** (por ejemplo, albóndigas en salsa
  y un yogur en la misma comida).
- Además de elegir una receta ya guardada, puedes añadir algo suelto que no
  esté guardado como receta (un plátano, un yogur…) con solo su nombre y sus
  kcal totales — se guarda automáticamente en tu recetario como una receta de
  un solo ingrediente, así no tienes que volver a escribirlo otro día.
- El calendario muestra las kcal totales planificadas para cada día con datos.
- A la derecha de cada semana hay una columna con la **media diaria de esa
  semana**, y arriba se muestra la media diaria del mes actual (calculada
  solo sobre los días que tengan algo planificado).
- Los días que ya han pasado se muestran con un tono más apagado para
  diferenciarlos claramente de los días futuros.
- Puedes navegar a meses anteriores o futuros con las flechas, o volver al mes
  actual con "Ir a hoy".
