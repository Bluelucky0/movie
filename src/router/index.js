import Vue from 'vue'
import VueRouter from 'vue-router'
import CinemaRoute from './Cinema/index'
import MineRoute from './Mine/index'
import MovieRoute from './Movie/index'

Vue.use(VueRouter)



export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    CinemaRoute,
    MineRoute,
    MovieRoute,
    {
      path:'/*',
      redirect:'/movie'
    }
  ]
})

