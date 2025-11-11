import React from 'react';
import { Users } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    { id: 1, action: 'New user registered', time: '2 minutes ago' },
    { id: 2, action: 'Order completed', time: '15 minutes ago' },
    { id: 3, action: 'Payment received', time: '1 hour ago' },
    { id: 4, action: 'New message', time: '3 hours ago' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Users size={20} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">{activity.action}</p>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;