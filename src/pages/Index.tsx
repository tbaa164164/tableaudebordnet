
import React from 'react';
import { Header } from '@/components/Header';
import { MainTrend } from '@/components/MainTrend';
import { SecurityAlerts } from '@/components/SecurityAlerts';
import { UpdateFeatures } from '@/components/UpdateFeatures';
import { SourceDistribution } from '@/components/SourceDistribution';
import { TechnologiesChart } from '@/components/TechnologiesChart';
import { ActivityTrendsChart } from '@/components/ActivityTrendsChart';
import { InfluencersGrid } from '@/components/InfluencersGrid';
import { WatchToolsList } from '@/components/WatchToolsList';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <MainTrend />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <SecurityAlerts />
          <UpdateFeatures />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <SourceDistribution />
          <TechnologiesChart />
        </div>
        
        <div className="mb-6">
          <ActivityTrendsChart />
        </div>
        
        <div className="grid grid-cols-1 gap-6 mb-6">
          <InfluencersGrid />
        </div>
        
        <div className="mb-6">
          <WatchToolsList />
        </div>
      </main>
      
      <footer className="bg-white border-t border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 - Tableau de Bord de Veille Technologique .NET</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
