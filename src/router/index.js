import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmpresasView from '../modules/empresas/views/EmpresasView.vue'
import ComprobantesView from '../modules/comprobantes/views/ComprobantesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/empresas',
    name: 'empresas-vitalsoft',
    component: EmpresasView
  },

  {
    path: '/comprobantes',
    name: 'comprobantes-vitalsoft',
    component: ComprobantesView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
