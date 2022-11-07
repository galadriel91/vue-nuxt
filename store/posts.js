export const state = () => ({
    workItems : [
        {
            id:Math.floor(Math.random()*1000),
            title:'도미노피자 퍼블리싱 연습',
            vue:false,
            react:false,
            markup:true,
            time:"2020-12",
            value:0,
            Comments:[],
            skills:[
                {src:require("@/assets/imgs/html5.png")},{src:require("@/assets/imgs/css3.png")},{src:require("@/assets/imgs/js.png")}
            ],
            posts:{
                index:1,
                mainImage:require("@/assets/imgs/domino.png"),
                title:'도미노피자',
                subTitle:'웹 사이트 마크업 연습',
                sites:[
                    {link:'https://web.dominos.co.kr/main' , name:"기존사이트"},
                    {link:'http://galadriel91.cafe24.com/domino/index.html' , name:"리뉴얼 사이트"},
                    {link:'https://github.com/galadriel91/html-css/tree/master/Domino' , name:"설명 및 코드"}
                ],
                support:[
                    {src:require("@/assets/imgs/ie11.png") , title:'익스플로러 로고'},
                    {src:require("@/assets/imgs/Chromium.png") , title:'크로미움 로고'},
                    {src:require("@/assets/imgs/fox.png") , title:'파이어폭스 로고'}
                ]
            }
        },
        {
            id:Math.floor(Math.random()*1000),
            title:'폴라초이스 퍼블리싱 연습',
            vue:false,
            react:false,
            markup:true,
            time:"2020-12",
            value:0,
            Comments:[],
            skills:[
                {src:require("@/assets/imgs/html5.png")},{src:require("@/assets/imgs/css3.png")},{src:require("@/assets/imgs/js.png")}
            ],
            posts:{
                index:2,
                mainImage:require("@/assets/imgs/paula.png"),
                title:'폴라초이스',
                subTitle:'웹 사이트 마크업 연습',
                sites:[
                    {link:'https://www.paulaschoice.co.kr/FrontStore/iStartPage.phtml' , name:"기존사이트"},
                    {link:'http://galadriel91.cafe24.com/paula/index.html' , name:"리뉴얼 사이트"},
                    {link:'https://github.com/galadriel91/html-css/tree/master/Paula' , name:"설명 및 코드"}
                ],
                support:[
                    {src:require("@/assets/imgs/ie11.png") , title:'익스플로러 로고'},
                    {src:require("@/assets/imgs/Chromium.png") , title:'크로미움 로고'},
                    {src:require("@/assets/imgs/fox.png") , title:'파이어폭스 로고'}
                ]
            }
        },
        {
            id:Math.floor(Math.random()*1000),
            title:'할리스커피 퍼블리싱 연습',
            vue:false,
            react:false,
            markup:true,
            time:"2020-12",
            value:0,
            Comments:[],
            skills:[
                {src:require("@/assets/imgs/html5.png")},{src:require("@/assets/imgs/css3.png")},{src:require("@/assets/imgs/js.png")}
            ],
            posts:{
                index:3,
                mainImage:require("@/assets/imgs/hollys.png"),
                title:'할리스 커피',
                subTitle:'웹 사이트 반응형 마크업 연습',
                sites:[
                    {link:'https://www.hollys.co.kr/' , name:"기존사이트"},
                    {link:'http://galadriel91.cafe24.com/hollys/index.html' , name:"리뉴얼 사이트"},
                    {link:'https://github.com/galadriel91/html-css/tree/master/Hollys' , name:"설명 및 코드"}
                ],
                support:[
                    {src:require("@/assets/imgs/Chromium.png") , title:'크로미움 로고'},
                    {src:require("@/assets/imgs/fox.png") , title:'파이어폭스 로고'}
                ]
            }
        },
        {
            id:Math.floor(Math.random()*1000),
            vue:false,
            react:false,
            markup:true,
            title:'알파색채 퍼블리싱 연습',
            time:"2020-12",
            value:0,
            Comments:[],
            skills:[
                {src:require("@/assets/imgs/html5.png")},{src:require("@/assets/imgs/css3.png")},{src:require("@/assets/imgs/js.png")}
            ],
            posts:{
                index:4,
                mainImage:require("@/assets/imgs/alpha.png"),
                title:'알파색채',
                subTitle:'웹 사이트 반응형 마크업 연습',
                sites:[
                    {link:'http://www.alphacolor.com/' , name:"기존사이트"},
                    {link:'http://galadriel91.cafe24.com/alphacolor/index.html' , name:"리뉴얼 사이트"},
                    {link:'https://github.com/galadriel91/html-css/tree/master/AlphaColor' , name:"설명 및 코드"}
                ],
                support:[
                    {src:require("@/assets/imgs/ie11.png") , title:'익스플로러 로고'},
                    {src:require("@/assets/imgs/Chromium.png") , title:'크로미움 로고'},
                    {src:require("@/assets/imgs/fox.png") , title:'파이어폭스 로고'}
                ]
            }
        },
        {
            id:Math.floor(Math.random()*1000),
            title:'초대장 퍼블리싱 연습',
            time:"2021-01",
            vue:false,
            react:false,
            markup:true,
            value:0,
            Comments:[],
            skills:[
                {src:require("@/assets/imgs/html5.png")},{src:require("@/assets/imgs/css3.png")},{src:require("@/assets/imgs/js.png")}
            ],
            posts:{
                index:5,
                mainImage:require("@/assets/imgs/gondor.png"),
                title:'초대장',
                subTitle:'인터렉티브 웹 연습',
                sites:[
                    {link:'http://galadriel91.cafe24.com/inviwork/index.html' , name:"제작사이트"},
                    {link:'https://github.com/galadriel91/interactive-web/tree/master/invitation-page/invi-work' , name:"설명 및 코드"}
                ],
                support:[
                    {src:require("@/assets/imgs/Chromium.png") , title:'크로미움 로고'},
                    {src:require("@/assets/imgs/fox.png") , title:'파이어폭스 로고'}
                ]
            }
        },
        {
            id:Math.floor(Math.random()*1000),
            title:'CRUD 구현 연습',
            vue:true,
            react:true,
            markup:false,
            time:"2020-12",
            value:0,
            Comments:[],
            skills:[
                {src:require("@/assets/imgs/vue.png")},{src:require("@/assets/imgs/react-logo.png")}
            ],
            posts:{
                index:6,
                mainImage:require("@/assets/imgs/reactvue.png"),
                title:'Vue & React',
                subTitle:'기본 CRUD 학습 및 구현',
                sites:[
                    {link:'https://react-crudmemo.netlify.app/' , name:"React 사이트"},
                    {link:'https://vue-vuexcrud.netlify.app/' , name:"Vue 사이트"},
                    {link:'https://github.com/galadriel91/vue-memo/tree/master/memo-upgrade' , name:"설명 및 코드"}
                ],
                support:[
                    {src:require("@/assets/imgs/Chromium.png") , title:'크로미움 로고'},
                    {src:require("@/assets/imgs/fox.png") , title:'파이어폭스 로고'}
                ]
            }
        },
        {
            id:Math.floor(Math.random()*1000),
            title:'프레임워크 라우터 연습',
            vue:true,
            react:true,
            markup:false,
            time:"2020-12",
            value:0,
            Comments:[],
            skills:[
                {src:require("@/assets/imgs/vue.png")},{src:require("@/assets/imgs/react-logo.png")}
            ],
            posts:{
                index:7,
                mainImage:require("@/assets/imgs/reactvue.png"),
                title:'Vue & React',
                subTitle:'기본 라우터 학습 및 구현',
                sites:[
                    {link:'https://react-routertest.netlify.app/' , name:"React 사이트"},
                    {link:'https://vue-routertest.netlify.app/responsive' , name:"Vue 사이트"},
                    {link:'https://github.com/galadriel91/vue-router' , name:"설명 및 코드"}
                ],
                support:[
                    {src:require("@/assets/imgs/Chromium.png") , title:'크로미움 로고'},
                    {src:require("@/assets/imgs/fox.png") , title:'파이어폭스 로고'}
                ]
            }
        },
        {
            id:Math.floor(Math.random()*1000),
            title:'Vue API & 동적라우팅 연습',
            vue:true,
            react:false,
            markup:false,
            value:0,
            Comments:[],
            skills:[
                {src:require("@/assets/imgs/vue.png")}
            ],
            time:"2021-01",
            posts:{
                index:8,
                mainImage:require("@/assets/imgs/vue-main-logo.png"),
                title:'Vue API',
                subTitle:'API & 동적라우트 구현',
                sites:[
                    {link:'https://news.ycombinator.com/' , name:"기존 사이트"},
                    {link:'https://vue-hackerapi.netlify.app' , name:"제작 사이트"},
                    {link:'https://github.com/galadriel91/vue-hacker' , name:"설명 및 코드"}
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