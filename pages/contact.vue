<template>
  <section>
        <div class="contact">
            <div class="contactIntro">
                <h2>CONTACT ME</h2>
                <p>언제든지 연락 부탁드립니다.</p>
            </div>
            <ul class="contactInfo">
                <li>
                    <p>Address</p>
                    <span>경상남도 진주시 평거동</span>
                </li>
                <li>
                    <p>Cell Phone</p>
                    <span>010-6660-8915</span>
                </li>
                <li>
                    <p>E-mail</p>
                    <span>g_ala@naver.com</span>
                </li>
                <li>
                    <p>Web Site</p>
                    <span><a href="https://galadriel.netlify.app">galadriel.netlify.app</a></span>
                </li>
            </ul>
            <div class="contactWrap">
                <div class="contactImg">
                    <img src="@/assets/imgs/email-image.jpg" alt="이메일 이미지" @load="imageLoad">
                </div>
                <div>
                    <form class="contactForm" @submit.prevent="onSubmitForm">
                        <input type="text" placeholder="제목을 입력해 주세요" v-model="subject">
                        <input type="text" placeholder="이름을 입력해 주세요" v-model="name">
                        <input type="text" placeholder="Email을 입력해 주세요" v-model="email">
                        <p class="warning" v-if="!isEmail && email">유효한 이메일을 입력해주세요</p>
                        <textarea placeholder="남기고 싶은 메세지를 입력해 주세요" v-model="content"></textarea>
                        <button type="submit" class="send-btn">보내기</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="wave wave-bg1">
            &nbsp;
        </div>
    </section>
</template>

<script>
import {validateEmail} from '../utils/validation'
export default {
    layout:'page',
    data(){
        return{
            subject:'',
            name:'',
            email:'',
            content:''
        }
    },
    computed:{
        isEmail(){
            return validateEmail(this.email)
        }
    },
    methods:{
        imageLoad(){
            this.$store.commit('SET_OFF_LOADING')
        },
        onSubmitForm(){
            if(this.isEmail){
                this.$store.dispatch('ADDEMAIL' , {
                subject : this.subject,
                name : this.name,
                email : this.email,
                content : this.content
            })
            .then(()=>{
                alert('백엔드를 구축하고 있습니다. 조만간 완벽하게 구현하겠습니다.')
                this.subject = ''
                this.email = ''
                this.name = ''
                this.content = ''
            })
            }else{
                alert('유효하지 않은 데이터입니다. 다시 입력하세요')
            }
        }
    },
    created(){
        this.$store.commit('SET_ON_LOADING')
    },
}
</script>

<style scoped>

