<template>
    <header class= "head-wrapper">
        <slot name="theme"></slot>
        <div v-if= "goback" @click = "$router.go(-1)"> < </div>
        <div v-if="user">
            <router-link to="/profile" class="link">已登录</router-link>
        </div>
        <div v-else>
            <router-link to="/login" class="link">登录/注册</router-link>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props:{
        goback: false,
    },
    data(){
        return {         
        }
    },
    created(){

    },
    computed: {
        ...mapState([ 'user' ])
    },
    methods: {
       
    },
    mounted(){
       
    }
}
</script>

<style lang="less" scoped>

@import '../../style/mixin';

.head-wrapper {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 20px;
    line-height: 20px;
    padding: 10px;
    background: @primaryColor;
    color: #FFFFFF;
    .link {
        color: #FFFFFF;
        text-decoration: unset;
    }
}
</style>