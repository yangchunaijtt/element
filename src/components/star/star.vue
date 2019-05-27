<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass,index) in itemClass" :class="itemClass" class="item" v-bind:key="itemClass.id"></span>
  </div>
</template>
<script>
  const length = 5 ;
  const STAR_ON = "on";
  const STAR_HALF = "half";
  const STAR_OFF = "off";

  // 星星复用的组件  
  export default { 
    props:{
      size:{  // 大小
        type:Number,
      },
      score:{  //评分
        type:Number,
      }
    },
    computed:{
      starType () {
        return "star-" + this.size
      },
      itemClass () {
        let result = [];
        let score = Math.floor(this.score*2)/2;
        let score_integer = Math.floor(score);
        for ( let  i = 0;i<score_integer;i++){
          result.push(STAR_ON);
        }
        
        if ( score !== 0 && score/score_integer !== 1){
          // 有小数
          result.push(STAR_HALF);
        }
        while( result.length < length ){
          result.push(STAR_OFF);
        }
        return result;
      }
    },
  }
</script>

<style lang="stylus"  rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"

  .star
    font-size:0
    .item 
      display:inline-block
      background-repeat:no-repeat
    &.star-48
      .item 
        width:20px 
        height:20px 
        margin-right:22px 
        background-size:20px 20px 
        &:last-child 
          margin-right:0
        &.on 
          bg-image("star48_on")
        &.half 
          bg-image("star48_half")
        &.off 
          bg-image("star48_off")
    &.star-36
      .item 
        width:15px 
        height:15px 
        margin-right:6px 
        background-size:15px 15px 
        &:last-child 
          margin-right:0
        &.on 
          bg-image("star36_on")
        &.half 
          bg-image("star36_half")
        &.off 
          bg-image("star36_off")
    &.star-24
      .item 
        width:10px 
        height:10px 
        margin-right:3px
        background-size:10px 10px 
        &:last-child 
          margin-right:0
        &.on 
          bg-image("star24_on")
        &.half 
          bg-image("star24_half")
        &.off 
          bg-image("star24_off")
</style>

