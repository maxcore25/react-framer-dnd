import React from 'react';
import { Reorder } from 'framer-motion';

export default function Todos({ todos = [], setTodos }) {
  return (
    <Reorder.Group as='ol' axys='y' values={todos} onReorder={setTodos}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Reorder.Group>
  );
}

const TodoItem = ({ todo }) => {
  return (
    <Reorder.Item>
      <span>{todo.title}</span>
    </Reorder.Item>
  );
};
