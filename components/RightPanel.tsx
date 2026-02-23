import React from 'react';
import { ChevronsRight, Bell, TrendingUp, Users, BookOpen, Sparkles, Zap, Briefcase } from 'lucide-react';
import { 
  TRENDING_TOPICS, 
  SUGGESTED_COURSES, 
  AI_SUGGESTIONS, 
  SKILL_MENTORS, 
  SKILL_CONTINUE_LEARNING,
  MY_EXAMS,
  AI_QUICK_TOOLS,
  AI_FEED_POSTS,
  STUDY_ROOMS,
  COMPANIES,
  FREELANCE_TASKS,
  RECOMMENDED_JOBS
} from '../constants';
import { NavSection } from '../types';

interface RightPanelProps {
    activeTab?: NavSection;
    onClose?: () => void;
}

const WidgetCard: React.FC<{ title: string; children: React.ReactNode; action?: string }> = ({ title, children, action }) => (
    <section className="bg-white rounded-card p-4 mb-4 shadow-soft border border-mc-border hover:shadow-float transition-all duration-300">
        <div className="flex items-center justify-between mb-3 pb-0">
            <h3 className="font-bold text-[10px] text-mc-muted uppercase tracking-widest">{title}</h3>
            {action && <button className="text-[10px] font-bold text-mc-text hover:underline transition-colors">{action}</button>}
        </div>
        {children}
    </section>
);

