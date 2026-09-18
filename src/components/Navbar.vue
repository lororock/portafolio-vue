<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menuMovil = ref(false);
const mostrarReferencias = ref(false);
const seccionActiva = ref("profile");
const scrollProgreso = ref(0);

const emit = defineEmits(["actualizarVisualizar2"]);

const actualizarVisualizar2 = (valor) => {
  emit("actualizarVisualizar2", valor);
  menuMovil.value = false;
};

const enlaces = [
  { id: "profile", key: "navbar.aboutMe" },
  { id: "cv", key: "navbar.cv" },
  { id: "projects", key: "navbar.projects" },
  { id: "footer_contactos", key: "navbar.contacts" },
];

const referencias = [
  {
    nombre: "ING. Carlos Ernesto Diaz",
    url: "https://www.linkedin.com/in/carlos-ernesto-diaz-basante-backend/",
  },
  {
    nombre: "Carlos Valle - CEO aythen",
    url: "https://www.linkedin.com/in/carlos-valle-l%C3%B3pez-84043b1aa/",
  },
];

let observer = null;

const actualizarProgreso = () => {
  const altura = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgreso.value = altura > 0 ? (window.scrollY / altura) * 100 : 0;
};

onMounted(() => {
  // Scroll-spy: detecta la sección visible
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          seccionActiva.value = entry.target.id;
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  enlaces.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  window.addEventListener("scroll", actualizarProgreso, { passive: true });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
  window.removeEventListener("scroll", actualizarProgreso);
});

