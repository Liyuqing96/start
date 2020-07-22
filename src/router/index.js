import Vue from 'vue'
import routes from './router.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default function createRouter() {
  return new VueRouter({
    routes,
    mode: 'history'
    // strict: process.env.NODE_ENV !== 'production',
  })
}
