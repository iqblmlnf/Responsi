import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';  // Hanya import HomeView.vue

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
    // Hapus route yang mengarah ke AboutView.vue
  ]
});

export default router;
