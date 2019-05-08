<template>
  <transition name="move">
    <div class="food" v-show="showFlag">
        <div class="food-content">
          <div class="img-header">
            <img :src="food.image">
            <div class="back" @click="hide">
              <i class="icon-arrow_lift"></i>
            </div>
          </div>
          <div class="content">
            <div class="title">{{food.name}}</div>
            <div class="detail">
              <span class="sell-count">月售{{food.sellCount}}份</span>
              <span class="rating">好评率{{food.rating}}%</span>
            </div>
            <div class="price">
              <span class="now">￥{{food.price}}</span>
              <span class="old" v-show="food.oldPrice!=''">￥{{food.oldPrice}}</span>
            </div>
          </div>
        </div>
        <!-- 下面是评论部分 -->

    </div>
  </transition>
</template>

<script>
export default {
  props:{
    food:{
      type:Object
    }
  },
  created(){
    
  },
  data(){
    return {
      showFlag:false,
    }
  },
  methods:{
    show(){
      this.showFlag = true ;
    },
    hide(){
      this.showFlag = false ;
    },
  },
}
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  // 需要定义动画效果

  .food
    position:fixed
    left:0 
    top:0 
    bottom:48px 
    width:100%
    z-index:40 
    background:#fff

</style>
