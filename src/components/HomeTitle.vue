<template>
  <div class="title">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
    export default {
        props:['title'],
        name: "HomeTitle",
    }
</script>

<style scoped>
  .title{
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 30px;
    color: rgb(33,190,136);
    text-indent: 20px;
    border-bottom: 3px solid rgb(33,193,136);
  }
</style>
