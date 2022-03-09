import { useState } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

const defaultTodos = [
  { id: 1, title: 'Learn Framer Motion', completed: false },
  { id: 2, title: 'Create Nice Animation', completed: false },
  { id: 3, title: 'Use Reorder Component', completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);

  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='App'>
      <CreateTodo onCreate={setTodos} />
      <Todos todos={todos} setTodos={setTodos} onRemove={onRemove} />
    </div>
  );
}

export default App;
