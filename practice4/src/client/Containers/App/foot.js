import React,{Components, Component} from 'react'
import {withRouter} from 'react-router-dom'
import routers from './routerConfig'

class Foot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active_index:0,
        }
    }
    onChange(index,path){
        this.props.history
        const {history} = this.props
        history.push(path)
        this.setState ({
            active_index:index,
        })
    }
    render () {
        return (
            <footer className='footer'>
                {routers.map((item,key)=>{
                    return (
                        <span key={key} 
                            style={{background:(key===this.state.active_index?'red':" " )}} 
                            onClick={()=>{
                                this.onChange(key,item.path)
                            }}>{item.name}</span>
                    )
                })}
            </footer>
        )
    }
}
export default withRouter(Foot);