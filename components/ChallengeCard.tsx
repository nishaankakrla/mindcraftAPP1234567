import React from 'react';
import { Challenge } from '../types';
import { Trophy, Clock, Users, ArrowRight } from 'lucide-react';

interface ChallengeCardProps {
    challenge: Challenge;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
    return (
        <div className="group rounded-[24px] overflow-hidden border border-mc-border bg-white hover:shadow-float transition-all cursor-pointer flex flex-col h-full">
            <div className="h-32 bg-gray-100 relative overflow-hidden">
                <img src={challenge.image} alt={challenge.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div className="flex items-center gap-1 text-white text-[10px] font-bold">
                        <Clock size={12} /> {challenge.deadline}
                    </div>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[9px] font-bold text-mc-text uppercase tracking-wide">
                    {challenge.type}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <div className="mb-1 text-[10px] font-bold text-mc-muted uppercase tracking-wider">{challenge.organizer}</div>
                <h3 className="text-base font-bold text-mc-text mb-3 leading-tight">{challenge.title}</h3>
                
                <div className="flex items-center justify-between mb-4 bg-yellow-50 border border-yellow-100 rounded-xl p-3">
                    <div className="flex items-center gap-2 text-yellow-800">
                        <Trophy size={16} />
                        <span className="text-xs font-bold">{challenge.prize}</span>
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                     <div className="flex items-center gap-1 text-[10px] text-mc-muted font-bold">
                        <Users size={12} /> {challenge.participants} Joined
                     </div>
                     <button className="text-[10px] font-bold text-mc-text flex items-center gap-1 hover:gap-2 transition-all">
                         Register <ArrowRight size={12} />
                     </button>
                </div>
            </div>
        </div>
    );
};

export default ChallengeCard;