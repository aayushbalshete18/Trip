import React, { useState, useEffect } from 'react';
import { TripPlan, ExpenseItem, CommunityReview, UserProfile } from './types/trip';
import { GOA_DEMO_TRIP } from './data/activities';
import { generateTripPlan } from './utils/itineraryGenerator';
import { budgetOptimizer } from './utils/budgetOptimizer';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<'home' | 'plan' | 'itinerary' | 'budget' | 'community' | 'trips' | 'profile'>('home');
  const [activeTrip, setActiveTrip] = useState<TripPlan | null>(null);

  useEffect(() => {
    // Initialise demo trip
    setActiveTrip(GOA_DEMO_TRIP as unknown as TripPlan);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b132b] text-slate-100 font-sans">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-[#0b132b]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentTab('home')}>
            <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center font-bold text-[#0b132b]">
              ST
            </div>
            <span className="text-xl font-bold text-white">SmartTrip AI</span>
          </div>

          <nav className="flex items-center gap-2">
            {(['home', 'plan', 'itinerary', 'budget', 'community', 'trips', 'profile'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setCurrentTab(tab)}
                className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-colors ${
                  currentTab === tab ? 'bg-teal-500 text-[#0b132b] font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {tab === 'plan' ? 'Plan a Trip' : tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main View Area */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-4">
          SmartTrip AI — Personalized Smart Trip Planner
        </h1>
        <p className="text-slate-400">
          Tagline: "Your Trip. Your Budget. Your Way."
        </p>
      </main>
    </div>
  );
};

export default App;
