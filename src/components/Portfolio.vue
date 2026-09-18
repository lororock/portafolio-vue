<script setup>
import { ref, computed, watch, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { proyectosEs } from "../assets/proyectosEs";
import { proyectosEn } from "../assets/proyectosEn";

const { t, locale } = useI18n();

const filtroActivo = ref("all");
const proyectoSeleccionado = ref(null);

const proyectos = computed(() =>
  locale.value === "es" ? proyectosEs : proyectosEn
);

// Lista de tecnologías únicas para los filtros
const filtros = computed(() => {
  const todas = proyectos.value.flatMap((p) => p.tecnologias.nombreTecno);
  return [...new Set(todas)].sort();
});

const proyectosFiltrados = computed(() => {
  if (filtroActivo.value === "all") return proyectos.value;
  return proyectos.value.filter((p) =>
    p.tecnologias.nombreTecno.some(
      (tec) => tec.toLowerCase() === filtroActivo.value.toLowerCase()
    )
  );
});

const abrirProyecto = (proyecto) => {
  proyectoSeleccionado.value = proyecto;
};

const cerrarProyecto = () => {
  proyectoSeleccionado.value = null;
};

const alPresionarTecla = (event) => {
  if (event.key === "Escape") cerrarProyecto();
};

// Bloquea el scroll del body mientras el modal está abierto
watch(proyectoSeleccionado, (valor) => {
  if (valor) {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", alPresionarTecla);
  } else {
    document.body.style.overflow = "";
    window.removeEventListener("keydown", alPresionarTecla);
  }
});

onUnmounted(() => {
  document.body.style.overflow = "";
  window.removeEventListener("keydown", alPresionarTecla);
});
</script>

<template>
  <section id="projects" class="relative py-24">
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1536px]">
      <!-- Encabezado -->
      <header v-reveal class="max-w-2xl">
        <h2
          class="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          {{ $t("portafolio.title") }}
        </h2>
        <div
          class="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-accent-indigo to-accent-cyan"
        ></div>
        <p class="mt-4 leading-relaxed text-slate-400">
          {{ $t("portafolio.text") }}
        </p>
      </header>

      <!-- Filtros por tecnología -->
      <div v-reveal="1" class="mt-8 flex flex-wrap gap-2">
        <button
          @click="filtroActivo = 'all'"
          class="rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300"
          :class="
            filtroActivo === 'all'
              ? 'border-accent-violet bg-accent-violet/20 text-white'
              : 'border-white/10 bg-white/5 text-slate-400 hover:border-accent-violet/40 hover:text-white'
          "
        >
          {{ $t("portafolio.all") }}
        </button>
        <button
          v-for="filtro in filtros"
          :key="filtro"
          @click="filtroActivo = filtro"
          class="rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300"
          :class="
            filtroActivo === filtro
              ? 'border-accent-violet bg-accent-violet/20 text-white'
              : 'border-white/10 bg-white/5 text-slate-400 hover:border-accent-violet/40 hover:text-white'
          "
        >
          {{ filtro }}
        </button>
      </div>

      <!-- Grid de proyectos -->
      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10">
        <article
          v-for="(proyecto, index) in proyectosFiltrados"
          :key="proyecto.nombre"
          v-reveal="(index % 3) + 1"
          class="glass-card hover-glow group cursor-pointer overflow-hidden"
          @click="abrirProyecto(proyecto)"
        >
          <!-- Imagen con overlay -->
          <div class="relative aspect-video overflow-hidden">
            <img
              :src="proyecto.imagen"
              :alt="proyecto.nombre"
              loading="lazy"
              class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60"
            ></div>
            <div
              class="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <span
                class="inline-flex items-center gap-1.5 rounded-full bg-accent-indigo/90 px-3 py-1 text-xs font-semibold text-white"
              >
                {{ $t("portafolio.visit") }}
                <svg
                  class="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </span>
            </div>
          </div>

          <!-- Info -->
          <div class="p-5">
            <h3
              class="font-display text-lg font-semibold text-white transition-colors duration-300 group-hover:text-accent-cyan"
            >
              {{ proyecto.nombre }}
            </h3>
            <p class="mt-2 line-clamp-2 text-sm text-slate-400">
              {{ proyecto.descripcion }}
            </p>
            <div class="mt-4 flex flex-wrap items-center gap-2">
              <span
                v-for="(tec, i) in proyecto.tecnologias.nombreTecno"
                :key="i"
                class="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-medium text-slate-300"
              >
                {{ tec }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Modal de proyecto -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="proyectoSeleccionado"
          class="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          :aria-label="proyectoSeleccionado.nombre"
          @click.self="cerrarProyecto"
        >
          <div
            class="absolute inset-0 bg-base-950/80 backdrop-blur-sm"
            @click="cerrarProyecto"
          ></div>

          <Transition
            enter-active-class="transition ease-out duration-300"
            enter-from-class="transform opacity-0 scale-95 translate-y-4"
            enter-to-class="transform opacity-100 scale-100 translate-y-0"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
            appear
          >
            <div
              class="glass-card relative max-h-[90vh] w-full max-w-4xl overflow-y-auto shadow-2xl shadow-accent-indigo/20"
            >
              <!-- Botón cerrar -->
              <button
                @click="cerrarProyecto"
                class="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-base-950/70 p-2 text-slate-300 backdrop-blur transition-colors hover:border-accent-violet/50 hover:text-white"
                :aria-label="$t('portafolio.close')"
              >
                <svg
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <img
                :src="proyectoSeleccionado.proyecto"
                :alt="proyectoSeleccionado.nombre"
                class="w-full rounded-t-2xl"
              />

              <div class="p-6 sm:p-8">
                <h3
                  class="font-display text-2xl font-bold text-white sm:text-3xl"
                >
                  {{ proyectoSeleccionado.nombre }}
                </h3>
                <p class="mt-4 leading-relaxed text-slate-400">
                  {{ proyectoSeleccionado.descripcion }}
                </p>

                <!-- Tecnologías con iconos -->
                <div class="mt-6 flex flex-wrap gap-4">
                  <div
                    v-for="(tec, i) in proyectoSeleccionado.tecnologias
                      .tecnologia"
                    :key="i"
                    class="flex flex-col items-center gap-1.5"
                  >
                    <img
                      :src="tec"
                      :alt="proyectoSeleccionado.tecnologias.nombreTecno[i]"
                      class="h-8 w-8"
                      loading="lazy"
                    />
                    <span class="text-xs text-slate-400">
                      {{ proyectoSeleccionado.tecnologias.nombreTecno[i] }}
                    </span>
                  </div>
                </div>

                <div class="mt-8 flex flex-wrap gap-3">
                  <a
                    :href="proyectoSeleccionado.enlace"
                    target="_blank"
                    rel="noreferrer"
                    class="rounded-full bg-gradient-to-r from-accent-indigo to-accent-violet px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-indigo/30 transition-all duration-300 hover:scale-105 hover:shadow-accent-violet/50"
                  >
                    {{ $t("portafolio.visit") }}
                  </a>
                  <button
                    @click="cerrarProyecto"
                    class="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-accent-violet/50 hover:text-white"
                  >
                    {{ $t("portafolio.close") }}
                  </button>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
