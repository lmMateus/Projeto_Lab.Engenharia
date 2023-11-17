import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import QuemSomos from './pages/QuemSomos.vue';
import Acesse from './pages/Acesse.vue';
import Cadastro from './pages/Cadastro.vue';

const routes = [
  {path: '/', component: Home},
  {path: '/quemsomos', component: QuemSomos},
  {path: '/acesse', component: Acesse},
  {path: '/cadastro', component: Cadastro},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;