<script setup>
import { ref } from 'vue';

import Navbar from './components/Navbar.vue';
import Portfolio from './components/Portfolio.vue';
import Profile from './components/Profile.vue';
import Cv from './components/Cv.vue'
import FooterContactos from './components/FooterContactos.vue'
import Correo from './components/Correo.vue';

const visualizar = ref(false);
</script>

<template>
  <Navbar @actualizarVisualizar2="visualizar = $event" />

  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <Correo v-if="visualizar" @actualizarVisualizar="visualizar = $event" />
  </Transition>

  <main>
    <Profile />
    <Cv />
    <Portfolio />
  </main>

  <FooterContactos @abrirContacto="visualizar = true" />
</template>
