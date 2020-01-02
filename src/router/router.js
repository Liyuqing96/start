import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const about = r => require.ensure([], () => r(require('../page/about/about')), 'about')


export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
        //当前选择about页
        {
            path: '/about',
            component: about
        },
    ]
}]
