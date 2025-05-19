import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import VideoCard from './VideoCard';
import { VideoData } from '../types';

interface VideoSectionProps {
  title: string;
  videos: VideoData[];
  darkMode: boolean;
}

const VideoSection: React.FC<VideoSectionProps> = ({ title, videos, darkMode }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <section className="mb-12">
      <div 
        className="flex items-center justify-between mb-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center">
          {isExpanded ? 
            <ChevronDown size={24} className="mr-2 text-indigo-600 dark:text-indigo-400" /> : 
            <ChevronRight size={24} className="mr-2 text-indigo-600 dark:text-indigo-400" />
          }
          {title}
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {videos.length} video{videos.length !== 1 ? 's' : ''}
        </span>
      </div>
      
      {isExpanded && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.length > 0 ? (
            videos.map((video) => (
              <VideoCard 
                key={video.id} 
                video={video}
                darkMode={darkMode}
              />
            ))
          ) : (
            <p className="col-span-full text-gray-500 dark:text-gray-400 italic text-center py-8">
              No videos found in this category.
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default VideoSection;