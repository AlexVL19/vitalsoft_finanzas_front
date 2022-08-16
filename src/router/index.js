import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmpresasView from '../modules/empresas/views/EmpresasView.vue'
import ComprobantesView from '../modules/comprobantes/views/ComprobantesView.vue'
import ComprobantesAnio from '../modules/comprobantes/views/ComprobantesAnio.vue'
import movimientosMes from '../modules/movimientos/views/movimientosMes.vue'

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
    path: '/comprobantesMes',
    name: 'comprobantes-vitalsoft',
    component: ComprobantesView
  },

  {
    path: '/comprobantesAnio',
    name: 'comprobantesAnio-vitalsoft',
    component: ComprobantesAnio
  },

  {
    path: '/movimientosMes',
    name: 'movimientosMes-vitalsoft',
    component: movimientosMes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
