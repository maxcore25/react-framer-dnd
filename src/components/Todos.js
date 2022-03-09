import React from 'react';

export default function Todos({ todos = [] }) {
  return (
    <ol>
      {todos.map(todo => (
        <TodoItem key={todo.key} todo={todo} />
      ))}
    </ol>
  );
}

const TodoItem = ({ todo }) => {
  return (
    <li>
      <span>{todo.title}</span>
    </li>
  );
};
