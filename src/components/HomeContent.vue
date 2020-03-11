<template>
  <div class="content">
    <films-list></films-list>
    <page-skip :pages="pages"></page-skip>
  </div>
</template>

<script>
  import FilmsList from '../components/FilmsList'
  import PageSkip from '../components/PageSkip'
    export default {
      name: "HomeContent",
      data(){
        return {
          pages: 0
        }
      },
      components:{
        FilmsList,
        PageSkip
      },
      async created(){
        this.$root.$children[0].show = true;
        const {data:{total},data:{count}} = await this.$axios.get('/api/v2/movie/top250?count=20&&start=0&&apikey=0df993c66c0c636e29ecbb5344252a4a')
        this.pages = Math.ceil(total/count);
      }
    }
</script>

<style scoped>
</style>
