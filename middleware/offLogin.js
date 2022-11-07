// 로그인 되어 있을 때
export default function({store , redirect}){
    if(!store.state.users.userData){
        redirect('/')
    }
}