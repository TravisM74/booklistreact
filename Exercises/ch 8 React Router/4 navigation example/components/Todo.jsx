import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

import ReactiveButton from 'reactive-button';

function Todo() {
  const [todo, setTodo] = useState({description: '', date: '', status: ''});
  const [todos, setTodos] = useState([]);

// Column definitions for ag-grid
const columnDefs = [
  
  { field: 'description', sortable: true, filter: true , suppressMovable: true  },
  { field: 'date', sortable: true, filter: true  , suppressMovable: true},
  { field: 'status', sortable: true, filter: true , suppressMovable: true }
]

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const [state, setState] = useState('idle');


  const addTodo = () => {

    setTodos([...todos, todo]);
    setTodo({description: '', date: '', status: ''});
  }

  return (
    <>
      <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
      <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged}/>
      <input placeholder="Status" name="status" value={todo.status} onChange={inputChanged}/>
      
      <ReactiveButton rounded onClick={addTodo} idleText="Add" />

      <div className="ag-theme-material" style={{height: 400, width: 600}}>
         <AgGridReact
            rowData={todos}
            columnDefs={columnDefs}
         />
      </div>
    </>
  );
  }

export default Todo;