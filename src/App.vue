<template>
  <div>
    <ul>
      <router-link to="/film" tag="li" activeClass="szmactive">电影</router-link>
      <router-link to="/cinema" tag="li" activeClass="szmactive">影院</router-link>
      <router-link to="/center" tag="li" activeClass="szmactive">我的</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// 导入child1
// import vue from 'vue'
// import child1 from './components/child1'
// import Axios from 'axios'
// vue.component('child1', child1)

// import 导入
// 导出
export default {
  data () {
    return {

    }
  },
  components: {

  },
  methods: {

  },
  mounted () {
    // Axios.get(
    //   "https://m.maizuo.com/gateway?type=2&cityId=110100&k=2054168"
    // ).then(res => {
    //   console.log(res.data);
    // });

    // Axios({
    //   url: "https://m.maizuo.com/gateway?type=2&cityId=110100&k=2054168",
    //   headers: {
    //     "X-Client-Info":
    //       '{"a": "3000","ch":"1002","v":"5.0.4","e":"15728721974093103833504"}',
    //     "X-Host": "mall.film-ticket.film.list"
    //   }
    // }).then(res => {
    //   console.log(res.data);
    // });

    // Axios.get("http://localhost:3000/list").then(res=>{
    //   console.log(res.data)
    // })
  }
}
</script>

<style lang= "scss" scoped>
  ul{
    list-style: none
  }
  .szmactive{
    color: red

  }
</style>
