
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import RightPanel from './components/RightPanel';
import HomeView from './components/HomeView';
import SkillForgeView from './components/SkillForgeView';
import ExamPrepView from './components/ExamPrepView';
import AICoursesView from './components/AICoursesView';
import CopilotView from './components/CopilotView';
import JobsView from './components/JobsView';
import CommunityView from './components/CommunityView';
import ProfileView from './components/ProfileView';
import SettingsView from './components/SettingsView';
import CreateView from './components/CreateView'; // Import new view
import { NavSection } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<NavSection>(NavSection.Home);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isRightPanelOpen, setRightPanelOpen] = useState(true);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Hide Right Panel logic for specific tabs
  const shouldShowRightPanel = isRightPanelOpen && activeTab !== NavSection.AICopilot && activeTab !== NavSection.Settings && activeTab !== NavSection.Create;

  return (
    <div className="flex h-screen bg-mc-bg text-mc-text font-sans selection:bg-mc-active selection:text-mc-text overflow-hidden">
      
      {/* 1. Sidebar (Fixed Left Rail) */}
      {/* Hide Sidebar on Create View for immersive experience */}
      {activeTab !== NavSection.Create && (
        <Sidebar 
            activeTab={activeTab} 
            onTabChange={setActiveTab}
            isOpen={isSidebarOpen}
            onClose={() => setSidebarOpen(false)}
            isCollapsed={isSidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed(!isSidebarCollapsed)}
        />
      )}

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content Wrapper */}
      <div className={`flex-1 flex flex-col min-w-0 bg-mc-bg relative z-0 ${activeTab !== NavSection.Create ? (isSidebarCollapsed ? 'lg:ml-[80px]' : 'lg:ml-[260px]') : ''} transition-all duration-300`}>
        
        {/* 2. Header (Sticky Top) - Hide on Create View as it has its own header */}
        {activeTab !== NavSection.Create && (
            <Header 
            title={activeTab} 
            activeTab={activeTab}
            onMenuClick={() => setSidebarOpen(true)}
            isRightPanelOpen={shouldShowRightPanel}
            onToggleRightPanel={() => setRightPanelOpen(!isRightPanelOpen)}
            onCreateClick={() => setActiveTab(NavSection.Create)} // Pass handler
            />
        )}

        {/* 3. Content Body */}
        <div className="flex-1 flex overflow-hidden relative">
          
          {/* Main Feed/View Area */}
          <main 
            className={`
                flex-1 relative flex flex-col transition-all duration-300
                ${(activeTab === NavSection.AICopilot || activeTab === NavSection.Create) ? 'overflow-hidden h-full' : 'overflow-y-auto scroll-smooth no-scrollbar'}
            `}
          >
            {activeTab === NavSection.Home ? (
              <HomeView />
            ) : activeTab === NavSection.SkillForge ? (
              <SkillForgeView />
            ) : activeTab === NavSection.ExamPrep ? (
              <ExamPrepView />
            ) : activeTab === NavSection.AICourses ? (
              <AICoursesView />
            ) : activeTab === NavSection.AICopilot ? (
              <CopilotView />
            ) : activeTab === NavSection.Jobs ? (
              <JobsView />
            ) : activeTab === NavSection.Community ? (
              <CommunityView />
            ) : activeTab === NavSection.Profile ? (
              <ProfileView />
            ) : activeTab === NavSection.Settings ? (
              <SettingsView />
            ) : activeTab === NavSection.Create ? (
              <CreateView onBack={() => setActiveTab(NavSection.Home)} />
            ) : (
              <div className="flex flex-col items-center justify-center h-[50vh] text-mc-muted">
                <div className="w-16 h-16 rounded-xl border border-dashed border-mc-border flex items-center justify-center mb-6">
                   <span className="text-2xl">🚧</span>
                </div>
                <h2 className="text-lg font-bold text-mc-text">Work in Progress</h2>
                <p className="mt-2 text-sm text-mc-muted">{activeTab} is coming soon.</p>
              </div>
            )}
          </main>

          {/* 4. Right Utility Panel (Collapsible) */}
          {shouldShowRightPanel && (
            <RightPanel 
              activeTab={activeTab} 
              onClose={() => setRightPanelOpen(false)} 
            />
          )}

        </div>
      </div>
    </div>
  );
}

export default App;