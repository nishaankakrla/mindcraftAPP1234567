import React from 'react';
import { Exam } from '../types';
import { Bookmark, Calendar, Zap, CheckCircle2, Star, Users, Clock, Target } from 'lucide-react';

interface ExamCardProps {
  exam: Exam;
  index?: number;
}

const ExamCard: React.FC<ExamCardProps> = ({ exam, index = 0 }) => {
  const isComingSoon = exam.status === 'Coming Soon';
  const isEnrolled = exam.isEnrolled;

  return (
    <div className="group relative bg-mc-card rounded-[24px] border border-mc-border shadow-soft hover:shadow-float hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden flex flex-col h-full cursor-pointer max-w-[360px] mx-auto w-full">
      
      {/* 1. Thumbnail Section */}
      <div className="relative h-40 w-full overflow-hidden">
        <img 
          src={exam.image || `https://picsum.photos/seed/exam-${exam.id}/600/400`} 
          alt={exam.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40"></div>
        
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[9px] font-bold text-mc-text shadow-sm uppercase tracking-wider">
            {exam.level}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-mc-secondary/90 backdrop-blur-md text-[9px] font-bold text-white shadow-sm flex items-center gap-1">
            <Target size={9} /> {exam.stream}
          </span>
        </div>

        <button className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all">
          <Bookmark size={14} className={isEnrolled ? "fill-white" : ""} />
        </button>

        {exam.creator && (
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full border-2 border-white shadow-md overflow-hidden">
              <img src={exam.creator.avatar} alt={exam.creator.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-white flex items-center gap-1">
                {exam.creator.name}
                {exam.creator.isVerified && <CheckCircle2 size={9} className="fill-blue-400 text-white" />}
              </span>
            </div>
          </div>
        )}

        {/* Exam Name Badge Overlay */}
        <div className="absolute bottom-3 right-3">
          <div className="px-2 py-0.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 text-[9px] font-black text-white uppercase tracking-tighter">
            {exam.name.split(' ')[0]}
          </div>
        </div>
      </div>

      {/* 2. Information Section */}
      <div className="p-4 flex flex-col flex-1">
        <div className="mb-1.5">
          <h4 className="text-[9px] font-bold text-mc-primary uppercase tracking-widest mb-0.5">Exam Preparation</h4>
          <h3 className="text-base font-bold text-mc-text leading-tight line-clamp-2 group-hover:text-mc-primary transition-colors">
            {exam.name}
          </h3>
        </div>

        <p className="text-[11px] text-mc-muted line-clamp-1 mb-3 leading-relaxed">
          {exam.description}
        </p>

        {/* 3. Metadata Row */}
        <div className="flex items-center gap-3 mb-3 text-mc-muted">
          <div className="flex items-center gap-1">
            <Calendar size={12} className="text-mc-primary/60" />
            <span className="text-[10px] font-medium">Next: {exam.nextAttempt}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} className="text-mc-primary/60" />
            <span className="text-[10px] font-medium">{exam.duration || '3h'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={12} className="text-yellow-500 fill-yellow-500" />
            <span className="text-[10px] font-bold text-mc-text">{exam.rating || 4.8}</span>
          </div>
        </div>

        {/* 4. Tag System */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {exam.badges?.slice(0, 2).map(badge => (
            <span key={badge} className="px-2 py-0.5 rounded-lg bg-mc-primary/5 text-[9px] font-bold text-mc-primary border border-mc-primary/10">
              {badge}
            </span>
          ))}
          <span className="px-2 py-0.5 rounded-lg bg-mc-secondary/5 text-[9px] font-bold text-mc-secondary border border-mc-secondary/10 flex items-center gap-1">
            <Users size={9} /> {exam.attemptCount || '10k'}+
          </span>
        </div>

        {/* 5. Pricing + Action Area */}
        <div className="mt-auto pt-3 border-t border-mc-border flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-mc-muted uppercase tracking-wider">Access</span>
            <span className={`text-lg font-extrabold ${isComingSoon ? 'text-mc-muted' : 'text-mc-text'}`}>
              {exam.price || 'Free'}
            </span>
          </div>

          <div className="flex gap-1.5">
            <button className="px-3 py-1.5 rounded-lg bg-mc-light text-mc-text text-[11px] font-bold hover:bg-mc-border transition-all">
              About
            </button>
            <button 
              disabled={isComingSoon}
              className={`px-4 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-1.5 shadow-sm transition-all
                ${isComingSoon 
                  ? 'bg-mc-light text-mc-muted cursor-not-allowed' 
                  : isEnrolled 
                    ? 'bg-mc-active text-white hover:opacity-90'
                    : 'bg-mc-text text-mc-card hover:shadow-md hover:scale-[1.02]'
                }
              `}
            >
              {isEnrolled ? (
                <>
                  <Zap size={12} fill="currentColor" />
                  Practice
                </>
              ) : (
                <>
                  <Zap size={12} fill="currentColor" />
                  {exam.price === 'Free' ? 'Enroll' : 'Pay'}
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Enrolled Badge */}
      {isEnrolled && (
        <div className="absolute top-0 right-0 p-2">
          <div className="bg-mc-active text-white text-[8px] font-black px-2 py-0.5 rounded-bl-lg uppercase tracking-tighter">
            Enrolled
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamCard;
