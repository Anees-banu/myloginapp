import React, { useState} from 'react';
import './profile.css';

export default function Profile() {
  const [profilePic, setProfilePic] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Get login data from localStorage (assuming login stores it)
  const username = localStorage.getItem('username') || '';
  const email = localStorage.getItem('email') || '';

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  const handleImageRemove = () => {
    setProfilePic(null);
  };

  const handleSave = () => {
    alert('Profile saved!');
    // You can store in backend or localStorage here
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>

      <div className="profile-image-section">
        <img
          src={profilePic || 'https://via.placeholder.com/120'}
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-image-actions">
          <input type="file" onChange={handleImageChange} />
          {profilePic && <button onClick={handleImageRemove}>Remove</button>}
        </div>
      </div>

      <div className="profile-info">
        <label>Username</label>
        <input type="text" value={username} readOnly />

        <label>Email</label>
        <input type="email" value={email} readOnly />

        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <button className="save-btn" onClick={handleSave}>Save Profile</button>
      </div>
    </div>
  );
}
