import React from 'react';

interface TodoItemProps {
  task: string;
  completed: boolean;
  toggleComplete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, completed, toggleComplete }) => {
  return (
    <li
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      className="collection-item"
      onClick={toggleComplete}
    >
      {task}
    </li>
  );
};

export default TodoItem;
