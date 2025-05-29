import { useState } from 'react';
import { uploadVideo } from '../axios/api';
import { useNavigate } from 'react-router-dom';
import '../styles/UploadVideoForm.css';
import '../App.css'

const UploadVideoForm = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');
  const channelId = localStorage.getItem('chanelId'); // fixed typo: from channel_Id to channelId
  const [formData, setFormData] = useState({
    title: '',
    thumbnailUrl: '',
    videoUrl: '',
    description: '',
    category: 'Music',
    channelId: channelId || '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const categories = ['Education', 'Movies', 'Entertainment', 'News', 'Music'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await uploadVideo(formData, token);
      setMessage('✅ Video uploaded successfully!');
      setFormData({
        title: '',
        thumbnailUrl: '',
        videoUrl: '',
        description: '',
        category: 'Music',
        channelId: channelId || '',
      });
      setTimeout(() => {
        navigate('/channel');
      }, 1000);
    } catch (error) {
      setMessage(`❌ Upload failed: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="v-upload-form">
      <h2>Upload a New Video</h2>

      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        placeholder="Enter video title"
      />

      <label htmlFor="thumbnailUrl">Thumbnail URL:</label>
      <input
        type="url"
        id="thumbnailUrl"
        name="thumbnailUrl"
        value={formData.thumbnailUrl}
        onChange={handleChange}
        required
        placeholder="Enter thumbnail image URL"
      />

      <label htmlFor="videoUrl">Video URL:</label>
      <input
        type="url"
        id="videoUrl"
        name="videoUrl"
        value={formData.videoUrl}
        onChange={handleChange}
        required
        placeholder="Enter video URL"
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        placeholder="Write a short description"
      />

      <label htmlFor="category">Category:</label>
      <select
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <button type="submit" disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Video'}
      </button>

      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default UploadVideoForm;
