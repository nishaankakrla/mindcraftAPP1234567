import React, { useState } from 'react';
import { Search, Plus, Folder, Library, ArrowUpDown, BrainCircuit } from 'lucide-react';
import { NOTEBOOK_NOTES, NOTEBOOK_COLLECTIONS } from '../constants';

const NotebookPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Notes' | 'Flashcards' | 'Collections'>('Notes');

  const TabButton = ({ label, active }: { label: string, active: boolean }) => (
      <button 
        onClick={() => setActiveTab(label as any)}
        className={`flex-1 py-2.5 text-[10px] font-bold uppercase tracking-wide border-b-2 transition-all ${active ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
      >
          {label}
      </button>
  );

  return (
    <div className="flex flex-col h-full bg-mc-bg border-l-1.5 border-mc-border overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-mc-border/20 shrink-0 bg-white">
            <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                    <Library size={16} />
                    <h2 className="text-sm font-bold text-mc-text">Notebook Workspace</h2>
                </div>
                <div className="flex gap-2">
                    <button className="p-1.5 hover:bg-gray-100 rounded-md text-mc-muted transition-colors"><Search size={16} /></button>
                    <button className="p-1.5 hover:bg-gray-100 rounded-md text-mc-muted transition-colors"><ArrowUpDown size={16} /></button>
                </div>
            </div>
        </div>

        {/* Tabs */}
        <div className="flex px-5 bg-white border-b border-mc-border/20 shrink-0">
            <TabButton label="Notes" active={activeTab === 'Notes'} />
            <TabButton label="Flashcards" active={activeTab === 'Flashcards'} />
            <TabButton label="Collections" active={activeTab === 'Collections'} />
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 no-scrollbar space-y-4">
            
            {activeTab === 'Notes' && (
                <>
                    {/* Add New Note */}
                    <button className="w-full py-3 rounded-xl border-1.5 border-dashed border-gray-300 text-gray-400 font-bold text-xs hover:border-black hover:text-black transition-all flex items-center justify-center gap-2 group">
                        <Plus size={14} className="group-hover:scale-110 transition-transform" /> New Note
                    </button>

                    {NOTEBOOK_NOTES.map(note => (
                        <div key={note.id} className="p-4 bg-white border border-mc-border rounded-xl hover:shadow-soft transition-all cursor-pointer group">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-sm font-bold text-mc-text leading-tight group-hover:underline">{note.title}</h4>
                                <span className="text-[9px] font-bold text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded uppercase">{note.source}</span>
                            </div>
                            <p className="text-xs text-mc-muted line-clamp-2 mb-3 leading-relaxed font-medium">
                                {note.preview}
                            </p>
                            <div className="flex items-center gap-2">
                                {note.tags.map(tag => (
                                    <span key={tag} className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">#{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </>
            )}

            {activeTab === 'Flashcards' && (
                 <>
                    <button className="w-full py-3 rounded-xl bg-black text-white font-bold text-xs hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-button">
                        <BrainCircuit size={14} /> Generate from Chat
                    </button>

                    <div className="grid grid-cols-2 gap-3">
                         <div className="p-4 bg-pastel-yellow border border-yellow-100 rounded-xl flex flex-col items-center text-center justify-center min-h-[120px] cursor-pointer hover:scale-[1.02] transition-transform">
                             <span className="text-[9px] font-bold text-yellow-700 uppercase mb-2">Python</span>
                             <p className="text-sm font-bold text-mc-text">What is a Decorator?</p>
                         </div>
                         <div className="p-4 bg-pastel-blue border border-blue-100 rounded-xl flex flex-col items-center text-center justify-center min-h-[120px] cursor-pointer hover:scale-[1.02] transition-transform">
                             <span className="text-[9px] font-bold text-blue-700 uppercase mb-2">Physics</span>
                             <p className="text-sm font-bold text-mc-text">Define Torque.</p>
                         </div>
                    </div>
                </>
            )}

            {activeTab === 'Collections' && (
                <div className="space-y-3">
                    {NOTEBOOK_COLLECTIONS.map(col => (
                        <div key={col.id} className="flex items-center gap-4 p-4 bg-white border border-mc-border rounded-xl hover:shadow-soft transition-all cursor-pointer">
                            <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-mc-text">
                                <Folder size={18} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-mc-text">{col.title}</h4>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">{col.type}</span>
                                    <span className="text-[9px] font-medium text-mc-muted">• {col.count} items</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </div>
    </div>
  );
};

export default NotebookPanel;