const irA = (id) => {
  menuMovil.value = false;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <header class="fixed top-0 z-50 w-full">
    <!-- Barra de progreso de scroll -->
    <div
      class="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-cyan"
      :style="{ transform: `scaleX(${scrollProgreso / 100})` }"
    ></div>

    <nav
      class="border-b border-white/10 bg-base-950/70 backdrop-blur-xl"
      aria-label="Navegación principal"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo -->
          <a
            href="#profile"
            @click.prevent="irA('profile')"
            class="group flex items-center gap-3"
          >
            <img
              class="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
              src="/icono.png"
              alt="Logo Cristhian Rosas"
            />
            <span
              class="hidden font-display text-lg font-semibold text-white sm:block"
            >
              Cristhian<span class="text-gradient">.dev</span>
            </span>
          </a>

          <!-- Enlaces escritorio -->
          <div class="hidden items-center gap-1 md:flex">
            <a
              v-for="enlace in enlaces"
              :key="enlace.id"
              :href="`#${enlace.id}`"
              @click.prevent="irA(enlace.id)"
              class="relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300"
              :class="
                seccionActiva === enlace.id
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              "
            >
              {{ $t(enlace.key) }}
              <span
                class="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-accent-indigo to-accent-violet transition-opacity duration-300"
                :class="
                  seccionActiva === enlace.id ? 'opacity-100' : 'opacity-0'
                "
              ></span>
            </a>
          </div>

          <div class="hidden items-center gap-3 md:flex">
            <!-- Selector de idioma -->
            <div
              class="flex items-center rounded-full border border-white/10 bg-white/5 p-1 text-xs font-semibold"
            >
              <button
                @click="$i18n.locale = 'es'"
                class="rounded-full px-2.5 py-1 transition-all duration-300"
                :class="
                  $i18n.locale === 'es'
                    ? 'bg-accent-indigo text-white'
                    : 'text-slate-400 hover:text-white'
                "
              >
                ES
              </button>
              <button
                @click="$i18n.locale = 'en'"
                class="rounded-full px-2.5 py-1 transition-all duration-300"
                :class="
                  $i18n.locale === 'en'
                    ? 'bg-accent-indigo text-white'
                    : 'text-slate-400 hover:text-white'
                "
              >
                EN
              </button>
            </div>

            <!-- Dropdown referencias -->
            <div class="relative">
              <button
                type="button"
                class="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 pr-1 transition-colors duration-300 hover:border-accent-violet/40"
                aria-haspopup="true"
                :aria-expanded="mostrarReferencias"
                @click="mostrarReferencias = !mostrarReferencias"
              >
                <span class="sr-only">Abrir menú de referencias</span>
                <img
                  class="h-8 w-8 rounded-full ring-2 ring-accent-violet/40"
                  src="../assets/img/profile.webp"
                  alt="Foto de Cristhian Rosas"
                />
              </button>

              <Transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <div
                  v-if="mostrarReferencias"
                  class="glass-card absolute right-0 z-10 mt-3 w-64 origin-top-right p-2 shadow-2xl"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <p
                    class="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-slate-500"
                  >
                    {{ $t("navbar.references") }}
                  </p>
                  <a
                    v-for="referencia in referencias"
                    :key="referencia.url"
                    :href="referencia.url"
                    target="_blank"
                    rel="noreferrer"
                    class="block rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                    role="menuitem"
                    @click="mostrarReferencias = false"
                  >
                    {{ referencia.nombre }}
                  </a>
                </div>
              </Transition>
            </div>

            <!-- Botón contacto -->
            <button
              @click="actualizarVisualizar2(true)"
              class="rounded-full bg-gradient-to-r from-accent-indigo to-accent-violet px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-accent-indigo/25 transition-all duration-300 hover:shadow-accent-violet/40 hover:brightness-110"
            >
              {{ $t("navbar.contacts") }}
            </button>
          </div>

          <!-- Controles móvil -->
          <div class="flex items-center gap-2 md:hidden">
            <div
              class="flex items-center rounded-full border border-white/10 bg-white/5 p-1 text-xs font-semibold"
            >
              <button
                @click="$i18n.locale = 'es'"
                class="rounded-full px-2 py-1 transition-all duration-300"
                :class="
                  $i18n.locale === 'es'
                    ? 'bg-accent-indigo text-white'
                    : 'text-slate-400'
                "
              >
                ES
              </button>
              <button
                @click="$i18n.locale = 'en'"
                class="rounded-full px-2 py-1 transition-all duration-300"
                :class="
                  $i18n.locale === 'en'
                    ? 'bg-accent-indigo text-white'
                    : 'text-slate-400'
                "
              >
                EN
              </button>
            </div>

            <button
              type="button"
              class="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:text-white"
              aria-controls="mobile-menu"
              :aria-expanded="menuMovil"
              @click="menuMovil = !menuMovil"
            >
              <span class="sr-only">Abrir menú principal</span>
              <svg
                v-if="!menuMovil"
                class="h-6 w-6"
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
              <svg
                v-else
                class="h-6 w-6"
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

      <!-- Menú móvil -->
      <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform -translate-y-2 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0"
      >
        <div
          v-if="menuMovil"
          class="border-t border-white/10 bg-base-950/95 backdrop-blur-xl md:hidden"
          id="mobile-menu"
        >
          <div class="space-y-1 px-4 pb-4 pt-2">
            <a
              v-for="enlace in enlaces"
              :key="enlace.id"
              :href="`#${enlace.id}`"
              @click.prevent="irA(enlace.id)"
              class="block rounded-lg px-3 py-2 text-base font-medium transition-colors"
              :class="
                seccionActiva === enlace.id
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              "
            >
              {{ $t(enlace.key) }}
            </a>

            <button
              @click="actualizarVisualizar2(true)"
              class="mt-2 w-full rounded-full bg-gradient-to-r from-accent-indigo to-accent-violet px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-indigo/25"
            >
              {{ $t("navbar.contacts") }}
            </button>

            <!-- Referencias en móvil -->
            <div class="border-t border-white/10 pt-3">
              <p
                class="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-slate-500"
              >
                {{ $t("navbar.references") }}
              </p>
              <a
                v-for="referencia in referencias"
                :key="referencia.url"
                :href="referencia.url"
                target="_blank"
                rel="noreferrer"
                class="block rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {{ referencia.nombre }}
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>
