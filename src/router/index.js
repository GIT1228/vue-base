import Vue from 'vue'
import VueRouter from 'vue-router'
import rules from "./requireRules"
// import NotFound from '../components/NotFound.vue'
import loginApp from '../components/loginApp.vue'
import microContent from '../components/microContent.vue'
import { Message } from 'element-ui'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: { name: 'pageOne' },
    },
    {
        path: '/login',
        component: loginApp
    },
    {
        path: '/micro/*',
        component: microContent
    },
    ...rules,
    // {
    //     path: '*',
    //     component: NotFound
    // }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next()
    } else {
        if (localStorage.getItem('token')) {
            if (to.matched[0].path === '*') {
                Message.error('未找到正确路径')
                next(from.path)
            } else {
                next()
            }
        } else {
            next('/login')
        }
    }

})
export default router