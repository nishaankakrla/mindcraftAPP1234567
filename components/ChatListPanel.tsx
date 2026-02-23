import React from 'react';
import { ChatThread, Community, StudyRoom } from '../types';
import { CHAT_THREADS, COMMUNITIES } from '../constants';
import { Search } from 'lucide-react';

interface ChatListPanelProps {
    activeThreadId: string | null;
    onSelectThread: (thread: ChatThread | Community | StudyRoom, type: 'chat' | 'community' | 'room') => void;
}

const ChatListPanel: React.FC<ChatListPanelProps> = ({ activeThreadId, onSelectThread }) => {
  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar bg-mc-bg border-r border-mc-border flex flex-col">
        
        {/* Search Bar */}
        <div className="p-4 pb-0 sticky top-0 bg-mc-bg z-10">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-mc-muted" size={14} />
                <input 
                    type="text" 
                    placeholder="Search chats..." 
                    className="w-full h-9 pl-9 pr-3 rounded-xl bg-mc-card border border-mc-border text-xs font-medium focus:outline-none focus:border-mc-text/30 transition-all placeholder:text-mc-muted/70"
                />
            </div>
        </div>

        {/* Communities */}
        <div className="p-4 pb-2">
            <div className="flex items-center justify-between mb-3 px-1">
                 <h3 className="text-[10px] font-bold text-mc-muted uppercase tracking-wider">Communities</h3>
                 <button className="text-[10px] font-bold text-mc-text hover:underline">View All</button>
            </div>
            <div className="space-y-3">
                {COMMUNITIES.map(comm => (
                    <div 
                        key={comm.id} 
                        onClick={() => onSelectThread(comm, 'community')}
                        className={`
                            bg-mc-card p-3 rounded-xl shadow-sm cursor-pointer transition-all border
                            ${activeThreadId === comm.id ? 'border-mc-text ring-1 ring-mc-text/5' : 'border-mc-border hover:shadow-md hover:border-mc-text/20'}
                        `}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-mc-light flex items-center justify-center overflow-hidden border border-mc-border shrink-0">
                                <img src={comm.avatar} className="w-full h-full object-cover" />
                            </div>
                            <div className="min-w-0">
                                <h4 className="text-xs font-bold text-mc-text truncate">{comm.name}</h4>
                                <p className="text-[9px] text-mc-muted font-medium mt-0.5">{comm.members} members</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Messages */}
        <div className="px-5 py-2 mt-2">
            <h3 className="text-[10px] font-bold text-mc-muted uppercase tracking-wider">Messages</h3>
        </div>
        <div className="space-y-1 px-3 pb-20">
            {CHAT_THREADS.map(thread => (
                <div 
                    key={thread.id} 
                    onClick={() => onSelectThread(thread, 'chat')} 
                    className={`
                        flex items-center gap-3 p-2.5 rounded-xl cursor-pointer transition-all
                        ${activeThreadId === thread.id ? 'bg-mc-card shadow-sm border border-mc-border' : 'hover:bg-mc-card hover:shadow-sm border border-transparent'}
                    `}
                >
                    <div className="relative shrink-0">
                        <img src={thread.avatar} className="w-10 h-10 rounded-full object-cover border border-mc-card shadow-sm" />
                        {thread.isOnline && <div className="absolute bottom-0 right-0 w-3 h-3 bg-mc-primary border-2 border-mc-card rounded-full"></div>}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-0.5">
                            <h4 className="text-xs font-bold text-mc-text truncate">{thread.name}</h4>
                            <span className="text-[9px] text-mc-muted">{thread.time}</span>
                        </div>
                        <p className="text-[10px] text-mc-muted line-clamp-1 font-medium">{thread.lastMessage}</p>
                    </div>
                </div>
            ))}
        </div>

    </div>
  );
};

export default ChatListPanel;