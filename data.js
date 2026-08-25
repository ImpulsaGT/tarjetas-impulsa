// Datos de cada tarjeta digital.
//
// Para agregar a alguien nuevo (sin crear un repositorio nuevo):
// 1. Sube su foto a la carpeta img/ con el nombre "slug.png"
//    (minusculas, sin espacios ni acentos, ej: img/juanperez.png).
// 2. Agrega aqui un bloque nuevo dentro de TARJETAS, usando ese mismo
//    "slug" como llave.
// 3. Guarda los cambios. El link de esa persona sera:
//    https://impulsagt.github.io/tarjetas-impulsa/?p=slug

const TARJETAS = {
  wernergaitan: {
    nombreCompleto: "Werner Gaitán",
    nombre: "Werner",
    apellido: "Gaitán",
    telefono: "50252123163",
    telefonoVisible: "+502 5212 3163",
    correo: "wgaitan@impulsa.com.gt",
    puesto: "Asesor de Ventas",
    imagen: "wernergaitan.png"
  },
  ericadonis: {
    nombreCompleto: "Erica Donis",
    nombre: "Erica",
    apellido: "Donis",
    telefono: "50239974468",
    telefonoVisible: "+502 3997 4468",
    correo: "edonis@impulsa.com.gt",
    puesto: "Asesor de Ventas",
    imagen: "ericadonis.png"
  },
  mariateresa: {
    nombreCompleto: "María Teresa Gochez",
    nombre: "María Teresa",
    apellido: "Gochez",
    telefono: "50239975761",
    telefonoVisible: "+502 3997 5761",
    correo: "mgochez@impulsa.com.gt",
    puesto: "Asesor de Ventas",
    imagen: "mariateresa.png"
  },
  diego: {
    nombreCompleto: "Diego Marroquín",
    nombre: "Diego",
    apellido: "Marroquín",
    telefono: "50239975836",
    telefonoVisible: "+502 3997 5836",
    correo: "dmarroquin@impulsa.com.gt",
    puesto: "Asesor de Ventas",
    imagen: "diego.png"
  },
  karlaperez: {
    nombreCompleto: "Karla Pérez",
    nombre: "Karla",
    apellido: "Pérez",
    telefono: "50239971562",
    telefonoVisible: "+502 3997 1562",
    correo: "kperez@impulsa.com.gt",
    puesto: "Asesor de Ventas",
    imagen: "karlaperez.png"
  },
  cristinaleung: {
    nombreCompleto: "Cristina Leung",
    nombre: "Cristina",
    apellido: "Leung",
    telefono: "50234844970",
    telefonoVisible: "+502 3484 4970",
    correo: "mleung@impulsa.com.gt",
    puesto: "Directora de Mercadeo",
    imagen: "cristinaleung.png"
  }
};
