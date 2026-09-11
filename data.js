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
    imagen: "wernergaitan.png",
    linkedin: "https://www.linkedin.com/company/impulsa-desarrollos/posts/?feedView=all",
    iconOverrides: {
      whatsapp: { top: 70.3, left: 12.833, width: 10.778, height: 6.73 },
      instagram: { top: 70.3, left: 25.611, width: 10.444, height: 6.73 },
      facebook: { top: 70.3, left: 37.833, width: 10.444, height: 6.73 },
      linkedin: { top: 70.3, left: 50.056, width: 11.222, height: 6.73 },
      telefono: { top: 70.3, left: 62.167, width: 10.444, height: 6.73 },
      tiktok: { top: 70.3, left: 74.167, width: 10.444, height: 6.73 }
    },
    guardarTop: 80.13,
    visitarTop: 89.52
  },
  ericadonis: {
    nombreCompleto: "Erica Donis",
    nombre: "Erica",
    apellido: "Donis",
    telefono: "50239974468",
    telefonoVisible: "+502 3997 4468",
    correo: "edonis@impulsa.com.gt",
    puesto: "Asesor de Ventas",
    imagen: "ericadonis.png",
    linkedin: "https://www.linkedin.com/company/impulsa-desarrollos/posts/?feedView=all",
    iconOverrides: {
      whatsapp: { top: 70.3, left: 12.833, width: 10.778, height: 6.73 },
      instagram: { top: 70.3, left: 25.611, width: 10.444, height: 6.73 },
      facebook: { top: 70.3, left: 37.833, width: 10.444, height: 6.73 },
      linkedin: { top: 70.3, left: 50.056, width: 11.222, height: 6.73 },
      telefono: { top: 70.3, left: 62.167, width: 10.444, height: 6.73 },
      tiktok: { top: 70.3, left: 74.167, width: 10.444, height: 6.73 }
    },
    guardarTop: 80.13,
    visitarTop: 89.52
  },
  mariateresa: {
    nombreCompleto: "María Teresa Gochez",
    nombre: "María Teresa",
    apellido: "Gochez",
    telefono: "50239975761",
    telefonoVisible: "+502 3997 5761",
    correo: "mgochez@impulsa.com.gt",
    puesto: "Asesor de Ventas",
    imagen: "mariateresa.png",
    linkedin: "https://www.linkedin.com/company/impulsa-desarrollos/posts/?feedView=all",
    iconOverrides: {
      whatsapp: { top: 70.3, left: 12.833, width: 10.778, height: 6.73 },
      instagram: { top: 70.3, left: 25.611, width: 10.444, height: 6.73 },
      facebook: { top: 70.3, left: 37.833, width: 10.444, height: 6.73 },
      linkedin: { top: 70.3, left: 50.056, width: 11.222, height: 6.73 },
      telefono: { top: 70.3, left: 62.167, width: 10.444, height: 6.73 },
      tiktok: { top: 70.3, left: 74.167, width: 10.444, height: 6.73 }
    },
    guardarTop: 80.13,
    visitarTop: 89.52
  },
  diego: {
    nombreCompleto: "Diego Marroquín",
    nombre: "Diego",
    apellido: "Marroquín",
    telefono: "50239975836",
    telefonoVisible: "+502 3997 5836",
    correo: "dmarroquin@impulsa.com.gt",
    puesto: "Asesor de Ventas",
    imagen: "diego.png",
    linkedin: "https://www.linkedin.com/company/impulsa-desarrollos/posts/?feedView=all",
    iconOverrides: {
      whatsapp: { top: 70.3, left: 12.833, width: 10.778, height: 6.73 },
      instagram: { top: 70.3, left: 25.611, width: 10.444, height: 6.73 },
      facebook: { top: 70.3, left: 37.833, width: 10.444, height: 6.73 },
      linkedin: { top: 70.3, left: 50.056, width: 11.222, height: 6.73 },
      telefono: { top: 70.3, left: 62.167, width: 10.444, height: 6.73 },
      tiktok: { top: 70.3, left: 74.167, width: 10.444, height: 6.73 }
    },
    guardarTop: 80.13,
    visitarTop: 89.52
  },
  karlaperez: {
    nombreCompleto: "Karla Pérez",
    nombre: "Karla",
    apellido: "Pérez",
    telefono: "50239971562",
    telefonoVisible: "+502 3997 1562",
    correo: "kperez@impulsa.com.gt",
    puesto: "Asesor de Ventas",
    imagen: "karlaperez.png",
    linkedin: "https://www.linkedin.com/company/impulsa-desarrollos/posts/?feedView=all",
    iconOverrides: {
      whatsapp: { top: 70.3, left: 12.833, width: 10.778, height: 6.73 },
      instagram: { top: 70.3, left: 25.611, width: 10.444, height: 6.73 },
      facebook: { top: 70.3, left: 37.833, width: 10.444, height: 6.73 },
      linkedin: { top: 70.3, left: 50.056, width: 11.222, height: 6.73 },
      telefono: { top: 70.3, left: 62.167, width: 10.444, height: 6.73 },
      tiktok: { top: 70.3, left: 74.167, width: 10.444, height: 6.73 }
    },
    guardarTop: 80.13,
    visitarTop: 89.52
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
    linkedin: "https://www.linkedin.com/company/impulsa-desarrollos/posts/?feedView=all",
    iconOverrides: {
      whatsapp: { top: 70.3, left: 12.833, width: 10.778, height: 6.73 },
      instagram: { top: 70.3, left: 25.611, width: 10.444, height: 6.73 },
      facebook: { top: 70.3, left: 37.833, width: 10.444, height: 6.73 },
      linkedin: { top: 70.3, left: 50.056, width: 11.222, height: 6.73 },
      telefono: { top: 70.3, left: 62.167, width: 10.444, height: 6.73 },
      tiktok: { top: 70.3, left: 74.167, width: 10.444, height: 6.73 }
    },
    guardarTop: 80.13,
    visitarTop: 89.52
  },
  escarlethamado: {
    nombreCompleto: "Escarleth Amado",
    nombre: "Escarleth",
    apellido: "Amado",
    telefono: "50230042660",
    telefonoVisible: "+502 3004 2660",
    correo: "eamado@impulsa.com.gt",
    puesto: "Gerente Administrativa",
    imagen: "escarlethamado.png",
    linkedin: "https://www.linkedin.com/company/impulsa-desarrollos/posts/?feedView=all",
    iconOverrides: {
      whatsapp: { top: 70.3, left: 12.833, width: 10.778, height: 6.73 },
      instagram: { top: 70.3, left: 25.611, width: 10.444, height: 6.73 },
      facebook: { top: 70.3, left: 37.833, width: 10.444, height: 6.73 },
      linkedin: { top: 70.3, left: 50.056, width: 11.222, height: 6.73 },
      telefono: { top: 70.3, left: 62.167, width: 10.444, height: 6.73 },
      tiktok: { top: 70.3, left: 74.167, width: 10.444, height: 6.73 }
    },
    guardarTop: 80.13,
    visitarTop: 89.52
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
    linkedin: "https://www.linkedin.com/in/jose-francisco-leon-liu-38908b319/",
    iconOverrides: {
      whatsapp: { top: 70.3, left: 12.833, width: 10.778, height: 6.73 },
      instagram: { top: 70.3, left: 25.611, width: 10.444, height: 6.73 },
      facebook: { top: 70.3, left: 37.833, width: 10.444, height: 6.73 },
      linkedin: { top: 70.3, left: 50.056, width: 11.222, height: 6.73 },
      telefono: { top: 70.3, left: 62.167, width: 10.444, height: 6.73 },
      tiktok: { top: 70.3, left: 74.167, width: 10.444, height: 6.73 }
    },
    guardarTop: 80.13,
    visitarTop: 89.52
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
    linkedin: "https://www.linkedin.com/in/juan-francisco-abril-882349205/",
    iconOverrides: {
      whatsapp: { top: 69.24, left: 12.833, width: 10.778, height: 6.74 },
      instagram: { top: 69.24, left: 25.611, width: 10.444, height: 6.74 },
      facebook: { top: 69.24, left: 37.833, width: 10.444, height: 6.74 },
      linkedin: { top: 69.24, left: 50.056, width: 11.222, height: 6.74 },
      telefono: { top: 69.24, left: 62.167, width: 10.444, height: 6.74 },
      tiktok: { top: 69.24, left: 74.167, width: 10.444, height: 6.74 }
    },
    guardarTop: 79.08,
    visitarTop: 88.47
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
    linkedin: "https://www.linkedin.com/company/impulsa-desarrollos/posts/?feedView=all",
    iconOverrides: {
      whatsapp: { top: 70.3, left: 12.833, width: 10.778, height: 6.73 },
      instagram: { top: 70.3, left: 25.611, width: 10.444, height: 6.73 },
      facebook: { top: 70.3, left: 37.833, width: 10.444, height: 6.73 },
      linkedin: { top: 70.3, left: 50.056, width: 11.222, height: 6.73 },
      telefono: { top: 70.3, left: 62.167, width: 10.444, height: 6.73 },
      tiktok: { top: 70.3, left: 74.167, width: 10.444, height: 6.73 }
    },
    guardarTop: 80.13,
    visitarTop: 89.52
  },
  mariacristina: {
    nombreCompleto: "María Cristina Arriola",
    nombre: "María Cristina",
    apellido: "Arriola",
    telefono: "50240272293",
    telefonoVisible: "+502 4027 2293",
    correo: "marriola@impulsa.com.gt",
    puesto: "Directora de Nuevos Proyectos",
    imagen: "mariacristina.png",
    linkedin: "https://www.linkedin.com/company/impulsa-desarrollos/posts/?feedView=all",
    iconOverrides: {
      whatsapp: { top: 69.75, left: 12.833, width: 10.778, height: 6.73 },
      instagram: { top: 69.75, left: 25.611, width: 10.444, height: 6.73 },
      facebook: { top: 69.75, left: 37.833, width: 10.444, height: 6.73 },
      linkedin: { top: 69.75, left: 50.056, width: 11.222, height: 6.73 },
      telefono: { top: 69.75, left: 62.167, width: 10.444, height: 6.73 },
      tiktok: { top: 69.75, left: 74.167, width: 10.444, height: 6.73 }
    },
    guardarTop: 80.13,
    visitarTop: 89.52
  }
};
