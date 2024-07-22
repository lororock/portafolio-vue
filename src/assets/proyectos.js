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

export const proyectos = [
  {
    nombre: "Inventas",
    descripcion:
      "Sistema de gestión integral para negocios de productos o servicios, que abarca el control de inventarios, el seguimiento de ventas y la gestión eficiente de empleados. Esta solución permite optimizar operaciones diarias y mejorar la administración del negocio.",
    imagen: inventas,
    proyecto: fullInventas,
    tecnologias: {
      tecnologia: [vue, pinia, tailwind, firebase, ],
      nombreTecno: ["VueJs", "PiniaJs", "Tailwind", "Firebase"],
    },
    enlace: "https://inventas-app.web.app/inicioSesion",
  },
  {
    nombre: "Dermocapilar",
    descripcion:
      "Me encargué del desarrollo de la tienda en línea, implementando un carrito de compras intuitivo y una pasarela de pagos segura. También diseñé y desarrollé la sección de información para facilitar el acceso a detalles sobre productos, políticas de envío y contacto con la empresa.",
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
      "Sistema de gestión de prácticas para estudiantes, revisión de materias inscritas y administración de horarios. En la parte de administración, se incluye la creación de horarios de agendamiento. En la parte de profesores, se permite la revisión de asistencias a las prácticas inscritas.",
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
      "La aplicación que se desarrollo es una herramienta para crear plantillas de forma dinámica y generar código en HTML, Angular, React, Vue y Uidl. Esta aplicación está basada en otra plataforma llamada 'Teleporthq'. Los usuarios podrán crear plantillas personalizadas según sus necesidades, y luego obtener el código correspondiente en los diferentes formatos admitidos. Esto les permitirá ahorrar tiempo y esfuerzo al generar código repetitivo en múltiples frameworks.",
    imagen: aythen,
    proyecto: fullAythen,
    tecnologias: {
      tecnologia: [react, redux, aws],
      nombreTecno: ["ReactJs", "Redux", "Aws"],
    },
    enlace: "https://aythen.com",
  },
  {
    nombre: "Anterior portafolio",
    descripcion:
      "antiguo portafolio de presentación de mis proyectos y habilidades",
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
      "Consumo de API para la creación de una página que muestra las últimas películas con su nombre y portada. Además, incluye paginación para navegar hasta películas más antiguas.",
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
      "Sistema de cálculo de presupuesto que genera un análisis basado en los ingresos y egresos, proporcionando el total de ambos.",
    imagen: presupuesto,
    proyecto: fullPresupuesto,
    tecnologias: {
      tecnologia: [html, css, javascript],
      nombreTecno: ["Html", "Css", "Javascript"],
    },
    enlace: "https://regal-crepe-84ee70.netlify.app",
  },
];
