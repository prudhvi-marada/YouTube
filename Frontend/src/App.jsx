import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import VideoPlayerPage from './components/VideoPlayerPage';
import ChannelPage from './components/ChannelPage';
import CreateChannelPage from './components/createChannelPage';
import UploadVideoForm from './components/UploadVideoForm';
import Profile from './components/ProfilePage';

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    

    const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
    console.log("clicked");
  };

  return (
    <div className="app-container">
      <Header toggleSidebar={toggleSidebar} />
      <div className="main-content">
      <Sidebar isOpen={sidebarOpen} />
          <div className={`content ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
        <Routes>
          <Route path="/" element={<HomePage sidebarOpen={sidebarOpen} />} />
          <Route path="/search/:term" element={<HomePage sidebarOpen={sidebarOpen} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/video/:id" element={<VideoPlayerPage sidebarOpen={sidebarOpen}/>} />
          <Route path="/channel" element={<ChannelPage />} />
          <Route path="/create-channel" element={<CreateChannelPage />} />
          <Route path="/uploadVideo" element={<UploadVideoForm/>} />
          <Route path="/profile" element={ <Profile user={user} setUser={setUser} />} />

        </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
