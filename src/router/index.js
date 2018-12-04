import Vue from 'vue'
import Router from 'vue-router'
import classify from "../pages/classify/classify"
import home from "../pages/home/home"
import know from "../pages/know/know"
import login from "../pages/login/login"
import shopping from "../pages/shopping/shopping"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/classify',
      component: classify,
    },
    {
      path: '/ home',
      component:  home,
    },
    {
      path: '/ know ',
      component:  know ,
    },
    {
      path: '/login',
      component: login,
    },
    {
      path: '/shopping',
      component: shopping,
    },
    {
      path: '/',
      component: home,
    }
  ]
})
