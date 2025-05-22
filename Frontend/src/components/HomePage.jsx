import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { getAllVideos} from '../axios/api';
import '../styles/HomePage.css';

const categories = ['All', 'Education','movies', 'Entertainment', 'News', 'Music'];


const HomePage = ({sidebarOpen}) => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fetchVideos = async () => {
    try {
      if (selectedCategory === 'All') {
        const data = await getAllVideos();
        setVideos(data);
      } else {
        const data = await getAllVideos();
       const filtered = data.filter(
      (v) => v.category?.toLowerCase() === selectedCategory.toLowerCase()
    );
         setVideos(filtered);
      }
    } catch (error) {
      console.error('Error fetching videos:', error.message);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [selectedCategory]);

  return (
    <div className="home-wrapper">
      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

<div className={`video-grid ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {videos.length > 0 ? (
          videos.map((video) => <VideoCard key={video._id} video={video} />)
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
