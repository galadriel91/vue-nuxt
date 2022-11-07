<template>
  <div class="itemWrap">
    <div>
      <ul>
        <li class="itemPost">
            <div class="itemImage">
                <img :src="post.posts.mainImage" alt="도미노 로고" @load="imageLoad">
            </div>
            <div class="itemInner">
                <p class="innerNumber clear">
                    <strong>{{10 > post.posts.index ? `0${post.posts.index}` : post.posts.index }}</strong>
                    <span>{{post.posts.title}}</span>
                </p>
                <h3>{{post.posts.subTitle}}</h3>
                <div class="checkWeb clear">
                    <p v-if="post.vue">배포 : <span>Netlify</span></p>
                    <p v-if="post.vue">반응형 : <span>O</span></p>
                    <p v-if="post.markup">Validator : <span>O</span></p>
                    <p v-if="post.markup">openWax : <span>100</span></p>
                    <br class="brick">
                    <p>지원 : <img v-for="(image,i) in post.posts.support" :key="i" :src="image.src" :alt="image.title"></p>
                </div>
                <div class="skillWrap clear">
                    <div class="skillLeft">
                      <span>사용 기술 :</span>
                      <ul class="skill">
                          <li class="html icon" v-if="post.markup">HTML</li>
                          <li class="css icon" v-if="post.markup">CSS</li>
                          <li class="js icon" v-if="post.markup">JS</li>
                          <li class="vue icon" v-if="post.vue">VUE</li>
                          <li class="react icon" v-if="post.react">REACT</li>
                      </ul>
                    </div>
                    <div class="skillRight">
                      <span>별점 :</span>
                      <v-rating
                          hover
                          color="#ffac41"
                          background-color="#ffac41"
                          length="5"
                          size="24"
                          v-model="value"
                          @input="onClickSave"
                      />
                    </div>
                </div>
                <div class="linkWrap">
                    <a v-for="(item , i) in post.posts.sites" :key="i" :href="item.link" target="_blank">{{item.name}}</a>
                    <div class="btnWrap" @click="onClickToggle">
                      <span>댓글</span>
                      <button class="commentBtn" v-if="!isToggle"><v-icon>mdi-comment-plus</v-icon></button>
                      <button class="commentBtn" v-else><v-icon>mdi-comment-minus</v-icon></button>
                    </div>
                </div>
            </div>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </li>
      </ul>
      <div class="commentWrap" v-if="isToggle">
        <CommentForm :postid="post.id"/>
        <v-list>
          <v-list-item v-for="(comment,i) in post.Comments" :key="i" class="commentItem"> 
            <v-list-item-avatar :color="comment.color">
              <span class="commentAvatar">{{comment.nickname[0]}}</span>
            </v-list-item-avatar>
            <v-list-item-content class="contentWrap">
              <h3 class="commentNickname">{{comment.nickname}}</h3>
              <div class="commentText">{{comment.content}}</div>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </div>
  </div>
</template>

<script>
import CommentForm from '~/components/CommentForm'
export default {
  components:{
    CommentForm,
  },
  props:{
    post:{
      type:Object,
      required:true
    },
  },
  computed:{
    USER(){
      return this.$store.state.users.userData
    }
  },
  data(){
    return{
      value : 0,
      isToggle:false,
    }
  },
  methods:{
    imageLoad(){
        this.$store.commit('SET_OFF_LOADING')
    },
    onClickSave(v){
      if(this.USER){
        this.$store.commit('users/FAV_ITEM', {value:v , image:this.post.posts.mainImage , title:this.post.posts.title , id:this.post.id})
      }else{
        this.$store.commit('posts/SAVE_STAR' , {id:this.post.id , value:v} )
      }
    },
    onClickToggle(){
      this.isToggle = !this.isToggle
    }
  },
  created(){
    if(this.USER){
      if(this.USER.favItem.length === 0){
        this.value = 0
      }else{
        const index = this.USER.favItem.findIndex(v=>v.id === this.post.id)
        if(index + 1){
          this.value = this.USER.favItem[index].value
        }else{
          this.value = 0
        }
      }
    }else{
      this.value = this.post.value
    }
    this.$store.commit('SET_ON_LOADING')
  },
}
</script>

