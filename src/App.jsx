import React from 'react';
import { useTheme } from './context/ThemeContext';

// Import data
import {
  siteInfo,
  liveStats,
  energySummary,
  hourlyToday,
  weeklyData,
  panelGroups
} from './data/solarData';

// Import components
import SiteHeader from './components/SiteHeader';
import LiveStatsCards from './components/LiveStatsCards';
import EnergySummaryBar from './components/EnergySummaryBar';
import HourlyChart from './components/HourlyChart';
import WeeklyChart from './components/WeeklyChart';
import PanelGroupTable from './components/PanelGroupTable';

function App() {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Dashboard Content */}
        <div className="flex flex-col gap-8">
          <SiteHeader siteInfo={siteInfo} />
          <LiveStatsCards liveStats={liveStats} />
          <EnergySummaryBar energySummary={energySummary} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <HourlyChart hourlyToday={hourlyToday} />
            <WeeklyChart weeklyData={weeklyData} />
          </div>

          <PanelGroupTable panelGroups={panelGroups} />
        </div>

      </div>
    </div>
  );
}

export default App;
