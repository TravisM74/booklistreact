import { useState } from 'react';
import './App.css';
import TodoTable from './TodoTable';

function App() {
 const [todo, setTodo] = useState({description:'', date: ''});

 const inputChanged = (event) => {
  setTodo({...todo, [event.target.name]: event.target.value});
 }
 const [todos , setTodos] = useState([]);

 const addTodo = () => {
  setTodos([...todos, todo]);
  setTodo({description: '', date: ''});
 }

 const deleteTodo = (row) => {
  console.log('Delete row: '+ row);
  setTodos(todos.filter((todo, index) => index !== row));
 }
  return (
    <>
      <input placeholder='Description' name="description" value = {todo.description} onChange={inputChanged}/>
      <input placeholder='Date' name="date" value = {todo.date} onChange={inputChanged} />
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
      
    </>
  )
}

export default App
