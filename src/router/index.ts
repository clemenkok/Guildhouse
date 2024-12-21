import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';
import WaitlistPage from '../pages/WaitlistPage.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage,
  },
  {
    path: '/waitlist',
    name: 'Waitlist',
    component: WaitlistPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
