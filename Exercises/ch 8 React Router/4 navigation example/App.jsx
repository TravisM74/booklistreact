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
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';





function App() {
  

  return (
    <>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{' | '}
        <Link to="/About">About</Link>{' |  '}
        <Link to="/Contact">Contact</Link>{' |  '}
        <Link to="/Todo">TodoList</Link>{' '}
        
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
  }

export default App;