<template>
    <div class="profileWrap">
        <img src="~/assets/imgs/profile.jpg" alt="프로필 이미지" @load="imageLoad">
        <div class="profileContainer">
          <h1>프로필</h1>
          <div class="nickContainer">
            <div class="avatar">
              <v-list>
                <v-list-item>
                  <v-list-item-avatar :color="color" style="margin-right:10px" class="listAvatar">
                    {{USER.nickname[0]}}
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <h3 class="listName">{{USER.nickname}}</h3>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-color-picker
                hide-sliders
                v-model="color"
                @input="onChangeColor"
              />
            </div>
            <div class="nickname">
              <v-form v-model="valid" ref="form" @submit.prevent="onSubmitForm">
                <v-container>
                  <v-text-field
                    single-line 
                    label="수정할 닉네임을 입력하세요"
                    counter="8"
                    :rules="nicknameRules"
                    maxlength="8"
                    type="nickname"
                    :success="success"
                    v-model="nickname"
                    :success-messages="successMessage"
                    @input="onChange"
                    ref="nickname"
                  />
                  <v-btn type="submit" style="width:100%" class="btn">수정</v-btn>
                </v-container>
              </v-form>
            </div>
            <div class="valueWrap">
              <h3>내가 준 별점</h3>
              <ul>
                <v-col cols="6" md="4" v-for="item in USER.favItem" :key="item.id" class="valueCol">
                  <li class="valueList">
                    <nuxt-link :to="`/post/${item.id}`">
                      <img :src="item.image" :alt="item.title">
                      <h5 class="valueTitle">{{item.title}}</h5>
                       <v-rating
                          color="#ffac41"
                          background-color="#ffac41"
                          length="5"
                          size="16"
                          readonly
                          :value="item.value"
                      />
                    </nuxt-link>
                    <v-btn text @click="onRemoveValue(item.id)"><v-icon>mdi-minus-circle-outline</v-icon></v-btn>
                  </li>
                </v-col>
              </ul>
            </div>
          </div>
        </div>
  </div> 
</template>

<script>
export default {
    data(){
        return{
            valid:false,
            nickname:'',
            nicknameRules:[v=>!!v || "닉네임을 입력하세요" , v=> v.trim().length < 9 || "8자를 초과할 수 없습니다."],
            success:false,
            successMessage:'',
            color:'#c4b6b6'
        }
    },
    computed:{
      USER(){
        return this.$store.state.users.userData
      }
    },
    watch:{
      USER(value){
        if(!value){
          this.$router.push('/')
        }
      }
    },
    methods:{
        onSubmitForm(){
            if(this.$refs.form.validate()){
               this.$store.dispatch('users/SETNICK' , {
                 nickname:this.nickname
               })
               .then(()=>{
                 this.nickname=  ''
                 this.success = true
                 this.successMessage = "성공적으로 수정했습니다."
                 this.$refs.form.resetValidation()
               })
            }
            else{
              alert('닉네임을 입력하세요')
            }
        },
        imageLoad(){
            this.$store.commit('SET_OFF_LOADING')
        },
        onChange(v){
          if(v.length){
            this.success = false
            this.successMessage = ''
          }
        },
        onChangeColor(v){
          this.$store.commit('users/SET_COLOR' , {color:v})
        },
        onRemoveValue(id){
          this.$store.dispatch('users/REMOVEVALUE' , {id})
        }
    },
    created(){
      this.$store.commit('SET_ON_LOADING')
      this.color = this.USER.color
    },
    middleware:'offLogin'
}
</script>

<style scoped>
    *{font-weight: bold !important;}
    .v-list {background: transparent !important;}
    .v-color-picker{background: transparent !important;}
    .v-text-field__slot{background: transparent !important;}
    .profileWrap{ overflow-x: hidden; display: flex; margin: 0 auto; width: 95%; height: calc(100vh - 15rem); align-items: center; z-index: 9999; }
    .profileWrap img{width: 100%; height: 100%;}
    .profileWrap h1{text-align: center;}
    .profileContainer{
      position: absolute; left: 50%; transform: translate(-50%); padding: 2rem 0; margin: 0 auto 2rem; width: 50rem; height: 70vh; 
      border-radius: 5px;  border:1px solid #ddd; background: rgba(255,255,255,.8); overflow-y: auto;
      }
    
    .nickContainer{align-items: center;}
    .nickContainer .avatar{margin-top: 2rem; display: flex; justify-content: space-around;}
    .nickContainer .avatar .listAvatar{font-size: 1.4rem; color: #fff;}
    .nickContainer .avatar .listName{font-size: 1.5rem;}
    .btn{font-size: 1.5rem !important;}


    .valueWrap{margin: 2rem 0;}
    .valueWrap h3{text-align: center; font-size: 1.6rem;}
    .valueWrap li{display: inline-block; text-align: center;}
    .valueWrap li a:focus .valueTitle, .valueWrap li a:hover .valueTitle {color: #3282b8;}
    .valueWrap .valueTitle{margin: 1rem 0; font-size: 1.3rem; transition: all .5s;}
    .valueWrap .valueCol{display: inline-block;}

    @media all and (max-width:1080px){
        .profileContainer{width: 35rem; border: none;}
        .profileWrap{height: calc(100vh - 10rem);}
        .profileWrap img{width: auto;}

        .nickContainer .avatar{flex-direction: column; align-items: center;}
        .v-color-picker{margin: 0 auto;}
        /* .valueWrap .valueCol{width: 50% !important;} */
        .valueWrap li{width: 100%;}
        .valueWrap li img{width: 100%;}
    }
</style>