import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import youtubeLogo from '../assets/youtube.png';
import menuLogo from '../assets/menu.png';
import loadingGif from '../assets/loadingGif.gif';
import '../App.css'

const Header = ({ toggleSidebar }) => {
  const [userName, setUserName] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const formRef = useRef();
  const location = useLocation();

  // Parse user data safely
  const getUserData = () => {
    try {
      const data = localStorage.getItem('user');
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
      return null;
    }
  };

  useEffect(() => {
    const user = getUserData();
    setUserName(user?.name || null);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm) {
      navigate(`/search/${encodeURIComponent(trimmedTerm)}`);
    }
  };

  const handleImgClick = () => {
    formRef.current?.requestSubmit();
  };

  // Defensive toggleSidebar call
  const handleToggleSidebar = () => {
    if (typeof toggleSidebar === 'function') {
      toggleSidebar();
    } else {
      console.warn('toggleSidebar prop is not a function');
    }
  };

  return (
    <header className="header">
      <div className="left-section">
        <img src={menuLogo} alt="menu" className="menu-icon" onClick={handleToggleSidebar} />
        <div className="logo" onClick={() => navigate('/')}>
          <img src={youtubeLogo} alt="YouTube" />
          <h2>YouTube</h2>
        </div>
      </div>

      <form className="search-bar" onSubmit={handleSearch} ref={formRef}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search videos"
        />
        <img src={loadingGif} alt="Search" className="gif-icon" onClick={handleImgClick} style={{ cursor: 'pointer' }} />
      </form>

      <div className="auth-buttons">
        <nav>
          {userName ? (
            <>
            <Link to="/profile"> <span className="user-name">{userName}</span> </Link> 
            
            </>
          ) : (
            <Link to="/login" className="signin-btn">
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
