import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import StatsCard from './StatsCard';
import RecentActivity from './RecentActivity';
import QuickActions from './QuickActions';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar activeTab={activeTab} />

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              { title: 'Total Users', value: '2,453', change: '+12%' },
              { title: 'Revenue', value: '$45,231', change: '+8%' },
              { title: 'Orders', value: '1,234', change: '-3%' },
              { title: 'Conversion', value: '3.2%', change: '+5%' },
            ].map((stat, index) => (
              <StatsCard
                key={index}
                title={stat.title}
                value={stat.value}
                change={stat.change}
              />
            ))}
          </div>

          {/* Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <RecentActivity />
            <QuickActions />
          </div>
        </main>
      </div>
    </div>
  );
}