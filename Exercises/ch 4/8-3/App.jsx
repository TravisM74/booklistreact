import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [textColor, setTextColor] = useState("black");
  const [count, setCount] = useState(0);
  return (
    <>
      
      <p style={{color: textColor}}>Hello World!</p>
      <button onClick={ () => {
          textColor == "black" ? setTextColor("red") : setTextColor("black")
        }
      }
      >Change color</button>
    </>
  )
}

export default App
