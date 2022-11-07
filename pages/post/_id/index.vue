<template>
  <div>
      <WorkItem :post="POST"/>
      <div class="wave wave-bg">
        &nbsp;
      </div>
  </div>
</template>

<script>
import WorkItem from '~/components/WorkItem'
export default {
    components:{
        WorkItem
    },
    computed:{
      POST(){
        return this.$store.state.posts.workItems.find(v=>v.id === parseInt(this.$route.params.id , 10))
      },
    },
    layout:'page'
}
</script>

<style scoped>
  @-webkit-keyframes move{
    from{-webkit-mask-position:0 top;mask-position:0 top}
    to{-webkit-mask-position:-1500px top;mask-position:-1500px top}
  }
  @keyframes move{
    from{-webkit-mask-position:0 top;mask-position:0 top}
    to{-webkit-mask-position:-1500px top;mask-position:-1500px top}
  }
  .wave{
    margin: 0 auto; width: 95%; height: 6rem;
    -webkit-mask-image: url('~assets/imgs/wave_mask.svg'); -webkit-mask-size: 150rem auto; -webkit-mask-position: left top; -webkit-mask-repeat: repeat-x;
    mask-image: url('~assets/imgs/wave_mask.svg'); mask-size: 150rem auto; mask-position: left top; mask-repeat: repeat-x;
    animation: move 10s linear infinite; -webkit-animation: move 10s linear infinite;
  }
  .wave-bg{background: #def3f7;}
</style>