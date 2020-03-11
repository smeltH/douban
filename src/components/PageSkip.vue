<template>
    <div class="page_skip">
      <ul class="skip">
        <router-link v-for="(page,index) in pages" :to="{name:'homelink',query:{page:index}}" :key="index" tag="li">
          <span>{{page}}</span>
        </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "PageSkip",
      props:['pages'],
      data(){
        return {}
      },
      watch:{
      }
    }
</script>

<style scoped>
  .page_skip{
    width: 500px;
    margin: 50px auto 0;
  }
  .skip{
    display: flex;
    justify-content: space-around;
  }
  .skip li{
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-color: #ccc;
    border-right: 1px solid #000;
  }
  span{
    display: inline-block;
    width: 100%;
    height: 100%;
    line-height: 40px;
    color: #000;
    text-align: center;
  }
</style>
