import React from 'react';
import { useTheme } from '../context/ThemeContext';

const SiteHeader = ({ siteInfo }) => {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className={`p-6 md:p-8 rounded-3xl mb-8 flex flex-col md:flex-row justify-between items-start md:items-center ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-200`}>
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-1">{siteInfo.siteName}</h1>
        <p className={`text-lg mb-4 md:mb-0 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{siteInfo.location}</p>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-3 mb-2">
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`px-4 py-1 rounded-full font-medium text-sm border shadow-sm transition-colors
              ${isDark 
                ? 'bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600' 
                : 'bg-white border-gray-200 text-gray-800 hover:bg-gray-100'}`}
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
          <div className="flex items-center justify-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-semibold border border-emerald-500/20">
            <span className="mr-1.5 animate-pulse text-xs">●</span> Online
          </div>
        </div>
        <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Total Panels: {siteInfo.totalPanels} <span className="mx-2 opacity-50">|</span> Active: {siteInfo.activePanels}
        </p>
      </div>
    </div>
  );
};

export default SiteHeader;
