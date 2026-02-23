import React, { useState } from 'react';
import JobCard from './JobCard';
import MarketplaceCard from './MarketplaceCard';
import WorkforceTaskCard from './WorkforceTaskCard';
import SquadCard from './SquadCard';
import CompanyCard from './CompanyCard';
import ChallengeCard from './ChallengeCard';
import ApplicationRow from './ApplicationRow';

import { 
    JOB_LISTINGS, MARKETPLACE_ITEMS, FREELANCE_TASKS, CAREER_SERVICES, 
    SQUADS, WORKFORCE_TASKS, COMPANIES, MY_APPLICATIONS, CHALLENGES, 
    AI_CAREER_FEATURES, APPLICATION_STATS 
} from '../constants';
import { Search, SlidersHorizontal, Plus, Briefcase, Zap, Users, Building2, Coins, Trophy, Bookmark, Filter, FileText, Sparkles, X, ChevronRight } from 'lucide-react';

const JobsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Jobs');
  const [isAiSidebarOpen, setIsAiSidebarOpen] = useState(false);

  const TABS = [
      { id: 'Jobs', label: 'Recommended Jobs', icon: Briefcase },
      { id: 'Tasks', label: 'Freelance Tasks', icon: Zap },
      { id: 'Workforce', label: 'AI Workforce', icon: Coins },
      { id: 'Squads', label: 'Squads & Teams', icon: Users },
      { id: 'Companies', label: 'Companies', icon: Building2 },
      { id: 'Applications', label: 'My Applications', icon: FileText },
      { id: 'Challenges', label: 'Hackathons', icon: Trophy },
      { id: 'Services', label: 'Creator Services', icon: Sparkles },
      { id: 'Saved', label: 'Saved', icon: Bookmark },
  ];

  const renderContent = () => {
      switch(activeTab) {
          case 'Jobs':
              return (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      {JOB_LISTINGS.map(job => (
                          <JobCard key={job.id} job={job} onClick={() => {}} />
                      ))}
                  </div>
              );
          case 'Tasks':
              return (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      {FREELANCE_TASKS.map(task => (
                          <MarketplaceCard key={task.id} item={task} onClick={() => {}} />
                      ))}
                  </div>
              );
          case 'Workforce':
              return (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-[24px] p-8 text-white flex justify-between items-center shadow-lg">
                           <div>
                               <h2 className="text-2xl font-bold mb-2">Train AI, Earn Credits</h2>
                               <p className="text-sm opacity-80 max-w-lg">Complete micro-tasks to help train the next generation of AI models. High accuracy rewards more credits.</p>
                           </div>
                           <div className="text-right">
                               <div className="text-3xl font-bold text-yellow-400 flex items-center justify-end gap-2"><Coins size={28} /> 450</div>
                               <div className="text-xs font-bold opacity-60 uppercase tracking-widest">Lifetime Earnings</div>
                           </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                          {WORKFORCE_TASKS.map(task => (
                              <WorkforceTaskCard key={task.id} task={task} />
                          ))}
                      </div>
                  </div>
              );
           case 'Squads':
              return (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      {SQUADS.map(squad => (
                          <SquadCard key={squad.id} squad={squad} />
                      ))}
                      {/* Create Squad CTA */}
                      <div className="border-2 border-dashed border-gray-200 rounded-[22px] flex flex-col items-center justify-center p-8 hover:bg-gray-50 transition-colors cursor-pointer text-center min-h-[250px]">
                          <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-3">
                              <Plus size={24} className="text-mc-muted" />
                          </div>
                          <h3 className="text-sm font-bold text-mc-text">Create a Squad</h3>
                          <p className="text-xs text-mc-muted mt-1 max-w-[200px]">Team up with friends to tackle bigger projects.</p>
                      </div>
                  </div>
              );
            case 'Companies':
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {COMPANIES.map(company => (
                            <CompanyCard key={company.id} company={company} />
                        ))}
                    </div>
                );
            case 'Applications':
                return (
                    <div className="max-w-3xl mx-auto space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="bg-white p-4 rounded-xl border border-mc-border text-center shadow-sm">
                                <div className="text-2xl font-bold text-mc-text">{APPLICATION_STATS.applied}</div>
                                <div className="text-[10px] font-bold text-mc-muted uppercase tracking-wider">Applied</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-mc-border text-center shadow-sm">
                                <div className="text-2xl font-bold text-yellow-600">{APPLICATION_STATS.interview}</div>
                                <div className="text-[10px] font-bold text-yellow-600/70 uppercase tracking-wider">Interviews</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-mc-border text-center shadow-sm">
                                <div className="text-2xl font-bold text-emerald-600">{APPLICATION_STATS.offer}</div>
                                <div className="text-[10px] font-bold text-emerald-600/70 uppercase tracking-wider">Offers</div>
                            </div>
                             <div className="bg-white p-4 rounded-xl border border-mc-border text-center shadow-sm">
                                <div className="text-2xl font-bold text-blue-600">85%</div>
                                <div className="text-[10px] font-bold text-blue-600/70 uppercase tracking-wider">Profile Score</div>
                            </div>
                        </div>
                        <h3 className="text-sm font-bold text-mc-text uppercase tracking-wide px-1">Active Applications</h3>
                        {MY_APPLICATIONS.map(app => (
                            <ApplicationRow key={app.id} app={app} />
                        ))}
                    </div>
                );
            case 'Challenges':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {CHALLENGES.map(challenge => (
                            <ChallengeCard key={challenge.id} challenge={challenge} />
                        ))}
                    </div>
                );
            case 'Services':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {CAREER_SERVICES.map(service => (
                            <MarketplaceCard key={service.id} item={service} onClick={() => {}} />
                        ))}
                        {MARKETPLACE_ITEMS.map(item => (
                            <MarketplaceCard key={item.id} item={item} onClick={() => {}} />
                        ))}
                    </div>
                );
            case 'Saved':
                return (
                    <div className="flex flex-col items-center justify-center py-20 text-mc-muted">
                        <Bookmark size={48} className="mb-4 opacity-20" />
                        <h3 className="text-sm font-bold text-mc-text">No saved items yet</h3>
                        <p className="text-xs mt-1">Bookmark jobs and tasks to view them here.</p>
                    </div>
                );
          default:
              return null;
      }
  };

  return (
    <div className="flex h-full w-full bg-mc-bg overflow-hidden relative">
      
      {/* 1. Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto no-scrollbar">
        
        {/* Header */}
        <header className="sticky top-0 z-20 bg-mc-bg/95 backdrop-blur-sm px-6 py-4 border-b border-mc-border">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                 <div>
                     <h1 className="text-2xl font-bold text-mc-text">Jobs & Marketplace</h1>
                     <p className="text-xs text-mc-muted font-medium mt-1">Find work, join squads, or hire talent.</p>
                 </div>
                 
                 {/* Right Actions: Credits & Create */}
                 <div className="flex items-center gap-3">
                     <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white border border-mc-border rounded-full shadow-sm">
                         <Coins size={16} className="text-yellow-500" />
                         <span className="text-sm font-bold text-mc-text">1,250 UC</span>
                     </div>
                     <button className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full text-xs font-bold hover:opacity-90 transition-opacity shadow-button">
                         <Plus size={16} /> Post / Create
                     </button>
                     <button 
                        onClick={() => setIsAiSidebarOpen(!isAiSidebarOpen)}
                        className="lg:hidden p-2.5 rounded-full bg-white border border-mc-border text-mc-muted hover:text-mc-text"
                    >
                        <Sparkles size={20} />
                     </button>
                 </div>
             </div>

             {/* Search Bar */}
             <div className="relative max-w-2xl mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-mc-muted" size={18} />
                <input 
                    type="text" 
                    placeholder={`Search ${activeTab.toLowerCase()}...`}
                    className="w-full h-12 pl-12 pr-12 bg-white border border-mc-border rounded-2xl focus:outline-none focus:ring-1 focus:ring-black/10 text-sm font-medium shadow-sm transition-all hover:shadow-md"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-lg text-mc-muted transition-colors">
                    <SlidersHorizontal size={16} />
                </button>
             </div>

             {/* Navigation Pills */}
             <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-6 px-6 md:mx-0 md:px-0">
                 {TABS.map(tab => (
                     <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                            flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border shrink-0
                            ${activeTab === tab.id 
                                ? 'bg-black text-white border-black shadow-md' 
                                : 'bg-white text-mc-muted border-mc-border hover:border-mc-text/30 hover:text-mc-text'
                            }
                        `}
                     >
                         <tab.icon size={14} className={activeTab === tab.id ? 'stroke-[2.5px]' : ''} />
                         {tab.label}
                     </button>
                 ))}
             </div>
        </header>

        {/* Dynamic Content Body */}
        <div className="p-6 pb-20 max-w-[1600px] w-full mx-auto">
             {renderContent()}
        </div>

      </div>

      {/* 2. AI Career Toolkit (Right Sidebar) */}
      <div className={`
        fixed inset-y-0 right-0 w-[300px] bg-white border-l border-mc-border transform transition-transform duration-300 ease-in-out z-30
        lg:relative lg:translate-x-0 lg:w-[320px] shadow-2xl lg:shadow-none flex flex-col hidden xl:flex
        ${isAiSidebarOpen ? 'translate-x-0 !flex' : 'translate-x-full'}
      `}>
          <div className="p-5 border-b border-mc-border flex justify-between items-center bg-gray-50/50">
              <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-purple-600" />
                  <h3 className="text-sm font-bold text-mc-text">AI Career Toolkit</h3>
              </div>
              <button onClick={() => setIsAiSidebarOpen(false)} className="lg:hidden text-mc-muted hover:text-mc-text">
                  <X size={18} />
              </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-6">
              
              {/* Feature Cards */}
              {AI_CAREER_FEATURES.map(feature => (
                  <div key={feature.id} className="p-4 bg-white border border-mc-border rounded-xl hover:shadow-md transition-all group cursor-pointer">
                      <div className={`w-8 h-8 rounded-lg ${feature.colorClass} flex items-center justify-center mb-3`}>
                          <feature.icon size={16} />
                      </div>
                      <h4 className="text-xs font-bold text-mc-text mb-1">{feature.title}</h4>
                      <p className="text-[10px] text-mc-muted leading-relaxed mb-3">
                          {feature.description}
                      </p>
                      <button className="w-full py-2 bg-gray-50 border border-gray-100 rounded-lg text-[10px] font-bold text-mc-text group-hover:bg-black group-hover:text-white transition-colors">
                          {feature.actionLabel}
                      </button>
                  </div>
              ))}

              {/* Quick Insights */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100">
                  <h4 className="text-[10px] font-bold text-purple-800 uppercase tracking-wide mb-2">Market Insight</h4>
                  <p className="text-xs text-purple-900 font-medium leading-relaxed">
                      React Native demand has increased by <strong>24%</strong> this month. Consider taking the Advanced React course to boost your profile.
                  </p>
              </div>

          </div>
      </div>

    </div>
  );
};

export default JobsView;