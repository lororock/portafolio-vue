<script setup>
import { ref } from "vue";
import { proyectos } from "../assets/proyectos";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

const tecnologis = ref([])

const mostrarPopAds = (pro) => {
  console.log("el prop", pro);
  tecnologis.value = pro
  Swal.fire({
    title: pro.descripcion,
    imageUrl: pro.proyecto,
    width: 1200,
    padding: "3em",
    color: "#716add",
    confirmButtonText: "visitar",
    cancelButtonText: "cerrar",
    showCancelButton: true,
    showCloseButton: pro.enlace,
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `,
    preConfirm: () => {
      window.open(pro.enlace, '_blank')
    }
  });
};

// Swiper methods and modules
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
const modules = ref([Navigation, Pagination, Scrollbar]);

// Exposing projects
defineExpose({ proyectos });

</script>


<template>
  <section id="projects">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
          Portafolio de proyectos
        </h2>
        <p class="mt-4 max-w-xl text-gray-500">
          Aquí en mi portafolio, encontrarás una selección de algunos de mis
          proyectos más recientes. Cada uno de ellos representa un desafío único
          que tuve que superar y una oportunidad para demostrar mis habilidades
          y creatividad. Espero que disfrutes viendo mis proyectos tanto como yo
          disfruté trabajando en ellos.
        </p>
      </header>

      <div class="mt-8 mb-24">
        <swiper class="bg-slate-200 rounded-lg border border-gray-200 shadow-lg p-4" :modules="modules"
          :slides-per-view="1" :space-between="50" navigation :pagination="{ dynamicBullets: true }" @swiper="onSwiper"
          @slideChange="onSlideChange">
          <swiper-slide v-for="(pro, index) in proyectos" :key="index">
            <div @click="mostrarPopAds(pro)">
              <img class="mh-full" :src="pro.imagen" :alt="pro.descripcion" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
