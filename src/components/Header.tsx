import React from 'react';
import { BookOpen } from 'lucide-react';

interface HeaderProps {
  darkMode?: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  return (
    <header className="relative bg-white dark:bg-gray-900 shadow-md backdrop-blur-md bg-opacity-95 dark:bg-opacity-95 sticky top-0 z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BookOpen size={28} className="text-indigo-600 dark:text-indigo-400 mr-3" />
            <div>
              <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight">
                Watch & Learn
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Expand your knowledge through curated educational videos
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#" active>Home</NavLink>
            <NavLink href="#">Categories</NavLink>
            <NavLink href="#">Playlists</NavLink>
            <NavLink href="#">About</NavLink>
          </nav>
          
          <button className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, active, children }) => {
  return (
    <a 
      href={href}
      className={`text-sm font-medium transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400 ${
        active 
          ? 'text-indigo-600 dark:text-indigo-400' 
          : 'text-gray-700 dark:text-gray-300'
      }`}
    >
      {children}
    </a>
  );
};

export default Header;