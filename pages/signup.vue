<template>
    <div class="signWrap">
        <img src="~/assets/imgs/signup.jpg" alt="회원가입 이미지" @load="imageLoad">
        <div class="signContainer">
        <h1>회원가입</h1>
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
                    <v-text-field
                        single-line
                        label="비밀번호를 확인해주세요"
                        type="password"
                        v-model="passwordCheck"
                        :rules="passwordCheckRules"
                        required
                    />
                    <v-text-field
                        single-line
                        counter="8"
                        maxlength="8"
                        label="닉네임을 입력해주세요"
                        type="nickname"
                        v-model="nickname"
                        :rules="nicknameRules"
                        required
                    />
                    <v-checkbox 
                        single-line
                        label="동의하십니까?"
                        v-model="terms"
                        :rules="termsRules"
                        required
                    />
                    <v-btn type="submit" color="#def3f7" style="width:100%" class="btn">회원가입</v-btn>
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
            passwordCheck:'',
            nickname:'',
            terms:'',
            emailRules:[v=>!!v || "이메일을 입력해주세요" , v=>/.+@.+/.test(v) || "유효한 이메일을 입력해주세요"],
            passwordRules:[v=>!!v || "비밀번호를 입력해주세요"],
            passwordCheckRules:[v=>!!v || "비밀번호를 확인해주세요" , v=>v===this.password || "비밀번호가 맞지않습니다"],
            nicknameRules:[v=>!!v || "닉네임을 입력해주세요" , v=> v.trim().length < 9 || "8자를 초과할 수 없습니다."],
            termsRules:[v=>!!v || "동의하지 않으면 가입할 수 없습니다."]
        }
    },
    methods:{
        onSubmitForm(){
            if(this.$refs.form.validate()){
               this.$store.dispatch('users/SIGNUP' , {
                   email:this.email,
                   nickname:this.nickname,
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
    },
    middleware:'onLogin'
    
}
</script>

<style scoped>
    *{font-weight: bold !important;}
    .v-text-field__slot{background: transparent !important;}
    .signWrap{overflow: hidden; display: flex; margin: 0 auto; width: 95%; height: calc(100vh - 14rem); align-items: center; z-index: 9999; }
    .signWrap img{width: 100%; height: 100%;}
    .signWrap h1{text-align: center;}
    .signContainer{position: fixed; left: 50%; transform: translate(-50%); padding: 2rem 0; margin: 0 auto; width: 50rem;  border-radius: 5px;  border:1px solid #ddd; background: rgba(255,255,255,.8);}
    .btn{font-size: 1.5rem !important;}

    @media all and (max-width:1080px){
        .signWrap{height: calc(100vh - 10rem);}
        .signContainer{width: 35rem; border: none;}
        .signWrap img{width: auto;}
    }
    
</style>