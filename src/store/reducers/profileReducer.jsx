const initialState = {
  profileData: null,
  loading: false,
  error: null
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PROFILE_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_PROFILE_SUCCESS':
      return {
        ...state,
        profileData: action.payload.profileData,
        loading: false,
        error: null
      };
    case 'UPDATE_PROFILE_SUCCESS':
      return {
        ...state,
        profileData: action.payload.profileData,
        loading: false,
        error: null
      };
    case 'PROFILE_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}