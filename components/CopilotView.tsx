import React, { useState } from 'react';
import ChatInterface from './ChatInterface';
import NotebookPanel from './NotebookPanel';

const CopilotView: React.FC = () => {
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);

  return (
    <div className="flex h-full w-full bg-mc-bg overflow-hidden relative">
      {/* Left: Chat Interface (Flexible width) */}
      <div className="flex-1 h-full min-w-0 z-0">
        <ChatInterface 
            onToggleNotebook={() => setIsNotebookOpen(!isNotebookOpen)} 
            isNotebookOpen={isNotebookOpen}
        />
      </div>

      {/* Right: Notebook Workspace */}
      {/* Desktop: Static Block | Mobile/Tablet: Sliding Drawer */}
      <div 
        className={`
            fixed inset-y-0 right-0 z-20 w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out
            lg:relative lg:translate-x-0 lg:shadow-none lg:w-[340px] lg:border-l border-mc-border
            ${isNotebookOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <NotebookPanel />
        
        {/* Mobile Overlay Background (Optional, if we want to click-away to close) */}
        {/* Note: In a real app, we'd add an overlay div here for mobile to close on click-outside */}
      </div>

      {/* Mobile Overlay Trigger */}
      {isNotebookOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10 lg:hidden"
            onClick={() => setIsNotebookOpen(false)}
          ></div>
      )}
    </div>
  );
};

export default CopilotView;