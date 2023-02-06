import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';
// 基础组件
import BaseComponents from '@/components/base';

import BEM from '@lai9fox/vue-bem';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(BEM);
app.use(BaseComponents);

app.mount('#app');
