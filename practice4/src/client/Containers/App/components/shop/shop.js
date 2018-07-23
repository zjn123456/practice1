import React, { Component } from 'react'
import {combineReducers} from 'redux'
import {connect} from 'react-redux'
import arr from './data/data.js'
import {Data,Cut,Add, Toggle,Total} from '../../../../Redux/actions'
class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            brr:arr,
        }
    }
    Detail (item){
        this.props.history.push({
            pathname:'/detail',
            state:item,
        }   
        )
    }
    render() {
        return (
            <div className='box'>
                <h1>购物车</h1>
                {this.props.list.list&&this.props.list.list.map((item,index)=>{
                    return (
                        <div key= {index}>
                            <h4 onClick={()=>{
                                this.Detail(item)
                            }}>
                                {item.name}</h4>
                            <p><input type='checkbox' defaultChecked={item.flag} onChange={()=>{
                                this.props.dispatch(Toggle(item.id))
                            }}/>{item.tit}</p> 
                            <p>{item.price}</p>
                            <p>
                                <span onClick={()=>{
                                    this.props.dispatch(Cut(item.id))
                                }}>-</span>
                                <span>{item.count}</span>
                                <span onClick={()=>{
                                    this.props.dispatch(Add(item.id))
                                }}>+</span>
                            </p>
                        </div>
                    )
                })}
                <div>
                    <h4>总数量：{this.props.list.total.num}</h4>
                    <h4>总价：{this.props.list.total.sumprice}</h4>
                </div>
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState) {
        const { dispatch } = this.props;
        dispatch(Total(nextProps.list.list))
        return true;
    }
    componentDidMount(){
        this.props.dispatch(Data(this.state.brr))
    }
}
const mapStateToProps = (state) =>{
    return {
        list:state,
    }
}

export default connect(mapStateToProps)(Shop);
