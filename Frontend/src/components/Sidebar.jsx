import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import '../App.css'

const Sidebar = ({isOpen}) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <Link to="/" className="sidebar-link">
        🏠  Home
      </Link>
       <Link to="/channel" className="sidebar-link">
        👤  My Channel
      </Link>
      <div className='sidebar-link'>
       📁  〉You
      </div>
     <div className='sidebar-link'>
       🔍  Explore
      </div>
     
     <div className='sidebar-link'>
       🕓  History
      </div>
       <div className='sidebar-link'>
        📹  Your Videos
      </div>
       <div className='sidebar-link'>
         🎓  Your Courses
      </div>
       <div className='sidebar-link'>
       ⏱️  Watch Later
      </div>
      <div className='sidebar-link'>
       👍  Liked Videos
      </div>
       <div className='sidebar-link'>
         ⬇️  Downloads
      </div>
      <div className='sidebar-link'>
       ✂️  Your Clips
      </div>
       <div className='sidebar-link'>
        ❤️  Liked Videos
      </div>
       <div className='sidebar-link'>
        🔔  Subscriptions
      </div>
      
    </aside>
  );
};

export default Sidebar;
