import React, { useState } from 'react';
import { Search, Menu, Bell, User, Video, Grid3X3 } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button" onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        <div className="logo">
          <span className="logo-text">YouTube</span>
        </div>
      </div>

      <div className="header-center">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="search-input"
          />
          <button className="search-button">
            <Search size={20} />
          </button>
        </div>
      </div>

      <div className="header-right">
        <button className="icon-button">
          <Video size={24} />
        </button>
        <button className="icon-button">
          <Grid3X3 size={24} />
        </button>
        <button className="icon-button">
          <Bell size={24} />
        </button>
        <button className="profile-button">
          <User size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;