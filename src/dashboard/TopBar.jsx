import React from 'react';
import { Bell } from 'lucide-react';

const TopBar = ({ activeTab }) => {
  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 capitalize">
          {activeTab}
        </h2>
        <p className="text-sm text-gray-500">Welcome back, John!</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-gray-100 relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="font-semibold text-white">JD</span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;