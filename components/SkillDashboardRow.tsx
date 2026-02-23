import React from 'react';
import { Book, Clock, Target, Award, ArrowRight } from 'lucide-react';

const StatCard: React.FC<{
    title: string;
    children: React.ReactNode;
    icon: React.ReactNode;
    colorClass: string;
    cta?: string;
    tags?: string[];
}> = ({ title, children, icon, colorClass, cta, tags }) => (
    <div className="bg-white rounded-card p-4 shadow-soft hover:shadow-float transition-all cursor-pointer group border border-mc-border flex flex-col justify-between min-h-[110px]">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
             <div className={`p-1.5 rounded-lg ${colorClass} group-hover:scale-110 transition-transform shadow-sm`}>
                {icon}
            </div>
            {cta && (
                <button className="w-4 h-4 rounded-full bg-gray-50 flex items-center justify-center text-mc-muted hover:bg-black hover:text-white transition-colors">
                    <ArrowRight size={10} />
                </button>
            )}
        </div>

        {/* Body */}
        <div>
            <h4 className="text-[10px] font-bold text-mc-muted uppercase tracking-wider mb-1">{title}</h4>
            <div className="mb-2">
                {children}
            </div>
            
            {tags && (
                <div className="flex flex-wrap gap-1 mt-1">
                    {tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-pill bg-gray-50 border border-gray-100 text-[9px] font-bold text-mc-text shadow-sm hover:bg-white transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    </div>
);

const SkillDashboardRow: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        
        <StatCard title="Active Courses" icon={<Book size={14} />} colorClass="bg-pastel-lavender text-purple-700" cta="View">
            <div className="text-base font-bold text-mc-text mb-1">4 Active</div>
            <div className="flex items-center gap-2">
                <div className="h-1 w-16 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-1/2"></div>
                </div>
                <span className="text-[9px] font-bold text-purple-600">50% Avg</span>
            </div>
        </StatCard>

        <StatCard title="Weekly Learning" icon={<Clock size={14} />} colorClass="bg-pastel-blue text-blue-700">
            <div className="flex items-baseline gap-1 mb-1">
                <span className="text-base font-bold text-mc-text">6.5h</span>
                <span className="text-[9px] text-mc-muted font-medium">/ 8h goal</span>
            </div>
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[80%] rounded-full"></div>
            </div>
        </StatCard>

        <StatCard title="Skills in Progress" icon={<Target size={14} />} colorClass="bg-pastel-mint text-emerald-700" tags={['Python', 'UI Design', 'Speaking']}>
             <div className="text-[11px] font-bold text-mc-text leading-tight">
                Focusing on Core Tech
             </div>
        </StatCard>

        <StatCard title="Monthly Goal" icon={<Award size={14} />} colorClass="bg-pastel-peach text-orange-700">
            <div className="space-y-1">
                 <div className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500 flex items-center justify-center shadow-sm">
                        <span className="text-[8px] text-white font-bold">✓</span>
                    </div>
                    <span className="text-[9px] font-medium text-mc-muted line-through decoration-gray-400">Complete React Basics</span>
                 </div>
                 <div className="flex items-center gap-1.5 opacity-50">
                    <div className="w-3.5 h-3.5 rounded-full border border-mc-border"></div>
                    <span className="text-[9px] font-bold text-mc-text">Take 2 Practice Quizzes</span>
                 </div>
            </div>
        </StatCard>

    </div>
  );
};

export default SkillDashboardRow;