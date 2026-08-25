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
    imagen: "cristinaleung.png",
    extraBottomPercent: 20.93,
    iconOverrides: {
      whatsapp: { top: 71.40, left: 20.85, width: 8.36, height: 4.086 },
      instagram: { top: 71.40, left: 33.33, width: 8.14, height: 4.086 },
      facebook: { top: 71.40, left: 45.71, width: 8.14, height: 4.086 },
      tiktok: { top: 71.40, left: 58.19, width: 8.14, height: 4.086 },
      telefono: { top: 71.40, left: 70.35, width: 8.25, height: 4.086 }
    },
    guardarTop: 80.11,
    guardarHeight: 8.495,
    visitarTop: 90.11,
    visitarHeight: 8.495
  },
  escarlethamado: {
    nombreCompleto: "Escarleth Amado",
    nombre: "Escarleth",
    apellido: "Amado",
    telefono: "50230042660",
    telefonoVisible: "+502 3004 2660",
    correo: "eamado@impulsa.com.gt",
    puesto: "Gerente Administrativa",
    imagen: "escarlethamado.png"
  },
  franciscoleon: {
    nombreCompleto: "Francisco León",
    nombre: "Francisco",
    apellido: "León",
    telefono: "50240677551",
    telefonoVisible: "+502 4067 7551",
    correo: "fleon@impulsa.com.gt",
    puesto: "COO",
    imagen: "franciscoleon.png",
    iconsTop: 65.6,
    guardarTop: 75.3,
    visitarTop: 83.4
  },
  juanfrancisco: {
    nombreCompleto: "Juan Francisco Abril",
    nombre: "Juan Francisco",
    apellido: "Abril",
    telefono: "50258789098",
    telefonoVisible: "+502 5878 9098",
    correo: "jfabril@impulsa.com.gt",
    puesto: "CEO",
    imagen: "juanfrancisco.png",
    iconsTop: 75,
    guardarTop: 83.237,
    guardarHeight: 6.785,
    visitarTop: 91.202,
    visitarHeight: 6.785
  },
  gabrielavanegas: {
    nombreCompleto: "Gabriela Vanegas",
    nombre: "Gabriela",
    apellido: "Vanegas",
    telefono: "50240126340",
    telefonoVisible: "+502 4012 6340",
    correo: "gvanegas@impulsa.com.gt",
    puesto: "Gerente Administrativa de Proyectos",
    imagen: "gabrielavanegas.png",
    iconsTop: 71.9,
    guardarTop: 80.15,
    visitarTop: 88.27
  }
};
