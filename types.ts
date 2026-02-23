import { LucideIcon } from 'lucide-react';

export enum NavSection {
  Home = 'Home',
  SkillForge = 'SkillForge',
  ExamPrep = 'Exam Prep',
  AICourses = 'AI Courses',
  AICopilot = 'AI Copilot',
  Jobs = 'Jobs / Marketplace',
  Community = 'Community & Chats',
  Profile = 'Profile',
  Settings = 'Settings',
  Theme = 'Theme',
  Create = 'Create'
}

export interface NavItemDef {
  id: NavSection;
  label: string;
  icon: LucideIcon;
}

export interface Comment {
  id: string;
  author: string;
  text: string;
}

export interface Post {
  id: string;
  type: 'standard' | 'learning' | 'project' | 'question' | 'video' | 'live' | 'exam' | 'course' | 'job' | 'poll';
  author: {
    name: string;
    role: string;
    avatar: string;
    badge?: string; // e.g., "Top Contributor"
  };
  time: string;
  title?: string; // For Learning/Project/Question/Video
  content: string;
  image?: string;
  videoUrl?: string; // For Video posts
  
  // Specific Fields
  tags?: string[];
  likes: number;
  commentsCount: number;
  shares: number;
  isSaved: boolean;
  commentsPreview?: Comment[];
  
  // Learning Post Specifics
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime?: string;
  
  // Project Post Specifics
  projectUrl?: string;
  techStack?: string[];
  
  // Live Post Specifics
  participants?: number;
  isLive?: boolean;
  // Exam Post Specifics
  examId?: string;
  
  // Job Post Specifics
  salary?: string;
  company?: string;
  
  // Poll Specifics
  pollOptions?: { id: string; text: string; votes: number; percentage: number }[];
  totalVotes?: number;
}

export interface WidgetItem {
  id: string;
  title: string;
  subtitle: string;
  icon?: LucideIcon;
  meta?: string;
}

export interface CourseSummary {
  id: string;
  title: string;
  category: string;
  progress?: number;
}

export interface ActivityItem {
  id: string;
  text: string;
  isNew?: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  price: string;
  isAI?: boolean;
  progress?: number; // 0-100
  image?: string;
  tags?: string[];
}

export interface Mentor {
  id: string;
  name: string;
  specialization: string;
  avatar: string;
}

export interface Exam {
  id: string;
  name: string;
  level: string;
  stream: string;
  nextAttempt: string;
  description: string;
  badges?: string[];
  status: string;
}

export interface Task {
  id: string;
  text: string;
  done: boolean;
}

export interface LearningPath {
  id: string;
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  modules: string[];
  level: string;
  isNew?: boolean;
}

export interface CopilotMode {
  id: string;
  label: string;
  icon: LucideIcon;
  colorClass: string;
}

export interface AIModel {
  id: string;
  name: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: string;
  actions?: string[];
  tags?: string[];
  status?: 'sending' | 'streaming' | 'done' | 'error';
}

export interface Note {
  id: string;
  title: string;
  source: string;
  tags: string[];
  date: string;
  preview: string;
}

export interface Collection {
  id: string;
  title: string;
  type: string;
  count: number;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  tags: string[];
  datePosted: string;
  description: string;
  isSaved: boolean;
  category: string;
  matchScore: number;
  isVerified?: boolean;
  creditsRequired?: number; // New: Credits needed to apply
  applicantsCount?: number; // New
}

export interface MarketplaceItem {
  id: string;
  title: string;
  type: 'Task' | 'Service' | 'Template' | 'Mentorship';
  category: string;
  price: string; // Cash or Credits
  // Task specific
  duration?: string;
  requiredSkills?: string[];
  deadline?: string;
  // Service/Mentorship specific
  creator?: { name: string; avatar: string; isVerified?: boolean; rating?: number };
  rating?: number;
  reviews?: number;
  image?: string;
  
  tags?: string[];
  creditsReward?: number; // For Tasks (Earnings)
}

export interface CareerTool {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ChatThread {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  type: 'dm' | 'group';
  isOnline?: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  time: string;
  isMe: boolean;
  attachments?: string[];
  actions?: string[];
}

export interface Community {
  id: string;
  name: string;
  avatar: string;
  members: string;
  description: string;
  isActive: boolean;
  isJoined: boolean;
}

export interface StudyRoom {
  id: string;
  name: string;
  subject: string;
  participants: number;
  isActive: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  username: string;
  avatar: string;
  role: string;
  location: string;
  bio: string;
  followers: string;
  following: string;
  posts: string;
  profileScore: number;
  tags: string[];
  education: string;
  organization: string;
}

export interface ActivityLog {
  id: string;
  text: string;
  timestamp: string;
  type: 'learning' | 'community' | 'exam' | 'system';
  icon: LucideIcon;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  date: string;
}

export interface Connection {
  id: string;
  name: string;
  role: string;
  avatar: string;
  isMutual: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  colorClass: string;
}

export interface AICareerFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  actionLabel: string;
}

export interface ApplicationStats {
  saved: number;
  applied: number;
  interview: number;
  offer: number;
  rejected: number;
}

export interface Squad {
  id: string;
  name: string;
  logo: string;
  members: { id: string, avatar: string }[];
  memberCount: number;
  rating: number;
  skills: string[];
  openRoles: string[];
  isHiring: boolean;
  description: string;
}

export interface WorkforceTask {
  id: string;
  title: string;
  type: 'Labeling' | 'Evaluation' | 'Transcription' | 'Creation';
  creditsReward: number;
  timeEstimate: string;
  accuracyRequired: string; // e.g. "98%"
  tags: string[];
  participants: number;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  location: string;
  followers: number;
  openJobs: number;
  isVerified: boolean;
  description: string;
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  companyName: string;
  companyLogo: string;
  status: 'Applied' | 'Screening' | 'Interview' | 'Offer' | 'Rejected';
  appliedDate: string;
  nextStep?: string;
  matchScore: number;
}

export interface Challenge {
  id: string;
  title: string;
  organizer: string;
  image: string;
  prize: string;
  deadline: string;
  participants: number;
  tags: string[];
  type: 'Hackathon' | 'Design' | 'Data Science';
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  reward: string;
  icon: LucideIcon;
  colorClass: string;
}

export interface LiveEvent {
  id: string;
  title: string;
  host: string;
  avatar: string;
  viewers: string;
  thumbnail: string;
  category: string;
}