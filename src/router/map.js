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
    component: '/src/views/dashboard'
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: '/src/views/dashboard'
  },
  {
    path: '/tables',
    name: 'tables',
    component: '/src/views/dashboard'
  },
  {
    path: '/kanban',
    name: 'kanban',
    component: '/src/views/dashboard'
  },
  {
    path: '/profile',
    name: 'profile',
    component: '/src/views/dashboard'
  }
];

export default routesMap.map(route => {
  const { component } = route;
  route.component = viewsComponents[component];
  return route;
});
