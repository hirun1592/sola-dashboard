import React from 'react';
import { useTheme } from '../context/ThemeContext';

const PanelGroupTable = ({ panelGroups }) => {
  const { isDark } = useTheme();

  return (
    <div className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} transition-colors duration-200 overflow-hidden`}>
      <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Panel Groups</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className={`uppercase tracking-wider ${isDark ? 'bg-gray-700/50 text-gray-400' : 'bg-gray-50 text-gray-500'}`}>
            <tr>
              <th className="px-6 py-4 font-medium rounded-tl-lg">Group</th>
              <th className="px-6 py-4 font-medium">Panels</th>
              <th className="px-6 py-4 font-medium">Output (kW)</th>
              <th className="px-6 py-4 font-medium rounded-tr-lg">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700/50">
            {panelGroups.map((group, index) => {
              let rowClass = isDark ? 'hover:bg-gray-700/30' : 'hover:bg-gray-50';

              if (group.status === "Offline") {
                rowClass = isDark ? 'bg-red-900/20 hover:bg-red-900/30 text-red-200' : 'bg-red-50 hover:bg-red-100 text-red-900';
              } else if (group.status === "Degraded") {
                rowClass = isDark ? 'bg-yellow-900/20 hover:bg-yellow-900/30 text-yellow-200' : 'bg-yellow-50 hover:bg-yellow-100 text-yellow-900';
              } else {
                rowClass += isDark ? ' text-gray-300' : ' text-gray-700';
              }

              return (
                <tr key={index} className={`transition-colors duration-150 ${rowClass}`}>
                  <td className="px-6 py-4 font-semibold">{group.groupId}</td>
                  <td className="px-6 py-4">{group.panels}</td>
                  <td className="px-6 py-4">{group.outputKW}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                      ${group.status === 'Normal' ? 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800' : ''}
                      ${group.status === 'Degraded' ? 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800' : ''}
                      ${group.status === 'Offline' ? 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800' : ''}
                    `}>
                      {group.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PanelGroupTable;
