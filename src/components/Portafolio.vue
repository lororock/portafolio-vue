<script setup>
import { computed, ref } from "vue";
import { proyectos } from "../assets/proyectos";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Setup for pagination
const postXpage = 4;
const start = ref(0);
const end = ref(postXpage);
const paginaActual = ref(0);

// Pagination methods
const next = () => {
  if (end.value < proyectos.length) {
    start.value += postXpage;
    end.value += postXpage;
    paginaActual.value += 1;
  }
};
const prev = () => {
  if (start.value > 0) {
    start.value -= postXpage;
    end.value -= postXpage;
    paginaActual.value -= 1;
  }
};

// SweetAlert method
const mostrarPopAds = (pro) => {
  console.log(pro);
  Swal.fire({
    text: pro.descripcion,
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

// Exposing projects
defineExpose({ proyectos });

// Computed property for total projects length
const maxLength = computed(() => proyectos.length);

// Swiper methods and modules
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
const modules = ref([Navigation, Pagination, Scrollbar]);
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
        <swiper class="bg-slate-200 rounded-lg border border-gray-200 shadow-lg p-4" :modules="modules" :slides-per-view="1" 
          :space-between="50" navigation :pagination="{ dynamicBullets: true }" @swiper="onSwiper"
          @slideChange="onSlideChange">
          <swiper-slide v-for="(pro, index) in proyectos" :key="index">
            <div @click="mostrarPopAds(pro)">
              <img :src="pro.proyecto" :alt="pro.descripcion" />
            </div>
          </swiper-slide>
        </swiper>
      </div>


      <!--       
      <div class="mt-8">
        <p class="text-sm text-gray-500">
          mostrando
          <span> {{ end > proyectos.length ? proyectos.length : end }} </span>
          de {{ proyectos.length }}
        </p>
      </div>

      <ul class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="proyecto in proyectos.slice(start, end)" :key="i">
          <div class="group block overflow-hidden">
            <img @click="mostrarPopAds(proyecto)" :src="proyecto.imagen" alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]" />

            <div class="relative bg-white pt-3">
              <a class="text-x font-semibold text-indigo-600 group-hover:underline group-hover:underline-offset-4"
                target="_blank" :href="proyecto.enlace">
                {{ proyecto.nombre }}
              </a>

              <p class="mt-2">
                <span class="tracking-wider text-gray-900">
                  {{ proyecto.tecnologias }}
                </span>
              </p>
            </div>
          </div>
        </li>
      </ul>

      <ol class="mt-8 flex justify-center gap-1 text-xs font-medium">
        <li>
          <button @click="prev()" :disabled="start <= 0"
            class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100">
            <span class="sr-only">Prev Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </li>

        <li>
          <a class="block h-8 w-16 rounded border border-gray-100 text-center leading-8">
            Página {{ paginaActual + 1 }}
          </a>
        </li>

        <li>
          <button @click="next()" :disabled="end >= maxLength"
            class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100">
            <span class="sr-only">Next Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </li>
      </ol> -->
    </div>
  </section>
</template>
