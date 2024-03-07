import { useState } from 'react';
import './App.css';

import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import TextField from '@mui/material/TextField';

function App() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

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
      <TextField  placeholder="Description"
                  variant = "standard" 
                  label="Description" 
                  name="description" 
                  value={todo.description} 
                  onChange={inputChanged} 
      />
      <TextField variant = "standard" label="Date" name="date" value={todo.date} onChange={inputChanged}/>
      <Button variant="outlined" onClick={addTodo}>Add</Button>
      <table>
        <tbody>
       {
          todos.map((todo, index) => 
            <tr key={index}>
              <td>{todo.description}</td>
             <td>{todo.date}</td>
             <td><IconButton  size="small" 
                          variant="outlined" 
                          color ="error" 
                          onClick={() => deleteTodo(index)} >
                            <DeleteIcon />
                  </IconButton>
              </td>
            </tr>)
        }
        </tbody>
      </table>
    </>
  );
}

export default App;