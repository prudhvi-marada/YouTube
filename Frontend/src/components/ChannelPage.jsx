import React, { useEffect, useState } from 'react';
import '../styles/ChannelPage.css';
import '../App.css'
import { getChannelDetails, deleteVideo } from '../axios/api'; 
import { Link } from 'react-router-dom';
import Profile from './ProfilePage';

const storedUser = JSON.parse(localStorage.getItem('user'));
const token = localStorage.getItem('authToken');
const ChannelPage = () => {
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        if (!storedUser?.id) {
          throw new Error('User not logged in or missing user ID');
        }
        const res = await getChannelDetails(storedUser.id);
        if (!res.data) throw new Error('No channel data received');
        
        localStorage.setItem('chanelId', res.data._id || '');
        setChannel(res.data);
        setVideos(res.data.videos || []);
      } catch {
        console.log('Error fetching channel:');
      } finally {
        setLoading(false);
      }
    };

    fetchChannel();
  }, []);

  const handleDelete = async (id) => {
    if (!token) {
      alert('You must be logged in to delete a video.');
      return;
    }
    if (!window.confirm('Are you sure you want to delete this video?')) return;

    try {
      setDeleting(true);
      await deleteVideo(id, token);
      // Instead of reload, update videos state to avoid full page refresh
      setVideos((prevVideos) => prevVideos.filter((video) => video._id !== id));
    } catch (error) {
      console.error('Error deleting video:', error.message);
      alert('Failed to delete the video. Please try again.');
    } finally {
      setDeleting(false);
    }
  };

  if (loading) return <div className="channel-page-c">Loading...</div>;

  if (!channel) {
    return (
     <Profile user={user} setUser={setUser}/>
    );
  }

  return (
    <div className="channel-page-c">
      <div className="channel-banner-c">
        <img src={channel.channelBanner || '/default-banner.jpg'} alt="Channel Banner" />
      </div>

      <div className="channel-info-c">
        <div className="left-c">
          <img src={storedUser?.avatar || '/default-avatar.png'} alt="Channel-Logo" className="Avatar-channel" />
        </div>
        <div className="right-c">
          <h2>{channel.channelName}</h2>
          <p>{channel.description}</p>
        </div>
      </div>

      <div className="channel-tabs-c">
        <button className="active-c" disabled={deleting}>Your Videos</button>
        <Link to="/uploadVideo">Add Video</Link>
      </div>
      <hr className="channel-underline-c" />

      <div className="channel-videos-c">
        {videos.length === 0 ? (
          <p className="no-videos-c">You haven't added any videos yet.</p>
        ) : (
          <div className="video-list-c">
            {videos.map((video) => (
              <div className="video-card-c" key={video._id}>
                <Link to={`/video/${video._id}`}>
                  <img src={video.thumbnailUrl} alt={video.title} />
                </Link>
                <div className="delete-fun">
                  <h4>{video.title}</h4>
                  <div className='del' onClick={() => handleDelete(video._id)}>🗑️</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChannelPage;
