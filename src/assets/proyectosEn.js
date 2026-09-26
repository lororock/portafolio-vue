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

export const proyectosEn = [
    {
      nombre: "Aprueba",
      descripcion:
        "Fullstack web application for offering free online courses, with an option to donate to receive a certificate. Users can register, access content, track their progress, and verify certificates through a QR code. I migrated and adapted the logic from a previous paid-course platform, improving the backend, fixing database issues, and aligning the system with the new free-access model.",
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
        "I designed and developed the main landing page for a company specializing in marketing, graphic design, and audiovisual production. The website clearly showcases their services, highlights their portfolio, and introduces the team, conveying a professional and creative identity. In addition to the corporate site, I also developed websites for several of their clients, adapting to different visual and functional needs.",
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
      tecnologia: [react, tailwind, redux, node],
      nombreTecno: ["ReactJs", "Tailwind", "Redux", "Nodejs"],
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
];
