// src/components/Profile.jsx
import React, { useState } from 'react';
import { updateAvatarURL } from '../axios/api';
import { Link,useNavigate } from 'react-router-dom';
import '../styles/ProfilePage.css';
import '../App.css'

const Profile = ({ user, setUser}) => {
  const [avatarInput, setAvatarInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const chId = localStorage.getItem('chanelId') || null;
  const navigate = useNavigate();
  
  
 const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    localStorage.removeItem('chanelId');
    navigate('/login');
  };


  
  const handleAvatarChange = async () => {
    if (!avatarInput.trim()) return alert('Please enter a valid image URL');

    try {
      const res = await updateAvatarURL(avatarInput);
      alert('Avatar updated successfully!');
      setUser(res.data.updatedUser);
      localStorage.setItem('user', JSON.stringify(res.data.updatedUser));
      setAvatarInput('');
      setIsEditing(false);
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update avatar');
    }
  };

  return (
    <div className="profile-section">
      <div className="profile-avatar-container">
        <img
          src={user?.avatar || '/default-avatar.png'}
          alt="Profile"
          className="profile-avatar"
        />
      </div>

      {isEditing ? (
        <div className="avatar-url-form">
          <input
            type="text"
            placeholder="Enter new avatar URL"
            value={avatarInput}
            onChange={(e) => setAvatarInput(e.target.value)}
          />
          <button className="update-btn" onClick={handleAvatarChange}>Update</button>
        </div>
      ) : (
        <button className="change-avatar-btn" onClick={() => setIsEditing(true)}>
          Change Profile
        </button>
      )}

      <div className="profile-details">
        <h3>{user?.name || 'Unnamed User'}</h3>
        <p>{user?.email || 'No email provided'}</p>
      </div>
     
    <div> {chId? <Link to="/channel" className="create-channel-link">
        View Your Channel
      </Link>:<Link to="/create-channel" className="create-channel-link">
      Create Your Channel
      </Link> }</div>
      <div>
        <div className="btn-align-right">
        <button className="logout-btn" onClick={handleLogout}>
                Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
