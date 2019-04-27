<template>
  <div>
    <v-header></v-header>
    <div class="tab border-1px">
        <router-link to="/goods"   class="tab-item">商品</router-link>
        <router-link to="/ratings" class="tab-item">评论</router-link>
        <router-link to="/seller" class="tab-item">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header  from "./components/header/header.vue"
  export default {
    components:{
      'v-header':header
    }
  }
</script>

<style lang="stylus"  rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  .tab 
    width:100%
    display:flex
    height:40px
    line-height:40px
    // border-bottom:1px solid rgba(7,17,27,0.1)
    border-1px(rgba(7,17,27,0.1))
    .tab-item 
      flex:1
      text-align:center
      display:block
      font-size:14px
      color:rgb(77,85,93)
    .router-link-active
      color:rgb(240,20,20)
</style>
