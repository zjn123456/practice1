import { combineReducers } from "redux";
const initData = {
    listData:[],
}
const  setData = (state=initData.listData,action) =>{
    switch(action.type){
    //获取数据
    case "SET_DATA":
        return action.data
        break;
    //执行 减
    case "CUT":
        const datas = [...state]
        datas.map((item,index)=>{
            if(item.id === action.num){
                if(item.count <= 0){
                    item.count = 0;
                }
                else{
                    item.count--
                }
            }
        })
        return datas
        break;
    //执行 加
    case "ADD":
        const datass = [...state]
        datass.map((item,index) =>{
            if(item.id === action.num){
                return item.count ++
            }
        })
        return datass;
        break;
    //判断是否选中
    case "CHECK":
        const flagarr = [...state]
        return  flagarr.map((item)=>{
            return  (item.id === action.id) ? {...item,flag:!item.flag} : item;
        })
        break;
    default :
        return state;
    }
}
//计算总价格
const Total = (all={sumprice:0,num:0},action) =>{
    switch(action.type){
    case 'ALL':
        all.sumprice = 0;
        all.num = 0;
        action.shops.map(item =>{
            if(item.flag){
                all.sumprice +=item.count*item.price
                all.num +=item.count
            } 
        }) 
        return all
    default :
        return all
    }
}
export default combineReducers({
    list:setData,
    total:Total,
})