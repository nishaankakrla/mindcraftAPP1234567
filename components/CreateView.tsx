import React, { useState } from 'react';
import { 
  ArrowLeft, Send, Image as ImageIcon, Video, Paperclip, 
  Sparkles, Hash, Globe, Eye, MoreHorizontal, X, FileText, CheckCircle2, ChevronRight,
  PenTool, Monitor, Smile
} from 'lucide-react';
import { CREATE_TYPES } from '../constants';

interface CreateViewProps {
  onBack: () => void;
}

const CreateView: React.FC<CreateViewProps> = ({ onBack }) => {
  const [activeType, setActiveType] = useState('text');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [isAiPanelOpen, setIsAiPanelOpen] = useState(true);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [visibility, setVisibility] = useState('Public');

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="flex h-full w-full bg-mc-bg overflow-hidden relative">
      
      {/* 1. Main Content Area (Flexible) */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto no-scrollbar relative">
        
        {/* Header */}
        <header className="sticky top-0 z-20 bg-mc-bg/95 backdrop-blur-sm border-b border-mc-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button onClick={onBack} className="p-2 hover:bg-black/5 rounded-full transition-colors text-mc-text">
                    <ArrowLeft size={20} />
                </button>
                <div>
                    <h1 className="text-lg font-bold text-mc-text">Create Post</h1>
                    <p className="text-xs text-mc-muted font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Saved as draft
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                 <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-mc-border text-xs font-bold text-mc-text hover:bg-white transition-colors">
                     <Eye size={14} /> Preview
                 </button>
                 <button 
                    disabled={!content && !title}
                    className="flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-full text-xs font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-button"
                >
                     Publish <Send size={14} />
                 </button>
            </div>
        </header>

        {/* Content Body */}
        <div className="flex-1 max-w-3xl mx-auto w-full p-6 pb-32">
            
            {/* Type Selector Strip */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-6">
                {CREATE_TYPES.map(type => (
                    <button
                        key={type.id}
                        onClick={() => setActiveType(type.id)}
                        className={`
                            flex items-center gap-2 px-4 py-2.5 rounded-2xl border transition-all shrink-0
                            ${activeType === type.id 
                                ? 'bg-black text-white border-black shadow-md ring-2 ring-black/10' 
                                : 'bg-white text-mc-muted border-mc-border hover:border-mc-text/30 hover:scale-[1.02]'
                            }
                        `}
                    >
                        <type.icon size={16} className={activeType === type.id ? 'stroke-[2.5px]' : ''} />
                        <span className="text-xs font-bold">{type.label}</span>
                    </button>
                ))}
            </div>

            {/* Dynamic Editor Area */}
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                
                {/* Title Input (For specific types) */}
                {['project', 'learning', 'question', 'video', 'live'].includes(activeType) && (
                    <input 
                        type="text" 
                        placeholder={activeType === 'question' ? "Ask a question..." : "Add a title..."}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full text-3xl font-bold bg-transparent border-none focus:outline-none placeholder:text-mc-muted/40 text-mc-text"
                    />
                )}

                {/* Main Text Editor */}
                <div className="min-h-[300px] relative group">
                    <textarea 
                        placeholder={activeType === 'text' ? "What's on your mind?" : "Describe your content..."}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full h-full min-h-[300px] bg-transparent border-none focus:outline-none text-lg leading-relaxed text-mc-text placeholder:text-mc-muted/40 resize-none"
                    />
                    
                    {/* Floating Formatting Toolbar (Mock) */}
                    <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white shadow-soft border border-mc-border rounded-lg p-1 flex gap-1">
                        <button className="p-1.5 hover:bg-gray-100 rounded text-mc-muted"><Sparkles size={14} /></button>
                        <button className="p-1.5 hover:bg-gray-100 rounded text-mc-muted font-bold text-xs">B</button>
                        <button className="p-1.5 hover:bg-gray-100 rounded text-mc-muted italic text-xs">I</button>
                    </div>
                </div>

                {/* Attachment / Specific Inputs based on Type */}
                {activeType === 'image' && (
                    <div className="border-2 border-dashed border-mc-border rounded-[24px] h-64 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-mc-muted group-hover:scale-110 transition-transform mb-3">
                            <ImageIcon size={24} />
                        </div>
                        <p className="text-sm font-bold text-mc-text">Upload Image</p>
                        <p className="text-xs text-mc-muted mt-1">Drag & drop or click to browse</p>
                    </div>
                )}
                
                {activeType === 'project' && (
                     <div className="p-5 bg-white border border-mc-border rounded-card shadow-sm space-y-4">
                        <div className="flex items-center gap-3 text-sm font-bold text-mc-text mb-2">
                            <Monitor size={18} /> Project Details
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="GitHub Repository URL" className="w-full p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs font-medium focus:outline-none focus:border-black/20" />
                            <input type="text" placeholder="Live Demo URL" className="w-full p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs font-medium focus:outline-none focus:border-black/20" />
                        </div>
                        <div className="p-4 border-2 border-dashed border-gray-200 rounded-xl text-center">
                            <span className="text-xs font-bold text-mc-muted">Upload Screenshots / Assets</span>
                        </div>
                     </div>
                )}

                {/* Tags Input */}
                <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-mc-border/40">
                    <Hash size={16} className="text-mc-muted" />
                    {tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white border border-mc-border text-xs font-bold text-mc-text flex items-center gap-1 group">
                            {tag}
                            <button onClick={() => removeTag(tag)} className="hover:text-red-500"><X size={10} /></button>
                        </span>
                    ))}
                    <input 
                        type="text" 
                        placeholder="Add tags..." 
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={handleAddTag}
                        className="bg-transparent text-sm font-medium focus:outline-none min-w-[100px] placeholder:text-mc-muted/60"
                    />
                </div>

            </div>
        </div>

        {/* Bottom Toolbar */}
        <div className="sticky bottom-0 bg-white border-t border-mc-border px-6 py-4 flex items-center justify-between shrink-0 z-20">
             <div className="flex items-center gap-2">
                 <button className="p-2.5 rounded-full hover:bg-gray-100 text-mc-muted transition-colors"><ImageIcon size={20} /></button>
                 <button className="p-2.5 rounded-full hover:bg-gray-100 text-mc-muted transition-colors"><Paperclip size={20} /></button>
                 <button className="p-2.5 rounded-full hover:bg-gray-100 text-mc-muted transition-colors"><Smile size={20} /></button>
                 <div className="w-[1px] h-6 bg-gray-200 mx-1"></div>
                 <button 
                    onClick={() => setVisibility(visibility === 'Public' ? 'Private' : 'Public')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-gray-100 text-xs font-bold text-mc-muted transition-colors"
                >
                    {visibility === 'Public' ? <Globe size={14} /> : <Eye size={14} />} {visibility}
                 </button>
             </div>
             
             {/* AI Toggle for Mobile (if panel hidden) */}
             <button 
                onClick={() => setIsAiPanelOpen(!isAiPanelOpen)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-pastel-lavender/50 text-purple-700 rounded-full text-xs font-bold"
             >
                 <Sparkles size={14} /> AI Tools
             </button>
        </div>

      </div>

      {/* 2. AI Assistance Panel (Right Sidebar) */}
      <div className={`
        fixed inset-y-0 right-0 w-[300px] bg-white border-l border-mc-border transform transition-transform duration-300 ease-in-out z-30
        lg:relative lg:translate-x-0 lg:w-[320px] shadow-2xl lg:shadow-none flex flex-col
        ${isAiPanelOpen ? 'translate-x-0' : 'translate-x-full lg:hidden'}
      `}>
          <div className="p-5 border-b border-mc-border flex justify-between items-center bg-gray-50/50">
              <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-purple-600" />
                  <h3 className="text-sm font-bold text-mc-text">MindCraft AI</h3>
              </div>
              <button onClick={() => setIsAiPanelOpen(false)} className="lg:hidden text-mc-muted hover:text-mc-text">
                  <X size={18} />
              </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-6">
              
              {/* Context Aware Suggestions */}
              <div>
                  <h4 className="text-[10px] font-bold text-mc-muted uppercase tracking-wider mb-3">Refinement</h4>
                  <div className="space-y-2">
                      <button className="w-full p-3 bg-white border border-mc-border rounded-xl text-left hover:shadow-sm hover:border-purple-200 transition-all group">
                          <div className="flex items-center gap-2 text-xs font-bold text-mc-text mb-1 group-hover:text-purple-600">
                              <PenTool size={14} /> Fix Grammar & Tone
                          </div>
                          <p className="text-[10px] text-mc-muted">Make it sound more professional.</p>
                      </button>
                      <button className="w-full p-3 bg-white border border-mc-border rounded-xl text-left hover:shadow-sm hover:border-blue-200 transition-all group">
                          <div className="flex items-center gap-2 text-xs font-bold text-mc-text mb-1 group-hover:text-blue-600">
                              <Hash size={14} /> Generate Tags
                          </div>
                          <p className="text-[10px] text-mc-muted">Auto-detect relevant topics.</p>
                      </button>
                  </div>
              </div>

               <div>
                  <h4 className="text-[10px] font-bold text-mc-muted uppercase tracking-wider mb-3">Generative</h4>
                  <div className="space-y-2">
                       <button className="w-full p-3 bg-pastel-lavender/30 border border-purple-100 rounded-xl text-left hover:bg-pastel-lavender/50 transition-all">
                          <div className="flex items-center gap-2 text-xs font-bold text-purple-700 mb-1">
                              <FileText size={14} /> Draft Summary
                          </div>
                          <p className="text-[10px] text-purple-600/70">Create a short version for Twitter.</p>
                      </button>
                  </div>
              </div>

              {/* Real-time Checks */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="text-[10px] font-bold text-mc-muted uppercase tracking-wider mb-3">Content Checks</h4>
                  <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-medium text-emerald-600">
                          <CheckCircle2 size={14} /> Plagiarism Check Passed
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-emerald-600">
                          <CheckCircle2 size={14} /> Tone: Educational
                      </div>
                  </div>
              </div>

          </div>
      </div>

    </div>
  );
};

export default CreateView;