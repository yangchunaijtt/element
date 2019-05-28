<template>
  <div class="cartcontrol">
    <div class="cartcontrol-drease icon-remove_circle_outline" v-show="food.count>0" @click = 'dreaseCart'></div>
    <div class="cartcontrol-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cartcontrol-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script>
  import Vue from 'vue';
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
      return {
        
      }
    },
    methods:{
      addCart(event){
        // if ( !event._constructed ) {
        //   // vue.js阻止非vue事件的问题（event._constructed）
        //   return ;
        // }
        console.log("click")
        // 需要
        if (!this.food.count){
          Vue.set(this.food,'count',1);
        } else {
          this.food.count ++ ;
        }
      },
      dreaseCart(event){
        if (this.food.count) {
          this.food.count--;
        }
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .cartcontrol
    font-size:0
    .cartcontrol-drease, .cartcontrol-add
      padding:6px
      display:inline-block
      line-height:24px 
      font-size:24px 
      color:rgb(0,160,220)
    .cartcontrol-count
      display:inline-block
      vertical-align: top
      width:12px 
      padding-top:6px
      line-height:24px 
      text-align:center
      font-size:10px 
      color:rgb(147,153,159)
      
</style>