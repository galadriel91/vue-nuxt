<template>
  <div class="visualWrap">
    <div :class="{on:isFirst}">
      <img src="@/assets/imgs/bg-1.jpg" alt="메인 이미지" @load="imageLoad">
    </div>
    <div :class="{on:isSecond}">
      <img src="@/assets/imgs/bg-2.jpg" alt="메인 이미지">
    </div>
    <div :class="{on:isThird}">
      <img src="@/assets/imgs/bg-3.jpg" alt="메인 이미지">
    </div>
  </div>
</template>

<script>
let interval;
export default {  
  data(){
    return{
      isFirst:true,
      isSecond:false,
      isThird:false
    }
  },
  methods:{
    changeSlide(){
      if(this.isFirst){
        this.isFirst = false
        this.isSecond = true
      }else if(this.isSecond){
        this.isSecond = false
        this.isThird = true
      }else if(this.isThird){
        this.isThird = false
        this.isFirst = true
      }
    },
    imageLoad(){
      this.$store.commit('SET_OFF_LOADING')
    }
  },
  created(){
      this.$store.commit('SET_ON_LOADING')
  },
  mounted(){
    interval = setInterval(this.changeSlide , 3000)
  },
  beforeDestroy(){
    clearInterval(interval)
  },
}
</script>

<style scoped>
  .visualWrap{position: relative; margin: 0 auto; width: 95%; min-height: calc(100vh - 9.5rem);}
  .visualWrap div{overflow: hidden; position: absolute; top: 0; left: 0; width: 100% ; height: 95%; opacity: 0; visibility: hidden; transition: all 1s ease-in-out;}
  .visualWrap div.on{z-index: 1; opacity: 1; visibility: visible;}
  /* .visualWrap div.on img{animation: scale 3s;} */
  .visualWrap img{min-width: 100%; height: 100%;}

  @keyframes scale{
    0%{transform: scale(1.02);}
  }

  @media all and (max-width:1080px){
    .visualWrap div{height: 98%;}
  }
  /* @media all and (max-width:1080px){
      .visualWrap{position: relative; margin: 0 auto; width: 95%; min-height: 100vh; box-sizing: border-box;}
  } */
</style>