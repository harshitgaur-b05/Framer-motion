import React from 'react';

const StatsCard = ({ title, value, change }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <p className="text-sm text-gray-500 mb-1">{title}</p>
      <p className="text-3xl font-bold text-gray-800 mb-2">{value}</p>
      <p
        className={`text-sm ${
          change.startsWith('+') ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {change} from last month
      </p>
    </div>
  );
};

export default StatsCard;