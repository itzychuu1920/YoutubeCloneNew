import React from 'react';
import { MoreVertical } from 'lucide-react';
import './VideoCard.css';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  duration: string;
  channelAvatar?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  thumbnail,
  title,
  channel,
  views,
  timestamp,
  duration,
  channelAvatar
}) => {
  return (
    <div className="video-card">
      <div className="video-thumbnail">
        <img src={thumbnail} alt={title} className="thumbnail-image" />
        <div className="video-duration">{duration}</div>
        <div className="video-overlay">
          <div className="overlay-controls">
            <button className="watch-later-btn">⏰</button>
            <button className="add-to-queue-btn">📋</button>
          </div>
        </div>
      </div>
      
      <div className="video-info">
        <div className="video-details">
          {channelAvatar && (
            <div className="channel-avatar">
              <img src={channelAvatar} alt={channel} />
            </div>
          )}
          <div className="video-meta">
            <h3 className="video-title">{title}</h3>
            <div className="video-stats">
              <span className="channel-name">{channel}</span>
              <div className="stats-row">
                <span className="views">{views} views</span>
                <span className="timestamp">{timestamp}</span>
              </div>
            </div>
          </div>
        </div>
        <button className="more-options">
          <MoreVertical size={16} />
        </button>
      </div>
    </div>
  );
};

export default VideoCard;