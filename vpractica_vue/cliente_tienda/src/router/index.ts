import { getAuth } from 'firebase/auth'
import SiginVue from '@/modulos/autentica/vistas/SiginVue.vue'
import SignupVue from '@/modulos/autentica/vistas/SignupVue.vue'
import PersonalAgregarVue from '@/modulos/personal/vistas/PersonalAgregarVue.vue'
import PersonalBorrarVue from '@/modulos/personal/vistas/PersonalBorrarVue.vue'
import PersonalEditarVue from '@/modulos/personal/vistas/PersonalEditarVue.vue'
import PersonalVue from '@/modulos/personal/vistas/PersonalVue.vue'
import BienvenidaVue from '@/modulos/principal/vistas/BienvenidaVue.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/personal',
      name: 'personal',
      component: PersonalVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth()
        const usuario = auth.currentUser
        if (usuario) {
          next()
        } else {
          next({ name: 'validacion' })
        }
      },
    },
    {
      path: '/personal/agregar',
      name: 'personalagregar',
      component: PersonalAgregarVue,
    },
    {
      path: '/personal/:id/editar',
      name: 'personaleditar',
      component: PersonalEditarVue,
    },
    {
      path: '/personal/:id/borrar',
      name: 'personalborrar',
      component: PersonalBorrarVue,
    },
    {
      path: '/bienvenida',
      name: 'bienvenida',
      component: BienvenidaVue,
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: SignupVue,
    },
    {
      path: '/validacion',
      name: 'validacion',
      component: SiginVue,
    },
  ],
})

export default router
