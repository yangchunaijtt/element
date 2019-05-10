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
    transform: translate3d(0, 0, 0)
    &.move-enter-active, &.move-leave-active
      transition: all 0.2s linear
    &.move-enter, &.move-leave-active
      transform: translate3d(100%, 0, 0)
    .img-header
      position:relative
      width:100%
      height:0 
      padding-top:100%
      img
        position:absolute
        left:0 
        top:0 
        height:100%
        width:100%
      .back
        position:absolute
        left:0 
        top:10px 
        .icon-arrow_lift
          display:block
          height:20px
          line-height:20px 
          padding:10px 
          font-size:20px
          color:#fff
    .content
      padding:18px 
      .title
        margin-bottom:8px
        height:14px 
        line-height:14px 
        font-size:14px 
        font-weight:700 
        color:reb(7,17,27)
      .detail
        margin-bottom:18px 
        height:10px 
        line-height:10px 
        font-size:10px 
        color:rgb(149,153,159)
        .sell-count
          margin-right:12px 
      .price
        line-height:14px 
        font-weight:700
        .now
          font-size:14px 
          color:rgb(240,20,20)
          font-weight:700
        .old
          font-size:10px 
          color:#80868c
          font-weight:700
          text-decoration:line-through

</style>
