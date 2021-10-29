import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import pushMessage from './methods/pushMessage';
import { currency, date } from './methods/filters';
import isApiSuccess from './methods/isApiSuccess';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import categoryName from './assets/strings/category-zh_tw.json';
import { getFakeImage } from './methods/getFakeData.js';

const app = createApp(App);
app.config.globalProperties.$filters = {
  currency,
  date,
};

Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

app.config.globalProperties.$api =
  process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH;
app.use(router);
app.use(VueAxios, axios);
app.component('Loading', Loading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.provide('pushMessage', pushMessage);
app.provide('isApiSuccess', isApiSuccess);
app.provide('categoryName', categoryName);
app.provide('getFakeImage', getFakeImage);
app.mount('#app');
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
