<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

emailjs.init("SAIQQNv6oRUCEAad2");

const name = ref("");
const email = ref("");

const props = defineProps({
  visualizar: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits(["actualizarVisualizar"]);

const actualizarVisualizar = (valor) => {
  emit("actualizarVisualizar", valor);
};

const enviarCorreo = () => {
  const templateParams = {
    from_name: name.value,
    from_email: email.value,
  };

  emailjs
    .send("service_yyidnyt", "template_16few9i", templateParams)
    .then((response) => {
      console.log(
        "Correo electrónico enviado:",
        response.status,
        response.text
      );
      actualizarVisualizar();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Correo enviado",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((error) => {
      console.error("Error al enviar el correo electrónico:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al enviar el correo electrónico",
        showConfirmButton: false,
        timer: 1500,
      });
    });
};
</script>

<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div
              class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
            >
              <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  class="mx-auto h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
                <h2
                  class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
                >
                  {{ $t("correo.title") }}
                </h2>
                <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
                  {{ $t("correo.texto") }}
                </p>
              </div>

              <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                  class="space-y-6"
                  method="POST"
                  @submit.prevent="enviarCorreo"
                >
                  <div>
                    <div class="flex items-center justify-between">
                      <label
                        for="name"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >{{ $t("correo.name") }}</label
                      >
                    </div>
                    <div class="mt-2">
                      <input
                        v-model="name"
                        name="name"
                        type="text"
                        minlength="4"
                        autocomplete="name"
                        required
                        class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >{{ $t("correo.email") }}</label
                    >
                    <div class="mt-2">
                      <input
                        v-model="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div class="flex justify-between">
                    <button
                      @click="actualizarVisualizar(false)"
                      class="flex justify-center items-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      {{ $t("correo.cancel") }}
                    </button>

                    <button
                      type="submit"
                      class="flex justify-center items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      {{ $t("correo.send") }}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
