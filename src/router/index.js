import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/home/index'
import detail from '@/pages/detail/detail'
import order from '@/pages/order/order'
import cart from '@/pages/cart/cart'
import axios from 'axios'
import $ from 'jquery'

Vue.use(Router)
Vue.prototype.$axios=axios
Vue.prototype.$jq=$

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/detail/:goodId',
      name:'detail',
      component:detail
    },{
      path:'/order',
      name:'order',
      component:order
    },{
      path:'/cart',
      name:'order',
      component:cart
    }
  ]
})
