// import { loginFetch } from '../Utile/api'
// export const fetchLogin = (userInfo) => {
//     return (dispatch) => {
//         return loginFetch('/api/login', 'GET', userInfo)
//             .then(json => {
//                 console.log(json)
//                 if(json.code){
//                     dispatch({type:"SET_INFO",info:json});
//                     return Promise.resolve(json);
//                 }else{
//                     return Promise.resolve(json);
//                 }
//             })
//     }
// }


export const setProductNum = (pid, price, num) => {
    return {
        type: 'SETPRODUCTNUM',
        pid,
        price,
        num,
    }
}