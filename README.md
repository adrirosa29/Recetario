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

## Mi Recetario

Al abrir la pestaña Recetario, primero ves una cuadrícula con las 6
categorías (Desayuno, Comida, Cena, Postre, Snack, Bebida), cada una con su
propio color, icono y el número de recetas que tienes guardadas en ella.
Tocando una categoría entras a la lista de **solo esas recetas** — el único
camino para cambiar de categoría es el botón "‹", que te lleva de vuelta a
la cuadrícula principal. Si prefieres ver todas mezcladas, hay un botón "Ver
todas las recetas" debajo de la cuadrícula (y desde ahí sí puedes saltar de
una categoría a otra con los chips, como antes) — y si escribes directamente
en el buscador desde la pantalla de categorías, te lleva igualmente a los
resultados sin tener que elegir ninguna categoría primero.

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
sugerencia se rellena el nombre y las kcal/100g automáticamente. La cantidad
se ajusta con un control −/+ a tu lado, y si el ingrediente no está en
ninguna tabla, un enlace "añadir kcal/100g" revela un campo para escribirlo
a mano. Si la app encuentra una coincidencia automática que no es correcta
(por ejemplo, "café con leche" puede coincidir por error con "leche"), puedes
pulsar "editar" junto al valor encontrado para corregirlo a mano en cualquier
momento. Cada tarjeta muestra sus kcal calculadas, y al final de la lista
verás el total de kcal de toda la receta.

Para ingredientes que se miden en gramos o mililitros (incluyendo kg y l),
el campo manual pide "kcal por 100g/ml" y calcula el total con una regla de
tres. Para ingredientes que se miden por unidad (ud, cda, cdta, taza, pizca,
al gusto) — donde no tiene sentido hablar de "por 100 unidades" — el campo
manual pide directamente las kcal totales para la cantidad puesta (por
ejemplo, "1 taza de café con leche = 50 kcal").

Si un ingrediente no está en ninguna tabla, simplemente introduce las kcal/100g
a mano una vez y quedará disponible para siempre.

## Planificador / Calendario

En la pestaña "Calendario" puedes planificar tus comidas en una vista mensual:

- Cada día tiene 4 franjas: Desayuno, Comida, Cena y Otros (meriendas, snacks…).
- Toca un día para abrir el panel y asignar recetas a cada franja — puedes
  añadir **varias cosas a la misma franja** (por ejemplo, albóndigas en salsa
  y un yogur en la misma comida).
- Para cada receta añadida a una franja, puedes indicar con los botones −/+
  **cuántas raciones has comido** (por ejemplo, 2 empanadas si una ración de
  la receta es 1 empanada). Las kcal se recalculan automáticamente como
  (kcal totales de la receta ÷ porciones base) × raciones comidas — esto es
  independiente de las porciones base de la receta, que sirven para ajustar
  cantidades de ingredientes en su propio detalle.
- Si ese día concreto usaste cantidades distintas a las habituales (por
  ejemplo, echaste 80g de pasta en vez de los 70g de la receta), puedes
  pulsar el icono ✎ junto a esa entrada para **ajustar las cantidades solo
  para ese día**. Las kcal se recalculan al instante con los nuevos valores,
  y la receta queda marcada como "Ajustado hoy" — la receta guardada en tu
  recetario no se modifica, y puedes quitar el ajuste en cualquier momento
  para volver a sus valores normales.
- Además de elegir una receta ya guardada, puedes añadir algo suelto que no
  esté guardado como receta (un plátano, un yogur…). Al escribir el nombre,
  busca en tu tabla personal y en la tabla local: si lo encuentra, te
  precarga un **peso orientativo de una unidad mediana** (editable, por si
  la tuya es más grande o pequeña) y calcula las kcal en vivo a partir del
  peso. Si no lo encuentra, puedes escribir las kcal totales a mano como
  antes. En cualquier caso, se guarda automáticamente en tu recetario como
  una receta de un solo ingrediente, así no tienes que volver a escribirlo
  otro día.
- El calendario muestra las kcal totales planificadas para cada día con datos.
- Los días que ya han pasado se muestran con un tono más apagado para
  diferenciarlos claramente de los días futuros.
- Puedes navegar a meses anteriores o futuros con las flechas, o volver al mes
  actual con "Ir a hoy".

## Estadísticas

En la pestaña "Estadísticas" puedes ver:

- Las kcal planificadas para hoy, en una tarjeta a pantalla completa que se
  tiñe del mismo color que el calendario (verde/ámbar/rojo) según tu
  objetivo. Deslizando el dedo hacia la izquierda pasas a una segunda
  pantalla con la media diaria de la semana actual y del mes actual juntas,
  con un punto indicador abajo para ver en qué pantalla estás.
- La media diaria de kcal de la semana actual y del mes actual (calculada
  solo sobre los días que tengan algo planificado).
- La **media de kcal por franja** (Desayuno/Comida/Cena/Otros), con una barra
  visual proporcional, para ver de un vistazo si sueles comer más fuerte en
  el desayuno, la comida o la cena.
- Un **objetivo de kcal diario** que tú defines, editable en cualquier
  momento desde "Editar". Una vez definido, el calendario tiñe el fondo de
  cada día planificado según cómo te quedaste ese día: **verde** si no
  superaste el objetivo, **ámbar/naranja** si lo superaste hasta un 5%, y
  **rojo** si lo superaste más de un 5%. Los días sin nada planificado, o
  si no has definido objetivo, se quedan sin teñir.
- Un resumen de **cumplimiento del objetivo**: el porcentaje de tus días
  planificados que cayeron en cada uno de esos tres colores.

## Sobre la IA para estimar calorías

Se valoró conectar la app a un modelo de IA (como Claude) para estimar kcal
de platos sin datos exactos (p. ej. una ración de calamares en un
restaurante). Es técnicamente posible y el coste por consulta sería mínimo,
pero requeriría una clave de API de pago y un pequeño servidor intermedio
para no exponer esa clave públicamente — se decidió no añadir esa pieza extra
y, en su lugar, ampliar mucho la tabla local de alimentos.
