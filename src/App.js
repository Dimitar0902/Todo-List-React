import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      
      <Container className='container'>
        <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todos" element={<><AddTodo /><TodoList /></>} />
            </Routes>
       
      </Container>
    </Router>
  );
}

export default App;
