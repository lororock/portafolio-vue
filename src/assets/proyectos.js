import inventas from "../assets/img/principal/inventas.webp";
import portafolio from "../assets/img/principal/oldportafolio.webp";
import dna from "../assets/img/principal/DNA.webp";
import estudianteProfesor from "../assets/img/principal/login.webp";
import presupuesto from "../assets/img/principal/gastos.webp";
import peliculas from "../assets/img/principal/peliculas.webp";
import landing from "../assets/img/principal/landing.webp";

import fullInventas from "../assets/img/fullscreen/inventas.webp";
import fullPortafolio from "../assets/img/fullscreen/portafolio.webp";
import fullDna from "../assets/img/fullscreen/DNA.webp";
import fullEstudianteProfesor from "../assets/img/fullscreen/prueba.webp";
import fullPresupuesto from "../assets/img/fullscreen/gastos.webp";
import fullPeliculas from "../assets/img/fullscreen/peliculas.webp";
import fullLanding from "../assets/img/fullscreen/landing.webp";

export const proyectos = [
  {
    nombre: "Inventas",
    descripcion:
      "sistema de gestión integral para un negocio de productos o servicios, que incluye control de inventarios, ventas y gestión de empleados.",
    imagen: inventas,
    proyecto: fullInventas,
    tecnologias: "Vue, Vuetify, Firebase",
    enlace: "https://mercamejor.inventas-app.com/",
  },
  {
    nombre: "Anterior portafolio",
    descripcion:
      "antiguo portafolio de presentación de mis proyectos y habilidades",
    imagen: portafolio,
    proyecto: fullPortafolio,
    tecnologias: "HTML, CSS, JavaScript",
    enlace: "https://cristhian-rosas.netlify.app/",
  },
  {
    nombre: "DNA music",
    descripcion:
      "Sistema de gestión de prácticas para estudiantes, revisión de materias inscritas y administración de horarios. En la parte de administración, se incluye la creación de horarios de agendamiento. En la parte de profesores, se permite la revisión de asistencias a las prácticas inscritas.",
    imagen: dna,
    proyecto: fullDna,
    tecnologias: "Vue, Bootstrap, Microservicios, axios",
    enlace: "https://dnamusic.com.co/sign-in",
  },
  {
    nombre: "Gestor Estudiante/Profesor",
    descripcion:
      "Inicio de sesión y registro que gestionan a dos tipos de usuarios, cada uno con su propia interfaz y funcionalidades personalizadas, según su rol en el sistema. Lamentablemente, el backend se encuentra temporalmente fuera de servicio.",
    imagen: estudianteProfesor,
    proyecto: fullEstudianteProfesor,
    tecnologias: "Vue, Bootstrap, axios",
    enlace: "https://prueba-tecnica-cristhian.netlify.app",
  },
  {
    nombre: "Gestor de gastos",
    descripcion:
      "Sistema de cálculo de presupuesto que genera un análisis basado en los ingresos y egresos, proporcionando el total de ambos.",
    imagen: presupuesto,
    proyecto: fullPresupuesto,
    tecnologias: "HTML, CSS, JavaScript",
    enlace: "https://regal-crepe-84ee70.netlify.app/",
  },
  {
    nombre: "Api peliculas",
    descripcion:
      "Consumo de API para la creación de una página que muestra las últimas películas con su nombre y portada. Además, incluye paginación para navegar hasta películas más antiguas.",
    imagen: peliculas,
    proyecto: fullPeliculas,
    tecnologias: "HTML, CSS, JavaScript, Api Fetch",
    enlace: "https://jade-seahorse-cb70ae.netlify.app/",
  },
  {
    nombre: "Landing page inventas",
    descripcion:
      "Mi primera página web empresarial para mostrar un equipo de desarrollo y sus servicios, con información de contacto y presentación de los integrantes del equipo.",
    imagen: landing,
    proyecto: fullLanding,
    tecnologias: "HTML, Bootstrap, JavaScript",
    enlace: "https://inventas-app.com/",
  },
];
