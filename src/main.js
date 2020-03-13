import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'
import routes from './router/router'
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode: 'hash',
	strict: process.env.NODE_ENV !== 'production',
})

new Vue({
	router,
	store,
    render: h => h(App)
}).$mount('#app')