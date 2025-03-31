import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from './TodoInput';

test('добавление новой задачи', () => {
  const addTodoMock = jest.fn();
  
  render(<TodoInput addTodo={addTodoMock} />);
  
  fireEvent.change(screen.getByPlaceholderText(/введите новую задачу/i), { target: { value: 'Новая задача' } });
  fireEvent.click(screen.getByText(/добавить/i));
  
  expect(addTodoMock).toHaveBeenCalledWith('Новая задача');
});
