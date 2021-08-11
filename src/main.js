import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

const app = createApp(App);
app.config.globalProperties.$api =
  process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH;
app.use(router);
app.use(VueAxios, axios);
app.component('Loading', Loading);
app.mount('#app');
