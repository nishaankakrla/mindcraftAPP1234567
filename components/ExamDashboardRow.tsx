import React from 'react';
import { Calendar, CheckSquare, BarChart3, AlertCircle, ArrowRight } from 'lucide-react';

const StatCard: React.FC<{
    title: string;
    children: React.ReactNode;
    icon: React.ReactNode;
    colorClass: string;
    cta?: string;
    tag?: { text: string; color: string };
}> = ({ title, children, icon, colorClass, cta, tag }) => (
    <div className="bg-white rounded-card p-4 shadow-soft hover:shadow-float transition-all cursor-pointer group border border-mc-border flex flex-col justify-between min-h-[110px]">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
            <div className={`p-1.5 rounded-lg ${colorClass} text-black group-hover:scale-110 transition-transform shadow-sm`}>
                {icon}
            </div>
            {tag && (
                 <span className={`px-2 py-0.5 rounded-pill text-[9px] font-bold uppercase tracking-wide shadow-sm border border-black/5 ${tag.color}`}>
                    {tag.text}
                </span>
            )}
        </div>

        {/* Content */}
        <div>
            <h4 className="text-[10px] font-bold text-mc-muted uppercase tracking-wider mb-1">{title}</h4>
            {children}
        </div>

        {/* CTA Footer */}
        {cta && (
             <div className="mt-2 pt-2 border-t border-gray-50 flex justify-end">
                <button className="text-[9px] font-bold uppercase tracking-wider text-mc-text hover:text-black flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    {cta} <ArrowRight size={10} />
                </button>
             </div>
        )}
    </div>
  );

const ExamDashboardRow: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        
        <StatCard 
            title="Upcoming Exam" 
            icon={<Calendar size={14} />} 
            colorClass="bg-pastel-peach text-orange-700"
            tag={{ text: "45 Days Left", color: "bg-red-50 text-red-600 border-red-100" }}
            cta="View Schedule"
        >
            <div className="text-base font-bold text-mc-text mb-0.5">JEE Main 2026</div>
            <p className="text-[10px] text-mc-muted font-medium">Next: Mechanics Mock</p>
        </StatCard>

        <StatCard 
            title="Today's Summary" 
            icon={<CheckSquare size={14} />} 
            colorClass="bg-pastel-blue text-blue-700"
        >
            <div className="space-y-1.5">
                 <p className="text-[11px] font-bold text-mc-text">2 Mocks, 3 Tasks</p>
                 <div>
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-[9px] font-bold text-mc-muted">Progress</span>
                        <span className="text-[9px] font-bold text-blue-600">30%</span>
                    </div>
                    <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 w-[30%] rounded-full"></div>
                    </div>
                 </div>
            </div>
        </StatCard>

        <StatCard 
            title="Mock Test Stats" 
            icon={<BarChart3 size={14} />} 
            colorClass="bg-pastel-mint text-emerald-700"
        >
             <div className="text-base font-bold text-mc-text mb-0.5">12 Tests Done</div>
             <div className="flex items-center gap-1.5 mt-0.5">
                <div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[40%]"></div>
                </div>
                <span className="text-[9px] font-bold text-emerald-600">12/30</span>
             </div>
        </StatCard>

        <StatCard 
            title="Weak Areas" 
            icon={<AlertCircle size={14} />} 
            colorClass="bg-pastel-yellow text-yellow-700"
        >
            <div className="flex flex-wrap gap-1.5 mt-1">
                {['Organic Chem', 'Algebra', 'CA'].map(topic => (
                    <span key={topic} className="px-2 py-0.5 bg-gray-50 border border-gray-100 rounded-pill text-[9px] font-bold text-mc-text shadow-sm hover:bg-white transition-colors">
                        {topic}
                    </span>
                ))}
            </div>
        </StatCard>

    </div>
  );
};

export default ExamDashboardRow;