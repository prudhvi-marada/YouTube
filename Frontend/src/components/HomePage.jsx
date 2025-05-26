import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from './VideoCard';
import { getAllVideos } from '../axios/api';
import '../styles/HomePage.css';

const categories = ['All', 'Education', 'movies', 'Entertainment', 'News', 'Music'];

const HomePage = ({ sidebarOpen }) => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { term } = useParams(); // From URL (for search)

  const fetchVideos = async () => {
    try {
      const data = await getAllVideos();

      // If search term is present, filter by title or category
      if (term) {
        const lowerTerm = term.toLowerCase();
        const filtered = data.filter(
          (v) =>
            v.title?.toLowerCase().includes(lowerTerm) ||
            v.category?.toLowerCase().includes(lowerTerm)
        );
        setVideos(filtered);
      } else if (selectedCategory === 'All') {
        setVideos(data);
      } else {
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
  }, [selectedCategory, term]); // Re-fetch when search or category changes

  return (
    <div className="home-wrapper">
      {!term && (
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
      )}

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
