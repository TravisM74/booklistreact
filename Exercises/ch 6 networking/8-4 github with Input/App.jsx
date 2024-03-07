import { useState, useEffect } from 'react';
import './App.css';


function App() {
 const [results, setResults] = useState([]);
 const [search, setSearch] = useState('');
 const [filterd, setFilterd] = useState ([]);


 const updateSearch = (event) => {
    setSearch(event.target.value);
 }

 const fetchData = () =>{
  fetch( 'https://api.github.com/search/repositories?q=react')
  .then(response => response.json())
  .then(resData => {
    setResults(resData.items)
  })  
  .catch(err => console.error(err))
 };

 const searchFilter = () => {
  setFilterd(results.filter(result => result.full_name.includes(search) ))
 }

  return (
    <>
    <div>
      <button onClick={fetchData}>FetchData</button>
      <h1>Repositories</h1>
      <input placeHolder="Search Name." onChange={updateSearch}></input>
      <button onClick={searchFilter}>Search</button>



    </div>
    <table>
        <h2>filter</h2>
        <tbody>
          
            <th>Name</th>
            <th>Url</th>
            { 
              filterd.map((result) =>
              <tr key={result.index}>
                <td>{result.full_name}</td>
                <td>{result.html_url}</td>
              </tr>
              )
            }
          
        </tbody>
      </table>
      <table>
        <h2>all</h2>
        <tbody>
          
            <th>Name</th>
            <th>Url</th>
            { 
              results.map((result) =>
              <tr key={result.index}>
                <td>{result.full_name}</td>
                <td>{result.html_url}</td>
              </tr>
              )
            }
          
        </tbody>
      </table>
    </>
  )
}

export default App
