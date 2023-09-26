import { registerMicroApps } from 'qiankun';
const apps = [
    {
        name: 'sub-react',
        entry: '//localhost:3000',
        container: '#micro-app',
        activeRule: '/micro/sub-react'
    },
    {
        name: 'sub-vue2',
        entry: '//localhost:8081',
        container: '#micro-app',
        activeRule: '/micro/sub-vue3'
    }
]
registerMicroApps(apps) // 注册

