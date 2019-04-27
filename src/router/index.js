import Vue from 'vue'
import Router from 'vue-router'
// demo调用的路由
import componentsA from "@/components/demo/componentsA"
import componentsB from "@/components/demo/componentsB"
// 正式环境的路由
// import App from "../App.vue"
import goods    from "@/components/goods/goods"
import ratings  from "@/components/ratings/ratings"
import seller   from "@/components/seller/seller"

Vue.use(Router)

export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/',
      name: '/',
      redirect:"/goods"
    },
    {
      path: '/goods',
      name: 'goods',
      component:goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component:ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component:seller
    },
    // vuex的Demo使用到的两个路由
    {
      path:"/componentsA",
      name:"componentsA",
      component:componentsA
    },
    {
      path:"/componentsB",
      name:"componentsB",
      component:componentsB
    }
  ]
})


