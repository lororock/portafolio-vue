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
  <Navbar @actualizarVisualizar2="visualizar = $event"/>
  <Correo v-if="visualizar" @actualizarVisualizar="visualizar = $event" />
  <Profile/>
  <Cv/>
  <Portfolio/>
  <FooterContactos/>
</template>