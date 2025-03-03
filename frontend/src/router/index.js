import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import QuienesSomosView from '@/views/QuienesSomosView.vue'
import CotizacionView from '@/views/CotizacionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView
    },
    {
      path: '/quienesSomos',
      name: 'quienesomos',
      component: QuienesSomosView
    },
    {
      path: '/cotizacion',
      name: 'cotizacion',
      component: CotizacionView
    }
  ],
})

export default router
