import axios from 'axios';

// Set the base URL for your API
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(BASE_URL)

// Axios instance to handle API calls
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// User Authentication
export const registerUser = async (userData) => {
  
    const response = await api.post('/auth/register', userData);
    return response;
 
};

export const loginUser = async (userData) => {
    const response = await api.post('/auth/login', userData);
    return response;
};

export const getUserDetails = async (token) => {
  
    const response = await api.get('/user/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
};

// Video Management
export const getAllVideos = async () => {
  
    const response = await api.get('/videos');
    return response;
  
};

export const uploadVideo = async (videoData, token) => {
  
    const response = await api.post('/videos', videoData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
};

export const getVideoById = async (videoId) => {
    const response = await api.get(`/videos/${videoId}`);
    return response;
 
};

export const deleteVideo = async (videoId, token) => {
   
    const response = await api.delete(`/videos/${videoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  
};

// Comment Management
export const addComment = async (commentData, videoId, token) => {
    const response = await api.post(`/comments`, { ...commentData, videoId }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  
};

export const getComments = async (videoId) => {
    const response = await api.get(`/comments/${videoId}`);
    return response;
  
};

export const deleteComment = async (commentId, token) => {
    const response = await api.delete(`/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
 
};

// Channel Management
export const getChannelDetails = async (userId) => {
    const response = await api.get(`/channels/user/${userId}`);
    return response;
 
};

// Search & Filter
export const searchVideos = async (query) => {
    const response = await api.get(`/videos/search`, { params: { query } });
    return response;
 
};


export const createChannel = async (channelData) => {
  const token = localStorage.getItem('authToken');

  const response = await api.post('/channels/create',
    channelData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};


// Like Video API
export const likeVideo = async (videoId, userId) => {
  return await api.put(`/videos/like/${videoId}`,{ videoId, userId });
};

// Dislike Video API
export const dislikeVideo = async (videoId, userId) => {
  return await api.put(`/videos/dislike/${videoId}`,{ videoId, userId });
};

export const updateAvatarURL = (avatarUrl) => {
  const token = localStorage.getItem('authToken');

  return api.put(
    '/user/avatar',
    { avatarUrl },
    {
      headers: {
        Authorization: `Bearer ${token}`,  // <-- This is required
      },
    }
  );
};
