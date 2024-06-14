import React from 'react';
import { useGlobalState } from '../GlobalState';
import TodoItem from './TodoItem';
import '../component styles/TodoList.css'; 

const TodoList = () => {
  const { todos } = useGlobalState();

  return (
    <div className="todo-list-container">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </div>
  );
};

export default TodoList;
