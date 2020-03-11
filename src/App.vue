<template>
  <div id="app">
    <home-title v-if="show" :title="title"></home-title>
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeTitle from './components/HomeTitle'
  export default {
    name: 'App',
    components:{
      HomeTitle
    },
    data(){
      return {
        title:'',
        show:true
      }
    },
    async created(){
      const {data:{title}} = await this.$axios.get('/api/v2/movie/top250?count=20&&start=0&&apikey=0df993c66c0c636e29ecbb5344252a4a')
      this.title = title;
    }
  }
</script>

<style>
  body {
    margin: 0;
  }
  ul,li,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
  }
  ul,li{
    list-style: none;
  }
  #app {
    width: 100%;
    padding: 50px 0;
    background-color: rgb(34,34,34);
    overflow: hidden;
  }
</style>
