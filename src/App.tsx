import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ task: string; completed: boolean }[]>([]);

  const addTodo = (task: string) => {
    setTodos([...todos, { task, completed: false }]);
  };

  const toggleComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div className="container">
      <h1 className="center-align">Список дел</h1>
      <TodoInput addTodo={addTodo} />
      <h2 className="center-align">Общий список задач</h2>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <h3>Количество оставшихся задач: {todos.filter(todo => !todo.completed).length}</h3>
      <button onClick={clearCompleted} className="btn red waves-effect waves-light">Очистить выполненные задачи</button>
    </div>
  );
};

export default App;
