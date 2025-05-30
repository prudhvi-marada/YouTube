import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/VideoCard.css';
import '../App.css'

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <Link to={`/video/${video._id}`}>
        <img className="video-thumbnail" src={video.thumbnailUrl} alt={video.title} />
    </Link>
      <div className="video-info">
        <div className="avatar-title">
          <img 
            className="channel-avatar" 
            src={video.uploader?.avatar} 
            alt={video.uploader?.name || "Avatar"} 
          />
        <div className="title-channel">
        <p className="video-title">{video.title}</p>
        <p className="video-channel">{video.channel.channelName}</p>
        </div>  
        </div>
      <div className="video-stats">
          <span className="video-views">{video.views} views</span>
          <span className="video-date">{new Date(video.createdAt).toLocaleDateString()}</span>
       </div> 
      </div>
    </div>
  );
};

export default VideoCard;
