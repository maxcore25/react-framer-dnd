import React from 'react';

export default function CreateTodo({ onCreate }) {
  const handleSubmit = e => {
    e.preventDefault();

    const title = e.target.todo.value;

    if (e.target.todo.value) {
      onCreate(prevTodos => [
        ...prevTodos,
        {
          title,
          completed: false,
          id: Date.now(),
        },
      ]);
    }

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete={false}>
      <input type='text' placeholder='New todo' name='todo' />
      <input type='submit' value='Add Todo' />
    </form>
  );
}
