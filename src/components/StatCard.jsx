import React from 'react';
import { useTheme } from '../context/ThemeContext';

const StatCard = ({ label, value, unit }) => {
  const { isDark } = useTheme();

  return (
    <div className={`p-6 rounded-2xl shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'} transition-colors duration-200 w-full`}>
      <h3 className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold">{value}</span>
        <span className={`text-lg font-semibold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{unit}</span>
      </div>
    </div>
  );
};

export default StatCard;
