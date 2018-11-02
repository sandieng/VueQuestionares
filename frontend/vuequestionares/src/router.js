import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './components/Login';
import Welcome from './components/shared/Welcome'
import JobRegistration from './components/Job/JobRegistration';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Welcome',
      component: Welcome
    },
    {
      path: '/job/registration',
      name: 'JobRegistration',
      component: JobRegistration
    },
  ]
})
