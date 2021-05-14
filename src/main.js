import { createApp } from 'vue';
import router from '@/router';
import filters from '@/filters/filters';
import store from '@/store';
import App from './App.vue';

const forumApp = createApp(App);

forumApp.config.globalProperties.$filters = filters; // set global filters

forumApp.use(router);
forumApp.use(store);
forumApp.mount('#app');
