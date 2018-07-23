const Data = (data) =>{
    return {
        type:"SET_DATA",
        data,
    }
}
const Cut = (num) =>{
    return {
        type:"CUT",
        num,
    }
}
const Add = (num) =>{
    return {
        type:"ADD",
        num,
    }
}
const Toggle=(id) =>{
    return {
        type:'CHECK',
        id,
    }
}
const Total =(shops) =>{
    return {
        type:"ALL",
        shops,
    }
    
}
export {
    Data,
    Cut,
    Add,
    Toggle,
    Total,
}