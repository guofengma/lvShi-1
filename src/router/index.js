import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import infoList from '@/components/infoList'
import login from '@/components/login'
import my from '@/components/my'
import reward from '@/components/reward'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'reward',
      component: reward
    },
     {
      path: '/',
      name: 'my',
      component: my
    },
    {
      path: '/',
      name: 'infoList',
      component: infoList
    },
    {
      path: '/',
      name: 'infoList',
      component: infoList
    }
  ]
})
