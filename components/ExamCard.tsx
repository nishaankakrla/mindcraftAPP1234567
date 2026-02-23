import React from 'react';
import { Exam } from '../types';
import { Bookmark, Calendar, Search, Zap, CheckCircle2, GraduationCap, Clock } from 'lucide-react';

interface ExamCardProps {
  exam: Exam;
  index?: number;
}

const ExamCard: React.FC<ExamCardProps> = ({ exam, index = 0 }) => {
  // Category-based Pastel Backgrounds matching JobCard logic
  const getStreamStyle = (stream: string) => {
    if (stream.includes('Engineering')) return 'bg-pastel-blue/40';
    if (stream.includes('Medical')) return 'bg-pastel-mint/40';
    if (stream.includes('Civil') || stream.includes('Govt')) return 'bg-pastel-peach/40';
    if (stream.includes('Management') || stream.includes('Law')) return 'bg-pastel-lavender/50';
    return 'bg-pastel-beige/60';
  };

  const streamStyle = getStreamStyle(exam.stream);
  const isComingSoon = exam.status === 'Coming Soon';

  return (
    <div className="relative rounded-[22px] p-5 border border-mc-border shadow-soft hover:shadow-float hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between h-full min-h-[190px] group cursor-pointer bg-mc-card overflow-hidden">
        
        {/* Pastel Stream Tint */}
        <div className={`absolute inset-0 opacity-40 pointer-events-none ${streamStyle}`}></div>

        <div className="relative z-10 flex flex-col h-full">
            
            {/* Top Row: Date Badge & Bookmark */}
            <div className="flex justify-between items-start mb-3">
                 <span className={`px-2 py-0.5 rounded-md border border-black/5 text-[9px] font-bold uppercase tracking-wider backdrop-blur-sm flex items-center gap-1 ${isComingSoon ? 'bg-mc-light text-mc-muted' : 'bg-mc-card/60 text-mc-muted'}`}>
                    <Calendar size={10} /> {exam.nextAttempt}
                </span>
                <button className="text-mc-muted hover:text-mc-text transition-colors">
                    <Bookmark size={18} />
                </button>
            </div>

            {/* Header: Icon & Title */}
            <div className="flex items-center gap-3 mb-3">
                 <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden p-1 shadow-sm shrink-0">
                    <span className="text-xs font-extrabold text-mc-text">{exam.name.substring(0, 2).toUpperCase()}</span>
                 </div>
                 <div className="min-w-0">
                     <div className="flex items-center gap-1.5">
                         <h4 className="text-[11px] font-bold text-mc-text opacity-80">{exam.level}</h4>
                         {exam.status === 'Active' && <CheckCircle2 size={10} className="text-mc-primary fill-mc-primary/10" />}
                     </div>
                     <h3 className="text-sm font-bold text-mc-text leading-tight truncate">{exam.name}</h3>
                 </div>
            </div>

            {/* Chips Row */}
            <div className="flex flex-wrap gap-1.5 mb-4">
                 <span className="px-2 py-0.5 rounded-full bg-mc-card border border-black/5 text-[9px] font-medium text-mc-text flex items-center gap-1">
                    <GraduationCap size={10} /> {exam.stream}
                </span>
                 {exam.badges?.slice(0, 2).map(badge => (
                    <span key={badge} className="px-2 py-0.5 rounded-full bg-mc-card border border-black/5 text-[9px] font-medium text-mc-text">
                        {badge}
                    </span>
                ))}
            </div>

            {/* Footer: Status & CTA */}
            <div className="mt-auto pt-3 border-t border-black/5 flex items-end justify-between">
                 <div className="flex-1 mr-4">
                    <div className="flex items-center gap-1 text-[9px] font-bold text-mc-muted mb-0.5">
                        Status
                    </div>
                    <div className={`text-[11px] font-bold flex items-center gap-1 ${exam.status === 'Active' ? 'text-mc-primary' : 'text-mc-text'}`}>
                        {isComingSoon && <Clock size={10} />}
                        {exam.status || 'Active'}
                    </div>
                 </div>

                 <div className="flex gap-2">
                     <button className="w-8 h-8 rounded-full bg-mc-card border border-mc-border flex items-center justify-center text-mc-text hover:bg-mc-light transition-colors" title="View Details">
                         <Search size={14} />
                     </button>
                     <button 
                        disabled={isComingSoon}
                        className={`px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm transition-all
                            ${isComingSoon 
                                ? 'bg-mc-light text-mc-muted cursor-not-allowed border border-mc-border' 
                                : 'bg-mc-text text-mc-card hover:opacity-90'
                            }
                        `}
                    >
                         <Zap size={10} fill="currentColor" /> {isComingSoon ? 'Notify' : 'Practice'}
                     </button>
                </div>
            </div>

        </div>
    </div>
  );
};

export default ExamCard;