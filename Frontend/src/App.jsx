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
import SearchResultsPage from './components/SearchResultsPage';
import CreateChannelPage from './components/createChannelPage';
import UploadVideoForm from './components/UploadVideoForm';

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

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
          <Route path="/video/:id" element={<VideoPlayerPage />} />
          <Route path="/channel" element={<ChannelPage />} />
          <Route path="/create-channel" element={<CreateChannelPage />} />
          <Route path="/uploadVideo" element={<UploadVideoForm/>} />

          <Route path="/search/:query" element={<SearchResultsPage />} />
        </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
