import { useState } from 'react'
import React from 'react'
import './App.css'
import Login from './Myreact' 

function App() {
  // const [count, setCount] = useState(0)
  
const listOfitems = ["suger", "honey", "beans", "cakes", "bread"];
const newItems = ["yogurt", "butter", "fries", "creams", "bread"];

  return (
    <>
      <div>
        {React.createElement('h1', {id: 'testing'}, 'i am testing')}
        <Login items={listOfitems}/><br />
        <Login items={newItems}/>
      </div> 
    </>
  )
}

export default App
