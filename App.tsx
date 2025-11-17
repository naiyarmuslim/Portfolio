
import React, { useState, useMemo } from 'react';
import { View, ViewConfig } from './types';
import Header from './components/Header';

// Import View Components
import HomeView from './components/views/HomeView';
import CsSystemsView from './components/views/CsSystemsView';
import EthicsView from './components/views/EthicsView';
import CulinaryView from './components/views/CulinaryView';
import GuidanceView from './components/views/GuidanceView';
import StoryView from './components/views/StoryView';
import TravelView from './components/views/TravelView';
import ContactView from './components/views/ContactView';

const VIEWS: Record<View, ViewConfig> = {
  [View.Home]: { id: View.Home, component: HomeView, accentColor: 'blue' },
  [View.CsSystems]: { id: View.CsSystems, component: CsSystemsView, accentColor: 'teal' },
  [View.Ethics]: { id: View.Ethics, component: EthicsView, accentColor: 'purple' },
  [View.Culinary]: { id: View.Culinary, component: CulinaryView, accentColor: 'orange' },
  [View.Guidance]: { id: View.Guidance, component: GuidanceView, accentColor: 'green' },
  [View.Story]: { id: View.Story, component: StoryView, accentColor: 'yellow' },
  [View.Travel]: { id: View.Travel, component: TravelView, accentColor: 'red' },
  [View.Contact]: { id: View.Contact, component: ContactView, accentColor: 'indigo' },
};

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(View.Home);

  const handleNavigate = (view: View) => {
    setActiveView(view);
    window.scrollTo(0, 0);
  };

  const ActiveComponent = useMemo(() => VIEWS[activeView].component, [activeView]);
  const activeAccentColor = useMemo(() => VIEWS[activeView].accentColor, [activeView]);
  
  const viewOrder = [
    View.Home,
    View.CsSystems,
    View.Ethics,
    View.Culinary,
    View.Guidance,
    View.Story,
    View.Travel,
    View.Contact
  ];

  return (
    <div className="min-h-screen bg-navy font-sans antialiased">
      <Header
        views={viewOrder}
        activeView={activeView}
        onNavigate={handleNavigate}
        accentColor={activeAccentColor}
      />
      <main className="pt-20">
        <ActiveComponent accentColor={activeAccentColor} />
      </main>
    </div>
  );
};

export default App;
