import { useState } from 'react';
import './App.css';


function App() {
  const [num1, setNum1] = useState (0);
  const [num2, setNum2] = useState (0);

  const getNumber1 = (event) => {
    setNum1(event.target.value);
  }
  const getNumber2 = (event) => {
    setNum2(event.target.value);
  }
  const [result, setResult] = useState (0);
  const AddNums = ()=> {
    setResult(parseInt(num1) + parseInt(num2));
  }
  const SubNums = ()=> {
    setResult(parseInt(num1) - parseInt(num2));
  }

  return (
    <>
      <p> Result = {result}</p>
      <input placeholder='Name' value ={num1} onChange={getNumber1}/>
      <input placeholder='Age' value={num2} onChange={getNumber2} />
      <button onClick={AddNums} >+</button>
      <button onClick={SubNums} >-</button>
    </>
  )
}

export default App
