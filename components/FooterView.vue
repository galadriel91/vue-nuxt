<template>
    <footer>
        <div class="footerWrap" :style="{background:bgStyle}">
            <h2>© 2021 LEE MOON SEOB</h2>
            <a href="https://github.com/galadriel91" target="_blank">깃허브 링크</a>
        </div>
    </footer>
</template>

<script>
export default {
    props:{
        bgStyle:String,
        required:true
    }
}
</script>

<style scoped>
    footer{margin: 0 auto; width: 95%; text-align: center;}
    .footerWrap{padding: 2rem 0;}
    .footerWrap h2{font-size: 2rem; color: #000;}
    .footerWrap a{display: inline-block; width: 4rem; height: 4rem; background: url('~assets/imgs/github.png')no-repeat; background-size: cover; font-size: 0; color: transparent;}

</style>