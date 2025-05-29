import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/VideoPlayerPage.css';  
import ReactPlayer from 'react-player'
import { getVideoById,getComments, addComment, deleteComment,likeVideo, dislikeVideo,getChannelDetails} from '../axios/api';
import { Link } from 'react-router-dom';
import '../App.css'



const WatchVideo = ({ sidebarOpen }) => {
    const [video,setVideo]=useState(null);
    const [videos, setVideos] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('authToken');
    const { id } = useParams();
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [likeCount, setLikeCount] = useState(null);
    const [dislikeCount, setDislikeCount] = useState(null);
  
  // const [channel, setChannel] = useState(null);
  const fetchVideoComments = async () => {
    try {
      const res = await getComments(id);
      setComments(res.data);  
    } catch (error) {
      console.error('Failed to fetch comments:', error.message);
    }
  };

  const handleAddComment = async () => {
  if (!newComment.trim()) return;
  try {
    await addComment({ text: newComment }, id, token);
    setNewComment('');
    fetchVideoComments();
  } catch (error) {
    console.error('Failed to add comment:', error.message);
  }
};

const handleDeleteComment = async (commentId) => {
  if (window.confirm('Are you sure you want to delete this comment?')) {
    try {
      await deleteComment(commentId, token);
      fetchVideoComments();
    } catch (error) {
      console.error('Delete failed:', error.message);
    }
  }
};


const handleLike = async () => {
  if (!user) {
    alert("Please log in to like the video.");
    return;
  }

  try {
    const res = await likeVideo(id, user.id);

    if (liked) {
      // Unlike the video
      setLiked(false);
    } else {
      setLiked(true);
      if (disliked) setDisliked(false); // Remove dislike if previously disliked
    }

    setLikeCount(res.data.likes);
    setDislikeCount(res.data.dislikes);
  } catch (err) {
    console.error('Like error:', err);
  }
};

const handleDislike = async () => {
  if (!user) {
    alert("Please log in to dislike the video.");
    return;
  }

  try {
    const res = await dislikeVideo(id, user.id);

    if (disliked) {
      // Remove dislike
      setDisliked(false);
    } else {
      setDisliked(true);
      if (liked) setLiked(false); // Remove like if previously liked
    }

    setLikeCount(res.data.likes);
    setDislikeCount(res.data.dislikes);
  } catch (err) {
    console.error('Dislike error:', err);
  }
};




 useEffect(() => {
  const fetchVideo = async () => {
    try {
      const res = await getVideoById(id);
      setVideo(res.data);
      const sres=await getChannelDetails(res.data.uploader._id);
      setVideos(sres.data.videos);
      console.log(sres.data.videos)
    } catch (error) {
      console.error('Failed to fetch video or channel data:', error);
    }
  }; 

  fetchVideoComments();
  fetchVideo();
 // fetchVideos()
}, [id]);

if (!video) return <div className="loading">Loading...</div>;

  return (
    
    <div className={`total-page ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>

    <div className='left-side'>
    <div className="watch-video-container">
      <div className="video-player">
        <ReactPlayer controls url={video.videoUrl} width='100%' />
      </div>
    
     <div className="video-actions-container">
      <img src={video.uploader.avatar} alt="Channel-Logo" className="Avatar" />
      <div className="video-stats">
          <div className="channel-info">
            <h3 className='channel-name'>{video.channel.channelName}</h3>              
       <div> <span>{video.likes+video.dislikes+13} views</span>
        <span>•</span>
        <span>{new Date(video.uploadDate).toDateString()}</span></div>
      </div>
      </div>  
      <div className="video-buttons">
        <button className={`btn l-d ${liked ? 'active' : ''}`} onClick={handleLike}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14 2 7.59 8.41C7.22 8.78 7 9.3 7 9.83V19c0 1.1.9 2 2 2h9c.78 0 1.48-.45 1.82-1.15l3.02-6.03c.1-.23.16-.47.16-.72v-1.1l-.01-.1L23 10z"/></svg>
           <span className="L-D">{likeCount !== null ? likeCount : video.likes}</span>
        </button>
        <button className={`btn l-d ${disliked ? 'active' : ''}`} onClick={handleDislike}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M1 3h4v12H1V3zm22 11c0 1.1-.9 2-2 2h-6.31l.95 4.57.03.32  c0 .41-.17.79-.44 1.06L14 22l-6.41-6.41C7.22 15.22 7 14.7 7 14.17V5 c0-1.1.9-2 2-2h9c.78 0 1.48.45 1.82 1.15l3.02 6.03 c.1.23.16.47.16.72v1.1l-.01.1.01.9z"/></svg>
           <span className="L-D">{dislikeCount !== null ? dislikeCount : video.dislikes}</span>
        </button>
        <button className="btn hideb">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.02-4.11c.54.5 1.25.81 2.07.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.91 9.81C8.37 9.31 7.66 9 6.84 9 5.18 9 3.84 10.34 3.84 12s1.34 3 3 3c.82 0 1.53-.31 2.07-.81l7.12 4.19c-.05.2-.09.41-.09.62 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"/></svg>
        </button>
        <button className="btn hideb">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M5 20h14v-2H5m14-5h-4V4h-4v9H5l7 7 7-7z"/></svg>

        </button>
        <button className="btn hideb">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2a1.5 1.5 0 0 0-3 0v.68C7.63 3.36 6 5.92 6 9v7l-2 2v1h16v-1l-2-2z"/></svg>
        </button>
      </div>
    </div>

      <div className="video-details">
        
        <h2>{video.title}</h2>
        <p>{video.description}</p>
        
      </div>

    </div>
  <div className="video-comments-section">
  <h3 className="video-comments-title">Add Comment</h3>
  <div className="video-comment-input-wrapper">
    <input
      type="text"
      placeholder="Write a comment..."
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      className="video-comment-input"
    />
    <button onClick={handleAddComment} className="video-comment-post-btn">Post</button>
  </div>

  <div className="video-comments-list">
    {comments.map((comment) => (
      <div key={comment._id} className="video-comment-item">
        <img src={comment.userId.avatar} alt="avatar" className="video-comment-avatar" />
        <div className="video-comment-content">
          <strong className="video-comment-author">{comment.userId.name}</strong>
          <p className="video-comment-text">{comment.text}</p>
          <div className="video-comment-meta">
            <span>{new Date(comment.timestamp).toLocaleString()}</span>
            {user?.id == comment.userId._id && (
              <button
                onClick={() => handleDeleteComment(comment._id)}
                className="video-comment-delete-btn"
                title="Delete"
              >
                🗑️
              </button>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
   </div>
   
    </div>
    <div className='right-side'>

      <div className="suggested-videos">
        <h3>Suggested Videos</h3>
        {videos.map((v) => (
          <div key={v._id} className="suggested-video-card">
            <Link to={`/video/${v._id}`}>
            <img src={v.thumbnailUrl} alt={v.title} className="suggested-thumb" />
            </Link>
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
