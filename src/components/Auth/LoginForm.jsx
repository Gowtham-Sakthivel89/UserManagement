import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/authActions';

const LoginForm = ({ onLoginSuccess }) => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
  
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };


  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await dispatch(login(formData.username, formData.password));
      navigate('/dashboard');
      if (onLoginSuccess) onLoginSuccess();
    } catch (error) {
      setErrors({
        general: error.message || 'Login failed. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="login-form">
     
      <div className={`form-group ${errors.username ? 'error' : ''}`}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
          autoComplete="username"
          disabled={isSubmitting}
          aria-describedby={errors.username ? "username-error" : undefined}
        />
        {errors.username && (
          <span id="username-error" className="error-message">
            {errors.username}
          </span>
        )}
      </div>

     
      <div className={`form-group ${errors.password ? 'error' : ''}`}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          autoComplete="current-password"
          disabled={isSubmitting}
          aria-describedby={errors.password ? "password-error" : undefined}
        />
        {errors.password && (
          <span id="password-error" className="error-message">
            {errors.password}
          </span>
        )}
      </div>


      {errors.general && (
        <div className="general-error">
          {errors.general}
        </div>
      )}

      
      <button
        type="submit"
        className="login-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="spinner" aria-hidden="true"></span>
            <span>Signing In...</span>
          </>
        ) : (
          'Sign In'
        )}
      </button>

    </form>
  );
};

LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func
};

export default LoginForm;