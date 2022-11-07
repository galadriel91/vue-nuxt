export const state = () => ({
   userData : null
})

export const mutations = {
    SET_USER(state,payload){
        state.userData = payload
    },
    SET_NICK(state , payload){
        state.userData.nickname = payload.nickname
    },
    SET_COLOR(state , payload){
        state.userData.color = payload.color
    },
    FAV_ITEM(state , payload){
       const index = state.userData.favItem.findIndex(v=>v.id === payload.id)
       if(index + 1){    
            state.userData.favItem[index] = payload
       }else{
            state.userData.favItem.unshift(payload)
       }
    },
    REMOVE_VALUE(state,payload){
        const index = state.userData.favItem.findIndex(v=>v.id===payload.id)
        state.userData.favItem.splice(index , 1)
    }
}

export const actions = {
   SIGNUP({commit} , payload){
        commit('SET_USER' , payload)
   },
   LOGOUT({commit}){
       commit('SET_USER' , null)
   },
   LOGIN({commit} , payload){
    commit('SET_USER' ,payload)
   },
   SETNICK({commit} , payload){
       commit('SET_NICK' , payload)
   },
   REMOVEVALUE({commit} , payload){
       commit('REMOVE_VALUE' , payload)
   }
}