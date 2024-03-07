import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0);
  return (
    <>
    {count > 10 ?
    <p>You have pressed the button more then 10 times</p>
    : <p>You have pressed the button {count} times </p>
    }
    <button onClick={() => setCount(count+1)}>+</button>
    <button onClick={() => setCount(count-1)}>-</button>
    <button onClick={() => setCount(0)}>Reset</button>
    
    </>
  )
}

export default App
