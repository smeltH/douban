<template>
    <div class="filedetail">
      <home-title :title="title"></home-title>
      <div class="detail">
        <div class="left_img">
          <img :src="data.images.medium" alt="">
        </div>
        <div class="right_content">
          <h3 class="film_name">
            {{data.title}}
          </h3>
          <h5 class="alias">
            {{data.original_title}}
          </h5>
          <div class="classify">
            分类：<span v-for="(genre,index) in data.genres" :key="index">{{genre}}/</span>
          </div>
          <div class="actors">
            主演：<span class="actor" v-for="(cast,index) in data.casts" :key="index"><a :href="cast.alt">{{cast.name}}</a>/</span>
          </div>
          <div class="like_popular">
            <span class="like">喜欢：{{data.wish_count}}</span>
            <span class="popular">人气：{{data.ratings_count}}</span>
          </div>
          <div class="summary">
            <p>{{data.summary}}</p>
          </div>
          <div class="play">
            <button class="btn_play">
              <a :href="data.alt">立即播放</a>
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import HomeTitle from './HomeTitle'
    export default {
      name: "FilmDetail",
      components:{
        HomeTitle
      },
      data(){
        return {
          title:'电影详情',
          data:{images:''}
        }
      },
      async created(){
        this.$root.$children[0].show = false;
        const {data} = await this.$axios.get('/api/v2/movie/subject/'+this.$route.params.id+'?apikey=0df993c66c0c636e29ecbb5344252a4a')
        this.data = data;
        console.log(data);
      }
    }
</script>

<style scoped>
  .detail{
    width: 1200px;
    display: flex;
    margin: 30px auto 0;
  }
  .detail .left_img{
    flex: 1;
  }
  .detail .right_content{
    flex: 4;
    padding-left: 80px;
    color: #ccc;
  }
  .detail .left_img img{
    display: block;
  }
  .detail .right_content .film_name{
    color: #fff;
  }
  .detail .right_content .classify{
    margin: 20px 0;
  }
  .detail .right_content .actors{
    margin-bottom: 20px;
  }
  .detail .right_content .actors a{
    color:#ccc;
    font-size: 18px;
    text-decoration: none;
  }
  .detail .right_content .like_popular{
    color: rgb(206,137,59);
    font-size: 16px;
  }
  .detail .right_content .summary{
    height: 140px;
    font-size: 16px;
    overflow-y: scroll;
  }
  .detail .right_content .play{
    width: 180px;
    height: 50px;
    margin-top: 8px;
  }
  .detail .right_content .btn_play{
    width: 100%;
    height: 100%;
    line-height: 100%;
    background-color: rgb(0,130,80);
    border-radius: 8px;
    border: none;
  }
  .detail .right_content .btn_play a{
    color: #fff;
  }
</style>
