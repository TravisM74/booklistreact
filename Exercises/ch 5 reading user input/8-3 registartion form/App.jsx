import { useState } from 'react';
import './App.css';


function App() {
  const [person, setPerson] = useState ({firstname: '', lastname: '', email: '', phone : ''});
  
  const updateFields = (event) => {
    setPerson({...person, [event.target.name]: event.target.value});
  }

  const submitClicked = () => {
     var emptyFields = false;
     if (person.firstname == '') emptyFields = true;
     if (person.lastname == '') emptyFields = true;
     if (person.email == '') emptyFields = true;
     if (person.phone == '') emptyFields = true;

     if (emptyFields) {
      alert ('All fields are required');
     } else {
      alert (`Welcome ${person.firstname} ${person.lastname}`);
     }
  }
  const resetClicked = () => {
    setPerson({firstname: '', lastname: '', email: '', phone: ''});
  }

  return (
    <>
      <div>
        <input placeholder='First Name' name='firstname' value ={person.firstname} onChange={updateFields}/>
        <input placeholder='Last Name' name='lastname' value ={person.lastname} onChange={updateFields}/>
      </div>
      <div>
        <input placeholder='Email' name='email' value ={person.email} onChange={updateFields}/>
        <input placeholder='Phone' name='phone' value ={person.phone} onChange={updateFields}/>
      </div>
      <button onClick={submitClicked} >Submit</button>
      <button onClick={resetClicked} >Reset</button>
      
    </>
  )
}

export default App
