import React from 'react';

const QuickActions = () => {
  const actions = ['Add User', 'Generate Report', 'Send Newsletter', 'View Analytics'];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Quick Actions
      </h3>
      <div className="space-y-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className="w-full p-3 text-left bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;