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
  import https from "@/https.js"

  const ERR_OK = 0 ;
  export default {
    data() {
      return {
        seller:{}
      };
    },
    created() {
      let  seller_url = 'https://www.easy-mock.com/mock/5c134d091ed4e34c5e134742/vue-element/seller';
      https.fetchPost(seller_url,{} ).then((data) => {
          console.log(data);
          if ( data.data.errno == ERR_OK ) {
            this.seller = data.data.data;　
            console.log(this.seller);
          }
      }).catch(err=>{
              console.log(err)
          }
      )
      
    },
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
