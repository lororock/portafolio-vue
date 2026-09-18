<script setup>
import { ref } from "vue";
import { certificados } from "../assets/certificados";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCards, Navigation, Pagination } from "swiper/modules";

const modules = ref([EffectCards, Navigation, Pagination]);

const emit = defineEmits(["abrirContacto"]);

const datos = [
  { titulo: "profile.area", texto: "profile.areaText" },
  { titulo: "profile.experience", texto: "profile.experienceText" },
  { titulo: "profile.Technologies", texto: "profile.TechnologiesText" },
  { titulo: "profile.methodologies", texto: "profile.methodologiesText" },
  { titulo: "profile.projects", texto: "profile.projectsText" },
  { titulo: "profile.education", texto: "profile.educationText" },
];

const irAProyectos = () => {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <section id="profile" class="relative overflow-hidden">
    <!-- Fondo: gradiente mesh animado -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent-indigo/25 blur-[120px] animate-blob"
      ></div>
      <div
        class="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent-violet/20 blur-[130px] animate-blob-slow"
      ></div>
      <div
        class="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-accent-cyan/15 blur-[120px] animate-blob"
      ></div>
      <!-- Rejilla sutil -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]"
      ></div>
    </div>

    <div
      class="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-x-12 gap-y-16 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-40 xl:max-w-[1400px] 2xl:max-w-[1536px]"
    >
      <!-- Columna de texto -->
      <div>
        <p
          v-reveal
          class="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent-cyan"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75"
            ></span>
            <span
              class="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan"
            ></span>
          </span>
          {{ $t("profile.role") }}
        </p>

        <h1
          v-reveal="1"
          class="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Cristhian
          <span
            class="text-gradient animate-gradient-x bg-[length:200%_auto]"
          >
            Rosas
          </span>
        </h1>

        <p
          v-reveal="2"
          class="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
        >
          {{ $t("profile.description") }}
        </p>

        <!-- CTAs -->
        <div v-reveal="3" class="mt-8 flex flex-wrap items-center gap-4">
          <button
            @click="irAProyectos"
            class="rounded-full bg-gradient-to-r from-accent-indigo to-accent-violet px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-indigo/30 transition-all duration-300 hover:scale-105 hover:shadow-accent-violet/50"
          >
            {{ $t("profile.ctaProjects") }}
          </button>
          <a
            href="#footer_contactos"
            class="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition-all duration-300 hover:border-accent-violet/50 hover:text-white"
          >
            {{ $t("profile.ctaContact") }}
          </a>
        </div>

        <!-- Tarjetas de datos -->
        <dl class="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5 xl:gap-6">
          <div
            v-for="(dato, index) in datos"
            :key="dato.titulo"
            v-reveal="(index % 4) + 1"
            class="glass-card hover-glow p-5"
          >
            <dt
              class="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-white"
            >
              <span
                class="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent-indigo to-accent-violet"
              ></span>
              {{ $t(dato.titulo) }}
            </dt>
            <dd class="mt-2 text-sm leading-relaxed text-slate-400">
              {{ $t(dato.texto) }}
            </dd>
          </div>
        </dl>
      </div>

      <!-- Columna certificados (escritorio) -->
      <div v-reveal="2" class="relative hidden lg:block">
        <p
          class="mb-6 text-center font-display text-sm font-semibold uppercase tracking-widest text-slate-500"
        >
          {{ $t("profile.certificates") }}
        </p>
        <div class="mx-auto max-w-[34rem] animate-float">
          <swiper
            class="certificates-swiper"
            :modules="modules"
            :effect="'cards'"
            :grabCursor="true"
          >
            <swiper-slide
              v-for="(cer, index) in certificados"
              :key="cer.nombre"
              class="certificate-slide"
            >
              <div class="certificate-frame">
                <img
                  class="certificate-frame__img"
                  :src="cer.imagen"
                  :alt="cer.nombre"
                  loading="lazy"
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- Línea de luz decorativa -->
        <div class="mx-auto mt-10 flex h-[2px] w-80">
          <div
            class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(99,102,241,0)_0%,#6366f1_32.29%,rgba(34,211,238,0.4)_67.19%,rgba(34,211,238,0)_100%)]"
          ></div>
          <div
            class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(99,102,241,0)_0%,#6366f1_32.29%,rgba(34,211,238,0.4)_67.19%,rgba(34,211,238,0)_100%)]"
          ></div>
        </div>
      </div>
    </div>

    <!-- Certificados (móvil/tablet) -->
    <div v-reveal class="relative mx-auto max-w-screen-sm px-4 pb-16 lg:hidden">
      <p
        class="mb-6 text-center font-display text-sm font-semibold uppercase tracking-widest text-slate-500"
      >
        {{ $t("profile.certificates") }}
      </p>
      <swiper
        class="glass-card p-4"
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ dynamicBullets: true }"
      >
        <swiper-slide
          v-for="cer in certificados"
          :key="cer.nombre"
          class="certificate-slide"
        >
          <div class="certificate-frame">
            <img
              class="certificate-frame__img"
              :src="cer.imagen"
              :alt="cer.nombre"
              loading="lazy"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style>
.certificates-swiper {
  width: 100%;
  max-width: 34rem;
}

.certificates-swiper .swiper-slide {
  width: 34rem !important;
  height: 25.5rem !important;
}

.certificate-frame {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.75rem;
  background: #ffffff;
  padding: 0.375rem;
}

.certificate-frame__img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.certificate-slide {
  display: flex;
  justify-content: center;
}

.certificate-slide .certificate-frame {
  width: min(34rem, 100%);
  height: 25.5rem;
}

.certificates-swiper .swiper-slide,
.certificate-slide {
  border-radius: 0.75rem;
  box-shadow: 0 20px 50px -12px rgba(99, 102, 241, 0.35);
}

/* Paginación y navegación de Swiper acordes al tema */
.swiper-pagination-bullet {
  background: #8b5cf6;
  opacity: 0.4;
}
.swiper-pagination-bullet-active {
  opacity: 1;
}
.swiper-button-next,
.swiper-button-prev {
  color: #8b5cf6;
}
</style>
