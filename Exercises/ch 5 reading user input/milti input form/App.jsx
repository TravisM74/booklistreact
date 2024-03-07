import { useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({firstname: '', lastname: '', email: ''});
  
  const inputChanged = (event) =>{
    setPerson({...person, [event.target.name]: event.target.value});
  }
  const showAlert = () => {
    alert(`Hello ${person.firstname} ${person.lastname}`)
  }

  const formSubmitted = (event) => {
    event.preventDefault();
  }
  return (
    <>
      <p>Name :{person.firstname} {person.lastname} Email:{person.email}</p>
      <form onSubmit={formSubmitted}>
        <input name ="firstname" value={person.firstname} placeholder='First Name' onChange={inputChanged} />
        <input name= "lastname" value={person.lastname} placeholder='Last Name' onChange={inputChanged} />
        <input name = "email" value={person.email} placeholder='Email' onChange={inputChanged} />
        <input type="submit" value="submit" />
      </form>
     
    
    </>
  )
}

export default App
