import { createApp } from 'vue';
import router from '@/router';
import App from './App.vue';

const forumApp = createApp(App);
forumApp.use(router);
forumApp.mount('#app');
