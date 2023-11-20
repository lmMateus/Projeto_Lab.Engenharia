import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import QuemSomos from './pages/QuemSomos.vue';
import Acesse from './pages/Acesse.vue';
import Cadastro from './pages/Cadastro.vue';
import TermosDeUso from './pages/TermosDeUso.vue';
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade.vue"; 
import MarketPlace from "./pages/MarketPlace.vue";

const routes = [
  {path: '/', component: Home},
  {path: '/quemsomos', component: QuemSomos},
  {path: '/acesse', component: Acesse},
  {path: '/cadastro', component: Cadastro},
  {path: '/termosdeuso', component: TermosDeUso},
  {path: '/politicadeprivacidade', component: PoliticaPrivacidade},
  {path: '/mp', component: MarketPlace},

  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;