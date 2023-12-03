
import React, { useState } from 'react';
import TodoList from './components/TodoList';

interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>('');

  const addTodo = () => {
    if (inputText.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      name: inputText,
      isCompleted: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputText('');
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
