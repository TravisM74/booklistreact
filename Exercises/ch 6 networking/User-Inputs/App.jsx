import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState('');
  const inputChanged = (event) => {
    setUserId(event.target.value);
  }

 const fetchData = () =>{
  fetch('https://reqres.in/api/users/' + userId)
  .then(response => {
    if(response.status  !== 200){
      throw new Error('Responce status not ok');
    }
    return response.json();
  })
  .then(resData => setUser(resData.data))
  .catch(err => console.error(err))
 };

  return (
    <>
    <input placeholder='User_Id' value={userId} onChange={inputChanged} />
    <button onClick={fetchData}>Fetch Data</button>
      <table>
        <tbody>
          {
           
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            
          }
        </tbody>
      </table>
    </>
  )
}

export default App
