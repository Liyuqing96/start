<template>
  <div class="home-wrapper">
    <headers>
      <span slot="theme">{{ themeName }}</span>
    </headers>
    <h2 @click="hei">输出名字： {{name}}</h2>
    <router-link to="/about">跳转到about</router-link>
    <!-- 当前城市 -->
    <div class="guess-city">
      <div class="curr-city">
        <span>当前定位城市:</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <div class="curr-city">
        <router-link to="/login">{{ guessCity }}</router-link>
      </div>
    </div>
    <!-- 热门城市 -->
    <div class="hot-city">
      <p class="title">热门城市</p>
      <div class="hot-wrap">
        <p v-for="item in hotCity" :key="item.id" class="hot-item">
          <span>{{ item.name }}</span>
        </p>
      </div>
    </div>
    <!-- 所有城市 -->
    <div class="all-city">
      <div v-for="(value, key, index) in sortgroupcity" :key="key">
        <p class="title">
          {{ key }}
          <span v-if="index === 0">(按字母顺序)</span>
        </p>
        <div class="all-wrap">
          <p v-for="item in value" :key="item.id" class="all-item">
            <span>{{ item.name }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headers from '../../components/head/headers';
import { guessCity, hotCity, allCity } from '../../service/getData';
import { mapState } from 'vuex';
import { theme } from '../../global/theme'

export default {
  asyncData ({ store, route }) {
    return store.commit('GET_NAME', 'liyuqing1111111')
  },
  components: {
    headers,
  },
  data () {
    return {
      themeName: theme.themeName,
      guessCity: '',
      guessCityid: '',
      hotCity: [],
      allCity: {},
    }
  },
  mounted () {
    //获取当前城市(axios获取)
    guessCity().then(res => {
      this.guessCity = res.data.name;
      this.guessCityid = res.data.id;
    })

    //获取热门城市
    hotCity().then(res => {
      this.hotCity = res;
    })

    //获取所有城市
    allCity().then(res => {
      this.allCity = res;
    })
  },
  computed: {
    ...mapState(['name']),
    //将获取的数据按照A-Z字母开头排序
    sortgroupcity () {
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {
        if (this.allCity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.allCity[String.fromCharCode(i)];
        }
      }
      return sortobj
    },
  },
  methods: {
    hei () {
      console.log(1)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../style/mixin";
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
  .hot-city,
  .all-city {
    .title {
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      border-bottom: 0.08rem solid #ccc;
    }
    .hot-wrap,
    .all-wrap {
      display: flex;
      flex-flow: row wrap;
      .hot-item,
      .all-item {
        flex: 0 0 25%;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:nth-of-type(4n) {
          span {
            border-right: none;
          }
        }
        span {
          display: block;
          padding: 0.66rem 0.5rem;
          border-right: 0.08rem solid #ccc;
          border-bottom: 0.08rem solid #ccc;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>