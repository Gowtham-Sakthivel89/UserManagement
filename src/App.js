// src/App.js
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/Auth/PrivateRoute';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import TodosPage from './pages/TodosPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/profile" element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        } />
        <Route path="/todos" element={
          <PrivateRoute>
            <TodosPage />
          </PrivateRoute>
        } />
        <Route path="/" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/profile" element={
        <PrivateRoute>
          <ProfilePage />
        </PrivateRoute>
      } />
      </Routes>
      
    </div>
  );
}

export default App;