<template>
  <div>
    <HeaderNav />
    <LoadingSpiner/>
    <nuxt/>
  </div>
</template>

<script>
import HeaderNav from '~/components/HeaderNav'
import LoadingSpiner from '~/components/LoadingSpiner'
export default {
  components:{
    HeaderNav,
    LoadingSpiner
  },
  // middleware:'loadingTest'
}
</script>

<style>
  @font-face { font-family: 'Chosunilbo_myungjo'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff') format('woff'); font-weight: normal; font-style: normal; }
  html{font-size: 10px !important;}
  body{overflow-x: hidden; font-size: 1rem; font-family: 'Chosunilbo_myungjo';}
  .v-messages.theme--light.error--text{color: red !important;}
  .v-messages.theme--light.success--text{color: green !important;}
  .theme--light.v-label{color: #000;}
  
</style>