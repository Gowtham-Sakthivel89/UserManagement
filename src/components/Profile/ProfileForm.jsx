import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProfileForm = ({ profileData, onUpdate, loading }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (profileData) {
      setFormData({
        username: profileData.username || '',
        email: profileData.email || ''
      });
    }
  }, [profileData]);

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
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    try {
      await onUpdate(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <div className={`form-group ${errors.username ? 'error' : ''}`}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.username && <span className="error-text">{errors.username}</span>}
      </div>

      <div className={`form-group ${errors.email ? 'error' : ''}`}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <button type="submit" disabled={loading} className="save-button">
        {loading ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  );
};

ProfileForm.propTypes = {
  profileData: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

export default ProfileForm;