import React from 'react';
import { Play, Clock } from 'lucide-react';
import { VideoData } from '../types';

interface FeaturedVideoProps {
  video: VideoData;
  darkMode: boolean;
}

const FeaturedVideo: React.FC<FeaturedVideoProps> = ({ video, darkMode }) => {
  return (
    <div className="mb-16 rounded-xl overflow-hidden relative group">
      <div 
        className="h-[400px] bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${video.thumbnail})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-600 text-white mb-4">
            Featured
          </span>
          
          <h2 className="text-3xl font-bold text-white mb-3">{video.title}</h2>
          
          <p className="text-gray-200 mb-6 max-w-2xl">{video.description}</p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors duration-200"
            >
              <Play size={18} className="mr-2" />
              Watch Now
            </a>
            
            <div className="inline-flex items-center text-gray-300">
              <Clock size={18} className="mr-2" />
              {video.duration}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <div className="w-20 h-20 rounded-full bg-indigo-600/90 flex items-center justify-center cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
          <Play size={32} className="text-white ml-1" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideo;