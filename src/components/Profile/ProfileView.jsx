
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadProfile } from '../../store/actions/profileActions';

const ProfileView = () => {
  const { profileData, loading, error } = useSelector(state => state.profile);
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(loadProfile(user));
    }
  }, [dispatch, user]);

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profileData) return <div>No profile data available</div>;

  return (
    <div className="profile-view">
      <div className="profile-header">
        <img 
          src={profileData.avatar} 
          alt="Profile" 
          className="profile-avatar"
        />
        <h2>{profileData.fullName || profileData.username}</h2>
      </div>
      <div className="profile-details">
        <p><strong>Username:</strong> {profileData.username}</p>
        <p><strong>Email:</strong> {profileData.email}</p>
        {profileData.bio && (
          <p><strong>Bio:</strong> {profileData.bio}</p>
        )}
      </div>
    </div>
  );
};

export default ProfileView;