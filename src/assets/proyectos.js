import inventas from "../assets/img/principal/inventas.png";
import portafolio from "../assets/img/principal/oldportafolio.png";
import dna from "../assets/img/principal/DNA.png";
import estudianteProfesor from "../assets/img/principal/login.png";
import presupuesto from "../assets/img/principal/gastos.png";
import peliculas from "../assets/img/principal/peliculas.png";
import landing from "../assets/img/principal/landing.png";

import fullInventas from "../assets/img/fullscreen/inventas.png";
import fullPortafolio from "../assets/img/fullscreen/portafolio.png";
import fullDna from "../assets/img/fullscreen/DNA.png";
import fullEstudianteProfesor from "../assets/img/fullscreen/prueba.png";
import fullPresupuesto from "../assets/img/fullscreen/gastos.png";
import fullPeliculas from "../assets/img/fullscreen/peliculas.png";
import fullLanding from "../assets/img/fullscreen/landing.png";

export const proyectos = [
  {
    nombre: "Inventas",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida velit at massa dignissim suscipit.",
    imagen: inventas,
    proyecto: fullInventas,
    tecnologias: "Vue, Vuetify, Firebase",
    enlace: "https://mercamejor.inventas-app.com/",
  },
  {
    nombre: "Anterior portafolio",
    descripcion:
      "Vestibulum tincidunt purus ut justo dapibus, eget sagittis urna ultrices. Sed tincidunt enim a velit finibus, vel scelerisque tortor porttitor.",
    imagen: portafolio,
    proyecto: fullPortafolio,
    tecnologias: "HTML, CSS, JavaScript",
    enlace: "https://cristhian-rosas.netlify.app/",
  },
  {
    nombre: "DNA music",
    descripcion:
      "Pellentesque auctor, sapien sit amet euismod rhoncus, eros nunc faucibus mi, in maximus ex sapien at nisi.",
    imagen: dna,
    proyecto: fullDna,
    tecnologias: "Vue, Bootstrap, Microservicios, axios",
    enlace: "https://dnamusic.com.co/sign-in",
  },
  {
    nombre: "Gestor Estudiante/Profesor",
    descripcion:
      "Vestibulum tincidunt purus ut justo dapibus, eget sagittis urna ultrices. Sed tincidunt enim a velit finibus, vel scelerisque tortor porttitor.",
    imagen: estudianteProfesor,
    proyecto: fullEstudianteProfesor,
    tecnologias: "Vue, Bootstrap, axios",
    enlace: "https://prueba-tecnica-cristhian.netlify.app",
  },
  {
    nombre: "Gestor de gastos",
    descripcion:
      "Pellentesque auctor, sapien sit amet euismod rhoncus, eros nunc faucibus mi, in maximus ex sapien at nisi.",
    imagen: presupuesto,
    proyecto: fullPresupuesto,
    tecnologias: "HTML, CSS, JavaScript",
    enlace: "https://regal-crepe-84ee70.netlify.app/",
  },
  {
    nombre: "Api peliculas",
    descripcion:
      "Pellentesque auctor, sapien sit amet euismod rhoncus, eros nunc faucibus mi, in maximus ex sapien at nisi.",
    imagen: peliculas,
    proyecto: fullPeliculas,
    tecnologias: "HTML, CSS, JavaScript, Api Fetch",
    enlace: "https://jade-seahorse-cb70ae.netlify.app/",
  },
  {
    nombre: "landing page inventas",
    descripcion:
      "Pellentesque auctor, sapien sit amet euismod rhoncus, eros nunc faucibus mi, in maximus ex sapien at nisi.",
    imagen: landing,
    proyecto: fullLanding,
    tecnologias: "HTML, Bootstrap, JavaScript",
    enlace: "https://inventas-app.com/",
  },
];
