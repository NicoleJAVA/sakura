import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.config.globalProperties.$api =
  process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH;
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
