import React, { useState ,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import youtubeLogo from '../assets/youtube.png';
import menuLogo from '../assets/menu.png';
import loadingGif from '../assets/loadingGif.gif';




const Header = ({ toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const formRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  const handleImgClick = () => {
    formRef.current?.requestSubmit(); // Triggers form submission
  };

  return (
    <header className="header">
       <div className="left-section">
        <img src={menuLogo} alt="menu" className="menu-icon" onClick={toggleSidebar} />
        <div className="logo" onClick={() => navigate('/')}>
        <img src={youtubeLogo} alt="YouTube" />
        <h2>YouTube</h2>
      </div>
      </div>

      <form className="search-bar" onSubmit={handleSearch}  ref={formRef}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
         src={loadingGif} 
         alt="Loading..." 
         className="gif-icon"
         onClick={handleImgClick}
          />
      </form>

      <div className="auth-buttons">
        {/* <button onClick={() => navigate('/login')}>Login</button> */}
        <button onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
