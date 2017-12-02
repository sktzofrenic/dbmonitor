import Vue from 'vue'
import Router from 'vue-router'
import TopNav from '@/components/TopNav'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'TopNav',
            component: TopNav
        }
    ]
})
