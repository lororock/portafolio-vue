<script>
import { ref } from "vue";
import { proyectos } from "../assets/proyectos";
export default {
  name: "ImagenDinamica",
  setup() {
    const rutaImagen = ref("");
    const cargarImagen = () => {
      rutaImagen.value = "ruta/de/la/imagen.jpg";
    };
    return { rutaImagen, cargarImagen };
  },
  data() {
    return {
      proyectos
    };
  }
};


</script>
<template>
  <div v-for="(proyecto, i) in proyectos" :key="i">
    <h1> s</h1>
    <img :src="proyecto.imagen" alt="Imagen dinámica" />
  </div>
</template>
