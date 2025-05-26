import React, { useState ,useRef ,useEffect} from 'react';
import { useNavigate ,Link,useLocation} from 'react-router-dom';
import '../styles/Header.css';
import youtubeLogo from '../assets/youtube.png';
import menuLogo from '../assets/menu.png';
import loadingGif from '../assets/loadingGif.gif';






const Header = ({ toggleSidebar }) => {
   const [userName, setUserName] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
   const formRef = useRef();
   const location = useLocation();
  const userData = JSON.parse(localStorage.getItem('user'));



   useEffect(() => {
    setUserName(userData?.name || null);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    localStorage.removeItem('chanelId');

    setUserName(null);
    navigate('/login');
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
        {/* <button onClick={() => navigate('/login')}>logout</button> */}
       <nav>
        {userName ? (
          <>
          <span className="user-name">{userName}</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
         ) : (
          <Link to="/login" className="signin-btn">Sign In</Link>
          )}
      </nav>    
    </div>
    </header>
  );
};

export default Header;
