import React from 'react'
import { increment, decrement, reset } from '../features/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import style from '../assets/counter.module.css'

const Counter = () => {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()  // this talks to the redux store and retrives info from the store
  return (
    <>
    <span>{count}</span><br />
    <div className={style.theButtons}>
      <button onClick={()=> {dispatch(increment())}}>+</button>
      <button onClick={()=> {dispatch(decrement())}}>-</button>
      <button onClick={()=> {dispatch(reset())}}><p>reset</p></button>
    </div>
    </>
  )
}

export default Counter
