import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../styles/SearchResultsPage.css';

const SearchPage = () => {
  const query = new URLSearchParams(useLocation().search).get('q');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/videos/search?q=${query}`);
        setVideos(res.data);
      } catch (error) {
        console.error('Failed to fetch search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-page">
      <h2>Search Results for: "{query}"</h2>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="video-list">
          {videos.length > 0 ? (
            videos.map((video) => (
              <div key={video._id} className="video-item">
                <a href={`/watch/${video._id}`}>
                  <img src={video.thumbnailUrl} alt={video.title} />
                  <div className="video-title">{video.title}</div>
                </a>
              </div>
            ))
          ) : (
            <div>No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
