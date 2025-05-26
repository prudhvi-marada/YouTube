import React, { useEffect, useState } from 'react';
import '../styles/ChannelPage.css';
import { getChannelDetails,deleteVideo} from '../axios/api'; // You must define this API call
import { Link } from 'react-router-dom';
const storedUser = JSON.parse(localStorage.getItem('user'));
const token = localStorage.getItem('authToken');



const ChannelPage = () => {
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const data = await getChannelDetails(storedUser.id);
        localStorage.setItem('chanelId',data._id)
        setChannel(data);
        setVideos(data.videos);
      } catch (error) {
        console.error('Error fetching channel:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChannel();
  }, []);


 const handelDelete =async (id) => {
    await deleteVideo(id,token);
    window.location.reload();
  };


  if (loading) return <div className="channel-page-c">Loading...</div>;

  if (!channel) {
    return (
      <div className="channel-page-c no-channel-c">
        <h2>You haven't created a channel yet</h2>
        <Link to="/create-channel" className="create-btn-c">Create Your Channel</Link>
      </div>
    );
  }

  return (
    <div className="channel-page-c">
      <div className="channel-banner-c">
        <img src={channel.channelBanner || '/default-banner.jpg'} alt="Channel Banner" />
      </div>

      <div className="channel-info-c">
        <div className="left-c">
         <img src={storedUser.avatar} alt="Channel-Logo" className="Avatar-channel"/>
        </div>
        <div className="right-c">
           <h2>{channel.channelName}</h2>
          <p>{channel.description}</p>
        </div>
      </div>

      <div className="channel-tabs-c">
        <button className="active-c">Your Videos</button>
        <Link to="/uploadVideo">Add Video</Link>
        
      </div>
      <hr className="channel-underline-c" />

      <div className="channel-videos-c">
        {videos.length === 0 ? (
          <p className="no-videos-c">You haven't added any videos yet.</p>
        ) : (
          <div className="video-list-c">
            {videos.map((video) => (
              <div className="video-card-c" key={video._id}>
              <Link to={`/video/${video._id}`}>
                <img src={video.thumbnailUrl} alt={video.title} />
                </Link>
                <div className="delete-fun">
                <h4>{video.title}</h4> <div className='del' onClick={()=>handelDelete(video._id)}>🗑️</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChannelPage;