.contact{margin: 6rem auto 0; display: flex; flex-direction: column; justify-content: center; width: 95%; }
.contactIntro{text-align: center; color: #000;}
.contactIntro h2{font-size: 4rem}
.contactIntro p{margin: 2rem 0 0; font-size: 2rem; color: #777;}

.contactInfo{margin: 10rem 0 0; text-align: center; font-size: 0;}
.contactInfo li:nth-child(1){background: url('~assets/imgs/pin.png')no-repeat;}
.contactInfo li:nth-child(2){background: url('~assets/imgs/tel.png')no-repeat;}
.contactInfo li:nth-child(3){background: url('~assets/imgs/email.png')no-repeat;}
.contactInfo li:nth-child(4){background: url('~assets/imgs/home.png')no-repeat;}
.contactInfo li{padding: 0 3rem 0 4rem; display: inline-block; text-align: left; color: #000; }
.contactInfo li p{margin-bottom: 1rem; font-size: 1.7rem; font-weight: bold;}
.contactInfo li span{font-size: 2rem;}

.contactWrap{margin: 10rem 0 0; display: flex; justify-content: center; align-items: center;}
.contactImg{margin-right: 5rem; max-width: 55rem;}
.contactImg img{width: 100%; border-radius: 1rem;}
.contactForm{max-width: 55rem;}
.warning{color: red; font-size: 1.3rem;}
.contactForm input{text-indent: 2rem; margin: 1rem 0; height: 4rem; border: 1px solid #837979; font-family: 'Chosunilbo_myungjo'; font-weight: bold; font-size: 1.6rem;}
.contactForm textarea{text-indent: 2rem; margin: 1rem 0; padding: 3rem 0 0;  height: 8rem; border: 1px solid #837979; box-sizing: border-box; 
resize: none;  font-weight: bold; font-size: 1.6rem; font-family: 'Chosunilbo_myungjo'; overflow-y: auto;}
.contactForm input::placeholder , .contactForm textarea::placeholder{color: #000; font-family: 'Chosunilbo_myungjo'; font-weight: bold; font-size: 1.6rem;}
/* .contactForm textarea::placeholder{padding: 1rem 0 0;} */
.contactForm .send-btn{display: block; margin-top: 1rem;  width: 50%; height: 4rem;  
border-radius: 5px; font-family: 'Chosunilbo_myungjo'; border: 1px solid #837979; 
color: #000; background: #fff; font-weight: bold; font-size: 1.4rem; cursor: pointer;}

@-webkit-keyframes move{
    from{-webkit-mask-position:0 top;mask-position:0 top}
    to{-webkit-mask-position:-1500px top;mask-position:-1500px top}
  }
  @keyframes move{
    from{-webkit-mask-position:0 top;mask-position:0 top}
    to{-webkit-mask-position:-1500px top;mask-position:-1500px top}
  }
  .wave{
    height: 6rem; width: 95%; margin: 5rem auto 0;
    -webkit-mask-image: url('~assets/imgs/wave_mask.svg'); -webkit-mask-size: 150rem auto; -webkit-mask-position: left top; -webkit-mask-repeat: repeat-x;
    mask-image: url('~assets/imgs/wave_mask.svg'); mask-size: 150rem auto; mask-position: left top; mask-repeat: repeat-x;
    animation: move 10s linear infinite; -webkit-animation: move 10s linear infinite;
  }
  .wave-bg1{background: #def3f7;}





@media all and (max-width: 1300px) {
    .contact{margin: 0 auto ;}
    .contactIntro {margin: 5rem 0;}
    .contactInfo{margin: 3rem 0;}
    .contactWrap{margin: 3rem 0; flex-direction: column;}
    .contactImg{margin-right: 0; width: 100%; text-align: center;}
    .contactImg img{width: 100%; border-radius: 1rem;  box-shadow: none;}
    .contactForm{margin: 2rem auto 0; max-width: 55rem;}
    .contactForm .send-btn{width: 100%;}

}
@media all and (max-width: 1080px) {
    .wave{-webkit-mask-size: 50rem auto;}
    .contact{margin: 0 auto ;}
    .contactIntro {margin: 2.5rem 0;}
    .contactIntro h2{font-size: 3rem}
    .contactIntro p{margin: 2rem 0 0; font-size: 1.5rem;}

    .contactInfo{margin: 0 auto; max-width: 35rem;}
    .contactInfo li{margin: 2rem 0 0; padding: 0 0 0 4rem;  width: 50%; box-sizing: border-box;}
    .contactInfo li:nth-child(1){background-size: 2rem auto; background-position: .5rem 0;}
    .contactInfo li:nth-child(2){background-size: 2rem auto; background-position: .5rem 0;}
    .contactInfo li:nth-child(3){background-size: 2rem auto; background-position: .5rem 0;}
    .contactInfo li:nth-child(4){background-size: 2rem auto; background-position: .5rem 0;}
    .contactInfo li p{margin-bottom: .5rem; font-size: 1.5rem; font-weight: bold;}
    .contactInfo li span{font-size: 1.3rem;}

    .contactImg{max-width: 35rem;}
    .contactImg img{width: 100%; border-radius: 1rem;  box-shadow: none;}
    .contactForm{margin: 1.5rem auto 0; max-width: 35rem;}

    .contactForm input{font-size: 1.4rem;}
    .contactForm textarea{font-size: 1.4rem;}
    .contactForm input::placeholder , .contactForm textarea::placeholder{font-size: 1.4rem;}


}



</style>