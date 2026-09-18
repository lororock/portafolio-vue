import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { texts } from './lang/texts.js'
import './assets/style.css'
import App from './App.vue'

const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'es',
    messages: texts
})

const app = createApp(App)

// Directiva global v-reveal: anima elementos al entrar en el viewport.
// Uso: v-reveal o v-reveal="1|2|3|4" (retardo escalonado)
app.directive('reveal', {
    mounted(el, binding) {
        el.classList.add('reveal')
        if (binding.value) el.classList.add(`reveal-delay-${binding.value}`)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 }
        )

        observer.observe(el)
    },
})

app.use(i18n)
app.mount('#app')
