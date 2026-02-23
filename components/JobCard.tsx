import React from 'react';
import { Job } from '../types';
import { Bookmark, CheckCircle2, Building2, Sparkles, Zap, Search } from 'lucide-react';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  // Category-based Pastel Backgrounds
  const getCategoryStyle = (cat: string) => {
    switch (cat) {
        case 'Tech': return 'bg-pastel-blue/40';
        case 'Design': return 'bg-pastel-peach/40';
        case 'Business': return 'bg-pastel-beige/60';
        case 'Research': return 'bg-pastel-lavender/50';
        case 'Marketing': return 'bg-pastel-mint/40';
        default: return 'bg-mc-light';
    }
  };

  return (
    <div 
        onClick={onClick}
        className={`
            relative rounded-[22px] p-5 border border-mc-border shadow-soft hover:shadow-float hover:-translate-y-1 transition-all duration-300 ease-out
            flex flex-col justify-between h-full min-h-[190px] group cursor-pointer bg-mc-card overflow-hidden
        `}
    >
        {/* Pastel Category Tint */}
        <div className={`absolute inset-0 opacity-40 pointer-events-none ${getCategoryStyle(job.category)}`}></div>

        <div className="relative z-10 flex flex-col h-full">
            
            {/* Top Row: Date & Actions */}
            <div className="flex justify-between items-start mb-3">
                <span className="px-2 py-0.5 rounded-md bg-mc-card/60 border border-black/5 text-[9px] font-bold text-mc-muted uppercase tracking-wider backdrop-blur-sm">
                    {job.datePosted}
                </span>
                <button className="text-mc-muted hover:text-mc-text transition-colors">
                    <Bookmark size={18} className={job.isSaved ? "fill-mc-text text-mc-text" : ""} />
                </button>
            </div>

            {/* Header: Company & Title */}
            <div className="flex items-center gap-3 mb-3">
                 <div className="w-10 h-10 rounded-full bg-mc-card border border-mc-border flex items-center justify-center overflow-hidden p-1 shadow-sm shrink-0">
                    {job.logo ? (
                        <img src={job.logo} alt={job.company} className="w-full h-full object-cover rounded-full" />
                    ) : (
                        <Building2 size={18} className="text-mc-muted" />
                    )}
                 </div>
                 <div className="min-w-0">
                     <div className="flex items-center gap-1.5">
                         <h4 className="text-[11px] font-bold text-mc-text">{job.company}</h4>
                         {job.isVerified && <CheckCircle2 size={10} className="text-mc-primary fill-mc-primary/10" />}
                     </div>
                     <h3 className="text-sm font-bold text-mc-text leading-tight truncate">{job.title}</h3>
                 </div>
            </div>

            {/* Chips Row */}
            <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="px-2 py-0.5 rounded-full bg-mc-card border border-black/5 text-[9px] font-medium text-mc-text">
                    {job.type}
                </span>
                 <span className="px-2 py-0.5 rounded-full bg-mc-card border border-black/5 text-[9px] font-medium text-mc-text">
                    {job.experience}
                </span>
                 <span className="px-2 py-0.5 rounded-full bg-mc-card border border-black/5 text-[9px] font-medium text-mc-text">
                    {job.category}
                </span>
            </div>

            {/* AI Match & Salary */}
            <div className="mt-auto pt-3 border-t border-black/5 flex items-end justify-between">
                <div>
                     <div className="flex items-center gap-1 text-[9px] font-bold text-mc-muted mb-0.5">
                         <Sparkles size={10} className="text-mc-secondary" /> Match Score
                     </div>
                     <div className="text-[11px] font-bold text-mc-text flex items-center gap-1">
                         {job.matchScore}% 
                         <span className="text-[9px] font-medium text-mc-muted">({job.matchScore > 80 ? 'High' : 'Avg'})</span>
                     </div>
                     <div className="text-[11px] font-bold text-mc-text mt-1">{job.salary}</div>
                </div>

                <div className="flex gap-2">
                     <button className="w-8 h-8 rounded-full bg-mc-card border border-mc-border flex items-center justify-center text-mc-text hover:bg-mc-light transition-colors" title="View Details">
                         <Search size={14} />
                     </button>
                     {job.matchScore > 75 && (
                        <button className="px-3 py-1.5 rounded-full bg-mc-text text-mc-card text-[10px] font-bold flex items-center gap-1 hover:scale-105 transition-all shadow-sm">
                            <Zap size={10} fill="currentColor" /> Apply
                        </button>
                     )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default JobCard;