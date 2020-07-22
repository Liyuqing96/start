import Vue from 'vue'
import createStore from './store/index'
import createRouter from './router/index'
import App from './App.vue'
import Cube from 'cube-ui'
import { sync } from 'vuex-router-sync'

Vue.use(Cube)

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

const router = createRouter()
const store = createStore()
// 同步路由状态(route state)到 store
sync(store, router)

export function createApp() {
  const app = new Vue({
    render: h => h(App),
    store,
    router
  })
  return { app, router, store }
}
