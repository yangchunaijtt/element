<template>
  <div class="title">
    <div class="line"></div>
    <div class="text">{{title}}</div>
    <div class="line"></div>
  </div>
</template>

<script>
  export default {
    props:{
      title:{
        type:String
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .title
    display:flex
    margin:28px auto 24px auto 
    width:80%
    .line
      flex:1 
      position:relative
      top:-6px 
      border-bottom:1px solid rgba(255,255,255,0.2)
    .text 
      padding:0px 12px 
      height:14px 
      line-height:14px 
      font-weight:700 
</style>