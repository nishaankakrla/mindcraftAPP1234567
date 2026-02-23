import React, { useState } from 'react';
import FeedCard from './FeedCard';
import { DUMMY_POSTS, QUESTS } from '../constants';
import { SlidersHorizontal, Zap, ChevronRight, Users, Briefcase } from 'lucide-react';
import { Quest } from '../types';

const FEED_TABS = [
  'For You', 'Following', 'Videos', 'Live', 'Notes', 'Projects', 'Exams', 'Courses', 'AI Posts', 'Jobs', 'Trending'
];

const HomeView: React.FC = () => {
  const [activeFeedTab, setActiveFeedTab] = useState('For You');

  // --- SUB COMPONENTS ---

  return (
    <div className="max-w-[1600px] mx-auto w-full pb-20 px-4 md:px-6 lg:px-8 py-6">
      <div className="max-w-3xl mx-auto">
          {/* Feed Filters */}
          <div className="sticky top-0 bg-mc-bg/95 backdrop-blur-sm z-20 py-2 mb-4 -mx-4 px-4 md:mx-0 md:px-0 border-b border-transparent">
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
                    <button className="p-2.5 rounded-full bg-mc-card border border-mc-border text-mc-muted hover:text-mc-text shrink-0">
                        <SlidersHorizontal size={16} />
                    </button>
                    {FEED_TABS.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveFeedTab(tab)}
                            className={`
                                px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border shadow-sm
                                ${activeFeedTab === tab 
                                    ? 'bg-mc-text text-mc-card border-mc-text shadow-md' 
                                    : 'bg-mc-card text-mc-muted border-mc-border hover:border-mc-text/30 hover:text-mc-text'
                                }
                            `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
          </div>

          {/* Global Feed */}
          <div className="space-y-6">
              {DUMMY_POSTS.map(post => (
                  <FeedCard key={post.id} post={post} />
              ))}

              {/* Load More */}
              <div className="py-8 flex justify-center">
                <button className="px-6 py-2.5 rounded-full border border-mc-border bg-mc-card text-xs font-bold text-mc-text hover:bg-mc-light transition-all shadow-sm">
                    Load More Content
                </button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default HomeView;