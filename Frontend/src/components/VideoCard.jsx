import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/VideoCard.css';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <Link to={`/watch/${video._id}`}>
        <img className="video-thumbnail" src={video.thumbnail} alt={video.title} />
    </Link>
      <div className="video-info">
        <p className="video-title">{video.title}</p>
        <p className="video-channel">{video.channelName}</p>    
      <div className="video-stats">
          <span className="video-views">{video.views} views</span>
          <span className="video-date">{new Date(video.createdAt).toLocaleDateString()}</span>
       </div> 
      </div>
    </div>
  );
};

export default VideoCard;
