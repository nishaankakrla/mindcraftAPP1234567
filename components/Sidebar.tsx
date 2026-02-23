import React from 'react';
import { NavItemDef, NavSection } from '../types';
import { NAV_ITEMS_MAIN, NAV_ITEMS_BOTTOM } from '../constants';
import { Sparkles, X, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

interface SidebarProps {
  activeTab: NavSection;
  onTabChange: (tab: NavSection) => void;
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

interface NavItemProps {
  item: NavItemDef;
  isActive: boolean;
  onClick: () => void;
  isCollapsed: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ item, isActive, onClick, isCollapsed }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center rounded-xl transition-all duration-200 group relative mb-1
        ${isCollapsed 
          ? 'w-12 h-12 justify-center' 
          : 'w-full px-4 py-3 justify-start gap-3'
        }
        ${isActive 
          ? 'bg-mc-active text-mc-text font-bold shadow-sm' 
          : 'text-mc-muted hover:bg-mc-light hover:text-mc-text'
        }
      `}
      title={isCollapsed ? item.label : undefined}
    >
      <item.icon 
        size={20} 
        strokeWidth={isActive ? 2.5 : 2}
        className="shrink-0 transition-transform duration-200"
      />
      {!isCollapsed && (
        <span className="text-sm truncate whitespace-nowrap overflow-hidden transition-all duration-300">
          {item.label}
        </span>
      )}
      {isActive && isCollapsed && (
        <div className="absolute left-0 w-1 h-6 bg-mc-primary rounded-r-full" />
      )}
    </button>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, isOpen, onClose, isCollapsed, onToggleCollapse }) => {
  
  const handleNavClick = (id: NavSection) => {
    onTabChange(id);
    if (window.innerWidth < 1024) {
        onClose();
    }
  };

  return (
    <>
       {/* Sidebar Container - Fixed Rail on Desktop - Material 3 Navigation Rail */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 bg-mc-bg/50 backdrop-blur-md lg:bg-mc-bg border-r border-mc-border flex flex-col py-4
        transform transition-all duration-300 ease-in-out lg:translate-x-0
        ${isCollapsed ? 'w-[80px]' : 'w-[260px]'}
        ${isOpen ? 'translate-x-0 shadow-2xl bg-mc-card' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo Area & Collapse Toggle */}
        <div className={`h-16 flex items-center mb-6 w-full px-4 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
            <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-mc-card flex items-center justify-center text-mc-primary shadow-sm ring-1 ring-black/5 shrink-0">
                  <Sparkles size={20} strokeWidth={2.5} className="text-gradient" />
                </div>
                {!isCollapsed && (
                    <span className="font-bold text-lg tracking-tight text-mc-text whitespace-nowrap">MindCraft</span>
                )}
            </div>

            {/* Desktop Collapse Button */}
            <button 
                onClick={onToggleCollapse}
                className="hidden lg:flex p-2 rounded-lg hover:bg-mc-light text-mc-muted transition-colors"
            >
                {isCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
            </button>

            {/* Mobile Close Button */}
            <button 
                onClick={onClose}
                className="lg:hidden p-2 rounded-full bg-mc-card shadow-md text-mc-text"
            >
                <X size={20} />
            </button>
        </div>

        {/* Desktop Nav Items */}
        <div className={`flex-1 overflow-y-auto no-scrollbar flex flex-col w-full gap-1 ${isCollapsed ? 'items-center' : 'px-3'}`}>
          {NAV_ITEMS_MAIN.map((item) => (
            <NavItem 
              key={item.id} 
              item={item} 
              isActive={activeTab === item.id}
              onClick={() => handleNavClick(item.id)}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>

        {/* Bottom Actions */}
        <div className={`mt-2 pt-2 w-full flex flex-col pb-4 border-t border-mc-border/50 ${isCollapsed ? 'items-center' : 'px-3'}`}>
          {NAV_ITEMS_BOTTOM.map((item) => (
            <NavItem 
              key={item.id} 
              item={item} 
              isActive={activeTab === item.id}
              onClick={() => handleNavClick(item.id)}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;