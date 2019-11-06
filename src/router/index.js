import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/home/index'
import detail from '@/pages/detail/detail'
import cart from "@/pages/order/Cart"
import address from '@/pages/order/Address'
import orderSuccess from '@/pages/order/OrderSuccess'
import orderConfirm from '@/pages/order/OrderConfirm'
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
    },
    {
      path:'/cart/:userId',
      name:'cart',
      component:cart
    },
    {
      path:'/address',
      name:'address',
      component:address
    },
    {
      path:'/orderConfirm',
      name:'orderConfirm',
      component:orderConfirm
    },
    {
      path:'/orderSuccess',
      name:'orderSuccess',
      component:orderSuccess
    }
  ]
})
