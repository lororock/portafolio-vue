<template>
  <section aria-label="Hoja de vida" id="cv" class="relative py-24">
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1536px]">
      <!-- Tarjeta con borde degradado animado -->
      <div v-reveal class="relative mx-auto max-w-3xl">
        <div
          class="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-cyan opacity-60 blur-sm animate-gradient-x bg-[length:200%_auto]"
          aria-hidden="true"
        ></div>

        <div
          class="relative rounded-3xl bg-base-900 px-6 py-16 text-center sm:px-16"
        >
          <!-- Icono documento -->
          <div
            class="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
          >
            <svg
              class="h-8 w-8 text-accent-violet"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>

          <h2
            class="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {{ $t("cv.title") }}
          </h2>

          <p class="mx-auto mt-4 max-w-md leading-relaxed text-slate-400">
            {{ $t("cv.text") }}
          </p>

          <!-- Botón con efecto shimmer -->
          <a
            :href="$t('cv.link')"
            target="_blank"
            rel="noreferrer"
            class="group relative mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent-indigo to-accent-violet px-10 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-indigo/30 transition-all duration-300 hover:scale-105 hover:shadow-accent-violet/50"
          >
            <span
              class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              aria-hidden="true"
            ></span>
            <svg
              class="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            {{ $t("cv.download") }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
