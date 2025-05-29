import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from './VideoCard';
import { getAllVideos,getChannelDetails } from '../axios/api';
import '../styles/HomePage.css';

const categories = ['All', 'Education', 'Movies', 'Entertainment', 'News', 'Music'];

const HomePage = ({ sidebarOpen }) => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const storedUser = JSON.parse(localStorage.getItem('user'));

  const { term } = useParams(); // From URL (for search)

  // Use useCallback to memoize fetchVideos and avoid unnecessary re-creations
  const fetchVideos = useCallback(async () => {
    try {
      const res = await getAllVideos();
     // console.log(res)
      if (term) {
        const lowerTerm = term.toLowerCase();
        const filtered = res.data.filter(
          (v) =>
            v.title?.toLowerCase().includes(lowerTerm) ||
            v.category?.toLowerCase().includes(lowerTerm)
        );
        setVideos(filtered);
      } else if (selectedCategory === 'All') {
       // console.log(res)
        setVideos(res.data);
      } else {
        const filtered =Array.isArray(res.data) ? res.data.filter(
          (v) => v.category?.toLowerCase() === selectedCategory.toLowerCase()
        ):[];
        setVideos(filtered);
      }
    } catch {
       setVideos([]); // Clear videos on error for better UX
    }
  }, [term, selectedCategory]);
   
    const fetchChannel = async () => {
            try {
              if (!storedUser?.id) {
                throw new Error('User not logged in or missing user ID');
              }
              const res = await getChannelDetails(storedUser.id);
              if (!res.data) throw new Error('No channel data received');
              
              localStorage.setItem('chanelId', res.data._id || '');
             
            } catch(e) {
             console.log("Error fetching channel:", e.response?.data || e.message);
            } 
          };

  useEffect(() => {
    fetchVideos();   
    fetchChannel();       
  }, [fetchVideos]);

  return (
    <div className="home-wrapper">
      {!term && (
        <nav className="category-bar" aria-label="Video Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={selectedCategory === cat}
              type="button"
            >
              {cat}
            </button>
          ))}
        </nav>
      )}

      <div className={`video-grid ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {Array.isArray(videos) && videos.length > 0 ? (
          videos.map((video) => <VideoCard key={video._id} video={video} />)
        ) : (
          <p role="alert">No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
