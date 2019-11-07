// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(VueLazyload, {
    preLoad: 1.5,
    loading: '/static/loading-svg/loading-balls.svg',
  throttleWait:400
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
