import React from 'react';

export type ProfileTab = 'Overview' | 'Activity' | 'Courses' | 'Achievements' | 'Analytics' | 'Saved' | 'Connections' | 'Portfolio' | 'Settings';

interface ProfileTabsProps {
  activeTab: ProfileTab;
  onTabChange: (tab: ProfileTab) => void;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs: ProfileTab[] = [
    'Overview',
    'Activity',
    'Courses',
    'Achievements',
    'Analytics',
    'Saved',
    'Connections',
    'Portfolio',
    'Settings'
  ];

  return (
    <div className="flex items-center gap-8 border-b border-mc-border mb-8 overflow-x-auto no-scrollbar">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`
            pb-3 text-sm transition-all relative
            ${activeTab === tab 
              ? 'text-mc-text font-bold' 
              : 'text-mc-muted font-medium hover:text-mc-text'
            }
          `}
        >
          {tab}
          {/* Active Indicator Underline */}
          {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-mc-text rounded-t-full"></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;