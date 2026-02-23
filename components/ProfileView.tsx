
import React, { useState } from 'react';
import { User, MapPin, Calendar, Users, FileText, Award, Star, Settings, ExternalLink, Plus, BookOpen, MessageSquare, Zap, Trophy, Briefcase, ChevronRight, BarChart2 } from 'lucide-react';
import { USER_PROFILE, PROFILE_ACTIVITY, PROFILE_ACHIEVEMENTS, PROFILE_CONNECTIONS, PROFILE_PORTFOLIO, MY_EXAMS, SKILL_FORGE_COURSES, DUMMY_POSTS } from '../constants';
import ProfileTabs, { ProfileTab } from './ProfileTabs';
import CourseCard from './CourseCard';
import FeedCard from './FeedCard';
import ExamCard from './ExamCard';

const ProfileView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProfileTab>('Overview');

  // --- SUB-COMPONENTS FOR TAB CONTENT ---

  const OverviewContent = () => (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Left Column: Details */}
          <div className="lg:col-span-1 space-y-4">
              <div className="bg-mc-card border-1.5 border-mc-border rounded-card p-4 shadow-soft">
                  <h3 className="text-[9px] font-bold text-mc-muted uppercase tracking-wider mb-2">About Me</h3>
                  <p className="text-xs text-mc-text font-medium leading-relaxed mb-3">
                      {USER_PROFILE.bio}
                  </p>
                  <div className="flex flex-wrap gap-1">
                      {USER_PROFILE.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 bg-mc-light rounded-full text-[9px] font-bold text-mc-text">
                              {tag}
                          </span>
                      ))}
                  </div>
              </div>

              <div className="bg-mc-card border-1.5 border-mc-border rounded-card p-4 shadow-soft">
                  <h3 className="text-[9px] font-bold text-mc-muted uppercase tracking-wider mb-2">Details</h3>
                  <div className="space-y-2.5">
                      <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-pastel-blue flex items-center justify-center text-mc-primary">
                              <BookOpen size={14} />
                          </div>
                          <div>
                              <p className="text-[9px] font-bold text-mc-muted uppercase">Education</p>
                              <p className="text-[10px] font-bold text-mc-text">{USER_PROFILE.education}</p>
                          </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-pastel-mint flex items-center justify-center text-mc-primary">
                              <Users size={14} />
                          </div>
                          <div>
                              <p className="text-[9px] font-bold text-mc-muted uppercase">Organization</p>
                              <p className="text-[10px] font-bold text-mc-text">{USER_PROFILE.organization}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Right Column: Recent Activity/Posts */}
          <div className="lg:col-span-2 space-y-4">
               <div className="flex items-center justify-between px-1">
                   <h3 className="text-base font-bold text-mc-text">Recent Posts</h3>
                   <button className="text-[9px] font-bold text-mc-muted hover:text-black transition-colors underline">View All</button>
               </div>
               <div className="space-y-3">
                   {DUMMY_POSTS.slice(0, 2).map(post => (
                       <FeedCard key={post.id} post={post} />
                   ))}
               </div>
          </div>
      </div>
  );

   const ActivityContent = () => (
      <div className="max-w-3xl space-y-2.5 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {PROFILE_ACTIVITY.map((log, index) => (
              <div key={log.id} className="flex items-center gap-3 p-3 bg-mc-card border border-mc-border/30 rounded-[16px] hover:shadow-float transition-all cursor-pointer group shadow-soft">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      log.type === 'learning' ? 'bg-pastel-blue text-mc-primary' : 
                      log.type === 'exam' ? 'bg-pastel-peach text-mc-active' : 
                      'bg-pastel-mint text-mc-primary'
                  }`}>
                      <log.icon size={14} />
                  </div>
                  <div className="flex-1">
                      <p className="text-xs font-bold text-mc-text">{log.text}</p>
                      <p className="text-[9px] text-mc-muted font-medium mt-0.5">{log.timestamp}</p>
                  </div>
                  <button className="w-5 h-5 rounded-full bg-mc-light flex items-center justify-center text-mc-muted group-hover:text-mc-text transition-all">
                      <ChevronRight size={12} />
                  </button>
              </div>
          ))}
          <div className="flex justify-center py-4">
              <button className="px-5 py-2 bg-mc-card border-1.5 border-mc-border rounded-full text-[9px] font-bold text-mc-text hover:bg-mc-light">Load Older Activity</button>
          </div>
      </div>
  );

  const CoursesContent = () => (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <section>
              <h3 className="text-base font-bold text-mc-text mb-3 px-1">Enrolled Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {SKILL_FORGE_COURSES.slice(0, 3).map((course, idx) => (
                      <CourseCard key={course.id} course={course} index={idx} />
                  ))}
              </div>
          </section>
          
          <section>
              <h3 className="text-base font-bold text-mc-text mb-3 px-1">My Exams</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {MY_EXAMS.map((exam, idx) => (
                      <ExamCard key={exam.id} exam={exam} index={idx} />
                  ))}
              </div>
          </section>
      </div>
  );

  const AchievementsContent = () => (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {PROFILE_ACHIEVEMENTS.map((ach, idx) => (
              <div key={ach.id} className="bg-mc-card border-1.5 border-mc-border/30 rounded-card p-4 flex flex-col items-center text-center hover:shadow-float transition-all group shadow-soft">
                  <div className="w-8 h-8 rounded-full mb-2.5 flex items-center justify-center bg-pastel-yellow text-mc-active">
                      <ach.icon size={16} />
                  </div>
                  <h4 className="text-xs font-bold text-mc-text mb-0.5">{ach.title}</h4>
                  <p className="text-[10px] text-mc-muted font-medium mb-2.5 leading-snug">{ach.description}</p>
                  <span className="text-[8px] font-bold text-mc-muted bg-mc-light px-2 py-0.5 rounded-full">
                      {ach.date}
                  </span>
              </div>
          ))}
      </div>
  );

  const ConnectionsContent = () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {PROFILE_CONNECTIONS.map(conn => (
              <div key={conn.id} className="bg-mc-card border border-mc-border/30 rounded-card p-3 flex items-center gap-2.5 hover:shadow-float transition-all shadow-soft">
                  <img src={conn.avatar} alt={conn.name} className="w-8 h-8 rounded-full border-2 border-mc-card shadow-sm object-cover" />
                  <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-mc-text truncate">{conn.name}</h4>
                      <p className="text-[9px] font-bold text-mc-muted uppercase tracking-wide">{conn.role}</p>
                      {conn.isMutual && <p className="text-[8px] text-mc-secondary font-bold mt-0.5">Mutual Connection</p>}
                  </div>
                  <div className="flex flex-col gap-1">
                      <button className="px-2.5 py-1 rounded-full bg-mc-text text-mc-card text-[9px] font-bold hover:opacity-90 transition-opacity">Message</button>
                      <button className="px-2.5 py-1 rounded-full bg-mc-card border border-mc-border text-mc-text text-[9px] font-bold hover:bg-mc-light transition-colors">Profile</button>
                  </div>
              </div>
          ))}
      </div>
  );

  const PortfolioContent = () => (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {PROFILE_PORTFOLIO.map((item, idx) => (
              <div key={item.id} className="bg-mc-card border border-mc-border/30 rounded-card p-5 hover:shadow-float transition-all cursor-pointer group shadow-soft">
                  <div className="flex justify-between items-start mb-3">
                      <div className="w-8 h-8 rounded-xl bg-pastel-lavender flex items-center justify-center text-mc-secondary shadow-sm">
                          <Briefcase size={16} />
                      </div>
                      <ExternalLink size={16} className="text-mc-muted group-hover:text-mc-text transition-colors" />
                  </div>
                  <h4 className="font-bold text-mc-text text-sm mb-1">{item.title}</h4>
                  <p className="text-[10px] text-mc-muted font-medium mb-3 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-1">
                      {item.tags.map(tag => (
                          <span key={tag} className="px-1.5 py-0.5 rounded-full bg-mc-light text-[8px] font-bold text-mc-text">
                              {tag}
                          </span>
                      ))}
                  </div>
              </div>
          ))}
          <div className="border-2 border-dashed border-mc-border rounded-card p-5 flex flex-col items-center justify-center text-center hover:bg-mc-light transition-all cursor-pointer min-h-[160px]">
              <div className="w-8 h-8 rounded-full bg-mc-card border border-mc-border/50 flex items-center justify-center mb-2 text-mc-muted">
                  <Plus size={16} />
              </div>
              <h4 className="text-xs font-bold text-mc-text">Add Project</h4>
              <p className="text-[9px] text-mc-muted font-medium mt-0.5">Showcase your work to recruiters</p>
          </div>
      </div>
  );

  return (
    <div className="max-w-[1600px] mx-auto w-full pb-20 px-4 md:px-6 lg:px-8 py-6">
      
      {/* 1. Identity & Summary Block */}
      <section className="bg-mc-card border-1.5 border-mc-border rounded-[24px] p-5 md:p-6 mb-5 relative overflow-hidden shadow-soft">
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-pastel-blue blur-[60px] rounded-full pointer-events-none opacity-50"></div>

          <div className="flex flex-col md:flex-row gap-5 relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-mc-card shadow-lg shrink-0 overflow-hidden">
                  <img src={USER_PROFILE.avatar} alt={USER_PROFILE.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div>
                          <h1 className="text-xl md:text-2xl font-bold text-mc-text mb-0.5">{USER_PROFILE.name}</h1>
                          <p className="text-xs text-mc-primary font-bold mb-2">{USER_PROFILE.username}</p>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span className="px-2.5 py-0.5 rounded-full bg-mc-text text-mc-card text-[9px] font-bold uppercase tracking-wider shadow-button">
                                  {USER_PROFILE.role}
                              </span>
                              <div className="flex items-center gap-1 text-[9px] font-bold text-mc-muted">
                                  <MapPin size={10} />
                                  {USER_PROFILE.location}
                              </div>
                          </div>
                          <p className="text-[10px] text-mc-muted max-w-2xl leading-relaxed font-medium">
                              {USER_PROFILE.bio}
                          </p>
                      </div>

                      {/* Quick Stats Column (Right Side) */}
                      <div className="flex gap-5 bg-mc-light p-3 rounded-[16px]">
                          <div className="text-center">
                              <div className="text-sm font-bold text-mc-text">{USER_PROFILE.followers}</div>
                              <div className="text-[8px] text-mc-muted font-bold uppercase tracking-wider">Followers</div>
                          </div>
                          <div className="text-center">
                              <div className="text-sm font-bold text-mc-text">{USER_PROFILE.following}</div>
                              <div className="text-[8px] text-mc-muted font-bold uppercase tracking-wider">Following</div>
                          </div>
                          <div className="text-center border-l border-mc-border pl-5">
                               <div className="flex items-center justify-center gap-1 text-mc-active">
                                   <Star size={14} fill="currentColor" />
                                   <span className="text-sm font-bold text-mc-text">{USER_PROFILE.profileScore}</span>
                               </div>
                               <div className="text-[8px] text-mc-muted font-bold uppercase tracking-wider">Score</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 2. Metrics & Dashboard Row */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-mc-card border border-mc-border/30 rounded-card p-3 flex items-center gap-2.5 hover:shadow-float transition-all shadow-soft">
              <div className="w-8 h-8 rounded-xl bg-pastel-blue flex items-center justify-center text-mc-primary">
                  <BookOpen size={16} />
              </div>
              <div>
                  <p className="text-sm font-bold text-mc-text">85%</p>
                  <p className="text-[8px] text-mc-muted font-bold uppercase tracking-wide">Progress</p>
              </div>
          </div>
          <div className="bg-mc-card border border-mc-border/30 rounded-card p-3 flex items-center gap-2.5 hover:shadow-float transition-all shadow-soft">
              <div className="w-8 h-8 rounded-xl bg-pastel-mint flex items-center justify-center text-mc-primary">
                  <FileText size={16} />
              </div>
              <div>
                  <p className="text-sm font-bold text-mc-text">High</p>
                  <p className="text-[8px] text-mc-muted font-bold uppercase tracking-wide">Readiness</p>
              </div>
          </div>
          <div className="bg-mc-card border border-mc-border/30 rounded-card p-3 flex items-center gap-2.5 hover:shadow-float transition-all shadow-soft">
              <div className="w-8 h-8 rounded-xl bg-pastel-peach flex items-center justify-center text-mc-active">
                  <Zap size={16} />
              </div>
              <div>
                  <p className="text-sm font-bold text-mc-text">12</p>
                  <p className="text-[8px] text-mc-muted font-bold uppercase tracking-wide">Day Streak</p>
              </div>
          </div>
          <div className="bg-mc-card border border-mc-border/30 rounded-card p-3 flex items-center gap-2.5 hover:shadow-float transition-all shadow-soft">
              <div className="w-8 h-8 rounded-xl bg-pastel-lavender flex items-center justify-center text-mc-secondary">
                  <Trophy size={16} />
              </div>
              <div>
                  <p className="text-sm font-bold text-mc-text">Lvl 5</p>
                  <p className="text-[8px] text-mc-muted font-bold uppercase tracking-wide">Scholar</p>
              </div>
          </div>
      </section>

      {/* 3. Profile Tabs */}
      <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* 4. Tab Content */}
      <section className="min-h-[300px]">
          {activeTab === 'Overview' && <OverviewContent />}
          {activeTab === 'Activity' && <ActivityContent />}
          {activeTab === 'Courses' && <CoursesContent />}
          {activeTab === 'Achievements' && <AchievementsContent />}
          {activeTab === 'Analytics' && (
              <div className="flex flex-col items-center justify-center py-12 text-mc-muted bg-mc-card rounded-card border border-dashed border-mc-border">
                  <BarChart2 size={32} className="mb-3 opacity-30" />
                  <p className="font-bold text-xs text-mc-text">Detailed Analytics</p>
                  <p className="text-[10px] font-medium mt-1">Coming soon to track your performance.</p>
              </div>
          )}
          {activeTab === 'Saved' && (
               <div className="flex flex-col items-center justify-center py-12 text-mc-muted bg-mc-card rounded-card border border-dashed border-mc-border">
                  <p className="font-bold text-xs text-mc-text">Saved Items</p>
                  <p className="text-[10px] font-medium mt-1">Your bookmarks will appear here.</p>
              </div>
          )}
          {activeTab === 'Connections' && <ConnectionsContent />}
          {activeTab === 'Portfolio' && <PortfolioContent />}
          {activeTab === 'Settings' && (
               <div className="max-w-xl mx-auto bg-mc-card rounded-card border border-mc-border/30 p-5 space-y-5 shadow-soft">
                   <h3 className="text-base font-bold text-mc-text">Account Settings</h3>
                   <div className="space-y-3">
                       <div className="flex items-center justify-between p-3 bg-mc-light rounded-xl">
                           <div>
                               <p className="text-[10px] font-bold text-mc-text">Public Profile</p>
                               <p className="text-[8px] text-mc-muted font-medium mt-0.5">Allow others to see your details</p>
                           </div>
                           <div className="w-8 h-4 bg-mc-text rounded-full relative cursor-pointer"><div className="absolute right-1 top-0.5 w-3 h-3 bg-mc-card rounded-full shadow-sm"></div></div>
                       </div>
                       <div className="flex items-center justify-between p-3 bg-mc-light rounded-xl">
                           <div>
                               <p className="text-[10px] font-bold text-mc-text">Notifications</p>
                               <p className="text-[8px] text-mc-muted font-medium mt-0.5">Email and push alerts</p>
                           </div>
                           <div className="w-8 h-4 bg-mc-text rounded-full relative cursor-pointer"><div className="absolute right-1 top-0.5 w-3 h-3 bg-mc-card rounded-full shadow-sm"></div></div>
                       </div>
                   </div>
               </div>
          )}
      </section>

    </div>
  );
};

export default ProfileView;