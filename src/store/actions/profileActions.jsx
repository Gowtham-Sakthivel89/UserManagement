// src/store/actions/profileActions.js
import { getFromLocalStorage } from '../../utils/storage';

export const fetchProfile = (userId) => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_PROFILE_REQUEST' });
  
  try {
    // Check both Redux state and localStorage as fallback
    const currentUser = getState().auth.user || getFromLocalStorage('user');
    
    if (currentUser && currentUser.id === userId) {
      dispatch({
        type: 'FETCH_PROFILE_SUCCESS',
        payload: { profileData: currentUser }
      });
    } else {
      throw new Error('User profile not found');
    }
  } catch (error) {
    dispatch({
      type: 'PROFILE_ERROR',
      payload: { error: error.message }
    });
  }
};