import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import infoList from '@/components/infoList'
import login from '@/components/login'
import my from '@/components/my'
import reward from '@/components/reward'
import infoDetail from '@/components/infoDetail'
import tweet from '@/components/tweet'
import myInfoList from '@/components/myInfoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'infoList',
      component: infoList
    },
     {
      path: '/infoDetail/:seqId',
      name: 'infoDetail',
      component: infoDetail
    },
    {
      path: '/reward/:seqId/:target',
      name: 'reward',
      component: reward
    },
     {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/myInfoList',
      name: 'myInfoList',
      component: myInfoList
    },
    {
      path: '/tweet/:seqId',
      name: 'tweet',
      component: tweet
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    
  ]
})
