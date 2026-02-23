import React, { useState } from 'react';
import ExamDashboardRow from './ExamDashboardRow';
import ExamCard from './ExamCard';
import FeedCard from './FeedCard';
import { EXAM_CATEGORIES, DUMMY_EXAMS, EXAM_POSTS } from '../constants';
import { LayoutGrid, List } from 'lucide-react';

const ExamPrepView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="max-w-[1600px] mx-auto w-full pb-20 px-4 md:px-6 lg:px-8 py-6">
      
      {/* 1. Exam Overview Strip */}
      <ExamDashboardRow />

      {/* 2. Exam Explorer Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-bold text-mc-text">Browse Exams</h2>
             <div className="flex items-center gap-2">
                 <button className="p-2.5 rounded-xl bg-mc-text text-mc-card shadow-button">
                     <LayoutGrid size={18} />
                 </button>
                 <button className="p-2.5 rounded-xl hover:bg-mc-light text-mc-muted">
                     <List size={18} />
                 </button>
             </div>
        </div>

        {/* Category Pills */}
        <div className="flex overflow-x-auto no-scrollbar gap-3 mb-8 pb-2">
            {EXAM_CATEGORIES.map((cat) => (
                 <button 
                    key={cat} 
                    onClick={() => setSelectedCategory(cat)}
                    className={`
                        px-6 py-2.5 rounded-full text-xs font-bold shrink-0 transition-all shadow-sm
                        ${selectedCategory === cat 
                            ? 'bg-mc-text text-mc-card shadow-md' 
                            : 'bg-mc-card text-mc-muted border border-mc-border hover:border-mc-text/20 hover:text-mc-text'
                        }
                    `}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Exam Grid */}
        <div className="space-y-12">
            
             {/* LOGIC: If 'All' is selected, show only the Top 12 Exams (Featured) */}
            {selectedCategory === 'All' ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center justify-between mb-4 px-1">
                        <h3 className="text-lg font-bold text-mc-text">Featured Exams</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {DUMMY_EXAMS.slice(0, 12).map((exam, idx) => (
                            <ExamCard key={exam.id} exam={exam} index={idx} />
                        ))}
                    </div>
                </div>
            ) : (
                /* LOGIC: If a specific category is selected, show all items in that category */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in zoom-in duration-300">
                    {DUMMY_EXAMS
                        .filter(exam => exam.level === selectedCategory || selectedCategory === 'All') // Simple mapping, could be more robust
                        .map((exam, idx) => (
                            <ExamCard key={exam.id} exam={exam} index={idx} />
                        ))
                    }
                    {DUMMY_EXAMS.filter(e => e.level === selectedCategory).length === 0 && (
                        <div className="col-span-full py-12 text-center text-mc-muted">
                            No exams found in this category yet.
                        </div>
                    )}
                </div>
            )}
        </div>
      </section>

      {/* 3. ExamPrep Feed */}
      <section className="">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pt-8 border-t border-mc-border/50">
              <div>
                  <h2 className="text-xl font-bold text-mc-text">ExamPrep Feed</h2>
                  <p className="text-sm text-mc-muted font-medium">Updates from your exams, mentors, and exam communities.</p>
              </div>
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                  {['All', 'My Exams', 'Mentors', 'Announcements', 'Doubts', 'Results'].map((filter, i) => (
                      <button key={filter} className={`px-4 py-2 rounded-full text-xs font-bold border transition-colors ${i === 0 ? 'bg-mc-text text-mc-card border-mc-text' : 'bg-mc-card border-mc-border text-mc-muted hover:border-mc-text/20'}`}>
                          {filter}
                      </button>
                  ))}
              </div>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
              {EXAM_POSTS.map(post => (
                  <FeedCard key={post.id} post={post} />
              ))}
          </div>
          
          <div className="py-10 flex justify-center max-w-3xl mx-auto">
              <button className="px-8 py-3 rounded-full bg-mc-card shadow-soft border border-mc-border text-sm font-bold text-mc-text hover:shadow-float transition-all">
                  Load More Updates
              </button>
          </div>
      </section>

    </div>
  );
};

export default ExamPrepView;