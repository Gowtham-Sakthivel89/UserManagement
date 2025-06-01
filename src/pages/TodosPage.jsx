import { useState } from 'react';

import './TodosPage.css';
import TodoForm from '../components/Todo/TodoForm';
import TodoList from '../components/Todo/TodoList';

const TodosPage = () => {
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="todos-page">
      <h2>Tasks</h2>
      <TodoForm editTodo={editTodo} setEditTodo={setEditTodo} />
      <TodoList setEditTodo={setEditTodo} />
    </div>
  );
};

export default TodosPage;