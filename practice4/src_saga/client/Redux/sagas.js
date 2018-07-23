import { call, put, takeEvery } from 'redux-saga/effects'

import { loginFetch, getShopcar } from '../Utile/api.js'
function * fetchUser() {
    try {
        const data = yield loginFetch('/login').then(json => json)
        yield put({
            type: 'FETCH_LOGIN_STATUS',
            data,
        })
    }catch (e) {
        yield put({
            type: 'FETCH_LOGIN_FAILED',
            error: e,
        })
    }
} 

function * fetchShopCar (action) {
    console.log(action)
    const json = yield call(getShopcar, 'api/shopcar', 'POST', action.uid)
    // console.log(json)
    yield put ({type: 'SAVE_SHOP_CAR', payLoad: {
        ...json,
    }})
}

function * mySaga() {
    yield takeEvery('USER_LOGIN_FETCH', fetchUser)
    yield takeEvery('USER_SHOP_CAR', fetchShopCar)
}

export default mySaga;