import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './locales/i18n'
import App from './App.vue'
import router from './router';
import useRequireSafe from './plugins/requireSafe';

import './style.css'
// import { defineComponent } from 'vue';
const pinia = createPinia()


createApp(App).use(useRequireSafe).use(router).use(pinia).use(i18n).mount('#app')
