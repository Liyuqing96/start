let mutations = {
  GET_USER_INFO(state, data) {
    state.userInfo = data
  },
  GET_NAME(state, data) {
    state.name = data
  }
}
export default mutations
