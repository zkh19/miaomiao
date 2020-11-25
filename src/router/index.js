import { createRouter, createWebHistory } from 'vue-router'

import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  movieRouter,
  cinemaRouter,
  mineRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

// export default new Router({
//   mode: 'history',
//   base: process,env,BASE_UTL,
//   routers:[
//     movieRouter
//   ]
// })
