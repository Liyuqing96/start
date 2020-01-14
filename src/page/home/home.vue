<template>
    <div class='home-wrapper'>
        <headers></headers>

        <!-- 当前城市 -->
        <div></div>
        <!-- 热门城市 -->
        <div></div>
        <!-- 所有城市 -->
        <div></div>
    </div>
</template>

<script lang="">
import headers from '../../components/head/headers'

export default {
    components: {
        headers,
    },
    data(){
        return {
            initData: 'home'
        }
    },
}
</script>

<style scoped>
.home-wrapper {

}
</style>