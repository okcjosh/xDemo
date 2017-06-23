import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/components/test'
import svg from '@/components/svg'
import coffee from '@/components/coffee'
import heart from '@/components/heart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/svg',
      name: 'svg',
      component: svg
    },
    {
      path: '/coffee',
      name: 'coffee',
      component: coffee
    },
    {
      path: '/heart',
      name: 'heart',
      component: heart
    }
  ]
})
