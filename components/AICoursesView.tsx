import React from 'react';
import AILearningPathCard from './AILearningPathCard';
import CourseCard from './CourseCard';
import FeedCard from './FeedCard';
import { AI_LEARNING_PATHS, AI_COURSES, AI_FEED_POSTS } from '../constants';
import { LayoutGrid, List } from 'lucide-react';

const AICoursesView: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto w-full pb-20 px-4 md:px-6 lg:px-8 py-6">
      
      {/* 1. AI Learning Paths (Horizontal Scroll) */}
      <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
               <h2 className="text-2xl font-bold text-mc-text">AI Learning Paths</h2>
               <span className="text-xs text-mc-muted font-bold cursor-pointer hover:text-mc-text transition-colors uppercase tracking-wide">View All</span>
          </div>
          <div className="flex overflow-x-auto no-scrollbar gap-6 pb-6 -mx-4 px-4 md:mx-0 md:px-0">
              {AI_LEARNING_PATHS.map((path, idx) => (
                  <AILearningPathCard key={path.id} path={path} index={idx} />
              ))}
          </div>
      </section>

      {/* 2. Courses Grid */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
             <h2 className="text-2xl font-bold text-mc-text">Explore AI Courses</h2>
             <div className="flex items-center gap-2">
                 <button className="p-2.5 rounded-xl bg-mc-text text-mc-card shadow-button">
                     <LayoutGrid size={18} />
                 </button>
                 <button className="p-2.5 rounded-xl hover:bg-mc-light text-mc-muted">
                     <List size={18} />
                 </button>
             </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto no-scrollbar gap-3 mb-8 pb-2">
            {['All AI', 'Language AI', 'Engineering', 'Data Science', 'Computer Vision', 'Productivity'].map((cat, i) => (
                 <button key={cat} className={`px-6 py-2.5 rounded-full text-xs font-bold shrink-0 transition-all ${i === 0 ? 'bg-mc-text text-mc-card shadow-button' : 'bg-mc-card text-mc-muted hover:text-mc-text shadow-soft border border-mc-border'}`}>
                    {cat}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {AI_COURSES.map((course, idx) => (
                <CourseCard key={course.id} course={course} index={idx + 3} />
            ))}
        </div>
      </section>

      {/* 3. AI Courses Feed */}
      <section className="">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pt-8 border-t border-mc-border/50">
              <div>
                  <h2 className="text-xl font-bold text-mc-text">AI Community Feed</h2>
                  <p className="text-sm text-mc-muted font-medium">Updates, new models, and learner showcases.</p>
              </div>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
              {AI_FEED_POSTS.map(post => (
                  <FeedCard key={post.id} post={post} />
              ))}
          </div>
          
          <div className="py-10 flex justify-center max-w-3xl mx-auto">
              <button className="px-8 py-3 rounded-full bg-mc-card shadow-soft border border-mc-border text-sm font-bold text-mc-text hover:shadow-float transition-all">
                  Load More AI Updates
              </button>
          </div>
      </section>

    </div>
  );
};

export default AICoursesView;