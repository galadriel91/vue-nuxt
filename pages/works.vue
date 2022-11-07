<template>
  <div>
    <div class="works">
        <div class="workInfo">
            <h2>WORKS</h2>
            <p>여러가지 기술들을 이용해서 만들어 봤습니다.</p>
        </div>
        <transition-group name="list" tag="ul">
            <li v-for="(work) in WORKITEMS.slice(0,SHOWLIMIT)" :key="work.posts.index">
                <nuxt-link :to="`/post/${work.id}`" class="clear">
                    <span>{{10 > work.posts.index ? `0${work.posts.index}` : work.posts.index}}.</span>
                    <h3>{{work.title}}</h3>
                    <div>
                        <span>
                            {{work.time}}
                       </span>
                    </div>
                </nuxt-link>
            </li>
        </transition-group>
        <button @click="onClickMore" v-if="HASMOREPOST">더보기</button>
    </div>
    <div class="wave wave-bg1">
        &nbsp;
    </div>
  </div>
</template>

<script>
export default {
    computed:{
        WORKITEMS(){
            return this.$store.state.posts.workItems
        },
        SHOWLIMIT(){
            return this.$store.state.posts.showLimit
        },
        HASMOREPOST(){
            return this.$store.state.posts.hasMorePost
        }
    },
    methods:{
        onClickMore(){
            if(this.HASMOREPOST){
                this.$store.dispatch('posts/MOREITEM')
            }
        }
    },
    created(){
        this.$store.commit('SET_OFF_LOADING')
    },
    layout:'page',
}
</script>

<style scoped>
    .list-enter-active, .list-leave-active {
    transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
    }



    @-webkit-keyframes move{
    from{-webkit-mask-position:0 top;mask-position:0 top}
    to{-webkit-mask-position:-1500px top;mask-position:-1500px top}
    }
    @keyframes move{
        from{-webkit-mask-position:0 top;mask-position:0 top}
        to{-webkit-mask-position:-1500px top;mask-position:-1500px top}
    }
    .wave{
        height: 6rem; width: 95%; margin: -5rem auto 0;
        -webkit-mask-image: url('~assets/imgs/wave_mask.svg'); -webkit-mask-size: 150rem auto; -webkit-mask-position: left top; -webkit-mask-repeat: repeat-x;
        mask-image: url('~assets/imgs/wave_mask.svg'); mask-size: 150rem auto; mask-position: left top; mask-repeat: repeat-x;
        animation: move 10s linear infinite; -webkit-animation: move 10s linear infinite;
    }
    .wave-bg1{background: #def3f7;}

    .works{margin: 0 auto; display: flex; flex-direction: column; justify-content: center; width: 95%; min-height: calc(90vh);}
    .workInfo{text-align: center; color: #000;}
    .workInfo h2{margin-bottom: 2rem; font-size: 4rem;}
    .workInfo p{font-size: 2rem;}

    .works ul{margin: 7rem auto 0; width: 50%; border-top: 2px solid #000;}
    .works ul li{height: 7rem; border-bottom: 1px solid #000;}
    .works ul li a{display: flex; height: 100%;  align-items: center; transition: all 1s;}
    .works ul li:hover a , .works ul li:focus a { background:#eee}
    .works ul li a > span{display: block; width: 6rem; font-size: 1.8rem; font-weight: bold;text-align: center;}
    .works ul li a h3 {font-size: 2rem;}

    .works ul li a div{margin-left: auto;}
    .works ul li a div span{margin-right: 2rem ; font-size: 1.6rem; color: #000; font-weight: bold;}
    

    button{margin: 3rem auto; width: 30rem; height: 5rem;  background: none;  text-align: center; line-height: 3rem; transition: all 1s;
    font-size: 1.8rem; color: #000;border: 1px solid #000; cursor: pointer; border-radius: 5px; font-family: 'Chosunilbo_myungjo'; font-weight: bold;   
    }
    button:hover , button:focus {background: #eee;}

    @media all and (max-width:1300px){
        .works ul{margin: 7rem auto 0; width: 90%;}
    }
    @media all and (max-width:1080px){
        .workInfo h2{margin-bottom: 2rem; font-size: 3rem;}
        .workInfo p{font-size: 1.5rem;}

        .works ul{margin: 4rem auto 0; width: 100%;}
        .works ul li{height: 5rem;}
        .works ul li a > span{width: 4rem; font-size: 1.5rem;}
        .works ul li a h3 {font-size: 1.5rem;}
        .works ul li a div span{font-size: 1.4rem;}

        button{margin: 3rem auto; width: 20rem; height: 4rem; line-height: 3rem; font-size: 1.5rem;}

        .wave{margin: -3rem auto 0;}
         .wave{-webkit-mask-size: 50rem auto;}
    }




</style>