import React from 'react';
import { WorkforceTask } from '../types';
import { Coins, Clock, Target, ArrowRight } from 'lucide-react';

interface WorkforceTaskCardProps {
    task: WorkforceTask;
}

const WorkforceTaskCard: React.FC<WorkforceTaskCardProps> = ({ task }) => {
    return (
        <div className="bg-white border border-mc-border rounded-[20px] p-4 hover:shadow-float transition-all cursor-pointer group relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <Coins size={64} />
            </div>

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-2">
                    <span className={`
                        px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wide border
                        ${task.type === 'Labeling' ? 'bg-blue-50 text-blue-700 border-blue-100' : 
                          task.type === 'Evaluation' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                          'bg-orange-50 text-orange-700 border-orange-100'}
                    `}>
                        {task.type}
                    </span>
                    <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full border border-yellow-100">
                        <Coins size={10} className="fill-yellow-600" />
                        <span className="text-[10px] font-bold">+{task.creditsReward} UC</span>
                    </div>
                </div>

                <h3 className="text-sm font-bold text-mc-text mb-3 pr-8">{task.title}</h3>

                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="flex items-center gap-1.5 text-[10px] text-mc-muted font-medium bg-gray-50 px-2 py-1.5 rounded-lg">
                        <Clock size={12} /> {task.timeEstimate}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-mc-muted font-medium bg-gray-50 px-2 py-1.5 rounded-lg">
                        <Target size={12} /> &gt;{task.accuracyRequired} Acc
                    </div>
                </div>

                <button className="w-full py-2 bg-black text-white rounded-full text-[10px] font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-1">
                    Start Task <ArrowRight size={10} />
                </button>
            </div>
        </div>
    );
};

export default WorkforceTaskCard;