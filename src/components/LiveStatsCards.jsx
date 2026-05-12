import React from 'react';
import StatCard from './StatCard';

const LiveStatsCards = ({ liveStats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
      <StatCard label="Current Output" value={liveStats.currentOutputKW} unit="kW" />
      <StatCard label="Today's Peak" value={liveStats.peakOutputTodayKW} unit="kW" />
      <StatCard label="Efficiency" value={liveStats.efficiencyPercent} unit="%" />
      <StatCard label="Battery Level" value={liveStats.batteryLevelPercent} unit="%" />
      <StatCard label="Grid Export" value={liveStats.gridExportKW} unit="kW" />
      <StatCard label="Self Consumption" value={liveStats.selfConsumptionKW} unit="kW" />
    </div>
  );
};

export default LiveStatsCards;
