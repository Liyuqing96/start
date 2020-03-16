<template>
    <headers :goback = 'true'>
    </headers>
</template>

<script>
import headers from '../../components/head/headers'
import { mapState } from 'vuex'
export default {
    data(){
        return {
            initData: 'login'
        }
    },
    computed: {
        // ...mapState(['name', 'age'])
    },
    components: {
        headers,
    }
}
</script>

<style scoped>

</style>