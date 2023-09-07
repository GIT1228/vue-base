import systemMgn from '../pages/systemMgn/index.vue'
import systemMgnPage from '../pages/systemMgn/systemMgn.vue'
import subSystemsMgn from '../pages/systemMgn/subSystemsMgn.vue'

export default {
    path: '/systemMgn',
    label: '系统管理',
    name: 'systemMgn',
    component: systemMgn,
    redirect: '/systemMgn/index',
    children: [
        {
            path: 'index',
            name: 'systemMgnPage',
            component: systemMgnPage,
            label: '菜单管理'
        },
        {
            path: 'subSystemsMgn',
            name: 'subSystemsMgn',
            component: subSystemsMgn,
            label: '子系统管理'
        },
    ],
}