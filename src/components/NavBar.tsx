import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="text-white text-lg font-semibold">iTodo</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
