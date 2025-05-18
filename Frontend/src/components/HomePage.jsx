import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
//import { getAllVideos, filterVideos } from '../axios/api';
import '../styles/HomePage.css';

const categories = ['All', 'Sports', 'Entertainment', 'News', 'Music', 'Education'];

// dummyVideos.js
const dummyVideos = [
  
  {
    _id: '1',
    title: 'Exploring the Universe: A Journey Through Space',
    description: 'Take a journey through the cosmos and discover the mysteries of space.',
    thumbnail: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/test-361512_640.jpg',
    videoUrl: 'https://www.example.com/videos/space-journey',
    channelName: "voice of edit", // Replace with actual Channel _id
    views: 125000,
    createdAt: '2025-04-01T10:00:00Z',
    uploader: {
      username: 'AstroGuru',
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  },
  {
    _id: '2',
    title: 'Top 10 Javascript Tricks You Should Know',
    description: 'Boost your JavaScript knowledge with these top 10 tricks.',
    thumbnail: 'https://i.ytimg.com/vi/8aGhZQkoFbQ/maxresdefault.jpg',
    videoUrl: 'https://www.example.com/videos/js-tricks',
        channelName: "voice of edit", // Replace with actual Channel _id

    views: 88000,
    createdAt: '2025-04-03T12:30:00Z',
    uploader: {
      username: 'CodeMaster',
      profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  },
  {
    _id: '2',
    title: 'Top 10 Javascript Tricks You Should Know',
    description: 'Boost your JavaScript knowledge with these top 10 tricks.',
    thumbnail: 'https://i.ytimg.com/vi/8aGhZQkoFbQ/maxresdefault.jpg',
    videoUrl: 'https://www.example.com/videos/js-tricks',
        channelName: "voice of edit", // Replace with actual Channel _id

    views: 88000,
    createdAt: '2025-04-03T12:30:00Z',
    uploader: {
      username: 'CodeMaster',
      profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  },
  {
    _id: '2',
    title: 'Top 10 Javascript Tricks You Should Know',
    description: 'Boost your JavaScript knowledge with these top 10 tricks.',
    thumbnail: 'https://i.ytimg.com/vi/8aGhZQkoFbQ/maxresdefault.jpg',
    videoUrl: 'https://www.example.com/videos/js-tricks',
        channelName: "voice of edit", // Replace with actual Channel _id

    views: 88000,
    createdAt: '2025-04-03T12:30:00Z',
    uploader: {
      username: 'CodeMaster',
      profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  },
  {
    _id: '2',
    title: 'Top 10 Javascript Tricks You Should Know',
    description: 'Boost your JavaScript knowledge with these top 10 tricks.',
    thumbnail: 'https://i.ytimg.com/vi/8aGhZQkoFbQ/maxresdefault.jpg',
    videoUrl: 'https://www.example.com/videos/js-tricks',
        channelName: "voice of edit", // Replace with actual Channel _id

    views: 88000,
    createdAt: '2025-04-03T12:30:00Z',
    uploader: {
      username: 'CodeMaster',
      profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  },
  {
    _id: '2',
    title: 'Top 10 Javascript Tricks You Should Know',
    description: 'Boost your JavaScript knowledge with these top 10 tricks.',
    thumbnail: 'https://i.ytimg.com/vi/8aGhZQkoFbQ/maxresdefault.jpg',
    videoUrl: 'https://www.example.com/videos/js-tricks',
        channelName: "voice of edit", // Replace with actual Channel _id

    views: 88000,
    createdAt: '2025-04-03T12:30:00Z',
    uploader: {
      username: 'CodeMaster',
      profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  },
  {
    _id: '2',
    title: 'Top 10 Javascript Tricks You Should Know',
    description: 'Boost your JavaScript knowledge with these top 10 tricks.',
    thumbnail: 'https://i.ytimg.com/vi/8aGhZQkoFbQ/maxresdefault.jpg',
    videoUrl: 'https://www.example.com/videos/js-tricks',
        channelName: "voice of edit", // Replace with actual Channel _id

    views: 88000,
    createdAt: '2025-04-03T12:30:00Z',
    uploader: {
      username: 'CodeMaster',
      profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  },
  {
    _id: '3',
    title: 'Beginner Yoga at Home | 20 Minutes Daily Routine',
    description: 'A simple yoga routine for beginners to stay healthy and fit.',
    thumbnail: 'https://i.ytimg.com/vi/v7AYKMP6rOE/maxresdefault.jpg',
    videoUrl: 'https://www.example.com/videos/yoga-beginners',
        channelName: "voice of edit", // Replace with actual Channel _id

    views: 54000,
    createdAt: '2025-04-05T08:00:00Z',
    uploader: {
      username: 'YogaWithMe',
      profilePicture: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
  },
  {
    _id: '4',
    title: 'Street Food Tour in Hyderabad | Indian Cuisine',
    description: 'Join us as we try the most delicious street food in Hyderabad.',
    thumbnail: 'https://i.ytimg.com/vi/JvV1bA1x7Bo/maxresdefault.jpg',
    videoUrl: 'https://www.example.com/videos/hyderabad-food',
        channelName: "voice of edit", // Replace with actual Channel _id

    views: 97000,
    createdAt: '2025-04-10T15:20:00Z',
    uploader: {
      username: 'FoodieVlogs',
      profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  },
  {
    _id: '5',
    title: 'How to Start Investing in 2025 | Beginners Guide',
    description: 'A guide to help beginners understand the basics of investing.',
    thumbnail: 'https://i.ytimg.com/vi/9ZvlwqSBZT8/maxresdefault.jpg',
    videoUrl: 'https://www.example.com/videos/investing-guide',
        channelName: "voice of edit", // Replace with actual Channel _id
      
    views: 34000,
    createdAt: '2025-04-15T17:45:00Z',
    uploader: {
      username: 'FinanceFirst',
      profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  },
  {
    _id: '5',
    title: 'How to Start Investing in 2025 | Beginners Guide',
    description: 'A guide to help beginners understand the basics of investing.',
    thumbnail: 'https://i.ytimg.com/vi/9ZvlwqSBZT8/maxresdefault.jpg',
    videoUrl: 'https://www.example.com/videos/investing-guide',
        channelName: "voice of edit", // Replace with actual Channel _id
      
    views: 34000,
    createdAt: '2025-04-15T17:45:00Z',
    uploader: {
      username: 'FinanceFirst',
      profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  },
  {
    _id: '5',
    title: 'How to Start Investing in 2025 | Beginners Guide',
    description: 'A guide to help beginners understand the basics of investing.',
    thumbnail: 'https://i.ytimg.com/vi/9ZvlwqSBZT8/maxresdefault.jpg',
    videoUrl: 'https://www.example.com/videos/investing-guide',
        channelName: "voice of edit", // Replace with actual Channel _id
      
    views: 34000,
    createdAt: '2025-04-15T17:45:00Z',
    uploader: {
      username: 'FinanceFirst',
      profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  },
  {
    _id: '5',
    title: 'How to Start Investing in 2025 | Beginners Guide',
    description: 'A guide to help beginners understand the basics of investing.',
    thumbnail: 'https://i.ytimg.com/vi/9ZvlwqSBZT8/maxresdefault.jpg',
    videoUrl: 'https://www.example.com/videos/investing-guide',
        channelName: "voice of edit", // Replace with actual Channel _id
      
    views: 34000,
    createdAt: '2025-04-15T17:45:00Z',
    uploader: {
      username: 'FinanceFirst',
      profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  },
  {
    _id: '5',
    title: 'How to Start Investing in 2025 | Beginners Guide',
    description: 'A guide to help beginners understand the basics of investing.',
    thumbnail: 'https://i.ytimg.com/vi/9ZvlwqSBZT8/maxresdefault.jpg',
    videoUrl: 'https://www.example.com/videos/investing-guide',
        channelName: "voice of edit", // Replace with actual Channel _id
      
    views: 34000,
    createdAt: '2025-04-15T17:45:00Z',
    uploader: {
      username: 'FinanceFirst',
      profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  },
  {
    _id: '5',
    title: 'How to Start Investing in 2025 | Beginners Guide',
    description: 'A guide to help beginners understand the basics of investing.',
    thumbnail: 'https://i.ytimg.com/vi/9ZvlwqSBZT8/maxresdefault.jpg',
    videoUrl: 'https://www.example.com/videos/investing-guide',
        channelName: "voice of edit", // Replace with actual Channel _id
      
    views: 34000,
    createdAt: '2025-04-15T17:45:00Z',
    uploader: {
      username: 'FinanceFirst',
      profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  },
];




const HomePage = ({sidebarOpen}) => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fetchVideos = async () => {
    try {
      if (selectedCategory === 'All') {
      //  const data = await getAllVideos();
        setVideos(dummyVideos);
      } else {
       // const data = await filterVideos({ category: selectedCategory.toLowerCase() });
        setVideos(dummyVideos);
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
