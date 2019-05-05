<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="description">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="supports-count" v-if="seller.supports" @click="showDetail">
        <span class="number">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class='bulletin-wrapper' @click="showDetail">
      <span class="icon"></span>
      <span class="bulletin" >{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <transition name = "fade">
      <div v-show="showDetails" class="details">
        <div class="details-warpper clearfix">
          <div class="details-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-warpper">
              <!--star等下完成 -->
              
            </div>
            <div class="title-div">
              <v_title :title="'优惠信息'"></v_title>
            </div>
            <ul class="supports" v-if="seller.supports" >
              <li class="supports-item" v-for="(itemdata,index) in seller.supports" >
                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                <span class="description">{{seller.supports[index].description}}</span>
              </li>
            </ul>
            <div class="title-div">
              <v_title :title="'商家公告'"></v_title>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="details-close" @click = "hiddenDetail" >
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script  type="text/ecmascript-6">
  import title  from "../title/title.vue"
  import star from "../star/star.vue"

  export default{
    props:{
      seller:{
        type:Object
      }
    },
    data(){
      return {
        showDetails:false
      };
    },
    methods:{
      showDetail(){
        this.showDetails = true ;
      },
      hiddenDetail(){
        this.showDetails = false ;
      },
    },
    created(){
      this.classMap = ['decrease','discount','special','invoice','guarantee'];

    },
    mounted(){
  
    },
    components:{
      v_title:title,
      star,
    }
  }
</script>

<style lang="stylus"  rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"

  .header
    position:relative
    background:rgba(7,17,27,0.5)
    color:#fff
    overflow:hidden
    .content-wrapper
      position:relative
      padding:24px 12px 18px 24px 
      font-size:0px
      .avatar
        display:inline-block
        vertical-align: top
        img 
          border-radius:2px 
      .content
        display:inline-block
        font-size:14px
        margin-left:16px
        .title
          margin:2px 0px 8px 0px
          .brand
            display:inline-block
            width:30px 
            height:18px
            vertical-align:top
            bg-image("brand")
            background-repeat:no-repeat
            background-size:30px 18px
          .name
            font-size:16px 
            line-height:18px 
            font-weight:bold
        .description
          font-size:12px 
          line-height:12px
          margin:8px 0px 10px 0px
        .supports
          margin-bottom:2px 
          .icon 
            display:inline-block
            margin-right:4px 
            width:12px 
            height:12px 
            vertical-align:top
            background-repeat:no-repeat
            background-size:12px 12px
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
          .description
            display:inline-block
            font-size:10px
            line-height: 12px;
            margin: 0px
            vertical-align: top;
      .supports-count
        position:absolute
        height:24px 
        padding:0px 8px 
        line-height:24px 
        bottom:18px 
        right:12px 
        font-size:10px 
        background-color:rgba(0,0,0,0.2)
        border-radius:14px 
        .number 
          vertical-align:top
          margin-right:2px 
          text-align:center
        .icon-keyboard_arrow_right 
          vertical-align:top
          line-height:24px
    .bulletin-wrapper
      position:relative
      height:28px 
      line-height:28px 
      padding:0px 22px 0px 12px 
      white-space: nowrap
      overflow: hidden
      text-overflow:ellipsis
      background-color:rgba(7,17,27,0.2)
      // font-size:0px
      .icon
        display:inline-block
        width:22px 
        margin-top: 8px
        vertical-align: top
        height:12px 
        bg-image("bulletin")
        background-repeat:no-repeat
        background-size:22px 12px
      .bulletin
        vertical-align: top
        margin:0 4px 
        font-size:10px
      .icon-keyboard_arrow_right
        position:absolute
        right:12px 
        top:8px
        font-size:10px
    .background 
      position:absolute
      top:0 
      left:0 
      width:100%
      height:100%
      filter:blur(10px)
      z-index:-1
    .details
      position:fixed
      top:0
      left:0 
      width:100% 
      height:100% 
      z-index:100
      overflow:auto
      backdrop-filter:blur(10px)
      opacity: 1 
      background:rgba(7,17,27,0.8)
      .details-warpper 
        min-height:100%
        width:100%
        .details-main
          margin-top:64px 
          padding-bottom:64px 
          .name
            height:16px 
            line-height:16px 
            font-size:16px 
            font-weight:700 
            text-align:center 
          .star-warpper
            margin-top:18px 
            padding:2px 0 
            text-align:center 
          .title-div
            width:100%
            margin:28px 0px  24px 0px 
          .supports
            width:80% 
            margin: 0 auto 
            .supports-item
              padding:0px 12px 
              margin-bottom:12px
              font-size:0px 
              &:last-child 
                margin-bottom:0px
              .icon 
                display:inline-block 
                width:16px 
                height:16px 
                margin-right:6px 
                vertical-align:top
                background-repeat:no-repeat
                background-size:16px 16px
                &.decrease
                  bg-image("decrease_2")
                &.discount
                  bg-image("discount_2")
                &.guarantee
                  bg-image("guarantee_2")
                &.invoice
                  bg-image("invoice_2")
                &.special
                  bg-image("special_2")
              .description
                display:inline-block 
                height:16px 
                line-height:16px 
                font-size:12px 
          .bulletin
            width:80% 
            margin:0 auto 
            .content 
              padding:0 12px 
              line-height:12px 
              font-size:12px 
      .details-close
        position:relative
        width:32px 
        height:32px 
        font-size:32px 
        margin:-64px auto 0 auto 
        clear:both 
    .fade-enter-active, .fade-leave-active 
      transition:all 0.5s
      &.fade-enter,&.fade-leave 
        opacity: 0 
        background:rgba(7,17,27,0)
      
    
</style>
