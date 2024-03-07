import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const inputChanged = (event) =>{
    setName(event.target.value);
  }
  return (
    <>
    <p>{name}</p>
     <input value = {name}  onChange={inputChanged} />
    </>
  )
}

export default App
