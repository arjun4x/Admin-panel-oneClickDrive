import React from 'react';
import DarkMode from './DarkMode'
import UserName from './UserName';
const Header = () => {
  // You can replace this with actual user data later
  const username = 'Arjun';
  const avatarUrl = '/user-avatar.png';

  return (
    <header className="bg-white dark:bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <a href="#" className="text-xl font-bold text-gray-900 dark:text-white">
            MyApp
          </a>
        </div>
        <div className="flex items-center gap-6">
          {/* <button
            className="text-sm font-semibold text-gray-900 dark:text-white"
          >
            Dark Mode <span aria-hidden="true">→</span>
          </button> */}
          <UserName/>
          <DarkMode/>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
