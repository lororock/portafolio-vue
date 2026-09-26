
import aprueba from "../assets/img/principal/aprueba.webp";
import llamarada from "../assets/img/principal/llamarada.webp";
import inventas from "../assets/img/principal/inventas.webp";
import dna from "../assets/img/principal/DNA.webp";
import aythen from "../assets/img/principal/Aythen.webp";
import dermocapilar from "../assets/img/principal/dermocapilar.webp";

import fullAprueba from "../assets/img/fullscreen/aprueba.webp";
import fullLlamarada from "../assets/img/fullscreen/llamarada.webp";
import fullInventas from "../assets/img/fullscreen/inventas.webp";
import fullDna from "../assets/img/fullscreen/DNA.webp";
import fullAythen from "../assets/img/fullscreen/Aythen.webp";
import fullDermocapilar from "../assets/img/fullscreen/dermocapilar.webp";

import vue from "../assets/img/tecnologias/vue.svg";
import react from "../assets/img/tecnologias/react.svg";
import astro from "../assets/img/tecnologias/astro.svg";
import node from "../assets/img/tecnologias/node.svg";
import firebase from "../assets/img/tecnologias/firebase.svg";
import tailwind from "../assets/img/tecnologias/tailwind.svg";
import redux from "../assets/img/tecnologias/redux.svg";
import axios from "../assets/img/tecnologias/axios.svg";
import aws from "../assets/img/tecnologias/aws.svg";
import angular from "../assets/img/tecnologias/angular.svg";
import pinia from "../assets/img/tecnologias/pinia.svg";
import bootstrap from "../assets/img/tecnologias/bootstrap.svg";
import zustand from "../assets/img/tecnologias/zustand.svg";

export const proyectosEs = [
  {
    nombre: "Aprueba",
    descripcion:
      "Aplicación web fullstack para ofrecer cursos gratuitos en línea, con opción de donar para obtener un certificado. Permite a los usuarios registrarse, acceder a contenido, seguir su progreso y validar certificados mediante código QR. Migré y adapté la lógica desde una plataforma anterior de cursos pagos, mejorando el backend, la base de datos y corrigiendo errores para ajustarse al nuevo enfoque gratuito.",
    imagen: aprueba,
    proyecto: fullAprueba,
    tecnologias: {
      tecnologia: [react, tailwind, axios,  zustand],
      nombreTecno: ["ReactJs", "Tailwind", "Axios", "Zustand"],
    },
    enlace: "https://cursosaprueba.com/",
  },
      {
        nombre: "Llamarada",
        descripcion:
          "Diseñé y desarrollé la página principal de una empresa dedicada al marketing, diseño gráfico y producción audiovisual. La landing page presenta de forma clara sus servicios, muestra el portafolio y destaca al equipo de trabajo, transmitiendo una imagen profesional y creativa. Además de esta web corporativa, también desarrollé páginas web para varios de sus clientes, adaptándome a distintas necesidades visuales y funcionales.",
        imagen: llamarada,
        proyecto: fullLlamarada,
        tecnologias: {
          tecnologia: [astro, tailwind, node],
          nombreTecno: ["Astro", "Tailwind", "NodeJs"],
        },
        enlace: "https://llamaradaweb.netlify.app/",
      },
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
      tecnologia: [react, tailwind, redux, node],
      nombreTecno: ["ReactJs", "Tailwind", "Redux", "Nodejs"],
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
      tecnologia: [angular, node, aws],
      nombreTecno: ["Angular", "Node", "Aws"],
    },
    enlace: "https://aythen.com",
  },
];
