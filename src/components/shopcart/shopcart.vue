<template>
  <!--购物车组件-->
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <i class="icon-shopping_cart"></i>
          </div>
        </div>
        <div class="price">￥</div>
        <div class="desc">另需配送费￥{{delivery_price}}元</div>
      </div>
      <div class="content-right">
        <div class="pay">￥{{minPrice}}起送</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /**
   * 购物车组件尚未完成。
   * 看到7-12的4分钟
   */
  props:{
    /**
     * default 设置默认值
     * type   设置传入的类型
    */ 
    delivery_price:{
      type:Number,
      default:0
    },
    minPrice:{
      type:Number,
      default:0
    }
  },
  data(){
    return {

    };
  },
  methods:{

  },
  created(){

  },
}
</script>

<style lang="stylus" scoped>
  .shopcart
    position:fixed
    bottom:0 
    left:0 
    width:100% 
    height:48px 
    z-index:50 
    background:#141d27
    .content
      display:flex
      background:#141d27
      .content-left
        flex:1
        .logo-wrapper
          display:inline-block
          .logo
            // 
            .icon-shopping_cart
              //
        .price
          display:inline-block
        .desc
          display:inline-block
      .content-right 
        flex:0 0 105px 
        width:105px 
        .pay
          // 
</style>