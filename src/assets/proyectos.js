import inventas from "../assets/img/principal/inventas.webp";
import portafolio from "../assets/img/principal/oldportafolio.webp";
import dna from "../assets/img/principal/DNA.webp";
import estudianteProfesor from "../assets/img/principal/login.webp";
import presupuesto from "../assets/img/principal/gastos.webp";
import peliculas from "../assets/img/principal/peliculas.webp";
import landing from "../assets/img/principal/landing.webp";
import aythen from "../assets/img/principal/Aythen.webp";
import enLinea from "../assets/img/principal/tres-en-linea.webp";
import doubleVpartners from "../assets/img/principal/double-v-partners-prueba-tecnica.webp";
import dermocapilar from "../assets/img/principal/dermocapilar.webp";

import fullInventas from "../assets/img/fullscreen/inventas.webp";
import fullPortafolio from "../assets/img/fullscreen/portafolio.webp";
import fullDna from "../assets/img/fullscreen/DNA.webp";
import fullEstudianteProfesor from "../assets/img/fullscreen/prueba.webp";
import fullPresupuesto from "../assets/img/fullscreen/gastos.webp";
import fullPeliculas from "../assets/img/fullscreen/peliculas.webp";
import fullLanding from "../assets/img/fullscreen/landing.webp";
import fullAythen from "../assets/img/fullscreen/Aythen.webp";
import fullTresEnLinea from "../assets/img/fullscreen/linea.webp";
import fullDoubleVpartners from "../assets/img/fullscreen/double-v-partners-prueba-tecnica.webp";
import fullDermocapilar from "../assets/img/fullscreen/dermocapilar.webp";

export const proyectos = [
  {
    nombre: "Inventas",
    descripcion:
      "sistema de gestión integral para un negocio de productos o servicios, que incluye control de inventarios, ventas y gestión de empleados.",
    imagen: inventas,
    proyecto: fullInventas,
    tecnologias: "Vue, Vuetify, Firebase",
    enlace: "https://mercamejor.inventas-app.com",
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
    enlace: "https://dnamusic.edu.co/portal-estudiantes",
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
    nombre: "Gestor Estudiante/Profesor",
    descripcion:
      "Inicio de sesión y registro que gestionan a dos tipos de usuarios, cada uno con su propia interfaz y funcionalidades personalizadas, según su rol en el sistema. Lamentablemente, el backend se encuentra temporalmente fuera de servicio.",
    imagen: estudianteProfesor,
    proyecto: fullEstudianteProfesor,
    tecnologias: "Vue, Bootstrap, axios",
    enlace: "https://prueba-tecnica-cristhian.netlify.app",
  },
  {
    nombre: "Prueba técnica Double V Partners",
    descripcion:
      "Prueba técnica para Double V Partners en la cual no se permiten frameworks de diseño como Tailwind o Bootstrap, solo Sass y Scss.",
    imagen: doubleVpartners,
    proyecto: fullDoubleVpartners,
    tecnologias: "Vue, Sass, Axios",
    enlace: "https://double-v-partners-prueba-tecnica.netlify.app",
  },
  {
    nombre: "Tres En Linea",
    descripcion:
      "Es una implementación digital del clásico juego de estrategia en el que dos jugadores compiten para lograr una línea de tres símbolos iguales en un tablero de 3x3. Esta versión digital se desarrollará utilizando tecnologías web modernas y estará diseñada para proporcionar una experiencia de juego interactiva y atractiva.",
    imagen: enLinea,
    proyecto: fullTresEnLinea,
    tecnologias: "React, Bootstrap, Sweetalert2",
    enlace: "https://phenomenal-bunny-tres-en-linea.netlify.app",
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
  {
    nombre: "Api peliculas",
    descripcion:
      "Consumo de API para la creación de una página que muestra las últimas películas con su nombre y portada. Además, incluye paginación para navegar hasta películas más antiguas.",
    imagen: peliculas,
    proyecto: fullPeliculas,
    tecnologias: "HTML, CSS, JavaScript, Api Fetch",
    enlace: "https://jade-seahorse-cb70ae.netlify.app",
  },
  {
    nombre: "Landing page inventas",
    descripcion:
      "Mi primera página web empresarial para mostrar un equipo de desarrollo y sus servicios, con información de contacto y presentación de los integrantes del equipo.",
    imagen: landing,
    proyecto: fullLanding,
    tecnologias: "HTML, Bootstrap, JavaScript",
    enlace: "https://inventas-app.com",
  },
];
