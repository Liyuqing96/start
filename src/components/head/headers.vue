<template>
    <div class= "head-wrapper">
        <div>{{ themeName }}</div>
        <div>
            <router-link to="/login" class="link">登录/注册</router-link>
        </div>
    </div>
</template>

<script>
import { theme } from '../../global/theme'

export default {
    data(){
        return {
            themeName : theme.themeName,
        }
    },
    computed: {
        theme,
    },
    methods: {
       
    },
    mounted(){
       console.log(theme.themeName)
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