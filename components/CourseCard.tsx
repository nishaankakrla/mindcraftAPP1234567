
import React from 'react';
import { Course } from '../types';
import { Bookmark, CheckCircle2, Play, Search, Zap, Clock, BookOpen, Bell } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  index?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index = 0 }) => {
  // Category-based Pastel Backgrounds matching JobCard logic
  const getCategoryStyle = (cat: string) => {
    if (cat.includes('Coding') || cat.includes('Tech') || cat.includes('Programming')) return 'bg-pastel-blue/40';
    if (cat.includes('Design')) return 'bg-pastel-peach/40';
    if (cat.includes('Business') || cat.includes('Finance')) return 'bg-pastel-beige/60';
    if (cat.includes('Language')) return 'bg-pastel-mint/40';
    if (cat.includes('AI')) return 'bg-pastel-lavender/50';
    return 'bg-mc-light';
  };

  const categoryStyle = getCategoryStyle(course.category);
  const isComingSoon = course.price === 'Coming Soon';

  return (
    <div className="relative rounded-[22px] p-5 border border-mc-border shadow-soft hover:shadow-float hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between h-full min-h-[190px] group cursor-pointer bg-mc-card overflow-hidden">
        
        {/* Pastel Category Tint */}
        <div className={`absolute inset-0 opacity-40 pointer-events-none ${categoryStyle}`}></div>

        <div className="relative z-10 flex flex-col h-full">
            
            {/* Top Row: Level Badge & Bookmark */}
            <div className="flex justify-between items-start mb-3">
                 <span className="px-2 py-0.5 rounded-md bg-mc-card/60 border border-black/5 text-[9px] font-bold text-mc-muted uppercase tracking-wider backdrop-blur-sm">
                    {course.level}
                </span>
                <button className="text-mc-muted hover:text-mc-text transition-colors">
                    <Bookmark size={18} className={course.progress && course.progress > 0 ? "fill-mc-text text-mc-text" : ""} />
                </button>
            </div>

            {/* Header: Icon & Title */}
            <div className="flex items-center gap-3 mb-3">
                 <div className="w-10 h-10 rounded-full bg-mc-card border border-mc-border flex items-center justify-center overflow-hidden p-1 shadow-sm shrink-0">
                    {course.image ? (
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover rounded-full" />
                    ) : (
                        <BookOpen size={18} className="text-mc-muted" />
                    )}
                 </div>
                 <div className="min-w-0">
                     <div className="flex items-center gap-1.5">
                         <h4 className="text-[11px] font-bold text-mc-text opacity-80">{course.category}</h4>
                         {course.isAI && <CheckCircle2 size={10} className="text-mc-primary fill-mc-primary/10" />}
                     </div>
                     <h3 className="text-sm font-bold text-mc-text leading-tight truncate">{course.title}</h3>
                 </div>
            </div>

            {/* Chips Row */}
            <div className="flex flex-wrap gap-1.5 mb-4">
                 <span className="px-2 py-0.5 rounded-full bg-mc-card border border-black/5 text-[9px] font-medium text-mc-text flex items-center gap-1">
                    <Clock size={10} /> {course.duration.split('·')[0].trim()}
                </span>
                 {course.tags?.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-mc-card border border-black/5 text-[9px] font-medium text-mc-text">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Footer: Progress/Price & CTA */}
            <div className="mt-auto pt-3 border-t border-black/5 flex items-end justify-between">
                 <div className="flex-1 mr-4">
                     {course.progress !== undefined && course.progress > 0 ? (
                        <div>
                             <div className="flex justify-between text-[9px] font-bold mb-1 text-mc-muted">
                                 <span>Progress</span>
                                 <span>{course.progress}%</span>
                             </div>
                             <div className="w-full h-1 bg-mc-light rounded-full overflow-hidden">
                                 <div className="h-full bg-mc-text rounded-full" style={{ width: `${course.progress}%` }}></div>
                             </div>
                        </div>
                     ) : (
                        <div>
                            <div className="text-[9px] font-bold text-mc-muted mb-0.5 flex items-center gap-1"><Zap size={10} className="text-mc-active fill-mc-active" /> Price</div>
                            <div className={`text-[11px] font-bold ${isComingSoon ? 'text-mc-muted' : 'text-mc-text'}`}>{course.price}</div>
                        </div>
                     )}
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
                         {isComingSoon ? <Bell size={10} /> : (course.progress && course.progress > 0 ? <Play size={10} fill="currentColor" /> : <Zap size={10} fill="currentColor" />)} 
                         {isComingSoon ? 'Notify' : (course.progress && course.progress > 0 ? 'Resume' : 'Start')}
                     </button>
                </div>
            </div>

        </div>
    </div>
  );
};

export default CourseCard;
