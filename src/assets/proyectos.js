import inventas from "../assets/img/principal/inventas.webp";
import portafolio from "../assets/img/principal/oldportafolio.webp";
import dna from "../assets/img/principal/DNA.webp";
import presupuesto from "../assets/img/principal/gastos.webp";
import peliculas from "../assets/img/principal/peliculas.webp";
import aythen from "../assets/img/principal/Aythen.webp";
import dermocapilar from "../assets/img/principal/dermocapilar.webp";

import fullInventas from "../assets/img/fullscreen/inventas.webp";
import fullPortafolio from "../assets/img/fullscreen/portafolio.webp";
import fullDna from "../assets/img/fullscreen/DNA.webp";
import fullPresupuesto from "../assets/img/fullscreen/gastos.webp";
import fullPeliculas from "../assets/img/fullscreen/peliculas.webp";
import fullAythen from "../assets/img/fullscreen/Aythen.webp";
import fullDermocapilar from "../assets/img/fullscreen/dermocapilar.webp";

export const proyectos = [
  {
    nombre: "Inventas",
    descripcion:
      "sistema de gestión integral para un negocio de productos o servicios, que incluye control de inventarios, ventas y gestión de empleados.",
    imagen: inventas,
    proyecto: fullInventas,
    tecnologias: "Vue, Vuetify, Firebase",
    enlace: "https://inventas-app.web.app/inicioSesion",
  },
  {
    nombre: "Dermocapilar",
    descripcion:
      "proyecto freelance para una empresa que necesitaba un ecommerce",
    imagen: dermocapilar,
    proyecto: fullDermocapilar,
    tecnologias: "React, Redux, Tailwind, axios",
    enlace: "https://dermocapilar.com.co",
  },
  {
    nombre: "DNA music",
    descripcion:
      "Sistema de gestión de prácticas para estudiantes, revisión de materias inscritas y administración de horarios. En la parte de administración, se incluye la creación de horarios de agendamiento. En la parte de profesores, se permite la revisión de asistencias a las prácticas inscritas.",
    imagen: dna,
    proyecto: fullDna,
    tecnologias: "Vue, Bootstrap, Microservicios, axios",
    enlace: "https://dnamusic.edu.co/portal-estudiantes/",
  },
  {
    nombre: "Aythen",
    descripcion:
      "La aplicación que estoy desarrollando es una herramienta para crear plantillas de forma dinámica y generar código en HTML, Angular, React, Vue y Uidl. Esta aplicación está basada en otra plataforma llamada 'Teleporthq'. Los usuarios podrán crear plantillas personalizadas según sus necesidades, y luego obtener el código correspondiente en los diferentes formatos admitidos. Esto les permitirá ahorrar tiempo y esfuerzo al generar código repetitivo en múltiples frameworks.",
    imagen: aythen,
    proyecto: fullAythen,
    tecnologias: "React, Redux, AWS Cloud9",
    enlace: "https://aythen.com",
  },
  {
    nombre: "Anterior portafolio",
    descripcion:
      "antiguo portafolio de presentación de mis proyectos y habilidades",
    imagen: portafolio,
    proyecto: fullPortafolio,
    tecnologias: "HTML, CSS, JavaScript",
    enlace: "https://cristhian-rosas.netlify.app",
  },
  {
    nombre: "Api peliculas",
    descripcion:
      "Consumo de API para la creación de una página que muestra las últimas películas con su nombre y portada. Además, incluye paginación para navegar hasta películas más antiguas.",
    imagen: peliculas,
    proyecto: fullPeliculas,
    tecnologias: "Vue, Css, Axios",
    enlace: "https://double-v-partners-prueba-tecnica.netlify.app",
  },
  {
    nombre: "Gestor de gastos",
    descripcion:
      "Sistema de cálculo de presupuesto que genera un análisis basado en los ingresos y egresos, proporcionando el total de ambos.",
    imagen: presupuesto,
    proyecto: fullPresupuesto,
    tecnologias: "HTML, CSS, JavaScript",
    enlace: "https://regal-crepe-84ee70.netlify.app",
  },
];
