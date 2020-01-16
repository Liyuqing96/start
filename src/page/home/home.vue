<template>
    <div class='home-wrapper'>
        <headers></headers>
        <!-- 当前城市 -->
        <div>
            <div class="curr-city">
                <span>当前定位城市:</span>
                <span>定位不准时，请在城市列表中选择</span>
            </div>
            <div class="curr-city">
                <router-link to="/about">{{ guessCity }}</router-link>
                <!-- <svg class="arrow-right" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></svg> -->
            </div>
        </div>
        <!-- 热门城市 -->
        <div></div>
        <!-- 所有城市 -->
        <div></div>
    </div>
</template>

<script lang="">
import headers from '../../components/head/headers';
import { guessCity, hotCity, allCity } from '../../service/getData'

export default {
    components: {
        headers,
    },
    data(){
        return {
            guessCity: '',
            guessCityid: '',
            hotCity: [],
            allCity: {},
        }
    },
    mounted(){
        guessCity().then(res => {
            this.guessCity = res.name;
            this.guessCityid = res.id;
        })

        //获取热门城市
        // hotcity().then(res => {
        //     this.hotcity = res;
        // })

        //获取所有城市
        // groupcity().then(res => {
        //     this.groupcity = res;
        // })

    },
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';
.home-wrapper {
    padding-top: 40px;
    .curr-city {
        display: flex;
        justify-content: space-between;
    }
}
</style>