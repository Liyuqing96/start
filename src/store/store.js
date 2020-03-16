import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name : 'liyuqing',
        age : '24',
        user: null,
    },
    getters: {

    },
    mutations: {
        CHANGE_NAME(state, data){
            state.name = data
        },
        CHANGE_AGE(state, data){
            state.age = data
        }
    },
    actions: {
        change_name({commit}, data){
            commit('CHANGE_NAME', data)
        }
    }
})