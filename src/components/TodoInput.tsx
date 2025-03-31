import React, { useState } from 'react';

interface TodoInputProps {
  addTodo: (task: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-field">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Введите новую задачу"
        className="validate"
      />
      <button type="submit" className="btn waves-effect waves-light">Добавить</button>
    </form>
  );
};

export default TodoInput;
