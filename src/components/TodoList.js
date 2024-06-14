import React from 'react';
import { useGlobalState } from '../GlobalState';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useGlobalState();

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </div>
  );
};

export default TodoList;