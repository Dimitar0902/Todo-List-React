import React, { useState } from 'react';
import { useGlobalState, useSetGlobalState } from '../GlobalState';
import { Button, TextField } from '@mui/material';
import '../component styles/AddTodo.css'; 

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const { todos } = useGlobalState();
  const setGlobalState = useSetGlobalState();

  const addTodo = () => {
    setGlobalState({ todos: [...todos, { text: newTodo, completed: false }] });
    setNewTodo('');
  };

  return (
    <div className='add-todo-div'>
    <h1 className='todo-title'>Todo List</h1>
    <div className='add-todo-field'>
      <TextField
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <Button onClick={addTodo}>Add</Button>
      </div>
    </div>
  );
};

export default AddTodo;
