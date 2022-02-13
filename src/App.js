import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from './redux/actions/counter.action'

export default function App() {
  const dispatch = useDispatch()
  const counterReducer = useSelector(({ counterReducer }) => counterReducer)
  return (
    <>
      <button
        onClick={() => {
          dispatch(actions.onIncrementAsync())
        }}
      >
        Increment after 1 second
      </button>
      <button
        onClick={() => {
          dispatch(actions.onIncrement())
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(actions.onDecrement())
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(actions.onAdd(10))
        }}
      >
        Add
      </button>
      <div>Clicked: {counterReducer.count}</div>
    </>
  )
}
