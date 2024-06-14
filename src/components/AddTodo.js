import React, { useState } from 'react';
import { useGlobalState, useSetGlobalState } from '../GlobalState';
import { Button, TextField } from '@mui/material';

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const { todos } = useGlobalState();
  const setGlobalState = useSetGlobalState();

  const addTodo = () => {
    setGlobalState({ todos: [...todos, { text: newTodo, completed: false }] });
    setNewTodo('');
  };

  return (
    <div>
      <TextField
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <Button onClick={addTodo}>Add</Button>
    </div>
  );
};

export default AddTodo;
