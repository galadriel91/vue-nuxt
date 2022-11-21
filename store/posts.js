export const state = () => ({
    workItems : [
        {
            id:1,
            title:'도미노피자 메인 퍼블리싱',
            vue:false,
            react:false,
            markup:true,
            time:"2022-10",
            value:0,
            Comments:[],
            skills:[
                {src:require("@/assets/imgs/html5.png")},{src:require("@/assets/imgs/css3.png")},{src:require("@/assets/imgs/js.png")}
            ],
            posts:{
                index:1,
                mainImage:require("@/assets/imgs/domino.png"),
                title:'도미노피자',
                subTitle:'웹 사이트 퍼블리싱',
                sites:[
                    { link: 'https://web.dominos.co.kr/main', name: '기존사이트' },
                    {
                        link: 'http://lothlorien91.cafe24.com/domino/',
                        name: '리뉴얼 사이트',
                    },
                    {
                        link: 'https://github.com/galadriel91/html-basics/tree/master/02.Domino',
                        name: '깃허브',
                    },
                ],
                support:[
                    {src:require("@/assets/imgs/ie11.png") , title:'익스플로러 로고'},
                    {src:require("@/assets/imgs/Chromium.png") , title:'크로미움 로고'},
                    {src:require("@/assets/imgs/fox.png") , title:'파이어폭스 로고'}
                ]
            }
        },
        {
            id:2,
            vue:false,
            react:false,
            markup:true,
            title:'알파색채 메인 퍼블리싱',
            time:"2022-10",
            value:0,
            Comments:[],
            skills:[
                {src:require("@/assets/imgs/html5.png")},{src:require("@/assets/imgs/css3.png")},{src:require("@/assets/imgs/js.png")}
            ],
            posts:{
                index:2,
                mainImage:require("@/assets/imgs/alpha.png"),
                title:'알파색채',
                subTitle:'웹 사이트 퍼블리싱',
                sites: [
                    { link: 'http://www.alphacolor.com/', name: '기존사이트' },
                    {
                        link: 'http://lothlorien91.cafe24.com/alpha/',
                        name: '리뉴얼 사이트',
                    },
                    {
                        link: 'https://github.com/galadriel91/html-basics/tree/master/03.AlphaColor',
                        name: '깃허브',
                    },
                ],
                support:[
                    {src:require("@/assets/imgs/ie11.png") , title:'익스플로러 로고'},
                    {src:require("@/assets/imgs/Chromium.png") , title:'크로미움 로고'},
                    {src:require("@/assets/imgs/fox.png") , title:'파이어폭스 로고'}
                ]
            }
        },
        {
            id:3,
            title:'할리스커피 메인 퍼블리싱',
            vue:false,
            react:false,
            markup:true,
            time:"2022-10",
            value:0,
            Comments:[],
            skills:[
                {src:require("@/assets/imgs/html5.png")},{src:require("@/assets/imgs/css3.png")},{src:require("@/assets/imgs/js.png")}
            ],
            posts:{
                index:3,
                mainImage:require("@/assets/imgs/hollys.png"),
                title:'할리스 커피',
                subTitle:'웹 사이트 퍼블리싱',
                sites: [
                    { link: 'https://www.hollys.co.kr/', name: '기존사이트' },
                    {
                        link: 'http://lothlorien91.cafe24.com/hollys/index.html',
                        name: '리뉴얼 사이트',
                    },
                    {
                        link: 'https://github.com/galadriel91/html-basics/tree/master/04.Hollys',
                        name: '깃허브',
                    },
                ],
                support:[
                    {src:require("@/assets/imgs/Chromium.png") , title:'크로미움 로고'},
                    {src:require("@/assets/imgs/fox.png") , title:'파이어폭스 로고'}
                ]
            }
        },
        {
            id:4,
            title:'Hacker News 뷰어 사이트',
            vue:true,
            react:false,
            markup:false,
            time:"2022-10",
            value:0,
            Comments:[],
            skills:[
                {src:require("@/assets/imgs/vue.png")},{src:require("@/assets/imgs/react-logo.png")}
            ],
            posts:{
                index:4,
                mainImage:require("@/assets/imgs/vue-main-logo.png"),
                title:'Hacker News',
                subTitle:'Hacker News 클론',
                sites: [
                    {
                        link: 'https://news.ycombinator.com/',
                        name: '기존 사이트',
                    },
                    {
                        link: 'https://vue-hacker.netlify.app',
                        name: '클론 사이트',
                    },
                    {
                        link: 'https://github.com/galadriel91/vue-hacker',
                        name: '깃허브',
                    },
                ],
                support:[
                    {src:require("@/assets/imgs/Chromium.png") , title:'크로미움 로고'},
                    {src:require("@/assets/imgs/fox.png") , title:'파이어폭스 로고'}
                ]
            }
        },
        {
            id:5,
            title:'PORTFOLIO 작업',
            vue:true,
            react:false,
            markup:false,
            value:0,
            Comments:[],
            skills:[
                {src:require("@/assets/imgs/vue.png")}
            ],
            time:"2022-10",
            posts:{
                index:5,
                mainImage:require("@/assets/imgs/vue-main-logo.png"),
                title:'PORTFOLIO',
                subTitle:'PORTFOLIO 작업',
                sites:[
                    { link: 'https://whitewave.netlify.app', name: '기존 사이트' },
                    {
                        link: 'https://github.com/galadriel91/vue-nuxt',
                        name: '깃허브',
                    },
                ],
                support:[
                    {src:require("@/assets/imgs/ie11.png") , title:'익스플로러 로고'},
                    {src:require("@/assets/imgs/Chromium.png") , title:'크로미움 로고'},
                    {src:require("@/assets/imgs/fox.png") , title:'파이어폭스 로고'}
                ]
            }
        },
    ],
    showLimit : 3,
    hasMorePost: true 
})

export const mutations = {
    MORE_ITEM(state){
        const diff = state.workItems.length > state.showLimit
        if(diff){
            state.showLimit = state.showLimit + 3
        }else{
            state.showLimit = 3
        }
        state.hasMorePost = state.workItems.length > state.showLimit
    },
    SAVE_STAR(state ,payload){
        const index = state.workItems.findIndex(v=>v.id === payload.id)
        state.workItems[index].value = payload.value
    },
    ADD_COMMENT(state , payload){
        const index = state.workItems.findIndex(v=>v.id === payload.id)
        state.workItems[index].Comments.unshift(payload)
    }
}

export const actions = {
    MOREITEM({state,commit}){
        if(state.hasMorePost){
            commit('MORE_ITEM')
        }
    },
    ADDCOMMENT({commit} , payload){
        commit('ADD_COMMENT' , payload)
    }
}