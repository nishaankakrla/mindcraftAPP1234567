import React from 'react';
import { LearningPath } from '../types';
import { ArrowRight, Bot, Sparkles, Cpu, Layers } from 'lucide-react';

interface AILearningPathCardProps {
  path: LearningPath;
  index?: number;
}

const AILearningPathCard: React.FC<AILearningPathCardProps> = ({ path, index = 0 }) => {
  return (
    <div className="min-w-[240px] w-[240px] md:min-w-[280px] md:w-[280px] group relative bg-mc-card rounded-[24px] border border-mc-border shadow-soft hover:shadow-float hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden flex flex-col shrink-0 cursor-pointer">
      
      {/* 1. Header Section with Icon */}
      <div className="p-4 pb-3 flex justify-between items-start">
        <div className="w-10 h-10 rounded-xl bg-mc-primary/10 flex items-center justify-center text-mc-primary shadow-inner group-hover:scale-110 transition-transform duration-500">
            <path.icon size={20} strokeWidth={2} />
        </div>
        {path.isNew && (
          <span className="px-2 py-0.5 bg-mc-active text-white text-[8px] font-black rounded-full shadow-sm animate-pulse">
              NEW
          </span>
        )}
      </div>

      {/* 2. Information Section */}
      <div className="px-4 flex-1">
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-[9px] font-bold text-mc-primary uppercase tracking-widest">
                {path.level}
            </span>
            <span className="w-1 h-1 rounded-full bg-mc-muted/40"></span>
            <span className="text-[9px] font-bold text-mc-secondary uppercase tracking-widest flex items-center gap-1">
              <Cpu size={9} /> AI
            </span>
          </div>
          <h3 className="font-bold text-mc-text text-base leading-tight mb-1.5 group-hover:text-mc-primary transition-colors">
            {path.title}
          </h3>
          {path.subtitle && (
              <p className="text-[11px] text-mc-muted font-medium leading-relaxed line-clamp-1">
                  {path.subtitle}
              </p>
          )}
        </div>

        {/* 3. Modules Preview */}
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-1.5 text-[9px] font-bold text-mc-muted uppercase tracking-wider mb-1.5">
            <Layers size={10} /> Modules
          </div>
          {path.modules.slice(0, 2).map((mod, i) => (
            <div key={i} className="flex items-center gap-1.5 text-[10px] text-mc-text font-medium">
              <div className="w-1 h-1 rounded-full bg-mc-primary"></div>
              {mod}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Footer / Action Area */}
      <div className="p-4 pt-0 mt-auto">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-mc-primary/5 border border-mc-primary/10">
            <Sparkles size={10} className="text-mc-primary" />
            <span className="text-[8px] font-bold text-mc-primary uppercase tracking-wider">
              Practical
            </span>
          </div>
          <div className="flex -space-x-1.5">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-5 h-5 rounded-full border-2 border-mc-card bg-mc-light overflow-hidden">
                <img src={`https://picsum.photos/seed/user${i+index}/40/40`} alt="user" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-1.5 bg-mc-text text-mc-card py-2.5 rounded-xl text-[11px] font-bold hover:shadow-lg hover:scale-[1.02] transition-all group/btn">
            Start Path 
            <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Background Glow */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-mc-primary/5 rounded-full blur-2xl group-hover:bg-mc-primary/10 transition-colors"></div>
    </div>
  );
};

export default AILearningPathCard;
