import React from 'react';
import VideoCard from './VideoCard';
import './VideoGrid.css';

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  duration: string;
  channelAvatar?: string;
}

interface VideoGridProps {
  videos: Video[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          thumbnail={video.thumbnail}
          title={video.title}
          channel={video.channel}
          views={video.views}
          timestamp={video.timestamp}
          duration={video.duration}
          channelAvatar={video.channelAvatar}
        />
      ))}
    </div>
  );
};

export default VideoGrid;