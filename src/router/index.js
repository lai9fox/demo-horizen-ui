import { createRouter, createWebHistory } from 'vue-router';
import routesMap from './map.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routesMap
});

export default router;
