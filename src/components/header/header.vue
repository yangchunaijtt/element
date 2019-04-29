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
          <span class="icon"></span>
          <span class="description">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class='bulletin-wrapper'>
      <span class="icon"></span>
      <span class="bulletin">{{seller.bulletin}}</span>
      <span class="svg icon-keyboard_arrow_right"></span>
    </div>
  </div>
</template>

<script  type="text/ecmascript-6">
  export default{
    props:{
      seller:{
        type:Object
      }
    },
    
  }
</script>

<style lang="stylus"  rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"

  .header
    background:rgba(7,17,27,0.5)
    color:#fff
    .content-wrapper
      padding:24px 12px 18px 24px 
      font-size:0px
      .avatar
        display:inline-block
        vertical-align: top;
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
            bg-image("decrease_1")
            background-repeat:no-repeat
            background-size:12px 12px
          .description
            display:inline-block
            font-size:10px
            line-height: 12px;
            margin: 0px
            vertical-align: top;
    .bulletin-wrapper
      height:28px 
      line-height:28px 
      background-color:rgba(7,17,27,0.2)
      padding:0px 12px 0px 12px 
      font-size:0px
      color:#fff
      .icon
        display:inline-block
        width:22px 
        height:12px 
        bg-image("bulletin")
        background-repeat:no-repeat
        background-size:22px 12px
        margin-top: 8px;
        margin-right: 4px;
        vertical-align: top;
      .bulletin
        display:inline-block
        overflow: hidden
        text-overflow:ellipsis
        white-space: nowrap
        font-size:10px
      .svg
        display:inline-block
        margin-left:8px
        font-size:10px
        vertical-align: top;
        line-height: 28px;
</style>
