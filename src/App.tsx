import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import './App.css';

const sampleVideos = [
  {
    id: '1',
    thumbnail: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=640&h=360',
    title: 'Amazing Sunset Timelapse - Nature Documentary 4K',
    channel: 'Nature Explorer',
    views: '2.1M',
    timestamp: '2 weeks ago',
    duration: '10:24',
    channelAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64'
  },
  {
    id: '2',
    thumbnail: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=640&h=360',
    title: 'Learn React in 30 Minutes - Complete Beginner Tutorial',
    channel: 'CodeMaster',
    views: '854K',
    timestamp: '5 days ago',
    duration: '32:15',
    channelAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=64&h=64'
  },
  {
    id: '3',
    thumbnail: 'https://images.pexels.com/photos/1300847/pexels-photo-1300847.jpeg?auto=compress&cs=tinysrgb&w=640&h=360',
    title: 'Epic Mountain Adventure - Hiking the Alps',
    channel: 'Adventure Seekers',
    views: '1.3M',
    timestamp: '1 week ago',
    duration: '15:42',
    channelAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=64&h=64'
  },
  {
    id: '4',
    thumbnail: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=640&h=360',
    title: 'Modern UI Design Principles - Web Development 2024',
    channel: 'Design Pro',
    views: '623K',
    timestamp: '3 days ago',
    duration: '22:08',
    channelAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64&h=64'
  },
  {
    id: '5',
    thumbnail: 'https://images.pexels.com/photos/1666769/pexels-photo-1666769.jpeg?auto=compress&cs=tinysrgb&w=640&h=360',
    title: 'City Lights at Night - Urban Photography',
    channel: 'Urban Lens',
    views: '445K',
    timestamp: '4 days ago',
    duration: '8:33',
    channelAvatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64'
  },
  {
    id: '6',
    thumbnail: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=640&h=360',
    title: 'JavaScript Advanced Concepts Explained',
    channel: 'Tech Guru',
    views: '1.8M',
    timestamp: '1 month ago',
    duration: '45:12',
    channelAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64'
  },
  {
    id: '7',
    thumbnail: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=640&h=360',
    title: 'Ocean Waves Relaxing Sounds - 10 Hours',
    channel: 'Peaceful Sounds',
    views: '3.2M',
    timestamp: '6 months ago',
    duration: '10:00:00',
    channelAvatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=64&h=64'
  },
  {
    id: '8',
    thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=640&h=360',
    title: 'Space Documentary - Journey to Mars',
    channel: 'Cosmos Channel',
    views: '967K',
    timestamp: '2 weeks ago',
    duration: '28:45',
    channelAvatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64'
  }
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Header onMenuClick={toggleSidebar} />
      <div className="app-content">
        <Sidebar isOpen={isSidebarOpen} />
        <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <VideoGrid videos={sampleVideos} />
        </main>
      </div>
    </div>
  );
}

export default App;