import React from 'react';
import { useTheme } from '../context/ThemeContext';

const EnergySummaryBar = ({ energySummary }) => {
  const { isDark } = useTheme();

  const metrics = [
    { label: "Today", value: energySummary.todayKWh, unit: "kWh", color: "bg-blue-500/10 text-blue-500" },
    { label: "This Week", value: energySummary.thisWeekKWh, unit: "kWh", color: "bg-indigo-500/10 text-indigo-500" },
    { label: "This Month", value: energySummary.thisMonthKWh, unit: "kWh", color: "bg-purple-500/10 text-purple-500" },
    { label: "Lifetime", value: energySummary.totalLifetimeKWh, unit: "kWh", color: "bg-pink-500/10 text-pink-500" },
    { label: "CO2 Saved Today", value: energySummary.co2SavedKgToday, unit: "kg", color: "bg-green-500/10 text-green-500" },
  ];

  return (
    <div className={`flex flex-wrap gap-4 p-4 rounded-2xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} transition-colors duration-200`}>
      {metrics.map((metric, i) => (
        <div key={i} className={`flex-1 min-w-[140px] p-4 rounded-xl ${metric.color} bg-opacity-20`}>
          <div className="text-sm font-medium mb-1 opacity-80">{metric.label}</div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">{metric.value}</span>
            <span className="text-sm font-medium opacity-80">{metric.unit}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnergySummaryBar;
