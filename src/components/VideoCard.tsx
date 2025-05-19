import React from 'react';
import { Play, Clock } from 'lucide-react';
import { VideoData } from '../types';

interface VideoCardProps {
  video: VideoData;
  darkMode: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, darkMode }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl bg-white dark:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative aspect-video">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="w-12 h-12 rounded-full bg-indigo-600/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play size={20} className="text-white ml-0.5" />
          </div>
        </div>
        
        {video.duration && (
          <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs py-1 px-2 rounded flex items-center">
            <Clock size={12} className="mr-1" />
            {video.duration}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-gray-900 dark:text-white mb-1 line-clamp-1">
          {video.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
          {video.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="inline-block px-2.5 py-0.5 text-xs rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
            {video.category}
          </span>
          <a 
            href={video.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            Watch Now →
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;