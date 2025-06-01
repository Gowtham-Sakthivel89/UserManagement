import { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({ setEditTodo }) => { 
  const { todos } = useSelector(state => state.todos);
  const { user } = useSelector(state => state.auth);
  const [filter, setFilter] = useState('all');

  const userTodos = todos.filter(todo => todo.userId === user?.id);
  
  const filteredTodos = userTodos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="todo-list">
      <div className="todo-filters">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>
          All
        </button>
        <button onClick={() => setFilter('pending')} className={filter === 'pending' ? 'active' : ''}>
          Pending
        </button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>
          Completed
        </button>
      </div>

      {filteredTodos.length === 0 ? (
        <p className="no-tasks">
          {filter === 'all' ? 'No tasks found. Add your first task!' : `No ${filter} tasks found`}
        </p>
      ) : (
        filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} setEditTodo={setEditTodo} />
        ))
      )}
    </div>
  );
};

export default TodoList;