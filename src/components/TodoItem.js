import React from 'react';
import { useGlobalState, useSetGlobalState } from '../GlobalState';
import { Checkbox, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, index }) => {
  const { todos } = useGlobalState();
  const setGlobalState = useSetGlobalState();

  const toggleComplete = () => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setGlobalState({ todos: newTodos });
  };

  const deleteTodo = () => {
    const newTodos = todos.filter((_, i) => i !== index);
    setGlobalState({ todos: newTodos });
  };

  const editTodo = (e) => {
    const newTodos = [...todos];
    newTodos[index].text = e.target.value;
    setGlobalState({ todos: newTodos });
  };

  return (
    <div>
      <Checkbox checked={todo.completed} onChange={toggleComplete} />
      <TextField value={todo.text} onChange={editTodo} />
      <IconButton onClick={deleteTodo}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default TodoItem;
