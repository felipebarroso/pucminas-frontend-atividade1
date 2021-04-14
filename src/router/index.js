import Vue from 'vue'
import Router from 'vue-router'
import MinhaPagina from '@/components/MinhaPagina'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MinhaPagina',
      component: MinhaPagina
    }
  ]
})
