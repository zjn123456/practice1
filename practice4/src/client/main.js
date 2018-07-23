import React from 'react'
import ReactDom from 'react-dom'
import App from './Containers/App'
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux' 
import reducers from './Redux/reducers'
import thunk from 'redux-thunk'
// const store = createStore(reducers)
const store=createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

ReactDom.render(
    <Provider store={store}>
        <App age={18}/>
    </Provider>,
    document.getElementById('app')
)

