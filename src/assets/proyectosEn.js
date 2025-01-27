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

import vue from "../assets/img/tecnologias/vue.svg";
import react from "../assets/img/tecnologias/react.svg";
import node from "../assets/img/tecnologias/node.svg";
import firebase from "../assets/img/tecnologias/firebase.svg";
import tailwind from "../assets/img/tecnologias/tailwind.svg";
import css from "../assets/img/tecnologias/css.svg";
import redux from "../assets/img/tecnologias/redux.svg";
import axios from "../assets/img/tecnologias/axios.svg";
import aws from "../assets/img/tecnologias/aws.svg";
import angular from "../assets/img/tecnologias/angular.svg";
import html from "../assets/img/tecnologias/html.svg";
import pinia from "../assets/img/tecnologias/pinia.svg";
import javascript from "../assets/img/tecnologias/javascript.svg";
import bootstrap from "../assets/img/tecnologias/bootstrap.svg";

export const proyectosEn = [
  {
    nombre: "Inventas",
    descripcion:
      "Integrated management system for businesses offering products or services, covering inventory control, sales tracking, and efficient employee management. This solution allows for optimizing daily operations and improving business administration.",
    imagen: inventas,
    proyecto: fullInventas,
    tecnologias: {
      tecnologia: [vue, pinia, tailwind, firebase],
      nombreTecno: ["VueJs", "PiniaJs", "Tailwind", "Firebase"],
    },
    enlace: "https://inventas-app.web.app/inicioSesion",
  },
  {
    nombre: "Dermocapilar",
    descripcion:
      "I was responsible for developing the online store, implementing an intuitive shopping cart and a secure payment gateway. I also designed and developed the information section to facilitate access to product details, shipping policies, and company contact information.",
    imagen: dermocapilar,
    proyecto: fullDermocapilar,
    tecnologias: {
      tecnologia: [react, tailwind, node],
      nombreTecno: ["ReactJs", "Tailwind", "Nodejs"],
    },
    enlace: "https://dermocapilar.com.co",
  },
  {
    nombre: "DNA music",
    descripcion:
      "Practice management system for students, reviewing enrolled subjects and managing schedules. In the administration section, scheduling creation is included. In the professors' section, attendance tracking for enrolled practices is enabled.",
    imagen: dna,
    proyecto: fullDna,
    tecnologias: {
      tecnologia: [vue, bootstrap, axios],
      nombreTecno: ["VueJs", "Bootstrap", "Axios"],
    },
    enlace: "https://dnamusic.edu.co/portal-estudiantes/",
  },
  {
    nombre: "Aythen",
    descripcion:
      "The developed application is a tool for dynamically creating templates and generating code in HTML, Angular, React, Vue, and Uidl. This application is based on another platform called 'Teleporthq'. Users will be able to create customized templates according to their needs and then obtain the corresponding code in the various supported formats. This will save them time and effort when generating repetitive code across multiple frameworks.",
    imagen: aythen,
    proyecto: fullAythen,
    tecnologias: {
      tecnologia: [angular, node, aws],
      nombreTecno: ["Angular", "Node", "Aws"],
    },
    enlace: "https://aythen.com",
  },
  {
    nombre: "Anterior portafolio",
    descripcion:
      "Old portfolio showcasing my projects and skills.",
    imagen: portafolio,
    proyecto: fullPortafolio,
    tecnologias: {
      tecnologia: [html, css, javascript],
      nombreTecno: ["Html", "Css", "JavaScript"],
    },
    enlace: "https://cristhian.netlify.app",
  },
  {
    nombre: "Api peliculas",
    descripcion:
      "API consumption for creating a page that displays the latest movies with their name and poster. Additionally, it includes pagination to navigate to older movies.",
    imagen: peliculas,
    proyecto: fullPeliculas,
    tecnologias: {
      tecnologia: [vue, css, axios],
      nombreTecno: ["Vuejs", "Css", "Axios"],
    },
    enlace: "https://double-v-partners-prueba-tecnica.netlify.app",
  },
  {
    nombre: "Gestor de gastos",
    descripcion:
      "Budget calculation system that generates an analysis based on income and expenses, providing the total of both.",
    imagen: presupuesto,
    proyecto: fullPresupuesto,
    tecnologias: {
      tecnologia: [html, css, javascript],
      nombreTecno: ["Html", "Css", "Javascript"],
    },
    enlace: "https://regal-crepe-84ee70.netlify.app",
  },
];
