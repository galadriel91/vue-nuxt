<template>
    <div class="loginWrap">
        <img src="~/assets/imgs/gate.jpg" alt="로그인 이미지" @load="imageLoad">
        <div class="loginContainer">
        <h1>로그인</h1>
        <v-form v-model="valid" ref="form" @submit.prevent="onSubmitForm">
            <v-container>
                <v-text-field
                    single-line
                    label="이메일을 입력해주세요"
                    type="email"
                    v-model="email"
                    :rules="emailRules"
                    required
                />
                <v-text-field
                    single-line
                    label="비밀번호를 입력해주세요"
                    type="password"
                    v-model="password"
                    :rules="passwordRules"
                    required
                />
                <v-btn type="submit" class="btn" style="margin-right:10px">로그인</v-btn>
                <v-btn nuxt to="/signup" color="#def3f7" class="btn">회원가입</v-btn>
            </v-container>
        </v-form>
    </div>
</div> 
</template>

<script>
export default {
    data(){
        return{
            valid:false,
            email:'',
            password:'',
            emailRules:[v=>!!v || "이메일을 입력해주세요" , v=>/.+@.+/.test(v) || "유효한 이메일을 입력해주세요"],
            passwordRules:[v=>!!v || "비밀번호를 입력해주세요"],
        }
    },
    methods:{
        onSubmitForm(){
            if(this.$refs.form.validate()){
               this.$store.dispatch('users/LOGIN' , {
                   email:this.email,
                   nickname:"반지원정대",
                   password:this.password,
                   color:"#c4b6b6",
                   favItem:[]
               })
               .then(()=>{
                   this.$router.push('/')
               })
            }
        },
        imageLoad(){
            this.$store.commit('SET_OFF_LOADING')
        },
    },
    created(){
        this.$store.commit('SET_ON_LOADING')
    }
}
</script>

<style scoped>
    *{font-weight: bold !important;}
    .v-text-field__slot{background: transparent !important;}
    .loginWrap{ overflow: hidden; display: flex; margin: 0 auto; width: 95%; height: calc(100vh - 14rem); align-items: center; z-index: 9999; }
    .loginWrap img{width: 100%; height: 100%;}
    .loginWrap h1{text-align: center;}
    .loginContainer{position: fixed; left: 50%; transform: translate(-50%); padding: 2rem 0; margin: 0 auto; width: 50rem;  border-radius: 5px;  border:1px solid #ddd; background: rgba(255,255,255,.8);}
    .btn{font-size: 1.5rem !important;}

    @media all and (max-width:1080px){
        .loginWrap{height: calc(100vh - 10rem);}
        .loginContainer{width: 35rem; border: none;}
        .loginWrap img{width: auto;}
    }
</style>