<template>
  <!--购物车组件-->
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="orderIcon">
            <i class="icon-shopping_cart"></i>
          </div>
          <div class="num" v-show="orderCount>0">
            {{orderCount}}
          </div>
        </div>
        <div class="price">￥{{orderPrice}}</div>
        <div class="desc">另需配送费￥{{delivery_price}}元</div>
      </div>
      <div class="content-right" :class="orderGive">
        <div class="pay" >{{orderText}}</div>
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
    },
    selectfood:{
      type:Array,
      default(){
        return [
          
        ];
      }
    }
  },
  data(){
    return {

    };
  },
  methods:{
    
  },
  computed:{
    orderPrice(){  // 订单一共多少钱
      let price = 0;
      this.selectfood.forEach((food) => {
        price += food.price*food.count ;
      });
      return price;
    },
    orderCount(){ //一共买了多少产品
      let count = 0;
      this.selectfood.forEach( (food) => {
        count += food.count ;
      });
      return count ;
    },
    orderText(){  // 购物车内容变化
      let payText = ``;
      if (this.orderCount<0){
        // 商品数目为0
        payText = `￥${this.minPrice}起送`;
      }else {
        if ( this.orderPrice < this.minPrice ) {
          payText = `还差￥${this.minPrice - this.orderPrice}起送`;
        }else {
          payText = `去结算`;
        }
      }
      return payText;
    },
    orderGive(){    // 购物车样式变化
      let className = '';
      if (this.orderPrice < this.minPrice){
          className = 'insufficient';
      }else {
          className = 'Settlement';
      }
      return className ;
    },
    orderIcon(){
      let className = '';
      if ( this.orderCount > 0 ) {
        className = 'yes';
      }else {
        className = 'nothing';
      }
      return className;
    },
  }
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
          background:#141d27
          border-radius:50%
          box-sizing:border-box
          .logo
            width:100%
            height:100%
            border-radius:50%
            text-align:center
            &.yes
              background:rgb(0,160,220)
              .icon-shopping_cart
                color:#fff
            &.nothing
              background:#2b343c
              .icon-shopping_cart
                color:#80858a
            .icon-shopping_cart
              display:block
              vertical-align:top 
              padding-top:12px 
              line-height:24px
              font-size:24px 
          .num
            position:absolute
            right:0
            top:0
            width:24px 
            height:16px 
            line-height:16px 
            text-align:center
            border-radius:6px
            font-size:9px
            font-weight:700 
            color:rgb(255,255,255)
            background:rgb(240,20,20)
            box-shadow 0px 4px 8px 0px rgba(0,0,0,0.4)
        .price
          display:inline-block
          vertical-align:top 
          margin:14px 0px 0px 6px 
          padding-right:12px 
          line-height:16px 
          font-size:16px 
          font-weight:700
        .desc
          display:inline-block
          vertical-align:top 
          margin: 14px 12px 0 6px
          line-height:12px  
          font-size:12px 
      .content-right 
        flex:0 0 105px 
        width:105px 
        &.insufficient
          background:#2b333b
          .pay 
            color:rgba(255,255,255,0.4)
        &.Settlement
          background:#00a0dc
          .pay 
            color:#fff
        .pay
          width:100%
          height:100%
          line-height:48px 
          font-size:12px 
          font-weight:700
          text-align:center
        
</style>