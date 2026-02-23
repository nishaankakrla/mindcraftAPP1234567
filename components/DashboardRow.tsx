import React from 'react';
import { Flame, TrendingUp, Sparkles, Trophy, ArrowUpRight, GraduationCap, Briefcase, Award, Coins } from 'lucide-react';

const StatCard: React.FC<{
    title: string;
    value: string;
    icon: React.ReactNode;
    colorClass: string;
    footerContent?: React.ReactNode;
    progress?: { value: number; color: string };
    tag?: { text: string; color: string };
}> = ({ title, value, icon, colorClass, footerContent, progress, tag }) => (
    <div className="bg-mc-card rounded-card p-4 shadow-soft hover:shadow-float transition-all cursor-pointer group border border-mc-border flex flex-col justify-between min-h-[110px] relative overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
            <div className={`p-1.5 rounded-lg ${colorClass} text-black group-hover:scale-110 transition-transform shadow-sm`}>
                {icon}
            </div>
            {tag && (
                <span className={`px-2 py-0.5 rounded-pill text-[9px] font-bold uppercase tracking-wide shadow-sm ${tag.color}`}>
                    {tag.text}
                </span>
            )}
        </div>

        {/* Content */}
        <div className="z-10">
            <h4 className="text-[10px] font-bold text-mc-muted uppercase tracking-wider mb-1">{title}</h4>
            <div className="text-lg font-bold text-mc-text tracking-tight mb-2 truncate">{value}</div>
            
            {progress && (
                <div className="w-full h-1 bg-mc-light rounded-full overflow-hidden mb-2">
                    <div className={`h-full rounded-full ${progress.color}`} style={{ width: `${progress.value}%` }}></div>
                </div>
            )}

            {footerContent && (
                <div className="flex items-center justify-between text-[9px] font-medium text-mc-muted">
                    {footerContent}
                </div>
            )}
        </div>
    </div>
);

const DashboardRow: React.FC = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6">
            {/* 1. Study Streak */}
            <StatCard 
                title="Study Streak"
                value="7 Days"
                icon={<Flame size={14} fill="currentColor" className="text-mc-active" />}
                colorClass="bg-pastel-peach"
                tag={{ text: "On Fire", color: "bg-mc-active/20 text-mc-text" }}
                footerContent={
                    <>
                        <span>Best: 14 Days</span>
                        <span className="text-mc-active font-bold">+2 today</span>
                    </>
                }
            />
            {/* 2. Weekly Focus */}
            <StatCard 
                title="Weekly Focus"
                value="12h 40m"
                icon={<TrendingUp size={14} />}
                colorClass="bg-pastel-mint"
                progress={{ value: 65, color: "bg-mc-primary" }}
                footerContent={
                    <>
                        <span>Goal: 20h</span>
                        <span className="flex items-center gap-1 text-mc-primary font-bold">
                            <ArrowUpRight size={10} /> 12%
                        </span>
                    </>
                }
            />
            {/* 3. AI Copilot */}
            <StatCard 
                title="AI Copilot"
                value="41 Prompts"
                icon={<Sparkles size={14} className="text-mc-active" />}
                colorClass="bg-pastel-yellow"
                tag={{ text: "Pro Plan", color: "bg-mc-text text-mc-card" }}
                footerContent={
                    <span className="text-mc-muted">Top: Python Code</span>
                }
            />
            {/* 4. Level & XP */}
            <StatCard 
                title="Current Level"
                value="Lvl 12"
                icon={<Trophy size={14} className="text-mc-primary" />}
                colorClass="bg-pastel-blue"
                progress={{ value: 45, color: "bg-mc-primary" }}
                footerContent={
                    <>
                        <span>2450 XP</span>
                        <span className="text-mc-primary font-bold">Next: Lvl 13</span>
                    </>
                }
            />
             {/* 5. Exam Prep */}
             <StatCard 
                title="Exam Prep"
                value="34 Days"
                icon={<GraduationCap size={14} className="text-mc-secondary" />}
                colorClass="bg-pastel-lavender"
                tag={{ text: "JEE Main", color: "bg-mc-secondary/20 text-mc-text" }}
                footerContent={
                    <span className="text-mc-muted">Next: Mock Test 4</span>
                }
            />
             {/* 6. Job Readiness */}
             <StatCard 
                title="Job Readiness"
                value="Score: 88"
                icon={<Briefcase size={14} className="text-mc-primary" />}
                colorClass="bg-pastel-blue/30"
                progress={{ value: 88, color: "bg-mc-primary" }}
                footerContent={
                    <span className="text-mc-primary font-bold">3 Skills Missing</span>
                }
            />
             {/* 7. Portfolio */}
             <StatCard 
                title="Portfolio"
                value="Top 15%"
                icon={<Award size={14} className="text-mc-active" />}
                colorClass="bg-pastel-peach/30"
                tag={{ text: "Strong", color: "bg-mc-active/20 text-mc-text" }}
                footerContent={
                    <span className="text-mc-muted">2 Projects added</span>
                }
            />
             {/* 8. Credits */}
             <StatCard 
                title="Credits Wallet"
                value="1,250 UC"
                icon={<Coins size={14} className="text-mc-active" />}
                colorClass="bg-pastel-yellow/30"
                footerContent={
                    <span className="text-mc-active font-bold underline cursor-pointer">Earn More</span>
                }
            />
        </div>
    );
};

export default DashboardRow;