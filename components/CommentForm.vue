<template>
  <v-card flat>
    <v-form @submit.prevent="onSubmitForm">
        <v-container>
            <v-text-field v-if="USER"
            solo flat
            readonly
            :label="USER.nickname"
            v-model="nickname"
            hide-details
            :style="{marginBottom:'10px' , border:'1px solid #bbbfca'}"
            />
            <v-text-field v-else
            solo flat
            label="닉네임을 입력하세요"
            v-model="nickname"
            hide-details
            :style="{marginBottom:'10px' , border:'1px solid #bbbfca'}"
            />
            <v-text-field
            solo flat
            label="무엇을 개선해야 할까요?"
            v-model="content"
            hide-details
            style="border:1px solid #bbbfca"
            />
            <v-btn class="btn" type="submit" dark color="#222" style="margin-top:10px">입력!</v-btn>
        </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
    props:{
        postid:{
            type:Number,
            required:true
        }
    },
    computed:{
        USER(){
            return this.$store.state.users.userData
        },
    },
    data(){
        return{
            nickname: '',
            content:''
        }
    },
    methods:{
        onSubmitForm(){
            if(this.USER){
                if(this.content.trim().length > 0){
                    this.$store.dispatch('posts/ADDCOMMENT' , {
                    id:this.postid,
                    nickname:this.USER.nickname,
                    color:this.USER.color,
                    content:this.content
                    })
                    .then(()=>{
                        this.content = ''
                    })
                }
                else{
                    alert('개선 내용을 입력 해주세요')
                }
            }else{
                if(this.nickname.length > 0 && this.content.trim().length > 0){
                    if(this.content.trim().length > 0){
                    this.$store.dispatch('posts/ADDCOMMENT' , {
                    id:this.postid,
                    nickname:this.nickname,
                    color:'#c4b6b6',
                    content:this.content
                    })
                    .then(()=>{
                        this.nickname = ''
                        this.content = ''
                    })
                }
                    else{
                        alert('닉네임과 개선내용을 적어주세요')
                    }
                }
            }   
        }
    }
}
</script>

<style scoped>
    .v-card{overflow:hidden; box-shadow: none;}
    .btn{margin: 1rem 0; float: right; font-size: 1.5rem !important;}
</style>