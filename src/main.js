import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { texts } from './lang/texts.js'
import './assets/style.css'
import App from './App.vue'

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages: texts
})

const app = createApp(App)

app.use(i18n)
app.mount('#app')