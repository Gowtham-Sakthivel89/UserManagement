
import { 
  saveToLocalStorage,
  getFromLocalStorage,  
  clearLocalStorage
} from '../../utils/storage';


const mockUsers = [
  {
    id: 1,
    username: 'innoppl',  
    password: 'password@123',
    email: 'innoppl@example.com',
    token: 'mock-auth-token-12345'
  },
  {
    id: 2,
    username: 'admin',
    password: 'admin123',
    email: 'admin@example.com',
    token: 'mock-auth-token-54321'
  }
];

export const login = (username, password) => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });
  
  try {
    console.log('Login attempt with:', { username, password });

    const user = mockUsers.find(u => 
      u.username === username.trim() && 
      u.password === password
    );

    if (!user) {
      throw new Error('Invalid username or password');
    }

    const { password: _, ...userData } = user;
    saveToLocalStorage('user', userData);
    
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { user: userData }
    });
    
    return userData;
  } catch (error) {
    console.error('Login error:', error);
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: error.message
    });
    throw error;
  }
};

export const logout = () => (dispatch) => {
  clearLocalStorage();
  dispatch({ type: 'LOGOUT_SUCCESS' });
};

export const checkAuth = () => (dispatch) => {
  const user = getFromLocalStorage('user');  // Now properly imported
  if (user) {
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { user }
    });
  }
};