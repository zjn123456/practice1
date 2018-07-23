import React, { Component } from 'react'
class Detail extends Component  {
    Back(){
        this.props.history.push('/shop')
    }
    render () {
        const data = this.props.location.state//解析当前点击数据
        return (
            <div>
                <h5>{data.tit}<b onClick={()=>{
                    this.Back()
                }}>     返回</b></h5>   
            </div>
        )
    }
}
export default Detail;
