import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';
// 全局组件
import GlobalComponents from '@/components';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(GlobalComponents);

app.mount('#app');
