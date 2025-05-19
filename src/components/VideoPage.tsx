import React, { useState } from 'react';
import { Moon, Sun, Search } from 'lucide-react';
import Header from './Header';
import FeaturedVideo from './FeaturedVideo';
import VideoSection from './VideoSection';
import Footer from './Footer';
import { VideoData } from '../types';
import { videoData } from '../data/videos';

const VideoPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const filteredVideos = (videos: VideoData[]): VideoData[] => {
    if (!searchQuery.trim()) return videos;
    return videos.filter(video => 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Group videos by category
  const videosByCategory: Record<string, VideoData[]> = {};
  videoData.forEach(video => {
    if (!videosByCategory[video.category]) {
      videosByCategory[video.category] = [];
    }
    videosByCategory[video.category].push(video);
  });

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <Header />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and theme toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        
        {/* Featured video */}
        <FeaturedVideo 
          video={videoData[0]} 
          darkMode={darkMode}
        />
        
        {/* Video sections by category */}
        {Object.entries(videosByCategory).map(([category, videos]) => (
          <VideoSection 
            key={category}
            title={category}
            videos={filteredVideos(videos)}
            darkMode={darkMode}
          />
        ))}
      </main>
      
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default VideoPage;