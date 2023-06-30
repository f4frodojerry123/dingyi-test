import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './locales/i18n'
import './style.css'
import App from './App.vue'

import { defineComponent } from 'vue';
const pinia = createPinia()



createApp(App).use(pinia).use(i18n).mount('#app')
