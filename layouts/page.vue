<template>
  <div>
    <HeaderNav />
    <nuxt/>
    <LoadingSpiner/>
    <FooterView bgStyle="#def3f7" />
  </div>
</template>

<script>
import HeaderNav from '~/components/HeaderNav'
import FooterView from '~/components/FooterView'
import LoadingSpiner from '~/components/LoadingSpiner'
export default {
  components:{
    HeaderNav,
    LoadingSpiner
  },
}
</script>

<style>
  @font-face { font-family: 'Chosunilbo_myungjo'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff') format('woff'); font-weight: normal; font-style: normal; }
  html{font-size: 10px !important;}
  body{overflow-x: hidden; font-size: 1rem; font-family: 'Chosunilbo_myungjo';}

</style>