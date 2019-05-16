<template>
  <div class="ratings">
    ratings
  </div>
</template>

<script  type="text/ecmascript-6">
  import https from "@/https.js"

  const ERR_OK = 0 ;
  const  ratings_url = 'https://www.easy-mock.com/mock/5c134d091ed4e34c5e134742/vue-element/ratings';

  export default{

    props:{
      seller:{
        type:Object
      }
    },
    data(){
      return {
        reting:[]
      }
    },
    created(){
      // ratings的请求
      https.fetchGet(ratings_url,{} ).then((data) => {
          if ( data.data.errno == ERR_OK ) {
            this.ratings = data.data.data;　
          }
      }).catch(err=>{
              console.log(err)
          }
      );
    }
  }
</script>

<style lang="stylus"  rel="stylesheet/stylus" scoped>

</style>
