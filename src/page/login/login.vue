<template>
    <div>
        <h3>{{initData}}</h3>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {
            initData: 'login'
        }
    },
    computed: {
        // ...mapState(['name', 'age'])
    }
}
</script>

<style scoped>

</style>