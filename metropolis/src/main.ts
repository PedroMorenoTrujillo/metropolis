import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/global.scss'
import VueClickAway from "vue3-click-away";

createApp(App).use(store).use(router).use(VueClickAway).mount('#app')