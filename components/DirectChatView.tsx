import React from 'react';
import { Message, ChatThread } from '../types';
import { DIRECT_MESSAGES } from '../constants';
import { Paperclip, Mic, Send, MoreHorizontal, Phone, Video, Search, Sparkles, Image as ImageIcon, Smile, FileText, Zap, Plus } from 'lucide-react';

interface DirectChatViewProps {
    thread: ChatThread;
}

const DirectChatView: React.FC<DirectChatViewProps> = ({ thread }) => {
  return (
    <div className="flex flex-col h-full bg-mc-bg relative">
        
        {/* Chat Header */}
        <div className="h-20 border-b border-mc-border flex items-center justify-between px-6 bg-mc-bg/80 backdrop-blur-md sticky top-0 z-10">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <img src={thread.avatar} alt={thread.name} className="w-10 h-10 rounded-full object-cover border border-mc-border" />
                    {thread.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-mc-primary border-2 border-mc-bg rounded-full"></div>
                    )}
                </div>
                <div>
                    <h2 className="text-sm font-bold text-mc-text leading-tight">{thread.name}</h2>
                    <p className="text-[10px] text-mc-muted">{thread.isOnline ? 'Online' : 'Last seen recently'}</p>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <button className="p-2 hover:bg-mc-cardHover rounded-lg text-mc-muted hover:text-mc-text transition-colors">
                    <Search size={20} />
                </button>
                <button className="p-2 hover:bg-mc-cardHover rounded-lg text-mc-muted hover:text-mc-text transition-colors">
                    <MoreHorizontal size={20} />
                </button>
            </div>
        </div>

        {/* Messages Stream */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar bg-mc-bg">
            <div className="text-center text-[10px] text-mc-muted font-bold mb-4 uppercase tracking-widest opacity-50">Today</div>
            
            {DIRECT_MESSAGES.map(msg => (
                <div key={msg.id} className={`flex w-full ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] ${msg.isMe ? 'items-end' : 'items-start'} flex flex-col`}>
                        
                        {/* Bubble */}
                        <div className={`
                            px-4 py-3 rounded-2xl border text-sm leading-relaxed
                            ${msg.isMe 
                                ? 'bg-mc-primary/10 border-mc-primary/30 text-mc-primary rounded-tr-sm' 
                                : 'bg-mc-card border-mc-border text-mc-text rounded-tl-sm'
                            }
                        `}>
                            {msg.text}
                        </div>

                        {/* Attachments */}
                        {msg.attachments && (
                            <div className={`mt-2 p-2 border border-mc-border/50 rounded-lg flex items-center gap-3 w-fit ${msg.isMe ? 'bg-mc-primary/5' : 'bg-mc-card'}`}>
                                <div className="w-8 h-8 rounded-lg bg-mc-card border border-mc-border flex items-center justify-center">
                                    <FileText size={16} className="text-mc-text" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold text-mc-text">{msg.attachments[0]}</p>
                                    <p className="text-[10px] text-mc-muted">PDF • 1.2 MB</p>
                                </div>
                            </div>
                        )}

                        {/* Actions (for received messages) */}
                        {!msg.isMe && msg.actions && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {msg.actions.map(action => (
                                    <button key={action} className="px-2 py-1 rounded-md border border-mc-border bg-mc-card hover:border-mc-secondary/50 hover:text-mc-secondary text-[10px] font-medium text-mc-muted transition-all flex items-center gap-1.5 group">
                                        <Zap size={10} />
                                        {action}
                                    </button>
                                ))}
                            </div>
                        )}

                        <span className="text-[10px] text-mc-muted mt-1 px-1">{msg.time}</span>
                    </div>
                </div>
            ))}
        </div>

        {/* Input Composer */}
        <div className="p-4 bg-mc-bg border-t border-mc-border">
            <div className="max-w-4xl mx-auto flex items-end gap-2">
                 <button className="p-3 rounded-xl bg-mc-card text-mc-muted hover:text-mc-text transition-colors border border-mc-border hover:border-mc-primary/50">
                    <Plus size={20} />
                </button>
                
                <div className="flex-1 bg-mc-card border border-mc-border rounded-xl focus-within:border-mc-primary/50 transition-all flex items-center min-h-[50px] px-2 relative">
                    <textarea 
                        placeholder="Type a message..."
                        className="w-full max-h-32 bg-transparent border-none resize-none focus:outline-none text-sm text-mc-text placeholder:text-mc-muted py-3 px-2"
                        rows={1}
                    />
                    <div className="flex items-center gap-1 pr-1">
                        <button className="p-2 rounded-lg hover:bg-mc-cardHover text-mc-muted hover:text-mc-text transition-colors" title="AI Smart Reply">
                            <Sparkles size={18} className="text-mc-secondary" />
                        </button>
                    </div>
                </div>

                <button className="p-3 rounded-xl bg-mc-primary text-black hover:shadow-glow transition-all shadow-sm">
                    <Send size={18} />
                </button>
            </div>
        </div>

    </div>
  );
};

export default DirectChatView;