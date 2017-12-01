import Vue from 'vue'
import Router from 'vue-router'
import topNav from '@/components/topNav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'topNav',
      component: topNav
    }
  ]
})
