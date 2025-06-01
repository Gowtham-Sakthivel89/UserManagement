import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../../store/actions/todoActions';

const TodoItem = ({ todo, setEditTodo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(updateTodo(todo.id, { completed: !todo.completed }));
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTodo(todo.id));
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <div className="todo-content">
        <h4>{todo.title}</h4>
        {todo.description && <p>{todo.description}</p>}
        <small>Created: {new Date(todo.createdAt).toLocaleDateString()}</small>
      </div>
      <div className="todo-actions">
        <button 
          onClick={() => setEditTodo(todo)}  // Now properly using the prop
          className="edit-btn"
        >
          Edit
        </button>
        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;