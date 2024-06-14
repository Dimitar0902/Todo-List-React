import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            {/* You can add additional menu items or navigation here */}
          </Grid>
          <Grid item xs={12} md={9}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todos" element={<><AddTodo /><TodoList /></>} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
