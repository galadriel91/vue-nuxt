export const state = () => ({
    isLoading: true,
    emailPost:[]
})

export const mutations = {
    SET_OFF_LOADING(state){
        state.isLoading = false
    },
    SET_ON_LOADING(state){
        state.isLoading = true
    },
    ADD_EMAIL(state,payload){
        state.emailPost.unshift(payload)
    }
}

export const actions = {
    ADDEMAIL({commit} , payload){
        commit('ADD_EMAIL' , payload)
    }
}