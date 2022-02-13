import { put, takeEvery, all } from 'redux-saga/effects'
import { ADD, DECREMENT, INCREMENT, INCREMENT_REQ } from '../actionTypes'

export function* setIncrementAction() {
  yield put({ type: INCREMENT })
}

export function* setDecrementAction() {
  yield put({ type: DECREMENT })
}

export function* setAddAction() {
  yield put({ type: ADD, payload })
}

///---------------------------

function* watchIncrementAction() {
  yield takeEvery(INCREMENT_REQ, setIncrementAction)
}

function* watchDecrementAction() {
  yield takeEvery(DECREMENT_REQ, setDecrementAction)
}

function* watchAddAction() {
  yield takeEvery(ADD_REQ, setAddAction)
}
