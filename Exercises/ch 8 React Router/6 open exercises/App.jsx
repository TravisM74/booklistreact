import { useState } from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route, 
  Link
} from "react-router-dom";
import Home from './components/Home';
import Todo from './components/Todo';




function App() {
  

  return (
    <>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/Todo">TodoList</Link>{' '}
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
  }

export default App;