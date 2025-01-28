<script setup>
import { ref } from "vue";

const mostrar = ref(false);
const mostrar2 = ref(false);

const props = defineProps({
  visualizar: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["actualizarVisualizar2"]);

const actualizarVisualizar2 = (valor) => {
  emit("actualizarVisualizar2", valor);
};
</script>

<template>
  <div class="relative">
    <div class="min-h-full absolute top-0 w-full z-10">
      <nav class="bg-gray-800 fixed top-0 w-full z-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-8 w-8" src="/icono.png" alt="Your Company" />
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

                  <a
                    href="#profile"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >{{ $t("navbar.aboutMe") }}</a
                  >

                  <a
                    href="#cv"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >{{ $t("navbar.cv") }}</a
                  >

                  <a
                    href="#projects"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >{{ $t("navbar.projects") }}</a
                  >

                  <a
                    href="#footer_contactos"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >{{ $t("navbar.contacts") }}</a
                  >
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <select
                  class="rounded-full bg-gray-800 text-gray-400 hover:text-white mr-5"
                  v-model="$i18n.locale"
                >
                  <option value="es">Es</option>
                  <option value="en">En</option>
                </select>
                <button
                  @click="actualizarVisualizar2(true)"
                  class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span class="sr-only">View notifications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                  >
                    <path
                      d="M14 4C8.4886661 4 4 8.4886661 4 14L4 36C4 41.511334 8.4886661 46 14 46L36 46C41.511334 46 46 41.511334 46 36L46 14C46 8.4886661 41.511334 4 36 4L14 4zM14 6L36 6C40.430666 6 44 9.5693339 44 14L44 36C44 40.430666 40.430666 44 36 44L14 44C9.5693339 44 6 40.430666 6 36L6 14C6 9.5693339 9.5693339 6 14 6zM13 15C11.35503 15 10 16.35503 10 18L10 32C10 33.64497 11.35503 35 13 35L37 35C38.64497 35 40 33.64497 40 32L40 18C40 16.35503 38.64497 15 37 15L13 15zM13.414062 17L36.583984 17L27.677734 25.892578C26.18494 27.382984 23.796834 27.382819 22.304688 25.890625L13.414062 17zM38 18.412109L38 31.587891L31.402344 25L38 18.412109zM12 18.414062L18.585938 25L12 31.585938L12 18.414062zM29.988281 26.412109L36.585938 33L13.414062 33L20 26.414062L20.890625 27.304688C23.146478 29.56054 26.832638 29.562194 29.089844 27.308594L29.988281 26.412109z"
                      fill="#c5c4c4"
                    ></path>
                  </svg>
                </button>

                <!-- Profile dropdown -->
                <div class="relative ml-3">
                  <div>
                    <button
                      type="button"
                      class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      @click="mostrar = !mostrar"
                    >
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="h-8 w-8 rounded-full"
                        src="../assets/img/profile.webp"
                        alt=""
                      />
                    </button>
                  </div>

                  <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                      From: "transform opacity-100 scale-100"
                      To: "transform opacity-0 scale-95"
                  -->
                  <div
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                    v-if="mostrar"
                    ref="elemento"
                  >
                    <!-- Active: "bg-gray-100", Not Active: "" -->
                    <a
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                      >{{ $t("navbar.references") }}
                    </a>

                    <a
                      href="https://www.linkedin.com/in/carlos-ernesto-diaz-basante-backend/"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-1"
                      target="_blank"
                      >ING. Carlos Ernesto Dias</a
                    >

                    <a
                      href="https://www.linkedin.com/in/carlos-valle-l%C3%B3pez-84043b1aa/"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                      target="_blank"
                      >Carlos Valle - CEO aythen</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <!-- Mobile menu button -->
              <select
                class="rounded-full bg-gray-800 text-gray-400 hover:text-white mr-5"
                v-model="$i18n.locale"
              >
                <option value="es">Es</option>
                <option value="en">En</option>
              </select>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
                @click="mostrar = !mostrar"
              >
                <span class="sr-only">Open main menu</span>
                <!-- Menu open: "hidden", Menu closed: "block" -->
                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <!-- Menu open: "block", Menu closed: "hidden" -->
                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="md:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3" v-if="mostrar">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a
              href="#profile"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >{{ $t("navbar.aboutMe") }}</a
            >

            <a
              href="#cv"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >{{ $t("navbar.cv") }}</a
            >

            <a
              href="#projects"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >{{ $t("navbar.projects") }}</a
            >

            <a
              href="#footer_contactos"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >{{ $t("navbar.contacts") }}</a
            >
          </div>
          <div class="border-t border-gray-700 pb-3 pt-4">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0" @click="mostrar2 = !mostrar2">
                <img
                  class="h-10 w-10 rounded-full"
                  src="../assets/img/profile.webp"
                  alt=""
                />
              </div>
              <div class="ml-3" @click="mostrar2 = !mostrar2">
                <div class="text-base font-medium leading-none text-white pb-1">
                  Cristhian Rosas
                </div>
                <div class="text-sm font-medium leading-none text-gray-400">
                  cristhianrosas159@hotmail.com
                </div>
              </div>
              <button
                @click="actualizarVisualizar2(true)"
                class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="sr-only">View notifications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                >
                  <path
                    d="M14 4C8.4886661 4 4 8.4886661 4 14L4 36C4 41.511334 8.4886661 46 14 46L36 46C41.511334 46 46 41.511334 46 36L46 14C46 8.4886661 41.511334 4 36 4L14 4zM14 6L36 6C40.430666 6 44 9.5693339 44 14L44 36C44 40.430666 40.430666 44 36 44L14 44C9.5693339 44 6 40.430666 6 36L6 14C6 9.5693339 9.5693339 6 14 6zM13 15C11.35503 15 10 16.35503 10 18L10 32C10 33.64497 11.35503 35 13 35L37 35C38.64497 35 40 33.64497 40 32L40 18C40 16.35503 38.64497 15 37 15L13 15zM13.414062 17L36.583984 17L27.677734 25.892578C26.18494 27.382984 23.796834 27.382819 22.304688 25.890625L13.414062 17zM38 18.412109L38 31.587891L31.402344 25L38 18.412109zM12 18.414062L18.585938 25L12 31.585938L12 18.414062zM29.988281 26.412109L36.585938 33L13.414062 33L20 26.414062L20.890625 27.304688C23.146478 29.56054 26.832638 29.562194 29.089844 27.308594L29.988281 26.412109z"
                    fill="#c5c4c4"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="mt-3 space-y-1 px-2" v-if="mostrar2">
              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >{{ $t("navbar.references") }}
              </a>

              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                target="_blank"
                >ING. Carlos Ernesto Dias</a
              >

              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                target="_blank"
                >Carlos Valle - CEO aythen</a
              >
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
