import Vue from 'vue'
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate";

import { Message } from 'element-ui'
const state = {
    showRouterview: false,
    isLogin:true,
    userInfo:{},
    siderList:[
        {
            path: 'pageOne',
            label: 'pageOne',
            title: '活动列表页面1',
        },
        {
            path: 'pageTow',
            label: 'pageTow',
            title: '活动列表页面2',
        },
        {
            path: 'pageThree',
            label: 'pageThree',
            title: '活动列表页面3',
        },
    ]
}

const actions = {

}

const mutations = {
    changeLogin(state, value) {
        state.isLogin = value
        let text = value?'登录':'退出'
        Message.success(`${text}成功并修改了login的值`)
    },
    changeUserInfo(state, value) {
        state.userInfo = value
    },
    changeSiderMenuList(state,value) {
        state.siderList = value
    }
}
Vue.use(Vuex)
export default new Vuex.Store({
    state,
    mutations,
    actions,
    plugins: [createPersistedState({
        paths: ['siderList']
    })]
})
