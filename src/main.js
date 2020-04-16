import Vue from 'vue'
// import VueRouter from 'vue-router'
import myRouter from './myroute'
import store from './store/store'
import routes from './router/router'
import App from './App'
import Cube from 'cube-ui'
import about from './page/about/about'
Vue.use(Cube)

// var a = function(){
// 	console.log('1111aaa')
// };
// var test ={
// 	testa: 1
// }
// a.install = function(vue){
// 	vue.util.defineReactive(test,'testa') //将一个外部对象转为vue的响应式对象
// 	vue.util.extend();  //做了浅拷贝一个对象，类似于jquery对象合并，参数是两个对象
// 	const Constructor = vue.extend(about); //返回组件的构造函数 
// 	const vm = new Constructor().$mount(); //返回组件的实例化对象
// 	console.log(vm)
// 	vue.mixin({
// 		data(){
// 			return {
// 				name: 'liyuqing'
// 			}
// 		},
// 		beforeCreate(){
// 			this.test = test
// 		},
// 		created(){
// 		}
// 	})
// }
// Vue.use(a)


// Vue.use(VueRouter)
// const router = new VueRouter({
// 	routes,
// 	mode: 'hash',
// 	strict: process.env.NODE_ENV !== 'production',
// })

Vue.use(myRouter)
const router = new myRouter({
	routes,
	mode: 'hash',
	strict: process.env.NODE_ENV !== 'production',
})

new Vue({
	router,
	store,
    render: h => h(App)
}).$mount('#app')