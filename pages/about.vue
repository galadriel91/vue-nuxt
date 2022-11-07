<template>
<div>
  <section class="aboutWrap">
      <div class="mySelf">
        <h1>ABOUT ME</h1>
        <p>저를 소개합니다</p>
      </div>
      <div class="introWrap">
          <div class="introLeft">
              <img src="@/assets/imgs/about-pic.png" alt="경주갔을 때 찍은 사진" @load="imageLoad">                                                                                                       
          </div>
          <div class="introRight">
            <div class="myInfo">
              <h3>Web Developer.</h3>
              <ul>
                <li><span>Name</span>이문섭</li>
                <li><span>Birth</span>1991. 12. 11</li>
                <li><span>Address</span>경상남도 진주시 평거동</li>
                <li><span>E-Mail</span>g_ala@naver.com</li>
                <li><span>Cell Phone</span>010-6660-8915</li>
              </ul>
            </div>
            <div class="myGoal">
              <h2 class="promise">항상 흐르는 물 처럼 고여 있지 않겠습니다.</h2>
              <p class="introSelf">
                  아버지의 작은 유리가게 홈페이지를 만들고 싶다는 작은 소망이<br>
                  웹 개발자가 되고싶다는 꿈으로 바뀌었습니다.<br>
                  신기술에 대한 관심이 많고 계속 학습하여 풀스택 개발자의 <br> 
                  역량을 갖추는 것이 목표입니다.
              </p>
            </div>
          </div>
      </div>
      <div class="wave wave-bg">
        &nbsp;
      </div>
      <div class="mySkill">
        <div class="tech">
          <h2>My Skills</h2>
          <p>
            웹표준을 준수하여 시맨틱 마크업을 하고 있습니다.<br>
            다양한 동적 효과를 구현하기 위해 <br class="brick">자바스크립트를 이용합니다<br>
            Vue.js , React를 이용하여 프론트엔드 <br class="brick"> 전반의 흐름을 이해하려고 합니다<br>
            Git을 이용하여 협업, 버전관리를 하고 있습니다.
          </p>
          <ul>
              <li class="html">HTML</li>
              <li class="css">CSS</li>
              <li class="js">JS</li>
              <li class="vue">VUE.JS</li>
              <li class="react">REACT</li>
              <li class="git">GIT</li>
          </ul>
        </div>
      </div>
      <div class="wave wave-bg1">
        &nbsp;
      </div>
      <div class="myTool">
        <div class="tech">
          <h2>Used Tool</h2>
          <p>
            IDE는 VS code를 사용하고 있습니다.<br>
            퍼블리싱을 위해 포토샵을 사용하고 있습니다.<br>
            자바스크립트 패키지를 위하여 npm을 사용하고 있고<br>
            대표적인 형상관리툴인 GitHub를 이용하고 있습니다.
          </p>
          <ul>
              <li class="vscode">vscode</li>
              <li class="photo">photoshop</li>
              <li class="npm">npm</li>
              <li class="github">github</li>
          </ul>
        </div>
      </div>
    </section>
    <FooterView bgStyle="#f9f6f7"/>
    </div>
</template>

<script>
import FooterView from '~/components/FooterView'
export default {
  components:{
    FooterView,
  },
  methods:{
    imageLoad(){
      this.$store.commit('SET_OFF_LOADING')
    },
  },
  created(){
      this.$store.commit('SET_ON_LOADING')
  },
}
</script>

