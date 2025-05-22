import axios from 'axios';

// Set the base URL for your API
const BASE_URL = 'http://localhost:5000/api/'; // Update this to your actual backend URL

// Axios instance to handle API calls
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// User Authentication
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};

export const getUserDetails = async (token) => {
  try {
    const response = await api.get('/user/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};

// Video Management
export const getAllVideos = async () => {
  try {
    const response = await api.get('/videos');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};

export const uploadVideo = async (videoData, token) => {
  try {
    const response = await api.post('/videos', videoData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};

export const getVideoById = async (videoId) => {
  try {
    const response = await api.get(`/videos/${videoId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};

export const deleteVideo = async (videoId, token) => {
  try {
    const response = await api.delete(`/videos/${videoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};

// Comment Management
export const addComment = async (commentData, videoId, token) => {
  try {
    const response = await api.post(`/comments`, { ...commentData, videoId }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};

export const getComments = async (videoId) => {
  try {
    const response = await api.get(`/comments/${videoId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};

export const deleteComment = async (commentId, token) => {
  try {
    const response = await api.delete(`/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};

// Channel Management
export const getChannelDetails = async (userId) => {
  try {
    const response = await api.get(`/channel/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};

// Search & Filter
export const searchVideos = async (query) => {
  try {
    const response = await api.get(`/videos/search`, { params: { query } });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};

export const filterVideos = async (filters) => {
  try {
    const response = await api.get(`/videos/filter`, { params: filters });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};
