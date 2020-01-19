<template>
    <div class='home-wrapper'>
        <headers></headers>
        <!-- 当前城市 -->
        <div class="guess-city">
            <div class="curr-city">
                <span>当前定位城市:</span>
                <span>定位不准时，请在城市列表中选择</span>
            </div>
            <div class="curr-city">
                <router-link to="/about">{{ guessCity }}</router-link>
            </div>
        </div>
        <!-- 热门城市 -->
        <div class="hot-city">
            <p v-for="item in hotCity" :key="item.id">{{ item.name }}</p>
        </div>
        <!-- 所有城市 -->
        <div class="all-city">
            <p v-for="item in allCity" :key="item.id">{{ item.name }}</p>
        </div>
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

        //获取当前城市
        guessCity().then(res => {
            this.guessCity = res.name;
            this.guessCityid = res.id;
        })

        //获取热门城市
        hotCity().then(res => {
            console.log("hotCity:::",res)
            this.hotCity = res;
        })

        //获取所有城市
        allCity().then(res => {
            console.log("allCity::",res)
            this.allCity = res;
        })

    },
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';
.home-wrapper {
    padding-top: 40px;
    padding-left: 10px;
    padding-right: 10px;
    .guess-city {
        .curr-city {
            display: flex;
            justify-content: space-between;
        }
    }
    .hot-city {
       display: flex; 
       flex-flow: row wrap;
       p {
           flex:0 0 25%;
           text-align: center;
           &:nth-of-type(4n + 1) {
               text-align: left;
           };
           &:nth-of-type(4n) {
               text-align: right;
           };
       }
    }
}
</style>