<style scoped>
  .brick{display: none;}
  .aboutWrap{margin: 0 auto; width: 95%; min-height: calc(100vh - 8rem);}
  .aboutWrap .mySelf{margin-bottom: 6rem; text-align: center;}
  .aboutWrap .mySelf h1{padding: 3rem 0 1rem; font-size: 5rem; color: #000; box-sizing: border-box; }
  .aboutWrap .mySelf p{font-size: 2rem; color: #777;}
  
  .aboutWrap .introWrap{margin: 3rem 0 4rem;  display: flex; justify-content: center; color: #000; }

  .introWrap .introLeft img{width: 100%; border-radius: 2rem;}  
  
  .introWrap .introRight{margin: 3rem 0 0 10rem; transition: all 1.5s; }
  .introWrap .myInfo h3{font-size: 2.5rem;}
  .introWrap .myInfo ul li{margin: 2rem 0; font-size: 2rem; color: #323232;}
  .introWrap .myInfo ul li span{display: inline-block; width: 10rem; margin-right: 1rem; font-size: 2rem; font-weight: bold; color: #000;}

  .introWrap .promise{padding: 2rem 0; font-size: 3rem; transition: all 1s;} 
  .introWrap .introSelf{font-size: 2rem; line-height: 4rem; transition: all 1s; }

  @-webkit-keyframes move{
    from{-webkit-mask-position:0 top;mask-position:0 top}
    to{-webkit-mask-position:-1500px top;mask-position:-1500px top}
  }
  @keyframes move{
    from{-webkit-mask-position:0 top;mask-position:0 top}
    to{-webkit-mask-position:-1500px top;mask-position:-1500px top}
  }
  .wave{
    height: 6rem;
    -webkit-mask-image: url('~assets/imgs/wave_mask.svg'); -webkit-mask-size: 150rem auto; -webkit-mask-position: left top; -webkit-mask-repeat: repeat-x;
    mask-image: url('~assets/imgs/wave_mask.svg'); mask-size: 150rem auto; mask-position: left top; mask-repeat: repeat-x;
    animation: move 10s linear infinite; -webkit-animation: move 10s linear infinite;
  }
  .wave-bg{background: #def3f7;}
  .wave-bg1{margin-top: -4.5rem;  background: #f9f6f7;}

  .mySkill{background:#def3f7; text-align: center; color: #000;}
  .tech h2{padding: 4rem 0; font-size: 3rem;}
  .tech p{font-size: 2rem; line-height: 3.5rem;}
  .tech ul {margin-top: 3rem; padding-bottom: 7rem;  font-size: 0;}
  .tech ul li{margin-right: 1.4rem; display: inline-block; vertical-align: top; width: 6rem; height: 6rem;}
  .tech ul .html{background: url('~assets/imgs/html5.png')no-repeat; background-size:cover; }
  .tech ul .css{background: url('~assets/imgs/css3.png')no-repeat; background-size:cover ;}
  .tech ul .js{background: url('~assets/imgs/js.png')no-repeat; background-size:cover ;}
  .tech ul .vue{background: url('~assets/imgs/vue.png')no-repeat; background-size:cover ;}
  .tech ul .react{background: url('~assets/imgs/react-logo.png')no-repeat; background-size:cover ;}
  .tech ul .git{background: url('~assets/imgs/git.png')no-repeat; background-size:cover ;}

  .tech ul .github{background: url('~assets/imgs/github.png')no-repeat; background-size:cover ;}
  .tech ul .npm{background: url('~assets/imgs/npm.png')no-repeat; background-size:cover ;}
  .tech ul .photo{background: url('~assets/imgs/photoshop.png')no-repeat; background-size:cover ;}
  .tech ul .vscode{background: url('~assets/imgs/vsc.png')no-repeat; background-size:cover ;}

  .myTool{background: #f9f6f7; text-align: center; color: #000;}
  .myTool .tech ul {padding-bottom: 3rem;}


  @media all and (max-width: 1300px) {
      .aboutWrap .mySelf{margin-bottom: 5rem;}
      .aboutWrap .mySelf h1{padding: 3rem 0 1rem; font-size: 4rem;}
      .aboutWrap .mySelf p{font-size: 1.8rem;}

      .introWrap .introRight{margin-left: 5rem;}
      .introWrap .promise{padding: 1.5rem 0; font-size: 2.5rem;  } 
      .introWrap .introSelf{font-size: 1.7rem; line-height: 3rem;  }

  }
  @media all and (max-width: 1080px) {
      .brick{display: block;}
      .wave{-webkit-mask-size: 50rem auto;}

      .aboutWrap .mySelf{margin-bottom: 2rem;}
      .aboutWrap .mySelf h1{padding: 3rem 0 1rem; font-size: 3rem;}
      .aboutWrap .mySelf p{font-size: 1.5rem;}


      .aboutWrap .introWrap{display: block;}
      .introWrap .introLeft{width: 100%;}
      .introWrap .introRight{margin: 0;}
      .introWrap .myInfo h3{margin: 2rem 0 0; font-size: 2rem;}
      .introWrap .myInfo ul li{margin: 1.5rem 0; font-size: 1.5rem;}
      .introWrap .myInfo ul li span{width: 10rem; margin-right: 1rem; font-size: 1.5rem;}

      .introWrap .promise{padding: 1.5rem 0; font-size: 1.8rem;  } 
      .introWrap .introSelf{font-size: 1.3rem; line-height: 3rem;  }

      .introWrap .tech{margin-top: 1rem; padding-bottom: 1rem;}
      .introWrap .tech h3{font-size: 1.5rem;}
      .introWrap .tech ul {margin: 1rem 0;}
      .introWrap .tech ul li{width: 4rem; height: 4rem;}

      .tech h2{padding: 2rem 0; font-size: 2rem;}
      .tech p{font-size: 1.5rem; line-height: 3rem;}
      .tech ul li{width: 4rem; height: 4rem;}

  }


</style>