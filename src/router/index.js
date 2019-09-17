import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import long from '@/components/long'
import long2 from '@/components/long2'
import long3 from '@/components/long3'
import movebg from '@/components/movebg'
import lastBanner from '@/components/lastBanner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/long',
      name: 'long',
      component: long
    },
    {
      path: '/movebg',
      name: 'movebg',
      component: movebg
    },
    {
      path: '/lastBanner',
      name: 'lastBanner',
      component: lastBanner
    },
    {
      path: '/long2',
      name: 'long2',
      component: long2
    }
    ,
    {
      path: '/long3',
      name: 'long3',
      component: long3
    }
  ]
})
