import { useState } from 'react';
import { uploadVideo } from '../axios/api'; // Adjust path to your actual API file
const channel_Id = localStorage.getItem('chanelId');
import '../styles/UploadVideoForm.css'
import { useNavigate } from 'react-router-dom';

// You must define this API call


const UploadVideoForm = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');


  const [formData, setFormData] = useState({
    title: '',
    thumbnailUrl: '',
    videoUrl: '',
    description: '',
    category: 'Music', 
    channelId: channel_Id , // set dynamically or from user/channel context
  });

  const [message, setMessage] = useState('');
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

    try {
      const res = await uploadVideo(formData, token);
      setMessage('✅ Video uploaded successfully!');
      console.log(res);
      setFormData({
        title: '',
        thumbnailUrl: '',
        videoUrl: '',
        description: '',
        category: 'Music',
        channelId: '',
      });
      navigate('/channel')
    } catch (error) {
      setMessage(`❌ Upload failed: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }} className="v-upload-form">
      <h2>Upload a New Video</h2>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </label><br />

      <label>
        Thumbnail URL:
        <input type="text" name="thumbnailUrl" value={formData.thumbnailUrl} onChange={handleChange} required />
      </label><br />

      <label>
        Video URL:
        <input type="text" name="videoUrl" value={formData.videoUrl} onChange={handleChange} required />
      </label><br />

      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </label><br />

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange} required>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label><br />
      

      <br />

      <button type="submit">Upload Video</button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default UploadVideoForm;