const RightPanel: React.FC<RightPanelProps> = ({ activeTab, onClose }) => {
  
  // --- SUB-WIDGETS ---

  const TrendingWidget = () => (
    <WidgetCard title="Trending Now">
        <div className="space-y-1">
        {TRENDING_TOPICS.map((topic) => (
            <div key={topic.id} className="flex justify-between items-center group cursor-pointer p-1.5 hover:bg-mc-active rounded-lg transition-colors -mx-1.5">
                <div>
                    <p className="text-xs font-bold text-mc-text">{topic.title}</p>
                    <p className="text-[9px] text-mc-muted font-medium">{topic.subtitle}</p>
                </div>
            </div>
        ))}
        </div>
    </WidgetCard>
  );

  const AIAssistantWidget = () => (
    <WidgetCard title="AI Copilot">
        <div className="space-y-2">
            {AI_SUGGESTIONS.map((suggestion, idx) => (
                <button key={idx} className="w-full text-left p-2.5 rounded-xl bg-mc-bg border border-mc-border hover:border-mc-text/30 transition-all flex items-start gap-2 group">
                    <Sparkles size={12} className="mt-0.5 text-purple-500 group-hover:text-purple-700" />
                    <span className="text-[10px] font-medium text-mc-text leading-relaxed">{suggestion}</span>
                </button>
            ))}
        </div>
    </WidgetCard>
  );

  const SuggestedCoursesWidget = () => (
    <WidgetCard title="Suggested Courses">
        <div className="space-y-1">
            {SUGGESTED_COURSES.map(course => (
                <div key={course.id} className="flex justify-between items-center cursor-pointer group p-1.5 hover:bg-mc-active rounded-lg transition-colors -mx-1.5">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white border border-mc-border flex items-center justify-center text-mc-text text-[10px] font-bold">
                            {course.title.charAt(0)}
                        </div>
                        <div>
                            <h4 className="text-[11px] font-bold text-mc-text mb-0 line-clamp-1">{course.title}</h4>
                            <span className="text-[9px] font-medium text-mc-muted uppercase tracking-wide">{course.category}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </WidgetCard>
  );

  const TaskMarketplacePreview = () => (
      <WidgetCard title="Earn Credits">
          <div className="space-y-2">
              {FREELANCE_TASKS.slice(0, 2).map(task => (
                  <div key={task.id} className="p-2.5 border border-mc-border rounded-xl bg-white hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between mb-1">
                          <span className="text-[10px] font-bold text-mc-text truncate">{task.title}</span>
                          <span className="text-[10px] font-bold text-yellow-600 bg-yellow-50 px-1.5 rounded">{task.creditsReward} UC</span>
                      </div>
                      <p className="text-[9px] text-mc-muted">Time: {task.duration}</p>
                  </div>
              ))}
          </div>
      </WidgetCard>
  );

  const JobRecsWidget = () => (
      <WidgetCard title="Job Matches">
          <div className="space-y-2">
              {RECOMMENDED_JOBS.slice(0, 2).map(job => (
                  <div key={job.id} className="p-2.5 border border-mc-border rounded-xl bg-white hover:bg-gray-50 cursor-pointer flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                          {job.logo ? <img src={job.logo} className="w-full h-full object-cover"/> : <Briefcase size={14}/>}
                      </div>
                      <div className="min-w-0">
                          <div className="text-[10px] font-bold text-mc-text truncate">{job.title}</div>
                          <div className="text-[9px] font-bold text-green-600">{job.matchScore}% Match</div>
                      </div>
                  </div>
              ))}
          </div>
      </WidgetCard>
  );

  const MentorsWidget = () => (
    <WidgetCard title="Mentors" action="View All">
        <div className="space-y-2">
            {SKILL_MENTORS.map(mentor => (
                <div key={mentor.id} className="flex items-center gap-2.5 cursor-pointer group p-1.5 hover:bg-mc-active rounded-lg transition-colors -mx-1.5">
                    <img src={mentor.avatar} alt={mentor.name} className="w-8 h-8 rounded-full border border-mc-border" />
                    <div>
                        <h4 className="text-[11px] font-bold text-mc-text">{mentor.name}</h4>
                        <p className="text-[9px] text-mc-muted font-medium">{mentor.specialization}</p>
                    </div>
                </div>
            ))}
        </div>
    </WidgetCard>
  );

  const ContinueLearningWidget = () => (
    <WidgetCard title="In Progress">
        <div className="space-y-3">
            {SKILL_CONTINUE_LEARNING.map(course => (
                <div key={course.id} className="group cursor-pointer">
                    <div className="flex justify-between text-[10px] font-bold mb-1.5">
                        <span className="text-mc-text truncate max-w-[150px]">{course.title}</span>
                        <span className="text-mc-muted">{course.progress}%</span>
                    </div>
                    <div className="w-full h-1 bg-mc-bg rounded-full overflow-hidden">
                        <div className="h-full bg-mc-text rounded-full" style={{ width: `${course.progress}%` }}></div>
                    </div>
                </div>
            ))}
        </div>
    </WidgetCard>
  );

  const ExamCountdownWidget = () => (
    <WidgetCard title="Schedule">
        <div className="space-y-2">
            {MY_EXAMS.map(exam => (
                <div key={exam.id} className="p-2.5 bg-mc-bg rounded-xl border border-mc-border">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-bold text-mc-text">{exam.name}</span>
                        <span className="text-[9px] font-bold text-mc-text bg-white border border-mc-border px-1.5 py-0.5 rounded-md">45 Days</span>
                    </div>
                    <p className="text-[9px] text-mc-muted">{exam.nextAttempt}</p>
                </div>
            ))}
        </div>
    </WidgetCard>
  );

  const AIToolsWidget = () => (
    <WidgetCard title="Tools">
        <div className="grid grid-cols-2 gap-2">
            {AI_QUICK_TOOLS.map((tool, i) => (
                <button key={i} className="p-2.5 text-center bg-white hover:bg-mc-active rounded-xl border border-mc-border transition-all">
                    <span className="text-[9px] font-bold text-mc-text leading-tight">{tool}</span>
                </button>
            ))}
        </div>
    </WidgetCard>
  );

  const JobStatsWidget = () => (
      <WidgetCard title="Applications">
          <div className="grid grid-cols-2 gap-2.5 mb-2">
              <div className="p-2.5 bg-mc-bg rounded-xl text-center border border-mc-border">
                  <div className="text-base font-bold text-mc-text">12</div>
                  <div className="text-[9px] font-bold text-mc-muted uppercase">Applied</div>
              </div>
              <div className="p-2.5 bg-mc-bg rounded-xl text-center border border-mc-border">
                  <div className="text-base font-bold text-mc-text">2</div>
                  <div className="text-[9px] font-bold text-mc-muted uppercase">Interviews</div>
              </div>
          </div>
      </WidgetCard>
  );

  const CommunityEventsWidget = () => (
      <WidgetCard title="Live Now">
          <div className="space-y-2.5">
              {STUDY_ROOMS.slice(0, 2).map(room => (
                  <div key={room.id} className="p-2.5 bg-mc-bg rounded-xl border border-mc-border flex items-center justify-between">
                      <div>
                          <p className="text-[10px] font-bold text-mc-text truncate max-w-[80px]">{room.name}</p>
                          <p className="text-[9px] text-mc-muted">{room.participants} Online</p>
                      </div>
                      <button className="px-2.5 py-1 bg-white text-[9px] font-bold rounded-lg border border-mc-border hover:bg-black hover:text-white transition-colors">Join</button>
                  </div>
              ))}
          </div>
      </WidgetCard>
  );

  const ProfileInsightsWidget = () => (
      <WidgetCard title="Profile Strength">
          <div className="flex items-center justify-center py-2 relative">
              <div className="w-14 h-14 rounded-full border-[3px] border-gray-100 flex items-center justify-center relative">
                   <div className="absolute inset-0 rounded-full border-[3px] border-mc-text border-t-transparent border-l-transparent rotate-45"></div>
                   <div className="text-center">
                       <div className="text-sm font-bold text-mc-text">88%</div>
                   </div>
              </div>
          </div>
          <button className="w-full py-2 bg-mc-primary text-white rounded-pill text-[10px] font-bold hover:opacity-90 transition-colors">Improve Profile</button>
      </WidgetCard>
  );

  const TrendingCompaniesWidget = () => (
      <WidgetCard title="Trending Companies">
           <div className="space-y-2">
               {COMPANIES.map(company => (
                   <div key={company.id} className="flex items-center gap-2.5 p-1.5 hover:bg-mc-bg rounded-lg cursor-pointer -mx-1.5 transition-colors">
                       <img src={company.logo} className="w-8 h-8 rounded-lg border border-gray-100" />
                       <div className="flex-1 min-w-0">
                           <p className="text-[11px] font-bold text-mc-text truncate">{company.name}</p>
                           <p className="text-[9px] text-mc-muted">{company.industry}</p>
                       </div>
                       <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                           {company.openJobs} Jobs
                       </span>
                   </div>
               ))}
           </div>
      </WidgetCard>
  );

  const JobAlertsWidget = () => (
      <WidgetCard title="Job Alerts">
          <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-xl mb-2">
              <div className="flex items-center gap-2 text-yellow-800 mb-1">
                  <Bell size={12} className="fill-yellow-600" />
                  <span className="text-[10px] font-bold">New Match found</span>
              </div>
              <p className="text-[10px] text-yellow-900/80 leading-snug">
                  Frontend Developer at TechFlow matches your profile 92%.
              </p>
          </div>
          <button className="w-full text-center text-[10px] font-bold text-mc-muted hover:text-mc-text transition-colors">Manage Alerts</button>
      </WidgetCard>
  );

  // --- RENDER LOGIC ---

  const renderContent = () => {
    switch (activeTab) {
        case NavSection.SkillForge:
            return (
                <>
                    <ContinueLearningWidget />
                    <MentorsWidget />
                </>
            );
        case NavSection.ExamPrep:
            return (
                <>
                    <ExamCountdownWidget />
                    <WidgetCard title="Daily Actions">
                        <button className="w-full py-2 bg-white border border-mc-border text-mc-text rounded-pill text-[10px] font-bold hover:bg-mc-bg transition-colors mb-2">Start Daily Mock</button>
                        <button className="w-full py-2 bg-white border border-mc-border text-mc-text rounded-pill text-[10px] font-bold hover:bg-mc-bg transition-colors">Review Mistakes</button>
                    </WidgetCard>
                </>
            );
        case NavSection.AICourses:
            return (
                <>
                    <AIToolsWidget />
                    <WidgetCard title="News">
                         <div className="space-y-2">
                            {AI_FEED_POSTS.slice(0, 2).map(post => (
                                <div key={post.id} className="p-1.5 -mx-1.5 rounded-lg hover:bg-mc-bg transition-colors cursor-pointer">
                                    <p className="text-[10px] font-bold text-mc-text line-clamp-2 mb-0.5">{post.content}</p>
                                    <span className="text-[9px] text-mc-muted font-medium">{post.time}</span>
                                </div>
                            ))}
                         </div>
                    </WidgetCard>
                </>
            );
        case NavSection.Jobs:
            return (
                <>
                    <JobStatsWidget />
                    <JobAlertsWidget />
                    <TrendingCompaniesWidget />
                </>
            );
        case NavSection.Community:
            return (
                <>
                    <CommunityEventsWidget />
                </>
            );
        case NavSection.Profile:
            return (
                <>
                    <ProfileInsightsWidget />
                </>
            );
        case NavSection.Home:
        default:
            // Home gets the new comprehensive widget set
            return (
                <>
                    <TrendingWidget />
                    <AIAssistantWidget />
                    <SuggestedCoursesWidget />
                    <TaskMarketplacePreview />
                    <JobRecsWidget />
                </>
            );
    }
  };

  return (
    <aside className="hidden xl:flex flex-col w-[280px] shrink-0 h-full overflow-y-auto no-scrollbar py-6 pr-8 pl-6 border-l border-mc-border transition-all duration-300">
      <div className="flex items-center justify-between mb-4 px-1">
          <span className="text-[10px] font-bold text-mc-muted uppercase tracking-wider">Overview</span>
          {onClose && (
              <button 
                onClick={onClose}
                className="text-mc-muted hover:text-mc-text transition-colors"
                title="Collapse Panel"
              >
                  <ChevronsRight size={16} />
              </button>
          )}
      </div>
      
      <div className="space-y-2 pb-20">
        {renderContent()}
        <div className="text-[9px] text-mc-light font-medium text-center pt-4">
            <p>© 2024 MindCraft Inc.</p>
        </div>
      </div>
    </aside>
  );
};

export default RightPanel;