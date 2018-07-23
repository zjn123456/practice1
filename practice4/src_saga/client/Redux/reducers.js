import { combineReducers } from 'redux'

const userInfo = (state = {}, action) =>{
    switch(action.type){
    case 'SET_INFO':
        return Object.assign({},state,{
            ...action.info,
        })
    default:
        return state;
    }
}

const shopCarStatus = (state = {
    code: 0,
    msg: '',
}, action) => {
    switch(action.type) {
    case 'SAVE_SHOP_CAR':
        // let info;
        // if(action.error) {
        //     info = action.error
        // } else {
        //     info = action.list
        // }
        return Object.assign({},state,{
            // status: info,
            ...action.payLoad,
        })
        break;
    case 'SETPRODUCTNUM':
        console.log(state.data)
        return Object.assign({}, state, {
            total: action.price * action.num + state.total,
            data: state.data.map((item, index) => {
                if(item.id === action.pid) {
                    return {
                        ...item,
                        num: item.num + action.num,
                    }
                }
                return {
                    ...item,
                }
            }),
        })
        break;
    default:
        return state;
    }
}

export default combineReducers({
    userInfo,
    shopCarStatus,
})


