import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/home/index'
import detail from '@/components/detail/detail'
import order from '@/components/order/order'
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
    }, {
      path:'/detail/:goodId',
      name:'detail',
      component:detail
    },{
      path:'/order/:userId',
      name:'order',
      component:order
    }
  ]
})
