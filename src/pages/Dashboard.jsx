import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchTodos } from '../store/actions/todoActions';
import { logout } from '../store/actions/authActions';
import './Dashboard.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);
  const { todos } = useSelector(state => state.todos);
  
  useEffect(() => {
    if (user) {
      dispatch(fetchTodos(user.id));
    }
  }, [dispatch, user]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const pendingTasks = todos.filter(todo => !todo.completed);
  const completedTasks = todos.filter(todo => todo.completed);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
      <div className="header-content">
          <div>
            <h2>Welcome back, {user?.username || 'User'}!</h2>
            <p>Here's your activity overview</p>
          </div>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </header>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Profile</h3>
          <p>Manage your account information</p>
          <Link to="/profile" className="dashboard-link">
            View Profile
          </Link>
        </div>

        <div className="dashboard-card">
          <h3>Tasks</h3>
          <div className="task-stats">
            <div className="stat-item">
              <span className="stat-number">{pendingTasks.length}</span>
              <span className="stat-label">Pending</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{completedTasks.length}</span>
              <span className="stat-label">Completed</span>
            </div>
          </div>
          <Link to="/todos" className="dashboard-link">
            Manage Tasks
          </Link>
        </div>

        
      </div>

      <div className="recent-tasks">
        <h3>Recent Tasks</h3>
        {todos.slice(0, 3).map(task => (
          <div key={task.id} className="task-item">
            <div className="task-info">
              <h4>{task.title}</h4>
              <p className="task-status">
                {task.completed ? '✅ Completed' : '🟡 Pending'}
              </p>
            </div>
            <Link to={`/todos/${task.id}`} className="task-link">
              View
            </Link>
          </div>
        ))}
        {todos.length === 0 && (
          <p className="no-tasks">No tasks found. Create your first task!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;