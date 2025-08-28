import React from 'react';
import { 
  Home, 
  PlayCircle, 
  Clock, 
  ThumbsUp, 
  Download,
  Music,
  Film,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Settings,
  Flag,
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const mainSections = [
    { icon: Home, label: 'Home' },
    { icon: PlayCircle, label: 'Shorts' },
    { icon: Radio, label: 'Subscriptions' }
  ];

  const librarySections = [
    { icon: Clock, label: 'History' },
    { icon: PlayCircle, label: 'Your videos' },
    { icon: Clock, label: 'Watch later' },
    { icon: ThumbsUp, label: 'Liked videos' },
    { icon: Download, label: 'Downloads' }
  ];

  const exploreSections = [
    { icon: Music, label: 'Music' },
    { icon: Film, label: 'Movies' },
    { icon: Radio, label: 'Live' },
    { icon: Gamepad2, label: 'Gaming' },
    { icon: Newspaper, label: 'News' },
    { icon: Trophy, label: 'Sports' },
    { icon: Lightbulb, label: 'Learning' },
    { icon: Shirt, label: 'Fashion & Beauty' }
  ];

  const bottomSections = [
    { icon: Settings, label: 'Settings' },
    { icon: Flag, label: 'Report history' },
    { icon: HelpCircle, label: 'Help' },
    { icon: MessageSquare, label: 'Send feedback' }
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="sidebar-content">
        <div className="sidebar-section">
          {mainSections.map((item, index) => (
            <div key={index} className="sidebar-item">
              <item.icon size={24} />
              <span className="sidebar-label">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="sidebar-divider"></div>

        <div className="sidebar-section">
          <div className="sidebar-title">Library</div>
          {librarySections.map((item, index) => (
            <div key={index} className="sidebar-item">
              <item.icon size={24} />
              <span className="sidebar-label">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="sidebar-divider"></div>

        <div className="sidebar-section">
          <div className="sidebar-title">Explore</div>
          {exploreSections.map((item, index) => (
            <div key={index} className="sidebar-item">
              <item.icon size={24} />
              <span className="sidebar-label">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="sidebar-divider"></div>

        <div className="sidebar-section">
          {bottomSections.map((item, index) => (
            <div key={index} className="sidebar-item">
              <item.icon size={24} />
              <span className="sidebar-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;