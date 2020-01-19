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
            <p>热门城市</p>
            <div class="hot-wrap">
                <p v-for="item in hotCity" :key="item.id" class="hot-item">
                    <span>{{ item.name }}</span>
                </p>
            </div>
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
    padding-top: 3.34rem;
    .guess-city {
        .curr-city {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 1rem;
            font-size: 1.2rem;
        }
    }
    .hot-city {
        & > p {
            padding: 0.5rem 1rem;
            font-size: 1.2rem;
        }
       .hot-wrap {
           border-top: 0.08rem solid #ccc;
           display: flex; 
           flex-flow: row wrap;
           .hot-item {
            flex: 0 0 25%;
            text-align: center;
                &:nth-of-type(4n){
                    span {
                        border-right: none;
                    }
                }
                span {
                    display: block;
                    padding: 0.66rem 0;
                    border-right: 0.08rem solid #ccc;
                    border-bottom: 0.08rem solid #ccc;
                }
            }
       }
    }
}
</style>