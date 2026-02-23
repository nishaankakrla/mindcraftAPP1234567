import React from 'react';
import { Squad } from '../types';
import { Star, Users, Briefcase, Plus } from 'lucide-react';

interface SquadCardProps {
    squad: Squad;
}

const SquadCard: React.FC<SquadCardProps> = ({ squad }) => {
    return (
        <div className="bg-white border border-mc-border rounded-[22px] p-5 hover:shadow-float transition-all cursor-pointer group flex flex-col justify-between h-full">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <img src={squad.logo} alt={squad.name} className="w-12 h-12 rounded-xl border border-gray-100 object-cover shadow-sm" />
                    {squad.isHiring && (
                        <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[9px] font-bold rounded-full border border-green-100 uppercase tracking-wide">
                            Hiring
                        </span>
                    )}
                </div>

                <h3 className="text-sm font-bold text-mc-text mb-1">{squad.name}</h3>
                <div className="flex items-center gap-1 text-[10px] font-bold text-mc-muted mb-3">
                    <Star size={10} className="fill-yellow-400 text-yellow-400" /> {squad.rating} • {squad.memberCount} Members
                </div>

                <p className="text-[11px] text-mc-muted leading-relaxed line-clamp-2 mb-4 font-medium">
                    {squad.description}
                </p>

                <div className="flex -space-x-2 mb-4">
                    {squad.members.map(m => (
                        <img key={m.id} src={m.avatar} className="w-6 h-6 rounded-full border-2 border-white" />
                    ))}
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[8px] font-bold text-mc-muted">
                        +{squad.memberCount > 3 ? squad.memberCount - 3 : ''}
                    </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-2">
                    {squad.skills.slice(0, 3).map(skill => (
                        <span key={skill} className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100 text-[9px] font-bold text-mc-text">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="pt-3 border-t border-gray-50 mt-2">
                {squad.isHiring && squad.openRoles.length > 0 ? (
                    <div className="flex justify-between items-center">
                        <div className="text-[9px] font-bold text-mc-muted">
                            Open: <span className="text-mc-text">{squad.openRoles[0]}</span>
                        </div>
                        <button className="px-3 py-1.5 rounded-full bg-black text-white text-[10px] font-bold hover:opacity-90 transition-opacity">
                            Apply
                        </button>
                    </div>
                ) : (
                    <button className="w-full py-1.5 rounded-full border border-mc-border text-mc-text text-[10px] font-bold hover:bg-gray-50 transition-colors">
                        View Profile
                    </button>
                )}
            </div>
        </div>
    );
};

export default SquadCard;