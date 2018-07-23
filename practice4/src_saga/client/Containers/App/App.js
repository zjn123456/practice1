import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from './ProductItem'
import Price from './Price'
import './App.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({type: 'USER_SHOP_CAR', uid: 1234})
    }

    render() {
        const { shopCarStatus } = this.props;
        console.log(shopCarStatus.data)
        return (
            <div className='wrap'>
                {   
                    (shopCarStatus.code === 1) ? <ProductItem dispatch={this.props.dispatch} list={shopCarStatus}/> : <div>购物车为空</div>
                }
                <Price total={shopCarStatus.total} shopCarStatus={shopCarStatus}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shopCarStatus: state.shopCarStatus,
    }
}

export default connect(mapStateToProps)(App);