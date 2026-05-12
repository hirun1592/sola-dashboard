import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../context/ThemeContext';

const WeeklyChart = ({ weeklyData }) => {
  const { isDark } = useTheme();

  return (
    <div className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} transition-colors duration-200 h-[400px]`}>
      <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Weekly Output</h3>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} vertical={false} />
            <XAxis dataKey="day" stroke={isDark ? '#9ca3af' : '#6b7280'} tick={{fill: isDark ? '#9ca3af' : '#6b7280'}} tickLine={false} axisLine={false} />
            <YAxis label={{ value: 'Energy (kWh)', angle: -90, position: 'insideLeft', fill: isDark ? '#9ca3af' : '#6b7280', dy: 40 }} stroke={isDark ? '#9ca3af' : '#6b7280'} tick={{fill: isDark ? '#9ca3af' : '#6b7280'}} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: isDark ? '#1f2937' : '#ffffff', border: 'none', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              itemStyle={{ color: '#8b5cf6' }}
              cursor={{ fill: isDark ? '#374151' : '#f3f4f6' }}
            />
            <Bar dataKey="kWh" fill="#8b5cf6" radius={[4, 4, 0, 0]} maxBarSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyChart;
