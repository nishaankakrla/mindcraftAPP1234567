import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Sparkles, ArrowRight, Play, Eye, Code, FileText, ChevronDown, Check } from 'lucide-react';
import { Post } from '../types';

interface FeedCardProps {
  post: Post;
}

const FeedCard: React.FC<FeedCardProps> = ({ post }) => {
  const [isSaved, setIsSaved] = useState(post.isSaved);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // --- SUB-COMPONENTS ---

  const Header = () => (
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-mc-border shrink-0 cursor-pointer">
             <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-sm text-mc-text leading-none hover:underline cursor-pointer">
                    {post.author.name}
                </h3>
                {post.author.role && (
                    <span className="text-[10px] text-mc-muted font-medium">• {post.author.role}</span>
                )}
            </div>
            <p className="text-[10px] text-mc-muted mt-0.5 font-medium">{post.time}</p>
          </div>
        </div>
        <button className="text-mc-muted hover:text-mc-text transition-colors p-1.5 hover:bg-mc-bg rounded-lg">
            <MoreHorizontal size={16} />
        </button>
      </div>
  );

  const Tags = () => (
      post.tags && (
        <div className="flex flex-wrap gap-1.5 mt-3">
            {post.tags.map((tag, i) => (
                <span key={tag} className="px-2 py-0.5 rounded-pill text-[10px] font-medium text-mc-muted border border-mc-border/60 bg-mc-bg hover:border-mc-text/20 hover:text-mc-text transition-colors cursor-pointer">
                    #{tag}
                </span>
            ))}
        </div>
      )
  );

  const Footer = () => (
      <div className="flex items-center justify-between pt-3 mt-3 border-t border-mc-border/40">
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-1.5 group">
            <Heart size={16} className="text-mc-muted group-hover:text-red-500 transition-colors stroke-[1.5px]" />
            <span className="text-[11px] font-medium text-mc-muted group-hover:text-mc-text">{post.likes}</span>
          </button>
          
          <button className="flex items-center gap-1.5 group">
            <MessageCircle size={16} className="text-mc-muted group-hover:text-blue-500 transition-colors stroke-[1.5px]" />
            <span className="text-[11px] font-medium text-mc-muted group-hover:text-mc-text">{post.commentsCount}</span>
          </button>

          <button className="group">
            <Share2 size={16} className="text-mc-muted group-hover:text-mc-text transition-colors stroke-[1.5px]" />
          </button>
        </div>

        <div className="flex items-center gap-3">
            {/* AI Action Button */}
            <div className="relative">
                <button 
                    onClick={() => setIsAiOpen(!isAiOpen)}
                    className={`
                        flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold transition-all border
                        ${isAiOpen ? 'bg-purple-50 text-purple-600 border-purple-200' : 'bg-transparent text-mc-muted border-transparent hover:bg-mc-bg'}
                    `}
                >
                    <Sparkles size={12} className={isAiOpen ? 'fill-purple-600' : ''} />
                    AI Actions
                </button>
                {isAiOpen && (
                    <div className="absolute bottom-full right-0 mb-2 w-40 bg-mc-card border border-mc-border rounded-xl shadow-lg p-1 z-10 animate-in fade-in slide-in-from-bottom-2">
                        {['Summarize', 'Flashcards', 'Quiz Me', 'Explain'].map(action => (
                            <button key={action} className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-mc-light text-mc-text transition-colors">
                                {action}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <button 
                onClick={() => setIsSaved(!isSaved)}
                className="text-mc-muted hover:text-mc-text transition-colors"
            >
                <Bookmark size={16} className={isSaved ? "fill-black text-black" : "stroke-[1.5px]"} />
            </button>
        </div>
      </div>
  );

  // --- CONTENT RENDERING BASED ON TYPE ---

  const renderContent = () => {
      switch (post.type) {
          case 'learning':
              return (
                  <div className="mb-1">
                      {post.title && <h3 className="font-bold text-sm text-mc-text mb-1">{post.title}</h3>}
                      <p className="text-[13px] text-mc-text/80 leading-relaxed font-normal mb-3 line-clamp-3">
                          {post.content}
                      </p>
                      <div className="flex items-center justify-between p-3 bg-pastel-blue/30 border border-mc-border rounded-xl">
                          <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-mc-card flex items-center justify-center text-mc-primary shadow-sm">
                                    <FileText size={16} />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-mc-primary uppercase tracking-wide">Lesson</span>
                                    <p className="text-xs font-bold text-mc-text">{post.readTime || '5 min'} • {post.difficulty || 'Beginner'}</p>
                                </div>
                          </div>
                          <button className="px-3 py-1.5 bg-mc-card text-mc-primary text-[10px] font-bold rounded-lg shadow-sm hover:bg-mc-light transition-colors flex items-center gap-1">
                              Continue <ArrowRight size={10} />
                          </button>
                      </div>
                      <Tags />
                  </div>
              );

          case 'project':
              return (
                  <div className="mb-1">
                       {post.title && <h3 className="font-bold text-sm text-mc-text mb-1">{post.title}</h3>}
                       <p className="text-[13px] text-mc-text/80 leading-relaxed font-normal mb-3">
                          {post.content}
                       </p>
                       <div className="relative rounded-xl overflow-hidden border border-mc-border group cursor-pointer">
                           <img src={post.image} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                                <span className="text-white text-xs font-bold">{post.techStack?.join(' • ')}</span>
                                <button className="px-3 py-1.5 bg-mc-card text-mc-text text-[10px] font-bold rounded-full flex items-center gap-1">
                                    View Code <Code size={10} />
                                </button>
                           </div>
                       </div>
                       <Tags />
                  </div>
              );

            case 'video':
                // Vertical Video Style
                return (
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black border border-gray-800 group cursor-pointer">
                        <img src={post.image} className="w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-mc-card/20 backdrop-blur-md flex items-center justify-center text-mc-card border border-mc-card/30 group-hover:scale-110 transition-transform">
                                <Play size={20} fill="currentColor" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent pt-12">
                            {post.title && <h3 className="font-bold text-white text-sm mb-1 leading-tight">{post.title}</h3>}
                            <p className="text-[11px] text-gray-300 line-clamp-2 mb-2">{post.content}</p>
                            <div className="flex gap-1.5">
                                {post.tags?.slice(0, 2).map(tag => (
                                    <span key={tag} className="px-2 py-0.5 bg-white/10 backdrop-blur-md rounded-md text-[9px] text-white font-medium border border-white/10">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded-md text-[9px] font-bold text-white border border-white/10 flex items-center gap-1">
                            <Eye size={10} /> 1.2k
                        </div>
                    </div>
                );
            
            case 'live':
                return (
                    <div className="mb-1">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[9px] font-bold rounded-full animate-pulse border border-red-200">
                                LIVE
                            </span>
                            <span className="text-[10px] text-mc-muted font-medium">{post.participants} watching</span>
                        </div>
                        {post.title && <h3 className="font-bold text-sm text-mc-text mb-1">{post.title}</h3>}
                        <p className="text-[13px] text-mc-text/80 leading-relaxed font-normal mb-3">
                            {post.content}
                        </p>
                        <button className="w-full py-2 bg-black text-white rounded-lg text-xs font-bold hover:opacity-90 transition-opacity">
                            Join Session
                        </button>
                        <Tags />
                    </div>
                );

          case 'question':
                return (
                    <div className="mb-1">
                        <h3 className="text-base font-bold text-mc-text mb-2 leading-tight">{post.title}</h3>
                        <p className="text-[13px] text-mc-text/80 leading-relaxed font-normal mb-3">
                            {post.content}
                        </p>
                        <div className="pl-3 border-l-2 border-mc-border/50">
                             {post.commentsPreview?.map(comment => (
                                 <div key={comment.id} className="mb-2">
                                     <span className="text-[10px] font-bold text-mc-text mr-1">{comment.author}</span>
                                     <span className="text-[11px] text-mc-muted">{comment.text}</span>
                                 </div>
                             ))}
                             <button className="text-[10px] font-bold text-blue-600 hover:underline">View all answers</button>
                        </div>
                        <Tags />
                    </div>
                );

          default:
              // Standard Post
              return (
                  <div className="mb-1">
                      <p className="text-[13px] text-mc-text leading-relaxed font-normal whitespace-pre-wrap line-clamp-4 hover:line-clamp-none transition-all cursor-pointer">
                          {post.content}
                      </p>
                      {post.image && (
                        <div className="mt-3 rounded-xl overflow-hidden border border-mc-border shadow-sm">
                            <img src={post.image} alt="Content" className="w-full h-auto object-cover max-h-[300px]" />
                        </div>
                      )}
                      <Tags />
                  </div>
              );
      }
  };

  return (
    <article className="bg-mc-card rounded-[28px] p-6 shadow-soft border border-mc-border hover:shadow-float hover:-translate-y-1 transition-all duration-500 ease-out group">
      {post.type !== 'video' && <Header />}
      {renderContent()}
      {post.type !== 'video' && <Footer />}
    </article>
  );
};

export default FeedCard;