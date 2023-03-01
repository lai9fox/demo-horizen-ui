const viewsComponents = import.meta.glob('@/views/*/*.vue');

const routesMap = [
  {
    path: '/',
    name: 'login',
    redirect: 'dashboard'
    // component: '/src/views/login.vue'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: '/src/views/dashboard/index.vue',
    meta: {
      title: 'Main Dashboard'
    }
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: '/src/views/marketplace/index.vue'
  },
  {
    path: '/tables',
    name: 'tables',
    component: '/src/views/tables/index.vue'
  },
  {
    path: '/kanban',
    name: 'kanban',
    component: '/src/views/kanban/index.vue'
  },
  {
    path: '/profile',
    name: 'profile',
    component: '/src/views/profile/index.vue'
  }
];

export default routesMap.map(route => {
  const { component } = route;
  route.component = viewsComponents[component];
  return route;
});
