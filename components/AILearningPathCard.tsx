import React from 'react';
import { LearningPath } from '../types';
import { ArrowRight } from 'lucide-react';

interface AILearningPathCardProps {
  path: LearningPath;
  index?: number;
}

const PASTEL_COLORS = [
  'bg-pastel-blue',
  'bg-pastel-lavender',
  'bg-mc-card',
  'bg-pastel-peach',
];

const AILearningPathCard: React.FC<AILearningPathCardProps> = ({ path, index = 0 }) => {
  const colorClass = PASTEL_COLORS[index % PASTEL_COLORS.length];

  return (
    <div className={`
        min-w-[200px] w-[200px] md:min-w-[240px] md:w-[240px] ${colorClass} rounded-card p-5 border border-mc-border
        flex flex-col justify-between shrink-0 shadow-soft hover:shadow-float hover:scale-[1.02] transition-all duration-200 ease-out group relative overflow-hidden
    `}>
      
      {/* Top Row: Icon & Badge */}
      <div className="flex justify-between items-start mb-3">
        <div className="w-8 h-8 rounded-full bg-mc-card border border-mc-border flex items-center justify-center text-mc-text shadow-sm">
            <path.icon size={14} strokeWidth={2} />
        </div>
        {path.isNew && (
          <span className="px-2 py-0.5 bg-mc-text text-mc-card text-[9px] font-bold rounded-pill">
              NEW
          </span>
        )}
      </div>

      {/* Header */}
      <div className="mb-4">
        <span className="text-[10px] font-bold text-mc-muted uppercase tracking-wide mb-1 block">
            {path.level}
        </span>
        <h3 className="font-semibold text-mc-text text-base leading-tight mb-1">{path.title}</h3>
        {path.subtitle && (
            <p className="text-[11px] text-mc-muted font-medium leading-snug">
                {path.subtitle}
            </p>
        )}
      </div>

      {/* Footer */}
      <button className="w-full flex items-center justify-center gap-1.5 bg-mc-card border border-mc-border text-mc-text py-2 rounded-pill text-[10px] font-medium hover:bg-mc-text hover:text-mc-card transition-all shadow-button">
          Start Path <ArrowRight size={10} />
      </button>
    </div>
  );
};

export default AILearningPathCard;