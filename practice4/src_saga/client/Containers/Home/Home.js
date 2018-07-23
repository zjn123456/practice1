import React, { Component } from 'react';
import './Home.css'
import Item from './Item'

class Home extends React.Component {
    constructor () {
        super()
        this.state = {
            data: [
                {
                    text: '智利XL级车厘子',
                    type: '可用商品券兑换',
                    img: 'https://image.missfresh.cn/e16a25f9ee174777be21a95a7fe412d3.jpg?iopcmd=thumbnail&type=4&width=200',
                },
                {
                    text: '库尔勒香梨',
                    type: '每一颗香梨 都有天然果香',
                    img: 'https://image.missfresh.cn/285db074d0da4b5bbaebad8ad4b068ca.jpg?iopcmd=thumbnail&type=4&width=200',
                },
                {
                    text: '四川金奇异果',
                    type: '自然成熟的滑爽 拿来就能吃',
                    img: 'https://image.missfresh.cn/aa6c07b328de436d93bd31d2144a36fc.jpg?iopcmd=thumbnail&type=4&width=200',
                },
            ],
        }
    }
    render() {
        return (
            <div className='info'>
                {
                    this.state.data.map((item, index) => {
                        return (
                            <dl key={index}>
                                <dt>
                                    <img src={item.img}/>
                                </dt>
                                <dd>
                                    <h3>{item.text}</h3>
                                    <p>{item.type}</p>
                                </dd>
                            </dl>
                        )
                    })
                }
            </div>
        )
    }
}

export default Home;