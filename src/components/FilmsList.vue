<template>
  <div class="content">
    <ul>
      <router-link v-for="(subject,index) in subjects" :key="index" :to="{name:'detaillink',params:{id:subject.id}}" tag="li">
        <img :src="subject.images.large" alt="">
        <p class="name">{{subject.original_title}}</p>
        <p>
          <span v-for="genre in subject.genres">{{genre}}/</span>
        </p>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "FilmsList",
    data(){
      return {
        subjects:[]
      }
    },
    async created(){
      let {data:{subjects}} = await this.$axios.get('/api/v2/movie/top250?count=20&&start=0&&apikey=0df993c66c0c636e29ecbb5344252a4a')
      this.subjects = subjects;
    },
    watch:{
      async $route(){
        let {data:{subjects}} = await this.$axios.get('/api/v2/movie/top250?count=20&&start='+ this.$route.query.page*20 +'&&apikey=0df993c66c0c636e29ecbb5344252a4a');
        this.subjects = subjects;
      }
    }
  }
</script>

<style scoped>
  .content{
    width: 1200px;
    margin: 50px auto 0;
    background-color: rgb(169,213,232);
  }
  ul{
    display: flex;
    width: 1200px;
    padding: 20px 0;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  ul li{
    width: 22%;
    background-color: rgb(34,34,34);
    color: #ccc;
    margin-bottom: 30px;
  }
  ul li p{
    font-size: 16px;
  }
  img{
    display: block;
    width: 100%;
    height: 400px;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
  }
</style>
