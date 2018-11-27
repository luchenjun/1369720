import MSite from "../pages/MSite/MSite"
import Order from "../pages/Order/Order"
import Profile from "../pages/Profile/Profile"
import Search from "../pages/Search/Search"
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',
  routes:[
    {path:'/MSite',component:MSite},
    {path:'/Order',component:Order},
    {path:'/Profile',component:Profile},
    {path:'/Search',component:Search},
    {path:'/',redirect:'/MSite'}
  ]
})
