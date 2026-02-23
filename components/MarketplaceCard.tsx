import React from 'react';
import { MarketplaceItem } from '../types';
import { Star, CheckCircle2, ArrowRight, Clock, Code, DollarSign } from 'lucide-react';

interface MarketplaceCardProps {
  item: MarketplaceItem;
  onClick: () => void;
}

const MarketplaceCard: React.FC<MarketplaceCardProps> = ({ item, onClick }) => {
  
  if (item.type === 'Task') {
      return (
        <div 
            onClick={onClick}
            className="group bg-white rounded-[22px] p-5 border border-mc-border hover:shadow-float hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[160px]"
        >
            <div>
                <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100 text-[9px] font-bold text-mc-muted uppercase tracking-wider">
                        Micro-Task
                    </span>
                    <span className="text-[11px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                        {item.price}
                    </span>
                </div>
                <h3 className="text-sm font-bold text-mc-text leading-tight mb-2 group-hover:underline decoration-1 underline-offset-2">{item.title}</h3>
                
                <div className="flex items-center gap-3 text-[10px] text-mc-muted mb-3">
                    <span className="flex items-center gap-1"><Clock size={12} /> {item.duration}</span>
                    <span className="flex items-center gap-1"><Code size={12} /> {item.category}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                    {item.tags?.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-50 text-[9px] font-medium text-mc-text border border-gray-100">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <button className="mt-4 w-full py-2 rounded-full border border-mc-text text-[10px] font-bold text-mc-text hover:bg-black hover:text-white transition-all">
                Accept Task
            </button>
        </div>
      );
  }

  // Service / Template Card
  return (
    <div 
        onClick={onClick}
        className="group bg-white rounded-[22px] p-3 border border-mc-border hover:shadow-float hover:-translate-y-1 transition-all duration-300 cursor-pointer min-h-[220px] flex flex-col"
    >
        {/* Thumbnail */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-gray-50 border border-gray-100">
            {item.image ? (
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-mc-muted">
                    <span className="text-[9px] font-bold uppercase tracking-wider opacity-50">{item.category}</span>
                </div>
            )}
            <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md text-[9px] font-bold text-mc-text border border-black/5 shadow-sm">
                {item.type === 'Mentorship' ? 'Mentor' : item.type}
            </div>
        </div>

        {/* Content */}
        <div className="px-1 mb-2 flex-1">
            <div className="flex items-center justify-between mb-1">
                <h3 className="text-xs font-bold text-mc-text line-clamp-1">{item.title}</h3>
                <div className="flex items-center gap-0.5 text-[9px] font-bold text-mc-text">
                    <Star size={10} className="fill-yellow-400 text-yellow-400" />
                    {item.rating}
                </div>
            </div>
            
            {item.creator && (
                <div className="flex items-center gap-1.5 mb-2">
                    <img src={item.creator.avatar} className="w-4 h-4 rounded-full border border-gray-200" />
                    <span className="text-[10px] text-mc-muted font-medium hover:underline truncate max-w-[80px]">{item.creator.name}</span>
                    {item.creator.isVerified && <CheckCircle2 size={10} className="text-blue-500" />}
                </div>
            )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-50 px-1 mt-auto">
            <span className="text-xs font-bold text-mc-text">{item.price}</span>
            <button className="text-[9px] font-bold text-mc-text hover:text-black flex items-center gap-1 group-hover:gap-1.5 transition-all">
                {item.type === 'Mentorship' ? 'Book' : 'View'} <ArrowRight size={10} />
            </button>
        </div>
    </div>
  );
};

export default MarketplaceCard;