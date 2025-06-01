import LoginForm from '../components/Auth/LoginForm';
import './LoginPage.css';

const LoginPage = () => {
  const handleLoginSuccess = () => {
   
    console.log('Login successful!');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
};

export default LoginPage;