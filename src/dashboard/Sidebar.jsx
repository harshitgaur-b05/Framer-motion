import React from 'react';
import { Menu, X, Home, BarChart3, Users, Settings, FileText } from 'lucide-react';

const Sidebar = ({ sidebarOpen, setSidebarOpen, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'reports', icon: FileText, label: 'Reports' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div
      className={`${
        sidebarOpen ? 'w-64' : 'w-20'
      } bg-gradient-to-b from-blue-600 to-blue-800 text-white transition-all duration-300 ease-in-out flex flex-col`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-blue-500">
        <h1
          className={`font-bold text-xl transition-opacity duration-300 ${
            sidebarOpen ? 'opacity-100' : 'opacity-0 w-0'
          }`}
        >
          MyApp
        </h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 p-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'bg-blue-700 shadow-lg'
                  : 'hover:bg-blue-700/50'
              }`}
            >
              <Icon size={20} className="flex-shrink-0" />
              <span
                className={`transition-opacity duration-300 ${
                  sidebarOpen ? 'opacity-100' : 'opacity-0 w-0'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-blue-500">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="font-semibold">JD</span>
          </div>
          <div
            className={`transition-opacity duration-300 ${
              sidebarOpen ? 'opacity-100' : 'opacity-0 w-0'
            }`}
          >
            <p className="font-medium text-sm">John Doe</p>
            <p className="text-xs text-blue-200">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;