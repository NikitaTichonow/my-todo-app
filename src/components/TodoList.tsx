import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: { task: string; completed: boolean }[];
  toggleComplete: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
  return (
    <ul className="collection">
      {todos.map((todo, index) => (
        <TodoItem key={index} {...todo} toggleComplete={() => toggleComplete(index)} />
      ))}
    </ul>
  );
};

export default TodoList;
