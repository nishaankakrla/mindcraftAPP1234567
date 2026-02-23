import React, { useState } from 'react';
import ChatListPanel from './ChatListPanel';
import DirectChatView from './DirectChatView';
import CommunityFeedView from './CommunityFeedView';
import StudyRoomList from './StudyRoomList';
import { ChatThread, Community, StudyRoom } from '../types';
import { CHAT_THREADS } from '../constants';

const CommunityView: React.FC = () => {
  const [activeItem, setActiveItem] = useState<ChatThread | Community | StudyRoom | null>(CHAT_THREADS[0]);
  const [activeType, setActiveType] = useState<'chat' | 'community' | 'room'>('chat');

  const handleSelect = (item: ChatThread | Community | StudyRoom, type: 'chat' | 'community' | 'room') => {
      setActiveItem(item);
      setActiveType(type);
  };

  return (
    <div className="flex h-full w-full bg-mc-bg overflow-hidden border-t-0 border-l-0">
      {/* Left: Chat/Community List (Fixed width) */}
      <div className="w-[280px] lg:w-[320px] h-full shrink-0 hidden md:block">
        <ChatListPanel 
            activeThreadId={activeItem?.id || null} 
            onSelectThread={handleSelect} 
        />
      </div>

      {/* Right: Main Content (Flexible) */}
      <div className="flex-1 h-full min-w-0 bg-mc-bg">
        {activeType === 'chat' && activeItem && (
            <DirectChatView thread={activeItem as ChatThread} />
        )}
        {activeType === 'community' && activeItem && (
            <CommunityFeedView community={activeItem as Community} />
        )}
        {activeType === 'room' && (
            <StudyRoomList />
        )}
      </div>
    </div>
  );
};

export default CommunityView;