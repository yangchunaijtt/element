<template>
    <div class="goods">
    <!--左侧内容 -->
      <div class="menu-warpper">
        <ul>
          <li v-for="(item,index) in goods" class="goods-item">
            <span class="text border-1px">
              <span v-show="item.type!==-1" class="icon" :class="classMap[item.type]"></span>{{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <!--右侧内容 -->
      <div class="foods-warpper">
        <ul>
          <li class="good-item" v-for="(item,index) in goods">
            <h1 class="name">{{item.name}}</h1>
            <ul>
              <li @click="selectFoods(food,$event)" v-for = "(food,index) in item.foods" class="food-item border-1px">
                <div class="icon">
                  <img :src="food.icon" class="img" width="57" height="57">
                </div>
                <div class="right">
                  <h2 class="h2-name">{{food.name}}</h2>
                  <p class="description" v-show="food.description!==''">{{food.description}}</p>
                  <div class="sellCount">
                    <span class="rating">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="newprice">￥{{food.price}}</span>
                    <span class="oldprice" v-show="food.oldPrice!==''">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 调用的组件 -->
      <food :food="selectFood" ref="food" ></food>
      <shopcart :delivery_price ="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart>
    </div>
     
</template>

<script  type="text/ecmascript-6">
  import https from "@/https.js"
  import shopcart from "../shopcart/shopcart.vue"
  import food from "../food/food.vue"

  const  goods_url = 'https://www.easy-mock.com/mock/5c134d091ed4e34c5e134742/vue-element/goods';
  const ERR_OK = 0 ;

  // better-scroll的联动滚动后面完成

  export default{
    props:{
      seller:{
        type:Object
      }
    },
    data(){
      return{
        goods:[],
        classMap:[],
        selectFood:{}
      }
    },
    created(){
      this.classMap = ['decrease','discount','special','invoice','guarantee'];
      // goods的请求
      https.fetchGet(goods_url,{} ).then((data) => {
          if ( data.data.errno == ERR_OK ) {
            this.goods = data.data.data;　
            
          }
      }).catch(err=>{
            console.log(err)
          }
      );
    },
    methods:{
      selectFoods(food,event){
        // if (!event._constructed){
        //   return ;
        // }
        // 有部分没写
        this.selectFood = food ;
        
        // 可以使用 refs来使用子组件定义的方法
        this.$refs.food.show();
      }
    },
    components:{
      shopcart,
      food
    }
  }
</script>

<style lang="stylus"  rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"

  .goods
    position:absolute
    display:flex
    width:100%
    top:176px 
    bottom:48px 
    left:0
    overflow:hidden
    .menu-warpper
      flex:0 0 80px  
      width:80px 
      background:#f2f5f7
      font-size:0 
      overflow-y:scroll
      .goods-item
        display:table
        width:56px 
        padding:0 12px
        height:54px 
        .text 
          display:table-cell;
          vertical-align:middle;
          line-height:14px 
          font-size:12px
          color:rgb(7,17,27)
          border-1px(rgba(7,17,27,0.1))
          .icon 
            display:inline-block
            width:12px 
            height:12px 
            background-size:12px 12px 
            background-repeat:no-repeat
            &.decrease
              bg-image("decrease_1")
            &.discount
              bg-image("discount_1")
            &.guarantee
              bg-image("guarantee_1")
            &.invoice
              bg-image("invoice_1")
            &.special
              bg-image("special_1")
    .foods-warpper
      flex:1
      overflow-y:scroll
      .good-item
        display:block
        .name
          width:100%
          line-height:26px 
          text-indent:14px 
          font-size:12px 
          color:rgb(147,153,159)
          background:#f3f5f7
          border-left:2px solid #d9dde1
        .food-item
          display:flex
          margin:18px
          padding-bottom: 18px
          border-1px(rgba(7,17,27,0.1))
          &:last-child
            border-none()
            margin-bottom:0
          .icon
            display: inline-block
            flex:0 0 57px
            width:57px 
            height:57px 
            margin-right:10px
            vertical-align: top;
          .right
            display:inline-block
            flex:1
            .h2-name
              margin-top:2px 
              margin-bottom:8px 
              line-height:14px 
              font-size:14px 
              color:rgb(7,17,27)
            .description,.sellCount
              line-height:12px 
              margin-bottom:8px
              font-size:10px 
              color:rgb(147,153,159)
            .sellCount
              &.rating
                margin-right:12px 
            .price
              line-height:14px 
              font-weight:700
              .newprice
                font-size:14px 
                color:rgb(240,20,20)
                font-weight:700
              .oldprice
                font-size:10px 
                color:#80868c
                font-weight:700
                text-decoration:line-through

</style>
