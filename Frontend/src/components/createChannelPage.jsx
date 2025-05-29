import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/createChannelPage.css';
import { createChannel } from '../axios/api';
import '../App.css'

const CreateChannelPage = () => {
  const navigate = useNavigate();
  const [channelName, setChannelName] = useState('');
  const [description, setDescription] = useState('');
  const [channelBanner, setChannelBanner] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('authToken');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const handleCreateChannel = async (e) => {
    e.preventDefault();
    setError('');

    // Basic front-end validation for empty or whitespace-only strings
    if (!channelName.trim() || !description.trim() || !channelBanner.trim()) {
      setError('Please fill in all fields properly.');
      return;
    }

    try {
      setLoading(true);
      await createChannel({ channelName: channelName.trim(), description: description.trim(), channelBanner: channelBanner.trim() });
      navigate('/channel'); // Redirect to user's channel page on success
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to create channel');
    } finally {
      setLoading(false);
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
          disabled={loading}
        />
        <textarea
          placeholder="Channel Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          disabled={loading}
        />
        <input
          type="text"
          placeholder="Banner Image URL"
          value={channelBanner}
          onChange={(e) => setChannelBanner(e.target.value)}
          required
          disabled={loading}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Channel'}
        </button>
      </form>
    </div>
  );
};

export default CreateChannelPage;
