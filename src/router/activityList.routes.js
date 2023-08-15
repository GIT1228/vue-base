import pageOne from '../pages/activityList/pageOne.vue'
import pageTow from '../pages/activityList/pageTow.vue'
import pageThree from '../pages/activityList/pageThree.vue'
import activityList from '../pages/activityList/activityList.vue'
export default {
    path: '/activityList',
    title: '活动列表',
    name: 'activityList',
    component: activityList,
    redirect: '/activityList/pageOne',
    children: [
        {
            path: 'pageOne',
            name: 'pageOne',
            title: '活动列表页面1',
            component: pageOne
        },
        {
            path: 'pageTow',
            name: 'pageTow',
            component: pageTow,
            title: '活动列表页面2',
        },
        {
            path: 'pageThree',
            name: 'pageThree',
            title: '活动列表页面3',
            component: pageThree
        },
    ],
}