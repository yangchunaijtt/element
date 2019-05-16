<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass,index) in itemClass" :class="itemClass" class="item"></span>
  </div>
</template>
<script>

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
    created() {
      console.log(this.size,this.score)
    },
    computed:{
        starType(){
          return "star-"+ this.size
        }
    },
    data(){
      return {
        itemClass:[]
      };
    },
  }
</script>

<style lang="stylus"  rel="stylesheet/stylus" scoped>
  .star
    font-size:0
    .item 
      display:inline-block
    &.star-48
    &.star-36
    &.star-24
      //
</style>

