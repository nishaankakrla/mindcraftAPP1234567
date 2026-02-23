import React from 'react';
import { Community } from '../types';
import { COMMUNITY_FEED_POSTS } from '../constants';
import FeedCard from './FeedCard';
import { Users, Bell, LogOut, Info, Calendar } from 'lucide-react';

interface CommunityFeedViewProps {
    community: Community;
}

const CommunityFeedView: React.FC<CommunityFeedViewProps> = ({ community }) => {
  return (
    <div className="flex flex-col h-full bg-mc-bg overflow-y-auto no-scrollbar">
        
        {/* Community Header */}
        <div className="bg-white border-b-1.5 border-mc-border p-6">
            <div className="flex items-start gap-5">
                <div className="w-20 h-20 rounded-2xl bg-mc-bg border-1.5 border-mc-border overflow-hidden shrink-0">
                    <img src={community.avatar} alt={community.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-xl font-bold text-mc-text">{community.name}</h1>
                            <div className="flex items-center gap-3 mt-1 text-sm text-mc-muted">
                                <span className="flex items-center gap-1"><Users size={14} /> {community.members} members</span>
                                {community.isActive && <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold rounded-full border border-green-100">Active Now</span>}
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 rounded-lg border-1.5 border-mc-border font-bold text-xs hover:bg-mc-bg transition-colors">Joined</button>
                            <button className="p-2 rounded-lg border-1.5 border-mc-border hover:bg-mc-bg text-mc-muted transition-colors"><Bell size={16} /></button>
                        </div>
                    </div>
                    <p className="text-sm text-mc-text/80 mt-3 max-w-2xl leading-relaxed">
                        {community.description}
                    </p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-6 mt-6 border-t border-mc-border/10 pt-1">
                {['Feed', 'Members', 'Resources', 'Events', 'About'].map((tab, i) => (
                    <button 
                        key={tab}
                        className={`text-sm font-medium py-2 border-b-2 transition-colors ${i === 0 ? 'border-mc-text text-mc-text' : 'border-transparent text-mc-muted hover:text-mc-text'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>

        {/* Feed Content */}
        <div className="flex-1 p-6">
             <div className="max-w-3xl mx-auto space-y-6">
                 
                 {/* Composer Placeholder */}
                 <div className="bg-white border-1.5 border-mc-border rounded-xl p-4 flex gap-3 cursor-pointer hover:border-mc-text/40 transition-colors">
                     <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0 overflow-hidden">
                         <img src="https://picsum.photos/seed/user/100/100" className="w-full h-full object-cover" />
                     </div>
                     <div className="flex-1 bg-mc-bg rounded-lg border border-mc-border/10 flex items-center px-4 text-sm text-mc-muted">
                         Start a discussion...
                     </div>
                 </div>

                 {/* Pinned / Info Card */}
                 <div className="bg-mc-bg border border-mc-border/20 rounded-xl p-4 flex items-start gap-3">
                     <div className="p-2 bg-white rounded-lg border border-mc-border/10 text-purple-600">
                         <Calendar size={18} />
                     </div>
                     <div>
                         <h4 className="text-sm font-bold text-mc-text">Upcoming Event: Mock Test Marathon</h4>
                         <p className="text-xs text-mc-muted mt-1">Join us this Sunday at 10 AM for a full-length mock test discussion.</p>
                         <button className="mt-2 text-[10px] font-bold text-mc-text underline">View Details</button>
                     </div>
                 </div>

                 {/* Posts */}
                 {COMMUNITY_FEED_POSTS.map(post => (
                     <FeedCard key={post.id} post={post} />
                 ))}
             </div>
        </div>

    </div>
  );
};

export default CommunityFeedView;