<template>
  <div class="job">
    <div class="loaf">
      <img src="" class="img" width="100" height="100">
    </div>
    <ul class="array" @click="showDetails">
      <li>
        <i class="icon" @click="hiddleDetails"></i>
        <img src="" class="img" width="100" height="100">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    
  },
  data(){
    return {
      showJob:false,
      JobData:[

      ],
      ArrData:[
        {
          isErr:false,
          name:"ArrData",
          data:[
            {
              ranking:1,
              number:0,
              singlePrice:25
            },
            {
              ranking:2,
              number:10,
              singlePrice:5
            },
            {
              ranking:2,
              number:10,
              singlePrice:5
            }
          ]
        }
      ]
    }
  },
  methods:{
    showDetails(){
      this.showJob = true ;
    },
    hiddleDetails(){
      this.showJob = false ; 
    }
  },
  computed:{

  },
  created(){

  },
  components:{

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"

  .job 
    position:fixed
    top:0
    left:0
    width:100%
    height:100%
    .loaf
      .img  
        //
    .array
      display:block
      li 
        // 
        .img

        .icon

        .text
          //
</style>

