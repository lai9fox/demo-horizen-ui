const viewsComponents = import.meta.glob('@/views/*.vue');

const routesMap = [
  {
    path: '/',
    name: 'login',
    component: '/src/views/login.vue'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: '/src/views/dashboard.vue'
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: '/src/views/marketplace.vue'
  },
  {
    path: '/tables',
    name: 'tables',
    component: '/src/views/tables.vue'
  },
  {
    path: '/kanban',
    name: 'kanban',
    component: '/src/views/kanban.vue'
  },
  {
    path: '/profile',
    name: 'profile',
    component: '/src/views/profile.vue'
  }
];

export default routesMap.map(route => {
  const { component } = route;
  route.component = viewsComponents[component];
  return route;
});
