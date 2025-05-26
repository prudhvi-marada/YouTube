import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateChannelPage.css';
import { createChannel } from '../axios/api';

const CreateChannelPage = () => {
  const navigate = useNavigate();
  const [channelName, setChannelName] = useState('');
  const [description, setDescription] = useState('');
  const [channelBanner, setChannelBanner] = useState('');
  const [error, setError] = useState('');
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const handleCreateChannel = async (e) => {
    e.preventDefault();

    try {
      await createChannel({ channelName, description, channelBanner });
      navigate('/channel'); // Redirect to user's channel page
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create channel');
    }
  };

  return (
    <div className="create-channel-container">
      <h2>Create Your Channel</h2>
      <form onSubmit={handleCreateChannel}>
        <input
          type="text"
          placeholder="Channel Name"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
          required
        />
        <textarea
          placeholder="Channel Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Banner Image URL"
          value={channelBanner}
          onChange={(e) => setChannelBanner(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Create Channel</button>
      </form>
    </div>
  );
};

export default CreateChannelPage;
