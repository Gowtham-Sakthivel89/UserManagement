const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true
      };
    case 'LOGOUT_SUCCESS':
      return initialState;
    case 'LOGOUT_SUCCESS':
      return initialState;
    default:
      return state;
  }
}