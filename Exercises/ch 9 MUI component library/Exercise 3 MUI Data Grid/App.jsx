import { useState } from 'react';
import './App.css';

import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Tooltip from '@mui/material/Tooltip';

import { DataGrid } from '@mui/x-data-grid';

function App() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

 const columns = [
  
  {field: "todo", headerName: "Description", width: 120},
  {field: "date", headerName: "Date", width:90},
 ];

 const rows= todos.map((atodo , index) => ({
    id: index, 
    todo : atodo.description,
    date : atodo.date,
 }))


  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  return (
    <>
    
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Todolist
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack 
        direction="row" 
        spacing={2} 
        mt={2} 
        justifyContent="center"
        alignItems="center">
        <TextField  placeholder="Description"
                    variant = "standard" 
                    label="Description" 
                    name="description" 
                    value={todo.description} 
                    onChange={inputChanged} 
                    />
        <TextField variant = "standard" label="Date" name="date" value={todo.date} onChange={inputChanged}/>
        <Button variant="outlined" onClick={addTodo}><SaveIcon />Add</Button>
      </Stack>
    <div style= {{height:500, Width:"100%"}}>
      <DataGrid 
        rows = {rows}
        columns = {columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
      
    </div>
       
    </>
  );
}

export default App;