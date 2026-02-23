import React from 'react';
import { Search, SlidersHorizontal, Plus, Bell, Menu, PanelRightClose, PanelRightOpen, Sparkles } from 'lucide-react';
import { NavSection } from '../types';

interface HeaderProps {
  title: string;
  activeTab?: NavSection;
  onMenuClick: () => void;
  isRightPanelOpen?: boolean;
  onToggleRightPanel?: () => void;
  onCreateClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, activeTab, onMenuClick, isRightPanelOpen, onToggleRightPanel, onCreateClick }) => {
  const showRightPanelToggle = activeTab !== NavSection.AICopilot;

  return (
    <header className="sticky top-0 z-30 w-full px-6 h-20 flex items-center justify-between bg-mc-bg transition-all">
      
      {/* Left: Mobile Menu & Title */}
      <div className="flex items-center gap-4 shrink-0 w-[200px]">
        <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 text-mc-text hover:bg-mc-light rounded-full transition-colors"
        >
            <Menu size={24} />
        </button>
        <div className="flex flex-col">
            <h1 className="text-xl font-medium text-mc-text tracking-tight capitalize">
            {title}
            </h1>
        </div>
      </div>

      {/* Center: Search (Omnibox Style) */}
      <div className="hidden md:flex flex-1 max-w-2xl mx-auto px-4">
        <div className="relative w-full group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-mc-muted pointer-events-none transition-colors group-focus-within:text-mc-primary">
              <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search your sources and notes..."
            className="w-full h-12 pl-12 pr-12 bg-mc-card border-none rounded-full focus:outline-none shadow-soft hover:shadow-md focus:shadow-float transition-all text-base text-mc-text placeholder:text-mc-muted/80"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-mc-muted hover:bg-mc-bg rounded-full transition-colors">
              <SlidersHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 shrink-0 w-[200px] justify-end">
        
        {/* Create Button - Pill Style */}
        <button 
            onClick={onCreateClick}
            className="hidden sm:flex items-center gap-2 h-10 pl-3 pr-5 bg-mc-active text-mc-text rounded-[16px] hover:opacity-80 transition-all font-medium"
        >
            <Plus size={20} />
            <span className="text-sm">New</span>
        </button>

        {/* Profile */}
        <div className="w-10 h-10 rounded-full p-0.5 border border-mc-border cursor-pointer hover:ring-2 hover:ring-mc-border ml-2">
            <img src="https://picsum.photos/seed/user/200/200" alt="Profile" className="w-full h-full rounded-full object-cover" />
        </div>

        {/* Right Panel Toggle */}
        {showRightPanelToggle && (
            <button 
                onClick={onToggleRightPanel}
                className="p-2.5 ml-1 rounded-full text-mc-muted hover:bg-mc-light transition-all hidden xl:flex items-center justify-center"
                title={isRightPanelOpen ? "Collapse Panel" : "Expand Panel"}
            >
                {isRightPanelOpen ? <PanelRightClose size={20} /> : <PanelRightOpen size={20} />}
            </button>
        )}
      </div>
    </header>
  );
};

export default Header;