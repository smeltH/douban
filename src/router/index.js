import Vue from 'vue'
import Router from 'vue-router'
import HomeContent from '@/components/HomeContent'
import FilmDetail from '@/components/FilmDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homelink',
      component: HomeContent
    },
    {
      path:'/detail/:id',
      name:'detaillink',
      component:FilmDetail
    }
  ]
})
