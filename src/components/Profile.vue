<script setup>
import { ref } from "vue";
import { certificados } from "../assets/certificados";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCards, Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Swiper methods and modules
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = (i) => {
  console.log('slide change');
};
const modules = ref([EffectCards, Navigation, Pagination, Scrollbar]);
</script>

<template>
  <div class="bg-local" id="profile">
    <div class="bg-cover contents bg-center h-screen">
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:mt-5 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cristhian Fernando Rosas
          </h1>
          <p class="mt-4 text-gray-500">
            ¡Saludos! Soy un Desarrollador de FRONTEND apasionado por crear experiencias digitales excepcionales. Mi
            misión
            es impulsar la innovación y colaborar con empresas para alcanzar sus metas en el mundo digital. A través de
            mi
            experiencia en el Desarrollo Web, me enfoco en diseñar y desarrollar soluciones únicas y eficientes que
            brinden un valor significativo a los usuarios y ayuden a las empresas a destacarse en el mercado. Estoy
            comprometido con la excelencia y siempre busco oportunidades para aprender y crecer en este emocionante
            campo
            del desarrollo tecnológico.
          </p>

          <dl class="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">Area</dt>
              <dd class="mt-2 text-sm text-gray-500">
                Software FRONTEND developer, IT.
              </dd>
            </div>

            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">Experiencia</dt>
              <dd class="mt-2 text-sm text-gray-500">
                Desarrollo FRONTEND 3 años, desarrollo BACKEND 1
                año.
              </dd>
            </div>

            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">Proyectos</dt>
              <dd class="mt-2 text-sm text-gray-500">
                Gestión de ventas e inventarios, agendamiento de cursos y
                horarios universitarios, sistema de Administración de Recursos Humanos, Maquetación de Aplicaciones Web,
                E-commerce.
              </dd>
            </div>

            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">Tecnologías</dt>
              <dd class="mt-2 text-sm text-gray-500">
                Vue, React, Astro, Node, Express, TypeScript, Firebase, Git.
              </dd>
            </div>

            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">Metodologias agiles</dt>
              <dd class="mt-2 text-sm text-gray-500">
                Scrum con buena comunicación y participación con el equipo.
              </dd>
            </div>

            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">Educación</dt>
              <dd class="mt-2 text-sm text-gray-500">
                Ing. Electronica, Documentación, Cursos de Udemy, Oracle academy, Youtube
                Aplicaciones móviles.
              </dd>
            </div>
          </dl>
        </div>
        <div class="hidden md:grid sm:gap-6 lg:gap-8 relative z-2">
          <div class="mx-auto max-w-screen-sm px-4 py-4 sm:px-6 sm:py-12 lg:px-8">
            <swiper class="mySwiper" :modules="modules" :effect="'cards'" :grabCursor="true" @swiper="onSwiper"
              @slideChange="onSlideChange">
              <swiper-slide v-for="(cer, index) in certificados" :key="index">
                <div>
                  <img class="h-full" :src="cer.imagen" alt="pro.descripcion" />
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="flex absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96">
            <div
              class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
            </div>
            <div
              class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
            </div>
            <div
              class="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
            </div>
            <div
              class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
            </div>
          </div>
        </div>

      </div>
      <div class="block md:hidden mx-auto max-w-screen-sm px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <swiper class="bg-white rounded-lg border border-gray-200 shadow-lg p-4" :modules="modules" :slides-per-view="1"
          :space-between="50" navigation :pagination="{ dynamicBullets: true }" @swiper="onSwiper"
          @slideChange="onSlideChange">
          <swiper-slide class="flex items-center" v-for="(cer, index) in certificados" :key="index">
            <img class="" :src="cer.imagen" alt="pro.descripcion" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style>
.bg-local {
  background-image: url("../assets/img/background.webp");
}
</style>
