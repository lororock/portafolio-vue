<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const emit = defineEmits(["abrirContacto"]);

const horaActual = ref("");

const actualizarHora = () => {
  horaActual.value = new Date().toLocaleTimeString([], { hour12: true });
};

let intervalo = null;

onMounted(() => {
  actualizarHora();
  intervalo = setInterval(actualizarHora, 60000);
});

onUnmounted(() => {
  clearInterval(intervalo);
});

const redes = [
  {
    nombre: "Facebook",
    url: "https://www.facebook.com/cristhian.rosas.3",
    icono: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    nombre: "Instagram",
    url: "https://www.instagram.com/l0r0r0ck/",
    icono: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
  },
  {
    nombre: "GitHub",
    url: "https://github.com/lororock",
    icono: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
  },
];

const servicios = [
  "footer.layout",
  "footer.code",
  "footer.creating",
  "footer.maintenance",
  "footer.seo",
];

const companias = ["Inventas", "Digiworld", "Aythen"];
</script>

<template>
  <footer
    aria-label="Site Footer"
    id="footer_contactos"
    class="relative border-t border-white/10 bg-base-900"
  >
    <!-- Línea de luz superior -->
    <div
      class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-violet/60 to-transparent"
      aria-hidden="true"
    ></div>

    <div class="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 xl:max-w-[1400px] 2xl:max-w-[1536px]">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <!-- Contacto -->
        <div v-reveal>
          <p
            class="text-xs font-semibold uppercase tracking-widest text-slate-500"
          >
            {{ $t("footer.contact") }}
          </p>
          <a
            href="tel:+573114012648"
            class="mt-2 block font-display text-2xl font-semibold text-white transition-colors hover:text-accent-cyan sm:text-3xl"
          >
            +57 311 4012648
          </a>

          <ul class="mt-6 space-y-1 text-sm text-slate-400">
            <li>{{ $t("footer.available") }}</li>
            <li>{{ $t("footer.week") }}</li>
            <li>{{ $t("footer.weekend") }}</li>
          </ul>

          <!-- Redes sociales con glow -->
          <ul class="mt-8 flex gap-4">
            <li v-for="red in redes" :key="red.nombre">
              <a
                :href="red.url"
                rel="noreferrer"
                target="_blank"
                class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-accent-violet/50 hover:text-white hover:shadow-[0_0_20px_-4px_rgba(139,92,246,0.6)]"
              >
                <span class="sr-only">{{ red.nombre }}</span>
                <svg
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    :d="red.icono"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>

          <!-- CTA contacto -->
          <button
            @click="emit('abrirContacto')"
            class="mt-8 rounded-full bg-gradient-to-r from-accent-indigo to-accent-violet px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-indigo/25 transition-all duration-300 hover:scale-105 hover:shadow-accent-violet/50"
          >
            {{ $t("profile.ctaContact") }}
          </button>
        </div>

        <!-- Servicios y compañías -->
        <div v-reveal="1" class="grid grid-cols-2 gap-8 lg:col-span-2">
          <div>
            <p class="font-display font-semibold text-white">
              {{ $t("footer.services") }}
            </p>
            <ul class="mt-6 space-y-3 text-sm">
              <li v-for="servicio in servicios" :key="servicio">
                <span
                  class="flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                >
                  <span
                    class="h-1 w-1 rounded-full bg-accent-violet"
                  ></span>
                  {{ $t(servicio) }}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p class="font-display font-semibold text-white">
              {{ $t("footer.company") }}
            </p>
            <ul class="mt-6 space-y-3 text-sm">
              <li v-for="compania in companias" :key="compania">
                <span
                  class="flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                >
                  <span class="h-1 w-1 rounded-full bg-accent-cyan"></span>
                  {{ compania }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Barra inferior -->
      <div class="mt-12 border-t border-white/10 pt-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <ul class="flex flex-wrap gap-4 text-xs text-slate-500">
            <li>Horario local</li>
            <li>{{ Intl.DateTimeFormat().resolvedOptions().timeZone }}</li>
            <li class="tabular-nums">{{ horaActual }}</li>
          </ul>

          <p class="mt-6 text-xs text-slate-500 sm:mt-0">
            &copy; {{ new Date().getFullYear() }} Cristhian Rosas. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
