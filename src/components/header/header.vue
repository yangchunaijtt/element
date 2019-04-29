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
          {{seller.description}}/{{seller.deliveryTime}}送达
        </div>
        <div v-if="seller.supports" class="supports">
          <span class="icon"></span>
          <span class="description">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class='bulletin-wrapper'>

    </div>
  </div>
</template>

<script  type="text/ecmascript-6">
  export default{
    props:{
      seller:{
        type:Object
      }
    }
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
</style>
