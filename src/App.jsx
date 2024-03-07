import { useState , useEffect} from 'react';

import { AgGridReact } from 'ag-grid-react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddBook from './AddBook';

import './App.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  const [Books, setBooks] = useState([]);

  const columnDefs = [
    { field: 'author', sortable: true, filter: true},
    { field: 'isbn', sortable: true, filter: true},
    { field: 'price', sortable: true, filter: true},
    { field: 'title', sortable: true, filter: true},
    { field: 'year', sortable: true, filter: true},
    {
      headerName: '',
      field: 'id',
      width: 90,
      cellRenderer: params =>
      <IconButton onClick={() => deleteBook(params.value)} size="small" color="error" >
        <DeleteIcon />
      </IconButton>
    }
  ]
  
  useEffect( () => {
    fetchItems();
  },[]
  )
 
  const fetchItems = () =>{
    fetch('https://bookstore-e2def-default-rtdb.europe-west1.firebasedatabase.app/books/.json')
    .then(response => response.json())
    .then (data => addKeys(data))
    .catch(err => console.error(err))
  }
  
  const addBook = (newBook)=> {
    fetch('https://bookstore-e2def-default-rtdb.europe-west1.firebasedatabase.app/books/.json',
    {
      method: 'POST',
      body: JSON.stringify(newBook)
    })
    .then(response => fetchItems())
    .catch(err => console.error(err))
  }

  const addKeys = (data) => {
    const keys = Object.keys(data);
    const valueKeys = Object.values(data).map((item,index) =>
    Object.defineProperty(item, 'id', {value: keys[index]}));
    setBooks(valueKeys);
  }

  const deleteBook = (id) => {
    fetch(`https://bookstore-e2def-default-rtdb.europe-west1.firebasedatabase.app/books/${id}.json`,
    { method: 'DELETE',
    })
    .then(response => fetchItems())
    .catch(err => console.error(err))
  }

  return (
    <>
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            Book Store
          </Typography>
        </Toolbar>
      </AppBar> 
      <AddBook addBook={addBook} />
     <div className="App" style = {{width:'1400px',height:'800px'}}> 
      <AgGridReact 
        rowData={Books}
        columnDefs={columnDefs}
      />
    </div>
    
    </>
  );
}

export default App;