import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../store/actions/profileActions';


const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { profileData, loading } = useSelector(state => state.profile);

  // Load profile when component mounts or user changes
  useEffect(() => {
    if (user?.id) {
      dispatch(fetchProfile(user.id));
    }
  }, [dispatch, user?.id]);

  return (
    <div className="profile-page">
      <h2>Your Profile</h2>
      {loading ? (
        <p>Loading profile...</p>
      ) : (
        <ProfileView profileData={profileData || user} />
      )}
    </div>
  );
};

// Simple profile view component
const ProfileView = ({ profileData }) => (
  <div className="profile-view">
    <div className="profile-field">
      <label>Username:</label>
      <span>{profileData?.username || 'Not available'}</span>
    </div>
    <div className="profile-field">
      <label>Email:</label>
      <span>{profileData?.email || 'Not available'}</span>
    </div>
    {/* Add more fields as needed */}
  </div>
);

export default ProfilePage;