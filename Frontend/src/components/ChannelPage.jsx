//import React, { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';
//import axios from 'axios';
import '../styles/ChannelPage.css';


// dummyChannel.js
const channel = {
  _id: 'channel123',
  name: 'CodeMaster Channel',
  description: 'Sharing programming tutorials, tech reviews, and career advice for developers.',
  profilePicture: 'https://randomuser.me/api/portraits/men/15.jpg',
  coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  createdAt: '2022-06-12T09:00:00Z',
  subscribersCount: 15400,
  totalVideos: 42,
  owner: {
    _id: 'user123',
    username: 'CodeMaster',
    email: 'codemaster@example.com',
  },
  videos: [
    {
      _id: 'vid1',
      title: 'React for Beginners – Complete Guide (2025)',
      thumbnail: 'https://i.ytimg.com/vi/dGcsHMXbSOA/maxresdefault.jpg',
      views: 340000,
      createdAt: '2025-01-05T12:00:00Z',
    },
    {
      _id: 'vid2',
      title: 'Build a Full-Stack App with MERN in 45 Minutes',
      thumbnail: 'https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg',
      views: 180000,
      createdAt: '2025-02-18T15:30:00Z',
    },
    {
      _id: 'vid3',
      title: 'Top 10 JavaScript Interview Questions & Answers',
      thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg',
      views: 220000,
      createdAt: '2025-03-12T10:00:00Z',
    },
  ],
};




const ChannelPage = () => {
  // const { id } = useParams();
  // const [channel, setChannel] = useState(null);
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   const fetchChannelData = async () => {
  //     try {
  //       const channelRes = await axios.get(`/api/channels/${id}`);
  //       setChannel(channelRes.data);

  //       const videosRes = await axios.get(`/api/videos/channel/${id}`);
  //       setVideos(videosRes.data);
  //     } catch (error) {
  //       console.error('Failed to fetch channel data:', error);
  //     }
  //   };

  //   fetchChannelData();
  // }, [id]);

 // if (!channel) return <div className="loading">Loading...</div>;

  return (
    <div className="channel-page">
      <div className="channel-header">
        <div className="channel-banner">
          <img src={channel.coverImage} alt={channel.name} />
        </div>
        <div className="channel-info">
          <h2>{channel.name}</h2>
          <p>{channel.description}</p>
          <div className="channel-stats">
            <span>{channel.subscribers} Subscribers</span>
            <span>{channel.videos.length} Videos</span>
          </div>
        </div>
      </div>
      <div className="middle"> 
        <h3>Videos</h3>
        <h3>shorts </h3>
        <h3>live</h3>
        <h3>posts</h3>
      </div>
      <div className="video-list">
        <div className="videos">
          {channel.videos.map((video) => (
            <div key={video._id} className="video-item">
              <a href={`/watch/${video._id}`}>
                <img src={video.thumbnail} alt={video.title} />
                <div className="video-title">{video.title}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;
