import React from 'react';
//import { useParams } from 'react-router-dom';
// import axios from 'axios';
import '../styles/VideoPlayerPage.css';  
import ReactPlayer from 'react-player'

const video={
    _id: '1',
    title: 'Exploring the Universe: A Journey Through Space',
    description: 'Take a journey through the cosmos and discover the mysteries of space.',
    thumbnail: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/test-361512_640.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=iW35WRmwfS0&t=481s',
    channelName: "voice of edit", // Replace with actual Channel _id
    views: 125000,
    createdAt: '2025-04-01T10:00:00Z',
    uploader: {
      username: 'AstroGuru',
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  }

const svideo = [
  
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


const WatchVideo = () => {

 

  
  // const { id } = useParams();
  // const [video, setVideo] = useState(null);
  // const [channel, setChannel] = useState(null);

  // useEffect(() => {
  //   const fetchVideo = async () => {
  //     try {
  //       const res = await axios.get(`/api/videos/${id}`);
  //       setVideo(res.data);

  //       const channelRes = await axios.get(`/api/channels/${res.data.channel}`);
  //       setChannel(channelRes.data);
  //     } catch (error) {
  //       console.error('Failed to fetch video or channel data:', error);
  //     }
  //   };

  //   fetchVideo();
  // }, [id]);

  // if (!video) return <div className="loading">Loading...</div>;

  return (
    <div className='total-page'>
    <div className='left-side'>
    <div className="watch-video-container">
      <div className="video-player">
        <ReactPlayer controls url={video.videoUrl} width='100%' />
      </div>
    
     <div className="video-actions-container">
      <div className="video-stats">
        {video.channelName && (
          <div className="channel-info">
            <h3 className='channel-name'>Channel:{video.channelName}</h3>
          </div>
        )}
        
       <div> <span>{video.views.toLocaleString()} views</span>
        <span>•</span>
        <span>{new Date(video.publishedAt).toDateString()}</span></div>
      </div>
      <div className="video-buttons">
        <button className="btn">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14 2 7.59 8.41C7.22 8.78 7 9.3 7 9.83V19c0 1.1.9 2 2 2h9c.78 0 1.48-.45 1.82-1.15l3.02-6.03c.1-.23.16-.47.16-.72v-1.1l-.01-.1L23 10z"/></svg>
        </button>
        <button className="btn">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M1 3h4v12H1V3zm22 11c0 1.1-.9 2-2 2h-6.31l.95 4.57.03.32  c0 .41-.17.79-.44 1.06L14 22l-6.41-6.41C7.22 15.22 7 14.7 7 14.17V5 c0-1.1.9-2 2-2h9c.78 0 1.48.45 1.82 1.15l3.02 6.03 c.1.23.16.47.16.72v1.1l-.01.1.01.9z"/></svg>
        </button>
        <button className="btn">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.02-4.11c.54.5 1.25.81 2.07.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.91 9.81C8.37 9.31 7.66 9 6.84 9 5.18 9 3.84 10.34 3.84 12s1.34 3 3 3c.82 0 1.53-.31 2.07-.81l7.12 4.19c-.05.2-.09.41-.09.62 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"/></svg>
        </button>
        <button className="btn">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M5 20h14v-2H5m14-5h-4V4h-4v9H5l7 7 7-7z"/></svg>

        </button>
        <button className="btn">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2a1.5 1.5 0 0 0-3 0v.68C7.63 3.36 6 5.92 6 9v7l-2 2v1h16v-1l-2-2z"/></svg>
        </button>
      </div>
    </div>

      <div className="video-details">
        
        <h2>{video.title}</h2>
        <p>{video.description}</p>
        
      </div>
    </div>
    </div>
    <div className='right-side'>

      <div className="suggested-videos">
        <h3>Suggested Videos</h3>
        {svideo.map((v) => (
          <div key={v.id} className="suggested-video-card">
            <img src={v.thumbnail} alt={v.title} className="suggested-thumb" />
            <div className="suggested-info">
              <h4>{v.title}</h4>
              <p>{v.description}</p>
              <span className="channel-name">{v.channelName}</span>
            </div>
          </div>
        ))}
      </div>
            
      </div>
    </div>
  );
};

export default WatchVideo;
