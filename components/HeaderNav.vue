<template>
   <header>
        <div class="headerWrap">
            <div class="headerTop clear" :class="{showing:isActive}">
                <ul class="submenu">
                    <li>
                        <nuxt-link to="/login" v-if="!USER">LOGIN</nuxt-link>
                        <a href="javascript:void(0)" v-else @click="onClickLogout"><span>LOGOUT</span></a>
                    </li>
                    <li>
                        <nuxt-link to="/signup" v-if="!USER">SIGN UP</nuxt-link>
                        <nuxt-link to="/profile" v-else>{{USER.nickname}}님</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="headerBottom">
                <h1><nuxt-link to="/">PORTFOLIO</nuxt-link></h1>
                <h2 class="hide">대메뉴</h2>
                <a href="javascript:void(0)" class="wholeBtn" @click="onToggleActive">
                    <span :class="{active:isActive}">&nbsp;</span>
                </a>
                <nav :class="{showing:isActive}">
                    <ul class="menu">
                        <li @click="onRemoveNav"><nuxt-link to="/"><span>HOME</span></nuxt-link></li>
                        <li @click="onRemoveNav"><nuxt-link to="/about"><span>ABOUT ME</span></nuxt-link></li>
                        <li @click="onRemoveNav"><nuxt-link to="/works"><span>WORKS</span></nuxt-link></li>
                        <li @click="onRemoveNav" class="contact"><nuxt-link to="/contact"><span>CONTACT</span></nuxt-link></li>
                        <li @click="onRemoveNav" class="login">
                            <nuxt-link to="/login" v-if="!USER"><span>LOGIN</span></nuxt-link>
                            <a href="javascript:void(0)" v-else @click="onClickLogout"><span>LOGOUT</span></a>
                        </li>
                        <li @click="onRemoveNav" class="signup">
                            <nuxt-link to="/signup" v-if="!USER"><span>SIGN UP</span></nuxt-link>
                            <nuxt-link to="/profile" v-else><span>{{USER.nickname}}님</span></nuxt-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return{
            isActive:false
        }
    },
    methods:{
        onToggleActive(){
            this.isActive = this.isActive ? '' : true
        },
        onRemoveNav(){
            this.isActive = false
        },
        onClickLogout(){
            this.$store.dispatch('users/LOGOUT')
        }
    },
    computed:{
        USER(){
            return this.$store.state.users.userData
        }
    }
}
</script>

<style scoped>
/* header{position: relative; } */

.headerWrap{margin: 0 auto; width: 95%; height: 9.5rem;}
.headerTop{height: 3.5rem;}
.headerTop ul{float: right; font-size: 0;}
.headerTop ul li{display: inline-block;}
.headerTop ul li a{padding: 2rem 1rem 0 1rem; display: block; font-size: 1.3rem; font-weight: bold; transition: all .5s;}
.headerTop ul li a:hover{color: #3282b8;}
.headerTop ul li a:focus{color: #3282b8;}
.headerTop ul li:last-child a{padding-right: 0;}

.headerBottom{overflow: hidden; height: 6rem;}
.headerBottom h1{float: left;}
.headerBottom h1 a{font-size: 3.5rem; font-weight: bold; color: #000; line-height: 6rem;}
.headerBottom nav{float: right; z-index: 200;}
.headerBottom nav ul{font-size: 0;}
.headerBottom nav ul li{display: inline-block;}
.headerBottom nav ul .login , 
.headerBottom nav ul .signup {display: none;} 
.headerBottom nav ul li a{display: block; padding: 0 2rem;}
.headerBottom nav ul .contact a{padding-right: 0;}
.headerBottom nav ul li a span{position: relative; font-size: 1.6rem; font-weight: bold; color: #000; line-height: 6rem;}
.headerBottom nav ul li a span::after{content: ''; position: absolute; bottom: -0.8rem; right: 50%; width: 0%; height: 0.2rem; background: #000; transition: all .5s;}
.headerBottom nav ul li a:hover span::after{width: 100%; right: 0%;}
.headerBottom nav ul li a:focus span::after{width: 100%; right: 0%;}

.headerBottom nav ul li .nuxt-link-exact-active span {color: #3282b8;}
.headerBottom nav ul li .nuxt-link-exact-active span::after{width: 100%; right: 0%; background: #3282b8;}

.wholeBtn{display: none; height: 8rem; width: 8rem ; background: #fff; z-index: 9998; text-align: center;}
.wholeBtn span{position: relative; margin-top: 4rem; display: inline-block; width: 5rem; height: .2rem; background: #000; transition: all .5s;}
.wholeBtn span::before{content: ''; position: absolute; top: -1rem; left: 0; width: 100%; height: .2rem; background: #000; transition: all .5s;}
.wholeBtn span::after{content: ''; position: absolute; top: 1rem; left: 0; width: 100%; height: .2rem; background: #000; transition: all .5s;}

/* 전체버튼 클릭 클랙스 */
.wholeBtn span.active{background: transparent;}
.wholeBtn span.active::after{top: 0; transform: rotate(45deg);}
.wholeBtn span.active::before{top: 0; transform: rotate(-45deg);}


@media all and (max-width:1080px){
    .headerWrap{height: 7rem;}

    .headerTop{display: none;}
    /* .headerTop {position: fixed; top: 70%; left: -100vw; width: 100%; min-height: auto; transition: all .5s; z-index: 9999;}
    .headerTop.showing{left: 0;}
    .headerTop ul{float: none; text-align: center;}
    .headerTop ul li{display: inline-block;}
    .headerTop ul li a{padding: 0 1.5rem; display: block; font-size: 1.3rem; font-weight: bold;}
    .headerTop ul li:last-child a{padding-right: 0;} */



    .headerBottom h1 a{font-size: 2rem; line-height: 7rem;}
    .headerBottom nav{float: none; position: fixed; top: 0; left: -100vw; width: 100vw; min-height: 100vh; background: #fff; transition: all .5s;}
    .headerBottom nav.showing{left: 0;}
    .headerBottom nav ul {position: absolute; top: 50%; left: 50%; width: 100%; transform: translate(-50% , -50%);}
    .headerBottom nav ul li{display: block; text-align: center;}
    .headerBottom nav ul li a{display: block; padding: 0;}
    .headerBottom nav ul li a span{font-size: 2rem; line-height: 7rem;}
    .headerBottom nav ul .login , 
    .headerBottom nav ul .signup {display: block;} 



    .wholeBtn{position: fixed; right: 2.5%; display: block; z-index: 9998; height: 6rem; width: 4rem; background: transparent; }
    .wholeBtn span{margin-top: 3.5rem; width: 3rem; height: .2rem;}
}


</style>