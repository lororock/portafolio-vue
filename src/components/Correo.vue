<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

emailjs.init("SAIQQNv6oRUCEAad2");

const name = ref("");
const email = ref("");
const enviando = ref(false);

const emit = defineEmits(["actualizarVisualizar"]);

const actualizarVisualizar = (valor) => {
  emit("actualizarVisualizar", valor);
};

const alPresionarTecla = (event) => {
  if (event.key === "Escape") actualizarVisualizar(false);
};

// Bloquea el scroll del body mientras el modal está abierto
onMounted(() => {
  document.body.style.overflow = "hidden";
  window.addEventListener("keydown", alPresionarTecla);
});

onUnmounted(() => {
  document.body.style.overflow = "";
  window.removeEventListener("keydown", alPresionarTecla);
});

const enviarCorreo = () => {
  if (enviando.value) return;
  enviando.value = true;

  const templateParams = {
    from_name: name.value,
    from_email: email.value,
  };

  emailjs
    .send("service_yyidnyt", "template_16few9i", templateParams)
    .then(() => {
      actualizarVisualizar(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Correo enviado",
        showConfirmButton: false,
        timer: 1500,
        background: "#161a23",
        color: "#e2e8f0",
      });
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al enviar el correo electrónico",
        showConfirmButton: false,
        timer: 1500,
        background: "#161a23",
        color: "#e2e8f0",
      });
    })
    .finally(() => {
      enviando.value = false;
    });
};
</script>

<template>
  <div
    class="relative z-[70]"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <!-- Backdrop -->
    <div
      class="fixed inset-0 bg-base-950/80 backdrop-blur-sm animate-fade-in"
      @click="actualizarVisualizar(false)"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-center justify-center p-4 text-center sm:p-0"
      >
        <div
          class="glass-card relative w-full transform overflow-hidden shadow-2xl shadow-accent-indigo/20 animate-fade-up sm:my-8 sm:max-w-lg"
          @click.stop
        >
          <!-- Borde superior degradado -->
          <div
            class="h-1 w-full bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-cyan"
            aria-hidden="true"
          ></div>

          <div class="px-6 pb-8 pt-8 sm:px-10">
            <!-- Botón cerrar -->
            <button
              @click="actualizarVisualizar(false)"
              class="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-1.5 text-slate-400 transition-colors hover:border-accent-violet/50 hover:text-white"
              :aria-label="$t('correo.cancel')"
            >
              <svg
                class="h-4 w-4"
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

            <div class="text-center">
              <!-- Icono de sobre -->
              <div
                class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
              >
                <svg
                  class="h-7 w-7 text-accent-violet"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>

              <h2
                id="modal-title"
                class="mt-6 font-display text-2xl font-bold tracking-tight text-white"
              >
                {{ $t("correo.title") }}
              </h2>
              <p class="mx-auto mt-3 max-w-md text-sm text-slate-400">
                {{ $t("correo.texto") }}
              </p>
            </div>

            <form class="mt-8 space-y-5" @submit.prevent="enviarCorreo">
              <div>
                <label
                  for="name"
                  class="block text-left text-sm font-medium text-slate-300"
                >
                  {{ $t("correo.name") }}
                </label>
                <input
                  v-model="name"
                  id="name"
                  name="name"
                  type="text"
                  minlength="4"
                  autocomplete="name"
                  required
                  class="mt-2 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-accent-violet/60 focus:outline-none focus:ring-2 focus:ring-accent-violet/30 sm:text-sm"
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block text-left text-sm font-medium text-slate-300"
                >
                  {{ $t("correo.email") }}
                </label>
                <input
                  v-model="email"
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="mt-2 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-accent-violet/60 focus:outline-none focus:ring-2 focus:ring-accent-violet/30 sm:text-sm"
                />
              </div>

              <div class="flex justify-between gap-3 pt-2">
                <button
                  type="button"
                  @click="actualizarVisualizar(false)"
                  class="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-red-400/50 hover:text-white"
                >
                  {{ $t("correo.cancel") }}
                </button>

                <button
                  type="submit"
                  :disabled="enviando"
                  class="rounded-full bg-gradient-to-r from-accent-indigo to-accent-violet px-8 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-indigo/30 transition-all duration-300 hover:shadow-accent-violet/50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {{ enviando ? "..." : $t("correo.send") }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
