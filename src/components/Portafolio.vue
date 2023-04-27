<script setup>
import { computed, ref } from "vue";

const postXpage = 4;
const start = ref(0);
const end = ref(4);
const paginaActual = ref(0);

const next = () => {
  start.value = start.value + postXpage;
  end.value = end.value + postXpage;
  paginaActual.value = paginaActual.value + 1;
};
const prev = () => {
  start.value = start.value - postXpage;
  end.value = end.value - postXpage;
  paginaActual.value = paginaActual.value - 1;
};

defineExpose({ proyectos });

const maxLength = computed(() => proyectos.length);
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

      <div class="mt-8">
        <p class="text-sm text-gray-500">
          mostrando
          <span> {{ end > proyectos.length ? proyectos.length : end }} </span>
          de {{ proyectos.length }}
        </p>
      </div>

      <ul class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="proyecto in proyectos.slice(start, end)"
          :key="proyecto.nombre"
        >
          <div class="group block overflow-hidden">
            <img
              :src="proyecto.imagen"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative bg-white pt-3">
              <a
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                target="_blank"
                :href="proyecto.enlace"
              >
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
          <button
            @click="prev()"
            :disabled="start <= 0"
            class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
          >
            <span class="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </li>

        <li>
          <a
            class="block h-8 w-16 rounded border border-gray-100 text-center leading-8"
          >
            Página {{ paginaActual + 1 }}
          </a>
        </li>

        <li>
          <button
            @click="next()"
            :disabled="end >= maxLength"
            class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
          >
            <span class="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ol>
    </div>
  </section>
</template>
