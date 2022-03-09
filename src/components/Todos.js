import React from 'react';
import { Reorder, AnimatePresence } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    height: 0,
  },
  animate: {
    opacity: 1,
    height: 'auto',
  },
  exit: { opacity: 0, height: 0 },
};

export default function Todos({ todos = [], setTodos, onRemove }) {
  return (
    <Reorder.Group as='ol' axys='y' values={todos} onReorder={setTodos}>
      <AnimatePresence initial={true}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
}

const TodoItem = ({ todo, onRemove }) => {
  return (
    <Reorder.Item
      value={todo}
      whileDrag={{ scale: 1.1 }}
      onDoubleClick={() => onRemove(todo.id)}
      {...variants}>
      <span>{todo.title}</span>
    </Reorder.Item>
  );
};
