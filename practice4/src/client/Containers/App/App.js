import React, { Component } from 'react'
import routers from './routerConfig'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
}  from 'react-router-dom'
import Foot from './foot'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <Router>
                <div className='box'>
                    <Switch>
                        <Route exact path='/' render={()=>{return (<Redirect to='/shop'/>)}}  />
                        {routers.map((item,index)=>{
                            return (
                                <Route key={index} path={item.path} component={item.component}></Route>
                            )
                        })}
                    </Switch>
                    <Foot /> 
                </div> 
            </Router>
        )
    }
    
}

export default App;
