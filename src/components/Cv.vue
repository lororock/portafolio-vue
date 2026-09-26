<template>
  <section aria-label="Hoja de vida" id="cv" class="relative py-24">
    <div
      class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1536px]"
    >
      <div v-reveal class="relative mx-auto max-w-4xl">
        <div
          class="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-cyan opacity-60 blur-sm animate-gradient-x bg-[length:200%_auto]"
          aria-hidden="true"
        ></div>

        <div
          class="relative rounded-3xl bg-base-900 px-6 py-12 sm:px-12 sm:py-14"
        >
          <div class="text-center">
            <h2
              class="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {{ $t("cv.title") }}
            </h2>
            <p class="mx-auto mt-4 max-w-lg leading-relaxed text-slate-400">
              {{ $t("cv.text") }}
            </p>
          </div>

          <div v-reveal="1" class="mt-10">
            <h3
              class="text-center font-display text-sm font-semibold uppercase tracking-widest text-slate-500"
            >
              {{ $t("cv.skillsTitle") }}
            </h3>
            <dl
              class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              <div class="glass-card p-4 text-center">
                <dt class="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                  {{ $t("cv.frontendLabel") }}
                </dt>
                <dd class="mt-2 text-sm text-slate-300">
                  {{ $t("cv.frontendSkills") }}
                </dd>
              </div>
              <div class="glass-card p-4 text-center">
                <dt class="text-xs font-semibold uppercase tracking-wider text-accent-violet">
                  {{ $t("cv.backendLabel") }}
                </dt>
                <dd class="mt-2 text-sm text-slate-300">
                  {{ $t("cv.backendSkills") }}
                </dd>
              </div>
              <div class="glass-card p-4 text-center">
                <dt class="text-xs font-semibold uppercase tracking-wider text-accent-indigo">
                  {{ $t("cv.toolsLabel") }}
                </dt>
                <dd class="mt-2 text-sm text-slate-300">
                  {{ $t("cv.toolsSkills") }}
                </dd>
              </div>
            </dl>
          </div>

          <div class="mt-10 flex justify-center">
            <a
              :href="$t('cv.link')"
              target="_blank"
              rel="noreferrer"
              class="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent-indigo to-accent-violet px-10 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-indigo/30 transition-all duration-300 hover:scale-105 hover:shadow-accent-violet/50"
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
                aria-hidden="true"
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
    </div>
  </section>
</template>
