import { getUser } from '../service/getData'
let actions = {
    async getUserInfo ({commit},data){
        let res = await getUser()
        commit('GET_USER_INFO',res)
    }
}
export default actions;