<style scoped>
  .brick{display: none;}
  ul{font-size: 0;}
  ul li{display: inline-block;}
  .itemWrap > div {display: flex; flex-direction: column; justify-content: center; min-height: 80vh;}
  .itemPost{position: relative; display: block; margin: 3rem auto; padding-bottom: .5rem; width: 50rem; transition: all .5s; }

  .itemImage{overflow: hidden; text-align: center;}
  .itemImage img{width: 30rem; transition: all .5s;}

  .itemInner{padding: 1rem; box-sizing: border-box;}
  .itemInner .innerNumber{padding-top: 1rem; height: 5rem;}
  .itemInner .innerNumber strong{float: left; font-size: 3rem; color: #000; line-height: 5rem;}
  .itemInner .innerNumber span{float: right; margin-right: 1rem; font-size: 1.5rem; font-weight: bold; color: #000; line-height: 5rem;}
  .itemInner h3{padding: 1.5rem 0 0; font-size: 1.6rem; color: #000;}
  .itemInner .linkWrap{margin-top: 1rem;}
  .itemInner .linkWrap a{display: inline-block; padding: 0 .5rem; height: 3rem; background: #000; border-radius: 2rem; font-size: 1.4rem; color: #fff; text-align: center; line-height: 3rem; transition: all .5s;}
  .itemInner .linkWrap a:hover {background: royalblue}
  .itemInner .linkWrap a:nth-child(2){margin: 0 1rem;} 

  .checkWeb{margin: 1rem 0; line-height: 3rem;}
  .checkWeb p{float: left; font-size: 1.6rem; font-weight: bold; color: #000;}
  .checkWeb p:nth-child(2) {margin: 0 1.5rem;}
  .checkWeb p:nth-of-type(3) img{float: right;}
  .checkWeb p:nth-of-type(3) img:nth-child(2){margin: 0 1rem;}
  .checkWeb p:nth-of-type(3) img:nth-child(3){margin-left: 1rem;}

  .skillWrap{display: flex; justify-content: space-between; margin: 2rem 0; line-height: 3rem;}
  .skillWrap > div{display: flex; align-items: center;}
  .skillWrap span{font-size: 1.5rem; font-weight: bold; color: #000; line-height: 3rem;}
  .skillWrap .skill li{margin-left: 1rem;}
  .skillWrap .skill .icon{width: 3rem; height: 3rem;}
  .skillWrap .skill .html{background: url('~assets/imgs/html5.png')no-repeat; background-size: cover ;}
  .skillWrap .skill .css{background: url('~assets/imgs/css3.png')no-repeat; background-size: cover ;}
  .skillWrap .skill .js{background: url('~assets/imgs/js.png')no-repeat; background-size: cover ;}
  .skillWrap .skill .vue{background: url('~assets/imgs/vue.png')no-repeat; background-size: cover ;}
  .skillWrap .skill .react{background: url('~assets/imgs/react-logo.png')no-repeat; background-size: cover ;}

  .btnWrap{float: right; line-height: 3rem;}
  .btnWrap span{margin-right: 1rem; font-size: 1.4rem; font-weight: bold; vertical-align: middle;}
  .commentBtn:focus{outline: none;}
  .commentBtn i{color: #000; font-size: 2.5rem;}

  .commentWrap{margin: 0 auto; width: 50rem;}
  .commentItem{margin-bottom:5px ; border-radius: 5px;}
  .commentAvatar{color: #fff; font-size: 2rem;}
  .contentWrap{margin-left: 1.5rem;}
  .commentNickname{font-size: 1.5rem;}
  .commentText{font-size: 1.5rem;}

  /* 리스트 호버시 라인*/
.itemPost > span{transition: all .8s; background: #000;}
.itemPost > span:nth-of-type(1){position: absolute; top: -1px; left: 1px; width: 0%; height: 2px;}
.itemPost > span:nth-of-type(2){position: absolute; top: -1px; left: -1px; width: 2px; height: 0%;}
.itemPost > span:nth-of-type(3){position: absolute; bottom: -1px; right: 1px; width: 0%; height: 2px;}
.itemPost > span:nth-of-type(4){position: absolute; bottom: -1px; right: -1px; width: 2px; height: 0%;}

.itemPost:hover > span:nth-of-type(1){width: 100%;}
.itemPost:hover > span:nth-of-type(2){height: 100%;}
.itemPost:hover > span:nth-of-type(3){width: 100%;}
.itemPost:hover > span:nth-of-type(4){height: 100%;}

.itemPost:focus > span:nth-of-type(1){width: 100%;}
.itemPost:focus > span:nth-of-type(2){height: 100%;}
.itemPost:focus > span:nth-of-type(3){width: 100%;}
.itemPost:focus > span:nth-of-type(4){height: 100%;}

@media all and (max-width:1080px){
  .brick{display: block;}
  .itemPost{width: 35rem;}
  .checkWeb p:nth-of-type(3){margin-top: 1rem;}
  .skillWrap{margin: 1.5rem 0; flex-wrap: wrap;}
  .skillWrap .skillRight{margin: 1rem 0 0;}

  .commentWrap{margin: 0 auto; width: 35rem;}

  .btnWrap span{margin-right: .5rem; font-size: 1.2rem; font-weight: bold; vertical-align: middle;}
  .commentBtn i{font-size: 2rem;}

}




</style>