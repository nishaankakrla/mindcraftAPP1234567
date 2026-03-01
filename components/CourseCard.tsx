
import React from 'react';
import { Course } from '../types';
import { Bookmark, CheckCircle2, Play, Zap, Clock, BookOpen, Star, Users, Layers } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  index?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index = 0 }) => {
  const isComingSoon = course.price === 'Coming Soon';
  const isEnrolled = course.isEnrolled || (course.progress !== undefined && course.progress > 0);

  return (
    <div className="group relative bg-mc-card rounded-[24px] border border-mc-border shadow-soft hover:shadow-float hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden flex flex-col h-full cursor-pointer max-w-[360px] mx-auto w-full">
      
      {/* 1. Thumbnail Section */}
      <div className="relative h-40 w-full overflow-hidden">
        <img 
          src={course.image || `https://picsum.photos/seed/course-${course.id}/600/400`} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40"></div>
        
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[9px] font-bold text-mc-text shadow-sm uppercase tracking-wider">
            {course.level}
          </span>
          {course.isAI && (
            <span className="px-2 py-0.5 rounded-full bg-mc-primary/90 backdrop-blur-md text-[9px] font-bold text-white shadow-sm flex items-center gap-1">
              <Zap size={9} fill="currentColor" /> AI
            </span>
          )}
        </div>

        <button className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all">
          <Bookmark size={14} className={isEnrolled ? "fill-white" : ""} />
        </button>

        {course.creator && (
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full border-2 border-white shadow-md overflow-hidden">
              <img src={course.creator.avatar} alt={course.creator.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-white flex items-center gap-1">
                {course.creator.name}
                {course.creator.isVerified && <CheckCircle2 size={9} className="fill-blue-400 text-white" />}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 2. Information Section */}
      <div className="p-4 flex flex-col flex-1">
        <div className="mb-1.5">
          <h4 className="text-[9px] font-bold text-mc-primary uppercase tracking-widest mb-0.5">{course.category}</h4>
          <h3 className="text-base font-bold text-mc-text leading-tight line-clamp-2 group-hover:text-mc-primary transition-colors">
            {course.title}
          </h3>
        </div>

        <p className="text-[11px] text-mc-muted line-clamp-1 mb-3 leading-relaxed">
          {course.description}
        </p>

        {/* 3. Metadata Row */}
        <div className="flex items-center gap-3 mb-3 text-mc-muted">
          <div className="flex items-center gap-1">
            <Clock size={12} className="text-mc-primary/60" />
            <span className="text-[10px] font-medium">{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Layers size={12} className="text-mc-primary/60" />
            <span className="text-[10px] font-medium">{course.modulesCount || 12} Mod</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={12} className="text-yellow-500 fill-yellow-500" />
            <span className="text-[10px] font-bold text-mc-text">{course.rating || 4.8}</span>
          </div>
        </div>

        {/* 4. Tag System */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {course.tags?.slice(0, 2).map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-lg bg-mc-primary/5 text-[9px] font-bold text-mc-primary border border-mc-primary/10">
              {tag}
            </span>
          ))}
          {course.studentsEnrolled && (
            <span className="px-2 py-0.5 rounded-lg bg-mc-secondary/5 text-[9px] font-bold text-mc-secondary border border-mc-secondary/10 flex items-center gap-1">
              <Users size={9} /> {course.studentsEnrolled}+
            </span>
          )}
        </div>

        {/* 5. Pricing + Action Area */}
        <div className="mt-auto pt-3 border-t border-mc-border flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-mc-muted uppercase tracking-wider">Price</span>
            <span className={`text-lg font-extrabold ${isComingSoon ? 'text-mc-muted' : 'text-mc-text'}`}>
              {course.price}
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
                  <Play size={12} fill="currentColor" />
                  {course.progress && course.progress > 0 ? 'Resume' : 'Start'}
                </>
              ) : (
                <>
                  <Zap size={12} fill="currentColor" />
                  Pay
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Enrolled Badge */}
      {isEnrolled && (
        <div className="absolute top-4 left-4 z-20">
           {/* We already have level badge there, maybe move enrolled badge */}
        </div>
      )}
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

export default CourseCard;
