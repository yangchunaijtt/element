<template>
  <div class="cartcontrol">
    <div class="cartcontrol-drease icon-remove_circle_outline" v-show="food.count>0"></div>
    <div class="cartcontrol-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cartcontrol-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script>
  /**
   * 添加到购物车-组件
   * 尚未完成，包括看
   */
  export default {
    props:{
      food:{
        type:Object
      }
    },
    data(){
      return{
        
      }
    },
    methods:{
      addCart(){
        console.log("click")
        if (!this.food.count){
          this.food.count = 1 ;
        } else {
          this.food.count ++ ;
        }
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .cartcontrol
    font-size:0
    .cartcontrol-drease, .cartcontrol-add
      display:inline-block
      line-height:24px 
      font-size:24px 
      color:rgb(0,160,220)
    .cartcontrol-count
      display:inline-block
      width:24px 
      line-height:24px 
      text-align:center
      font-size:10px 
      color:rgb(147,153,159)
</style>