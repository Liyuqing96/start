import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const about = r => require.ensure([], () => r(require('../page/about/about')), 'about')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')

// export default [{
//     path: '/',
//     component: App, //顶层路由，对应index.html
//     children: [ //二级路由。对应App.vue
//         //地址为空时跳转home页面
//         {
//             path: '',
//             redirect: '/home',
//         },
//         //首页城市列表页
//         {
//             path: '/home',
//             component: home,
//         },
//         //当前选择login页
//         {
//             path: '/about',
//             component: about
//         },
//         //当前选择login页
//         {
//             path: '/login',
//             component: login
//         },
//     ]
// }]

export default [
    {
        path: '/',
        component: home,
    },
    //首页城市列表页
    {
        path: '/home',
        component: home,
    },
    //当前选择login页
    {
        path: '/about',
        component: about
    },
    //当前选择login页
    {
        path: '/login',
        component: login
    }]
