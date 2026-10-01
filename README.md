# tarjetas-impulsa

Tarjetas digitales de contacto del equipo de IMPULSA. Un solo repositorio para todas: ya no hay que crear uno nuevo por cada persona.

## Como agregar una tarjeta nueva

1. Sube la foto de la tarjeta a la carpeta `img/`, nombrada como `slug.png` (minusculas, sin espacios ni acentos, ejemplo: `img/juanperez.png`).
2. Abre `data.js` y agrega un bloque nuevo dentro de `TARJETAS`, usando ese mismo `slug` como llave, con nombre, telefono, correo y puesto.
3. Guarda los cambios (commit). El link de esa persona sera:

   `https://impulsagt.github.io/tarjetas-impulsa/?p=slug`

## Seguridad

- La lista completa de links por persona **no** se publica aqui ni en el sitio, para evitar que se puedan recolectar todos los correos y telefonos de una vez. Mantenla en un lugar interno (por ejemplo, SharePoint).
- Antes de subir una imagen nueva, quitale los metadatos (Canva incluye el ID del diseno y del usuario).
- El slug solo puede tener letras minusculas y numeros.
