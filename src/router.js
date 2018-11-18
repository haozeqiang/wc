import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
//引入网页头部文件
import Header from './components/header.vue'
//引入网页底部文件
//import Footer from './components/footer.vue'
//引入登录文件
import Login from './views/login.vue'
//引入注册文件
import Register from './views/register.vue'
//引入主页
import Index from './views/index.vue'



//测试专用引入
import details from './views/details.vue'
import cart from './views/cart.vue'
import bb from './views/select.vue'


//引入轮播图
import banner from './components/banner.vue'




Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/banner',
      name: 'banner',
      component: banner
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/bb',
      name: 'bb',
      component: bb
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },/*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about"  './views/About.vue')
    }*/
  ]
})
