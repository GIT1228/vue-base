import userMgn from '../pages/userMgn/index.vue'
import userMgnPage from '../pages/userMgn/userMgn.vue'
import roleMgn from '../pages/userMgn/roleMng.vue'

export default {
    path: '/userMgn',
    label: '用户管理',
    name: 'userMgn',
    component: userMgn,
    redirect: '/userMgn/index',
    children: [
        {
            path: 'index',
            name: 'userMgn',
            component: userMgnPage,
            label: '用户管理'
        },
        {
            path: 'roleMgn',
            name: 'roleMgn',
            component: roleMgn,
            label: '权限管理'
        },
    ],
}