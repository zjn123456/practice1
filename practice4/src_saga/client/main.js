import React from 'react'
import ReactDom from 'react-dom'
import App from './Containers/App'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import thunk from 'redux-thunk';
import reducers from './Redux/reducers';
import sagas from './Redux/sagas';
import Login from './Containers/App/Login'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(sagas)

ReactDom.render(
    <Provider store={store}>
        <Router>
            <App>
                <Route path='/login' component={Login}></Route>
            </App>
        </Router>
    </Provider>,
    document.getElementById('app')
)
