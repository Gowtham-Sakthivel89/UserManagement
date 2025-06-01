import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../store/actions/todoActions';

const TodoForm = ({ editTodo, setEditTodo }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDescription(editTodo.description || '');
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editTodo) {
      dispatch(updateTodo(editTodo.id, { title, description }));
      setEditTodo(null);  
    } else {
      dispatch(addTodo({ title, description }));
    }

    setTitle('');
    setDescription('');
  };

  return (
    <div className="todo-form">
      <h3>{editTodo ? 'Edit Task' : 'Add New Task'}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (optional)"
          />
        </div>
        <div className="form-actions">
          <button type="submit">
            {editTodo ? 'Update Task' : 'Add Task'}
          </button>
          {editTodo && (
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => setEditTodo(null)}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TodoForm;