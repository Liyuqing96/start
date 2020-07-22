<template>
  <div>
    <h1>{{initData}}</h1>
    <h2>about页面：{{name}}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  asyncData ({ store }) {
    return store.commit('GET_NAME', 'caoyang1111111')
  },
  computed: {
    ...mapState(['name'])
  },
  data () {
    return {
      initData: 'about'
    }
  }
}
</script>

<style scoped>
</style>