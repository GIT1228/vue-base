import mgnPageOne from '../pages/activityMgn/mgnPageOne.vue'
import mgnPageTwo from '../pages/activityMgn/mgnPageTwo.vue'
import mgnPageThree from '../pages/activityMgn/mgnPageThree.vue'
import activityMgn from '../pages/activityMgn/activityMgn.vue'
export default {
    path: '/activityMgn',
    label: '活动管理',
    name: 'activityMgn',
    component: activityMgn,
    redirect: '/activityMgn/mgnPageOne',
    children: [
        {
            path: 'mgnPageOne',
            name: 'mngPagOne',
            component: mgnPageOne,
            label: '活动管理页面1'
        },
        {
            path: 'mgnPageTwo',
            name: 'mgnPageTwo',
            component: mgnPageTwo,
            label: '活动管理页面2',
        },
        {
            path: 'mgnPageThree',
            name: 'mgnPageThree',
            component: mgnPageThree,
            label: '活动管理页面3'
        },
    ],
}