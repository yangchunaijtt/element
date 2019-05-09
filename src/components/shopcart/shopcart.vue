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
        <div class="price">￥0</div>
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
      color:rgba(255,255,255,0.4)
      .content-left
        flex:1
        .logo-wrapper
          position:relative
          top:-10px 
          left:0 
          display:inline-block
          margin:0 12px 
          padding:6px 
          width:56px 
          height:56px 
          border-radius:50%
          background:#141d27
          box-sizing:border-box
          .logo
            width:100%
            height:100%
            background:#2b343c
            border-radius:50%
            text-align:center
            .icon-shopping_cart
              display:block
              vertical-align:top 
              padding-top:12px 
              line-height:24px
              font-size:24px 
              color:#80858a
        .price
          display:inline-block
          vertical-align:top 
          margin:14px 0px 0px 12px 
          padding-right:12px 
          line-height:16px 
          font-size:16px 
          font-weight:700
        .desc
          display:inline-block
          vertical-align:top 
          margin: 14px 12px 0 12px
          line-height:12px  
          font-size:12px 
      .content-right 
        flex:0 0 105px 
        width:105px 
        padding:0 6px
        background:#2b333b
        .pay
          width:100%
          height:100%
          line-height:48px 
          font-size:12px 
          font-weight:700
          text-align:center
          
</style>