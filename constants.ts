

import { 
  Home, 
  Hammer, 
  GraduationCap, 
  BookOpen, 
  Bot, 
  Briefcase, 
  Users, 
  UserCircle, 
  Settings,
  BrainCircuit,
  Cpu,
  Database,
  Eye,
  MessageSquare,
  Globe,
  Languages,
  Code,
  PenTool,
  Sparkles,
  Terminal,
  Book,
  Laptop,
  FileText,
  User,
  MessagesSquare,
  DollarSign,
  TrendingUp,
  Award,
  Video,
  ShieldCheck,
  TrendingDown,
  BriefcaseBusiness,
  Hash,
  Mic,
  Calendar,
  Zap,
  Trophy,
  Search,
  PenLine,
  Lightbulb,
  FlaskConical,
  Wand2,
  FileCheck,
  UserCheck,
  Image as ImageIcon,
  HelpCircle,
  Radio,
  Briefcase as ProjectIcon,
  CheckSquare,
  Flame,
  Target,
  Rocket
} from 'lucide-react';
import { NavItemDef, NavSection, Post, CourseSummary, ActivityItem, Course, Mentor, Exam, Task, LearningPath, CopilotMode, AIModel, ChatMessage, Note, Collection, Job, MarketplaceItem, CareerTool, ChatThread, Message, Community, StudyRoom, UserProfile, ActivityLog, Achievement, Connection, PortfolioItem, PromptTemplate, AICareerFeature, ApplicationStats, Squad, WorkforceTask, Company, Application, Challenge, Quest, LiveEvent } from './types';

export const NAV_ITEMS_MAIN: NavItemDef[] = [
  { id: NavSection.Home, label: 'Home', icon: Home },
  { id: NavSection.SkillForge, label: 'SkillForge', icon: Wand2 },
  { id: NavSection.ExamPrep, label: 'Exam Prep', icon: FileCheck },
  { id: NavSection.AICourses, label: 'AI Courses', icon: Sparkles },
  { id: NavSection.AICopilot, label: 'AI Copilot', icon: Cpu },
  { id: NavSection.Jobs, label: 'Jobs / Marketplace', icon: Target },
  { id: NavSection.Community, label: 'Community & Chats', icon: MessagesSquare },
  { id: NavSection.Profile, label: 'Profile', icon: User },
];

export const NAV_ITEMS_BOTTOM: NavItemDef[] = [
  { id: NavSection.Settings, label: 'Settings', icon: Settings },
];

export const CREATE_TYPES = [
    { id: 'text', label: 'Text Post', icon: PenLine, color: 'bg-gray-100 text-gray-700' },
    { id: 'image', label: 'Image', icon: ImageIcon, color: 'bg-pastel-blue text-blue-600' },
    { id: 'video', label: 'Video / Reel', icon: Video, color: 'bg-pastel-peach text-orange-600' },
    { id: 'project', label: 'Project', icon: ProjectIcon, color: 'bg-pastel-lavender text-purple-600' },
    { id: 'question', label: 'Question', icon: HelpCircle, color: 'bg-pastel-yellow text-yellow-600' },
    { id: 'live', label: 'Live Session', icon: Radio, color: 'bg-red-50 text-red-600' },
    { id: 'note', label: 'Study Note', icon: FileText, color: 'bg-pastel-mint text-emerald-600' },
    { id: 'exam', label: 'Exam Update', icon: GraduationCap, color: 'bg-blue-50 text-blue-700' },
];

// HOME DATA
export const DUMMY_POSTS: Post[] = [
  {
    id: '1',
    type: 'learning',
    author: {
      name: 'CodeMaster Academy',
      role: 'Verified Educator',
      avatar: 'https://picsum.photos/seed/code/40/40'
    },
    time: '20 min ago',
    title: 'Mastering JavaScript Closures',
    content: 'Closures are a fundamental JavaScript concept that every developer should understand. They allow inner functions to access variables from their outer scope even after the outer function has returned.',
    difficulty: 'Intermediate',
    readTime: '5 min read',
    tags: ['JavaScript', 'WebDev', 'Concepts'],
    likes: 842,
    commentsCount: 45,
    shares: 120,
    isSaved: true,
  },
  {
    id: '2',
    type: 'question',
    author: {
      name: 'Jordan Lee',
      role: 'Student',
      avatar: 'https://picsum.photos/seed/jordan/40/40'
    },
    time: '45 min ago',
    title: 'Best resources for System Design interviews?',
    content: 'I have an interview coming up with a FAANG company. I am comfortable with coding problems but struggle with HLD (High Level Design). Any recommendations?',
    tags: ['Interview', 'SystemDesign', 'Career'],
    likes: 124,
    commentsCount: 32,
    shares: 5,
    isSaved: false,
    commentsPreview: [
      { id: 'c1', author: 'Alex D.', text: 'Check out the "System Design Primer" on GitHub.' }
    ]
  },
  {
      id: 'job1',
      type: 'job',
      author: {
          name: 'TechFlow Recruiter',
          role: 'Recruiter',
          avatar: 'https://picsum.photos/seed/recruiter1/40/40'
      },
      time: '1 hr ago',
      title: 'Hiring: Junior React Developer',
      content: 'We are looking for a passionate React developer to join our team in Bangalore. 2+ years exp required.',
      company: 'TechFlow',
      salary: '₹12L - ₹18L',
      tags: ['Job', 'React', 'Hiring'],
      likes: 45,
      commentsCount: 12,
      shares: 20,
      isSaved: false
  },
  {
      id: 'poll1',
      type: 'poll',
      author: {
          name: 'MindCraft Official',
          role: 'Admin',
          avatar: 'https://picsum.photos/seed/mcadmin/40/40'
      },
      time: '2 hr ago',
      content: 'Which AI tool are you using most for studying this week?',
      pollOptions: [
          { id: 'p1', text: 'ChatGPT / GPT-4', votes: 450, percentage: 45 },
          { id: 'p2', text: 'Claude 3', votes: 200, percentage: 20 },
          { id: 'p3', text: 'Gemini', votes: 250, percentage: 25 },
          { id: 'p4', text: 'Perplexity', votes: 100, percentage: 10 }
      ],
      totalVotes: 1000,
      tags: ['Poll', 'AI', 'Tools'],
      likes: 89,
      commentsCount: 56,
      shares: 12,
      isSaved: false
  },
  {
    id: '3',
    type: 'video',
    author: {
      name: 'Physics Galaxy',
      role: 'Mentor',
      avatar: 'https://picsum.photos/seed/pg/40/40'
    },
    time: '2 hr ago',
    title: 'Solve Rotational Motion problems in seconds',
    content: 'A quick trick to find the Moment of Inertia for complex shapes using the Parallel Axis Theorem.',
    image: 'https://picsum.photos/seed/physicsvideo/600/800', // Simulating vertical video aspect
    tags: ['Physics', 'JEE', 'Tricks'],
    likes: 2400,
    commentsCount: 156,
    shares: 890,
    isSaved: true,
  },
  {
    id: '4',
    type: 'project',
    author: {
      name: 'Sarah J.',
      role: 'Full Stack Dev',
      avatar: 'https://picsum.photos/seed/sarah/40/40'
    },
    time: '4 hr ago',
    title: 'Built a Task Manager with React & AI',
    content: 'Just deployed my capstone project! It uses OpenAI API to auto-prioritize tasks based on deadlines and complexity.',
    image: 'https://picsum.photos/seed/project/600/350',
    tags: ['React', 'AI', 'OpenSource'],
    projectUrl: 'github.com/sarah/task-ai',
    techStack: ['React', 'Node.js', 'OpenAI'],
    likes: 560,
    commentsCount: 23,
    shares: 45,
    isSaved: false
  },
  {
    id: '5',
    type: 'live',
    author: {
      name: 'ExamPrep Official',
      role: 'Host',
      avatar: 'https://picsum.photos/seed/exam/40/40'
    },
    time: 'Live Now',
    title: 'NEET 2025 Strategy Session',
    content: 'Join us for a live Q&A with top rankers from last year. Discussing stress management and revision schedules.',
    participants: 1250,
    isLive: true,
    likes: 450,
    commentsCount: 200,
    shares: 80,
    isSaved: false,
    tags: ['NEET', 'Strategy', 'Live']
  }
];

export const TRENDING_TOPICS = [
  { id: '1', title: '#NEET2025', subtitle: '12k posts' },
  { id: '2', title: '#JavaProgramming', subtitle: '8.5k posts' },
  { id: '3', title: '#AIForBeginners', subtitle: '24k posts' },
  { id: '4', title: '#UPSCPrelims', subtitle: '5k posts' },
  { id: '5', title: '#UIUXDesign', subtitle: '1.2k posts' },
];

export const SUGGESTED_COURSES: CourseSummary[] = [
  { id: '1', title: 'Generative AI Essentials', category: 'Technology' },
  { id: '2', title: 'Python Zero to Hero', category: 'Programming' },
  { id: '3', title: 'JEE Chemistry Crash Program', category: 'Science' },
  { id: '4', title: 'UI/UX Fundamentals', category: 'Design' },
];

export const RECENT_ACTIVITY: ActivityItem[] = [
  { id: '1', text: 'You completed 3 lessons today', isNew: true },
  { id: '2', text: 'New mock test available: Physics Ch. 4', isNew: true },
  { id: '3', text: 'AI Copilot created a study plan for you', isNew: false },
];

export const AI_SUGGESTIONS = [
  'Summarize feed for today',
  'Generate 5 flashcards from trending post',
  'Set my study schedule'
];

export const QUESTS: Quest[] = [
    { id: 'q1', title: 'Daily Streak', description: 'Learn for 20 mins', progress: 1, total: 1, reward: '20 XP', icon: Flame, colorClass: 'bg-orange-100 text-orange-600' },
    { id: 'q2', title: 'Quiz Master', description: 'Score 100% in a quiz', progress: 0, total: 1, reward: 'Badges', icon: Trophy, colorClass: 'bg-yellow-100 text-yellow-600' },
    { id: 'q3', title: 'Helper', description: 'Answer 3 doubts', progress: 1, total: 3, reward: '50 Credits', icon: MessageSquare, colorClass: 'bg-blue-100 text-blue-600' }
];

export const LIVE_EVENTS: LiveEvent[] = [
    { id: 'le1', title: 'Late Night Study with Lofi', host: 'StudyStream', avatar: 'https://picsum.photos/seed/ss/40/40', viewers: '1.2k', thumbnail: 'https://picsum.photos/seed/lofi/300/180', category: 'Study Room' },
    { id: 'le2', title: 'Python Live Coding Battle', host: 'CodeWars', avatar: 'https://picsum.photos/seed/cw/40/40', viewers: '450', thumbnail: 'https://picsum.photos/seed/battle/300/180', category: 'Competition' },
    { id: 'le3', title: 'NEET Biology Rapid Fire', host: 'BioMentor', avatar: 'https://picsum.photos/seed/bm/40/40', viewers: '3.5k', thumbnail: 'https://picsum.photos/seed/bio/300/180', category: 'Class' },
    { id: 'le4', title: 'Product Design Critique', host: 'DesignDaily', avatar: 'https://picsum.photos/seed/dd/40/40', viewers: '200', thumbnail: 'https://picsum.photos/seed/critique/300/180', category: 'Workshop' }
];

// SKILLFORGE DATA

export const SKILL_CATEGORIES = [
  'Programming', 
  'Web Dev', 
  'Mobile Dev', 
  'AI & ML', 
  'Data Science', 
  'Cybersecurity', 
  'DevOps', 
  'Business', 
  'Design', 
  'Game Dev', 
  'Marketing', 
  'Soft Skills', 
  'Languages', 
  'Academics'
];

const RAW_COURSE_LIST = [
    // 1. Programming
    { t: 'Python for Beginners', c: 'Programming' },
    { t: 'Advanced Python', c: 'Programming' },
    { t: 'Java Fundamentals', c: 'Programming' },
    { t: 'Java Spring Boot', c: 'Programming' },
    { t: 'C Programming', c: 'Programming' },
    { t: 'C++ Programming', c: 'Programming' },
    { t: 'C# with .NET', c: 'Programming' },
    { t: 'Rust Language Fundamentals', c: 'Programming' },
    { t: 'GoLang Developer Path', c: 'Programming' },
    { t: 'Kotlin for Android', c: 'Programming' },
    { t: 'Swift for iOS', c: 'Programming' },
    { t: 'TypeScript Masterclass', c: 'Programming' },
    { t: 'SQL Foundations', c: 'Programming' },
    { t: 'NoSQL Databases', c: 'Programming' },
    { t: 'Blockchain Development', c: 'Programming' },
    { t: 'Smart Contracts with Solidity', c: 'Programming' },
    { t: 'WebAssembly Basics', c: 'Programming' },
    { t: 'API Development & Architecture', c: 'Programming' },
    // 2. Web Dev
    { t: 'HTML & CSS Complete Bootcamp', c: 'Web Dev' },
    { t: 'JavaScript Mastery', c: 'Web Dev' },
    { t: 'Frontend Development', c: 'Web Dev' },
    { t: 'React.js Fundamentals', c: 'Web Dev' },
    { t: 'Next.js Full Stack Development', c: 'Web Dev' },
    { t: 'Angular Developer Course', c: 'Web Dev' },
    { t: 'Vue.js Complete Course', c: 'Web Dev' },
    { t: 'Tailwind & UI Systems', c: 'Web Dev' },
    { t: 'Svelte Framework', c: 'Web Dev' },
    { t: 'Web Performance Optimization', c: 'Web Dev' },
    { t: 'Accessibility & Web Standards', c: 'Web Dev' },
    { t: 'Web Security Essentials', c: 'Web Dev' },
    { t: 'Full Stack Web Development', c: 'Web Dev' },
    // 3. Mobile
    { t: 'Android App Development (Kotlin)', c: 'Mobile Dev' },
    { t: 'iOS App Development (SwiftUI)', c: 'Mobile Dev' },
    { t: 'React Native', c: 'Mobile Dev' },
    { t: 'Flutter for Beginners', c: 'Mobile Dev' },
    { t: 'Flutter Advanced', c: 'Mobile Dev' },
    { t: 'Mobile UI/UX Design', c: 'Mobile Dev' },
    { t: 'AR/VR App Development', c: 'Mobile Dev' },
    { t: 'PWA (Progressive Web Apps)', c: 'Mobile Dev' },
    // 4. AI & ML
    { t: 'AI Fundamentals', c: 'AI & ML' },
    { t: 'Machine Learning Foundations', c: 'AI & ML' },
    { t: 'Deep Learning with TensorFlow', c: 'AI & ML' },
    { t: 'PyTorch Deep Learning', c: 'AI & ML' },
    { t: 'NLP (Natural Language Processing)', c: 'AI & ML' },
    { t: 'Computer Vision', c: 'AI & ML' },
    { t: 'Reinforcement Learning', c: 'AI & ML' },
    { t: 'AI Ethics & Policy', c: 'AI & ML' },
    { t: 'Applied AI in Healthcare', c: 'AI & ML' },
    { t: 'Applied AI in Finance', c: 'AI & ML' },
    { t: 'Generative AI', c: 'AI & ML' },
    { t: 'Building AI Assistants', c: 'AI & ML' },
    { t: 'Autonomous AI Agents', c: 'AI & ML' },
    { t: 'AI for Robotics', c: 'AI & ML' },
    { t: 'AI for Cybersecurity', c: 'AI & ML' },
    // 5. Data Science
    { t: 'Data Science Starter Program', c: 'Data Science' },
    { t: 'Data Visualization (Tableau/PowerBI)', c: 'Data Science' },
    { t: 'Applied Statistics', c: 'Data Science' },
    { t: 'Big Data Engineering', c: 'Data Science' },
    { t: 'Hadoop + Spark', c: 'Data Science' },
    { t: 'Cloud Computing Basics', c: 'Data Science' },
    { t: 'AWS Cloud Practitioner', c: 'Data Science' },
    { t: 'AWS Solutions Architect', c: 'Data Science' },
    { t: 'Google Cloud Engineer', c: 'Data Science' },
    { t: 'Microsoft Azure Cloud', c: 'Data Science' },
    { t: 'R Programming for Data Science', c: 'Data Science' },
    { t: 'Data Engineering with Snowflake', c: 'Data Science' },
    // 6. Cybersecurity
    { t: 'Cybersecurity Fundamentals', c: 'Cybersecurity' },
    { t: 'Ethical Hacking (CEH Prep)', c: 'Cybersecurity' },
    { t: 'Network Security', c: 'Cybersecurity' },
    { t: 'Cloud Security', c: 'Cybersecurity' },
    { t: 'Linux Security', c: 'Cybersecurity' },
    { t: 'Penetration Testing', c: 'Cybersecurity' },
    { t: 'Threat Detection & SOC Analyst', c: 'Cybersecurity' },
    { t: 'Cryptography 101', c: 'Cybersecurity' },
    { t: 'Bug Bounty Training', c: 'Cybersecurity' },
    { t: 'Digital Forensics & Investigation', c: 'Cybersecurity' },
    { t: 'Zero Trust Architecture', c: 'Cybersecurity' },
    // 7. DevOps
    { t: 'DevOps Crash Course', c: 'DevOps' },
    { t: 'CI/CD with GitHub Actions', c: 'DevOps' },
    { t: 'Docker', c: 'DevOps' },
    { t: 'Kubernetes', c: 'DevOps' },
    { t: 'Terraform Automation', c: 'DevOps' },
    { t: 'Jenkins & Deployment Pipelines', c: 'DevOps' },
    { t: 'SRE Fundamentals', c: 'DevOps' },
    { t: 'IoT Foundations', c: 'DevOps' },
    { t: 'System Administration', c: 'DevOps' },
    // 8. Business
    { t: 'Business Fundamentals', c: 'Business' },
    { t: 'Finance for Beginners', c: 'Business' },
    { t: 'Financial Markets & Investing', c: 'Business' },
    { t: 'Stock Market Trading', c: 'Business' },
    { t: 'Crypto & Web3 Investments', c: 'Business' },
    { t: 'Project Management (PMP Prep)', c: 'Business' },
    { t: 'Lean Six Sigma Yellow/Green Belt', c: 'Business' },
    { t: 'Business Strategy & Case Studies', c: 'Business' },
    { t: 'HR & Recruitment', c: 'Business' },
    { t: 'Accounting Essentials', c: 'Business' },
    // 9. Design
    { t: 'Graphic Design with Photoshop', c: 'Design' },
    { t: 'Illustrator', c: 'Design' },
    { t: 'UI/UX Design Bootcamp', c: 'Design' },
    { t: 'Figma Deep Dive', c: 'Design' },
    { t: 'Design Systems & Tokens', c: 'Design' },
    { t: 'Motion Graphics', c: 'Design' },
    { t: '3D Design (Blender)', c: 'Design' },
    { t: 'Game Design Foundations', c: 'Design' },
    { t: 'Architecture Design (AutoCAD)', c: 'Design' },
    { t: 'Prototyping & Usability Testing', c: 'Design' },
    // 10. Game Dev
    { t: 'Unity Game Development', c: 'Game Dev' },
    { t: 'Unreal Engine Game Development', c: 'Game Dev' },
    { t: '2D Game Design', c: 'Game Dev' },
    { t: 'Game AI Systems', c: 'Game Dev' },
    { t: 'Game Art & Visual Effects', c: 'Game Dev' },
    // 11. Marketing
    { t: 'Social Media Marketing', c: 'Marketing' },
    { t: 'Digital Marketing Mastery', c: 'Marketing' },
    { t: 'SEO & SEM', c: 'Marketing' },
    { t: 'YouTube Growth Course', c: 'Marketing' },
    { t: 'Personal Branding', c: 'Marketing' },
    { t: 'Copywriting', c: 'Marketing' },
    { t: 'Content Strategy', c: 'Marketing' },
    { t: 'Podcasting', c: 'Marketing' },
    { t: 'Video Editing (Premiere Pro)', c: 'Marketing' },
    // 12. Soft Skills
    { t: 'Public Speaking Mastery', c: 'Soft Skills' },
    { t: 'Communication Skills', c: 'Soft Skills' },
    { t: 'Resume & LinkedIn Optimization', c: 'Soft Skills' },
    { t: 'Interview Preparation', c: 'Soft Skills' },
    { t: 'Time Management', c: 'Soft Skills' },
    { t: 'Leadership & Decision Making', c: 'Soft Skills' },
    { t: 'Emotional Intelligence', c: 'Soft Skills' },
    { t: 'Presentation Skills', c: 'Soft Skills' },
    // 13. Languages
    { t: 'English Speaking Mastery', c: 'Languages' },
    { t: 'Hindi to English Speaking', c: 'Languages' },
    { t: 'Business English', c: 'Languages' },
    { t: 'IELTS Prep', c: 'Languages' },
    { t: 'TOEFL Prep', c: 'Languages' },
    { t: 'German A1/A2/B1', c: 'Languages' },
    { t: 'Spanish Beginner', c: 'Languages' },
    { t: 'French Beginner', c: 'Languages' },
    { t: 'Japanese for Career', c: 'Languages' },
    { t: 'Korean Pop-Culture Language', c: 'Languages' },
    // 14. Academics
    { t: 'Class 6–12 Mathematics', c: 'Academics' },
    { t: 'Class 6–12 Science', c: 'Academics' },
    { t: 'Physics', c: 'Academics' },
    { t: 'Chemistry', c: 'Academics' },
    { t: 'Biology', c: 'Academics' },
    { t: 'CBSE Boards Full Prep', c: 'Academics' },
    { t: 'ICSE Full Prep', c: 'Academics' },
    { t: 'State Board Courses', c: 'Academics' },
    { t: 'Olympiad Prep', c: 'Academics' },
    { t: 'SAT Prep', c: 'Academics' },
    { t: 'AP Math/Physics', c: 'Academics' },
    { t: 'IIT/JEE Prep', c: 'Academics' },
    { t: 'NEET Prep', c: 'Academics' }
];

export const SKILL_FORGE_COURSES: Course[] = RAW_COURSE_LIST.map((item, idx) => {
    // Logic: Only active if title contains Python, Java (but not Script), HTML, or SQL.
    const isPython = item.t.toLowerCase().includes('python');
    const isJava = item.t.includes('Java') && !item.t.includes('Script');
    const isHtml = item.t.includes('HTML');
    const isSql = item.t.includes('SQL');
    
    const isActive = isPython || isJava || isHtml || isSql;
    
    return {
        id: `sf-${idx + 1}`,
        title: item.t,
        description: `Comprehensive curriculum for ${item.t}. Master the core concepts and build real-world projects.`,
        category: item.c,
        duration: isActive ? '20-40 hours' : 'TBA',
        level: 'All Levels',
        price: isActive ? '₹2,999' : 'Coming Soon',
        progress: 0,
        isAI: false
    };
});

export const SKILL_FORGE_POSTS: Post[] = [
  {
    id: 'sf1',
    type: 'learning',
    author: { name: 'Python Zero to Hero', role: 'Course Update', avatar: 'https://picsum.photos/seed/pycourse/40/40' },
    time: '2 hours ago',
    title: 'New Lesson: Functions & Modules',
    content: 'We have also added 3 new coding challenges to test your logic.',
    likes: 45,
    commentsCount: 8,
    shares: 2,
    isSaved: false,
    tags: ['Python', 'Update'],
    difficulty: 'Beginner',
    readTime: '10 min'
  },
  {
    id: 'sf2',
    type: 'standard',
    author: { name: 'Elena Design', role: 'Mentor', avatar: 'https://picsum.photos/seed/elena/40/40' },
    time: '5 hours ago',
    content: '3 ways to structure your React components for reusability: \n1. Keep them small \n2. Separate logic from view \n3. Use composition over inheritance',
    likes: 210,
    commentsCount: 34,
    shares: 55,
    isSaved: true,
    tags: ['React', 'Frontend', 'Tips']
  },
  {
    id: 'sf3',
    type: 'project',
    author: { name: 'Arjun K.', role: 'Student', avatar: 'https://picsum.photos/seed/arjun/40/40' },
    time: '1 day ago',
    title: 'Travel App Wireframe',
    content: 'Just completed 80% of the UI/UX Design Foundations course! Here is my first wireframe for a travel app.',
    image: 'https://picsum.photos/seed/wireframe/600/350',
    likes: 89,
    commentsCount: 12,
    shares: 4,
    isSaved: false,
    tags: ['UIUX', 'Progress'],
    techStack: ['Figma', 'Wireframing']
  },
  {
    id: 'sf4',
    type: 'question',
    author: { name: 'DataDave', role: 'Student', avatar: 'https://picsum.photos/seed/dave/40/40' },
    time: '1 day ago',
    title: 'SQL Join Confusion',
    content: 'What is the best way to learn SQL joins with real examples? I keep getting confused between LEFT and INNER JOIN.',
    likes: 15,
    commentsCount: 22,
    shares: 1,
    isSaved: false,
    tags: ['SQL', 'Help']
  }
];

export const SKILL_CONTINUE_LEARNING: CourseSummary[] = [
    { id: 's1', title: 'Python for Beginners', category: 'Programming', progress: 35 },
    { id: 's7', title: 'Public Speaking Mastery', category: 'Soft Skills', progress: 12 }
];

export const SKILL_RECOMMENDED: CourseSummary[] = [
    { id: 'r1', title: 'Data Science Starter', category: 'Data Science' },
    { id: 'r2', title: 'Figma Deep Dive', category: 'Design' },
    { id: 'r3', title: 'Advanced Excel', category: 'Business' }
];

export const SKILL_MENTORS: Mentor[] = [
    { id: 'm1', name: 'Sarah J.', specialization: 'Full Stack Dev', avatar: 'https://picsum.photos/seed/m1/40/40' },
    { id: 'm2', name: 'Mike Ross', specialization: 'Product Design', avatar: 'https://picsum.photos/seed/m2/40/40' },
    { id: 'm3', name: 'Dr. Ali', specialization: 'Data Science', avatar: 'https://picsum.photos/seed/m3/40/40' }
];

// EXAM PREP DATA

export const EXAM_CATEGORIES = [
  'All',
  'School Level',
  'UG Entrance',
  'PG Entrance',
  'Govt Jobs',
  'Higher Ed',
  'State Level',
  'Skill Certs',
  'Language',
  'Study Abroad',
  'Licensing'
];

export const DUMMY_EXAMS: Exam[] = [
  // 1. School-Level Exams
  { id: 'sch1', name: 'Board Exams', level: 'School Level', stream: 'General', nextAttempt: 'TBA', description: 'CBSE, ICSE, and State Board preparations.', badges: ['Class 10', 'Class 12'], status: 'Coming Soon' },
  { id: 'sch2', name: 'International Curriculum', level: 'School Level', stream: 'General', nextAttempt: 'TBA', description: 'IGCSE, IB, Cambridge, and AP support.', badges: ['IB', 'IGCSE'], status: 'Coming Soon' },
  { id: 'sch3', name: 'Olympiads', level: 'School Level', stream: 'STEM', nextAttempt: 'TBA', description: 'Math, Science, English, Cyber, and AI Olympiads.', badges: ['IMO', 'NSO'], status: 'Coming Soon' },
  { id: 'sch4', name: 'NTSE / NMMS / KVPY', level: 'School Level', stream: 'Scholarship', nextAttempt: 'TBA', description: 'Junior Talent Scholarship Tests.', badges: ['Scholarship', 'Govt'], status: 'Coming Soon' },
  { id: 'sch5', name: 'Foundation JEE/NEET', level: 'School Level', stream: 'Foundation', nextAttempt: 'TBA', description: 'Early entry tests prep for JEE/NEET.', badges: ['Foundation'], status: 'Coming Soon' },

  // 2. Undergraduate Entrance Exams
  // Engineering
  { id: 'ug1', name: 'JEE Main / Advanced', level: 'UG Entrance', stream: 'Engineering', nextAttempt: 'TBA', description: 'Joint Entrance Examination for IITs, NITs.', badges: ['National', 'Top Tier'], status: 'Coming Soon' },
  { id: 'ug2', name: 'WBJEE', level: 'UG Entrance', stream: 'Engineering', nextAttempt: 'TBA', description: 'West Bengal Joint Entrance Exam.', badges: ['State'], status: 'Coming Soon' },
  { id: 'ug3', name: 'MHT-CET', level: 'UG Entrance', stream: 'Engineering', nextAttempt: 'TBA', description: 'Maharashtra Common Entrance Test.', badges: ['State'], status: 'Coming Soon' },
  { id: 'ug4', name: 'KCET', level: 'UG Entrance', stream: 'Engineering', nextAttempt: 'TBA', description: 'Karnataka Common Entrance Test.', badges: ['State'], status: 'Coming Soon' },
  { id: 'ug5', name: 'COMEDK', level: 'UG Entrance', stream: 'Engineering', nextAttempt: 'TBA', description: 'Consortium of Medical, Engineering and Dental Colleges of Karnataka.', badges: ['State'], status: 'Coming Soon' },
  { id: 'ug6', name: 'TS EAMCET / AP EAPCET', level: 'UG Entrance', stream: 'Engineering', nextAttempt: 'TBA', description: 'Telangana & Andhra Pradesh Engineering Entrance.', badges: ['State'], status: 'Coming Soon' },
  { id: 'ug7', name: 'VITEEE / SRMJEEE / BITSAT', level: 'UG Entrance', stream: 'Engineering', nextAttempt: 'TBA', description: 'Private University Entrance Exams.', badges: ['Private'], status: 'Coming Soon' },
  // Medical
  { id: 'ug8', name: 'NEET-UG', level: 'UG Entrance', stream: 'Medical', nextAttempt: 'TBA', description: 'National Eligibility cum Entrance Test.', badges: ['Medical', 'National'], status: 'Coming Soon' },
  // Management
  { id: 'ug9', name: 'IPMAT', level: 'UG Entrance', stream: 'Management', nextAttempt: 'TBA', description: 'Integrated Programme in Management Aptitude Test.', badges: ['IIM'], status: 'Coming Soon' },
  { id: 'ug10', name: 'CUET', level: 'UG Entrance', stream: 'General', nextAttempt: 'TBA', description: 'Common University Entrance Test.', badges: ['Central Univ'], status: 'Coming Soon' },
  // Design
  { id: 'ug11', name: 'NATA', level: 'UG Entrance', stream: 'Architecture', nextAttempt: 'TBA', description: 'National Aptitude Test in Architecture.', badges: ['Arch'], status: 'Coming Soon' },
  { id: 'ug12', name: 'NID / UCEED', level: 'UG Entrance', stream: 'Design', nextAttempt: 'TBA', description: 'Design Entrance Exams.', badges: ['Design'], status: 'Coming Soon' },

  // 3. Postgraduate Entrance Exams
  { id: 'pg1', name: 'GATE', level: 'PG Entrance', stream: 'Engineering', nextAttempt: 'TBA', description: 'Graduate Aptitude Test in Engineering.', badges: ['M.Tech', 'PSU'], status: 'Coming Soon' },
  { id: 'pg2', name: 'CAT', level: 'PG Entrance', stream: 'Management', nextAttempt: 'TBA', description: 'Common Admission Test for MBA.', badges: ['IIM', 'MBA'], status: 'Coming Soon' },
  { id: 'pg3', name: 'XAT / CMAT / GMAT', level: 'PG Entrance', stream: 'Management', nextAttempt: 'TBA', description: 'Other MBA Entrance Exams.', badges: ['MBA'], status: 'Coming Soon' },
  { id: 'pg4', name: 'GRE', level: 'PG Entrance', stream: 'General', nextAttempt: 'TBA', description: 'Graduate Record Examination.', badges: ['International'], status: 'Coming Soon' },
  { id: 'pg5', name: 'CSIR-NET / JAM', level: 'PG Entrance', stream: 'Science', nextAttempt: 'TBA', description: 'Research and Science Entrance.', badges: ['Research'], status: 'Coming Soon' },

  // 4. Government Job Exams
  { id: 'govt1', name: 'UPSC CSE', level: 'Govt Jobs', stream: 'Civil Services', nextAttempt: 'TBA', description: 'Civil Services Examination (IAS/IPS).', badges: ['Prestigious'], status: 'Coming Soon' },
  { id: 'govt2', name: 'IBPS PO/Clerk', level: 'Govt Jobs', stream: 'Banking', nextAttempt: 'TBA', description: 'Institute of Banking Personnel Selection.', badges: ['Bank'], status: 'Coming Soon' },
  { id: 'govt3', name: 'SBI PO/Clerk', level: 'Govt Jobs', stream: 'Banking', nextAttempt: 'TBA', description: 'State Bank of India Recruitment.', badges: ['Bank'], status: 'Coming Soon' },
  { id: 'govt4', name: 'SSC CGL / CHSL', level: 'Govt Jobs', stream: 'SSC', nextAttempt: 'TBA', description: 'Staff Selection Commission Exams.', badges: ['Clerical'], status: 'Coming Soon' },
  { id: 'govt5', name: 'RRB NTPC / JE', level: 'Govt Jobs', stream: 'Railways', nextAttempt: 'TBA', description: 'Railway Recruitment Board Exams.', badges: ['Railways'], status: 'Coming Soon' },
  { id: 'govt6', name: 'NDA / CDS / AFCAT', level: 'Govt Jobs', stream: 'Defence', nextAttempt: 'TBA', description: 'National Defence Academy & Combined Defence Services.', badges: ['Defence'], status: 'Coming Soon' },

  // 5. Higher Education / Research
  { id: 'res1', name: 'UGC NET/JRF', level: 'Higher Ed', stream: 'Research', nextAttempt: 'TBA', description: 'University Grants Commission National Eligibility Test.', badges: ['Lectureship'], status: 'Coming Soon' },
  { id: 'res2', name: 'PhD Entrance Exams', level: 'Higher Ed', stream: 'Research', nextAttempt: 'TBA', description: 'Various University PhD Entrance Tests.', badges: ['PhD'], status: 'Coming Soon' },

  // 6. State-Level Exams
  { id: 'state1', name: 'State PSC', level: 'State Level', stream: 'Civil Services', nextAttempt: 'TBA', description: 'State Public Service Commissions.', badges: ['State Govt'], status: 'Coming Soon' },
  { id: 'state2', name: 'Teaching (TET/CTET)', level: 'State Level', stream: 'Teaching', nextAttempt: 'TBA', description: 'Teacher Eligibility Tests.', badges: ['Teaching'], status: 'Coming Soon' },

  // 7. Skill-Based & Tech Certs
  { id: 'skill1', name: 'Cloud Certs (AWS/Azure)', level: 'Skill Certs', stream: 'IT', nextAttempt: 'TBA', description: 'AWS, Google Cloud, Microsoft Azure Certifications.', badges: ['Cloud'], status: 'Coming Soon' },
  { id: 'skill2', name: 'CompTIA', level: 'Skill Certs', stream: 'IT', nextAttempt: 'TBA', description: 'A+, Network+, Security+.', badges: ['Security'], status: 'Coming Soon' },
  { id: 'skill3', name: 'NSDC / ITI', level: 'Skill Certs', stream: 'Vocational', nextAttempt: 'TBA', description: 'National Skill Development Corp & ITI.', badges: ['Vocational'], status: 'Coming Soon' },

  // 8. Language Certification
  { id: 'lang1', name: 'IELTS / TOEFL', level: 'Language', stream: 'English', nextAttempt: 'TBA', description: 'English Language Proficiency Tests.', badges: ['Study Abroad'], status: 'Coming Soon' },
  { id: 'lang2', name: 'Foreign Lang (DELF/JLPT)', level: 'Language', stream: 'Foreign', nextAttempt: 'TBA', description: 'French, German, Japanese, etc.', badges: ['Global'], status: 'Coming Soon' },

  // 9. Study Abroad
  { id: 'abroad1', name: 'SAT / ACT', level: 'Study Abroad', stream: 'UG', nextAttempt: 'TBA', description: 'Standardized tests for US college admissions.', badges: ['USA'], status: 'Coming Soon' },
  { id: 'abroad2', name: 'GMAT', level: 'Study Abroad', stream: 'Management', nextAttempt: 'TBA', description: 'Graduate Management Admission Test.', badges: ['MBA'], status: 'Coming Soon' },

  // 10. Career & Licensing
  { id: 'lic1', name: 'USMLE / PLAB', level: 'Licensing', stream: 'Medical', nextAttempt: 'TBA', description: 'Medical Licensing Exams for US/UK.', badges: ['Medical'], status: 'Coming Soon' },
  { id: 'lic2', name: 'CLAT PG', level: 'Licensing', stream: 'Law', nextAttempt: 'TBA', description: 'Common Law Admission Test for LLM.', badges: ['Law'], status: 'Coming Soon' },
];

export const EXAM_POSTS: Post[] = [
  {
    id: 'ep1',
    type: 'standard',
    author: { name: 'NTA Official', role: 'Exam Authority', avatar: 'https://picsum.photos/seed/nta/40/40' },
    time: '3 hours ago',
    title: 'JEE Main 2026 Update',
    content: 'OFFICIAL UPDATE: The JEE Main 2026 Application form will be released tentatively in November 2025. Keep your documents ready.',
    likes: 1200,
    commentsCount: 145,
    shares: 890,
    isSaved: true,
    tags: ['JEEMain', 'Update']
  },
  {
    id: 'ep2',
    type: 'learning',
    author: { name: 'Physics Galaxy', role: 'Mentor', avatar: 'https://picsum.photos/seed/pg/40/40' },
    time: '6 hours ago',
    title: 'Modern Physics Revision Guide',
    content: 'How to revise Modern Physics in the last 30 days: \n1. Focus on Photoelectric effect & Nuclei graphs. \n2. Don\'t ignore NCERT back exercises.',
    likes: 560,
    commentsCount: 45,
    shares: 120,
    isSaved: true,
    tags: ['Physics', 'Revision'],
    readTime: '4 min'
  },
  {
    id: 'ep3',
    type: 'question',
    author: { name: 'Rahul V.', role: 'Aspirant', avatar: 'https://picsum.photos/seed/rahul/40/40' },
    time: '1 day ago',
    title: 'Inorganic Chemistry Sequence',
    content: 'Struggling with Inorganic Chemistry trends, specifically p-block. What is the best sequence to revise chapters?',
    likes: 23,
    commentsCount: 18,
    shares: 2,
    isSaved: false,
    tags: ['Chemistry', 'Help']
  },
  {
    id: 'ep4',
    type: 'standard', // Was result, mapping to standard for now or could be project
    author: { name: 'Ananya S.', role: 'Topper', avatar: 'https://picsum.photos/seed/ananya/40/40' },
    time: '2 days ago',
    title: 'JEE Main Session 1 Result',
    content: 'Scored 99.2 percentile in JEE Main Session 1! Here is my detailed revision plan for the last 2 months used for Maths.',
    image: 'https://picsum.photos/seed/result/600/350',
    likes: 2400,
    commentsCount: 320,
    shares: 150,
    isSaved: true,
    tags: ['SuccessStory', 'Strategy']
  }
];

export const MY_EXAMS: Exam[] = [
  // Keep a few manual ones for dashboard consistency or select from DUMMY_EXAMS if preferred
   {
    id: 'e1',
    name: 'JEE Main 2026',
    level: 'UG Entrance',
    stream: 'Engineering',
    nextAttempt: 'April 2026',
    description: 'Joint Entrance Examination for admission to NITs, IIITs and other GFTIs.',
    badges: ['Syllabus', 'PYQs', 'Mock Tests', 'AI Analytics'],
    status: 'Active'
  },
  {
    id: 'e2',
    name: 'NEET UG 2025',
    level: 'UG Entrance',
    stream: 'Medical',
    nextAttempt: 'May 2025',
    description: 'National Eligibility cum Entrance Test for MBBS/BDS courses in India.',
    badges: ['Syllabus', 'PYQs', 'Flashcards'],
    status: 'Active'
  },
];

export const EXAM_TASKS: Task[] = [
  { id: 't1', text: 'Take 1 NEET Physics mock', done: false },
  { id: 't2', text: 'Review JEE Maths formulas', done: false },
  { id: 't3', text: 'Read UPSC current affairs notes', done: true },
  { id: 't4', text: 'Solve 10 PYQs', done: false },
];

export const MOCK_SUMMARY = {
  testsTaken: 4,
  avgScore: 63,
  targetScore: 75
};

export const EXAM_AI_SUGGESTIONS = [
  'Generate 20 MCQs for your weak topic',
  'Create a 7-day revision plan for NEET Biology',
  'Summarize last mock test mistakes'
];


// AI COURSES DATA

export const AI_LEARNING_PATHS: LearningPath[] = [
    {
        id: 'lp-lang',
        title: 'AI Language Learning',
        subtitle: 'Master languages with AI tutors & drills',
        icon: Globe,
        modules: ['English', 'Spanish', 'French', 'German', 'Japanese', 'AI Pronunciation'],
        level: 'All Levels',
        isNew: true
    },
    {
        id: 'lp1',
        title: 'AI Foundations',
        icon: BrainCircuit,
        modules: ['Intro to AI', 'Ethics', 'History', 'Basic Algorithms'],
        level: 'Beginner'
    },
    {
        id: 'lp2',
        title: 'Machine Learning Engineer',
        icon: Cpu,
        modules: ['Supervised Learning', 'Unsupervised', 'sklearn', 'Model Eval'],
        level: 'Intermediate'
    },
    {
        id: 'lp3',
        title: 'Deep Learning Track',
        icon: Database,
        modules: ['Neural Networks', 'PyTorch', 'TensorFlow', 'Backprop'],
        level: 'Advanced'
    },
    {
        id: 'lp4',
        title: 'Computer Vision',
        icon: Eye,
        modules: ['CNNs', 'OpenCV', 'Object Detection', 'Segmentation'],
        level: 'Advanced'
    },
    {
        id: 'lp5',
        title: 'NLP Specialist',
        icon: MessageSquare,
        modules: ['Text Processing', 'Transformers', 'BERT', 'LLMs'],
        level: 'Advanced'
    }
];

export const AI_COURSES: Course[] = [
    // Languages with AI
    {
        id: 'ai-lang-1',
        title: 'English with AI',
        description: 'Master speaking, writing and grammar with your personal AI tutor.',
        category: 'Language AI',
        duration: 'Ongoing',
        level: 'Beginner',
        price: 'Free',
        isAI: true,
        tags: ['Speaking', 'Writing', 'Grammar'],
        image: 'https://picsum.photos/seed/engai/400/200'
    },
    {
        id: 'ai-lang-2',
        title: 'Spanish with AI',
        description: 'Conversational Spanish practice with real-time AI feedback.',
        category: 'Language AI',
        duration: '30 Lessons',
        level: 'Intermediate',
        price: '₹1,499',
        isAI: true,
        tags: ['Speaking', 'Vocabulary'],
        image: 'https://picsum.photos/seed/spanai/400/200'
    },
    {
        id: 'ai-lang-3',
        title: 'Japanese with AI',
        description: 'Learn Kanji, Hiragana and speaking with smart drills.',
        category: 'Language AI',
        duration: '50 Lessons',
        level: 'Beginner',
        price: '₹2,999',
        isAI: true,
        tags: ['Kanji', 'Pronunciation'],
        image: 'https://picsum.photos/seed/jpnai/400/200'
    },
    // AI Engineering
    {
        id: 'ai-eng-1',
        title: 'Build Your Own GPT',
        description: 'Step-by-step guide to building custom GPTs and assistants.',
        category: 'AI Engineering',
        duration: '5 hours',
        level: 'Intermediate',
        price: '₹999',
        isAI: true,
        progress: 45
    },
    {
        id: 'ai-eng-2',
        title: 'RAG Systems Implementation',
        description: 'Connect LLMs to your data using vector databases and LangChain.',
        category: 'AI Engineering',
        duration: '8 hours',
        level: 'Advanced',
        price: '₹3,499',
        isAI: true
    },
    // Tools
    {
        id: 'ai-tool-1',
        title: 'Prompt Engineering Mastery',
        description: 'Learn to craft perfect prompts for ChatGPT, Claude and Midjourney.',
        category: 'AI Tools',
        duration: '4 hours',
        level: 'Beginner',
        price: '₹499',
        isAI: true
    }
];

export const AI_FEED_POSTS: Post[] = [
    {
        id: 'ai1',
        type: 'learning',
        author: { name: 'MindCraft AI', role: 'Official', avatar: 'https://picsum.photos/seed/mcai/40/40' },
        time: '1 hour ago',
        title: 'New Course: Build Your Own GPT',
        content: 'Learn how to configure custom instructions and knowledge bases in under 5 hours.',
        likes: 340,
        commentsCount: 22,
        shares: 45,
        isSaved: false,
        tags: ['NewCourse', 'GPT'],
        readTime: '5h Course'
    },
    {
        id: 'ai2',
        type: 'standard',
        author: { name: 'Language Bot', role: 'AI Tutor', avatar: 'https://picsum.photos/seed/langbot/40/40' },
        time: '4 hours ago',
        content: 'AI Languages Update: 50 new practice prompts added for Spanish learners. Try describing your daily routine to the AI now!',
        likes: 120,
        commentsCount: 15,
        shares: 8,
        isSaved: true,
        tags: ['Spanish', 'AILearning']
    },
    {
        id: 'ai3',
        type: 'project',
        author: { name: 'Aditi R.', role: 'Student', avatar: 'https://picsum.photos/seed/aditi/40/40' },
        time: '1 day ago',
        title: 'My Custom Travel Agent AI',
        content: 'Student Spotlight: I built a custom travel agent using the RAG course. It plans trips based on my budget and interests!',
        image: 'https://picsum.photos/seed/travelai/600/350',
        likes: 560,
        commentsCount: 42,
        shares: 12,
        isSaved: false,
        tags: ['Showcase', 'AIProject'],
        techStack: ['Python', 'LangChain']
    }
];

export const MY_AI_COURSES: CourseSummary[] = [
    { id: 'ai-eng-1', title: 'Build Your Own GPT', category: 'Engineering', progress: 45 },
    { id: 'ai-lang-2', title: 'Spanish with AI', category: 'Language', progress: 10 }
];

export const AI_QUICK_TOOLS = [
    'Flashcard Generator',
    'AI Quiz Maker',
    'Translation Helper',
    'AI Notebook'
];

// AI COPILOT DATA

export const COPILOT_MODES: CopilotMode[] = [
  { id: 'general', label: 'General', icon: Sparkles, colorClass: 'bg-black text-white' },
  { id: 'coding', label: 'Coding', icon: Code, colorClass: 'bg-pastel-blue text-blue-700' },
  { id: 'exam', label: 'Exam Prep', icon: Book, colorClass: 'bg-pastel-peach text-orange-700' },
  { id: 'learning', label: 'Learning', icon: Laptop, colorClass: 'bg-pastel-mint text-emerald-700' },
  { id: 'language', label: 'Language', icon: Languages, colorClass: 'bg-pastel-lavender text-purple-700' },
  { id: 'creative', label: 'Creative', icon: PenTool, colorClass: 'bg-pastel-yellow text-yellow-700' },
  { id: 'research', label: 'Research', icon: FlaskConical, colorClass: 'bg-gray-100 text-gray-700' },
  { id: 'notebook', label: 'Notebook LLM', icon: Terminal, colorClass: 'bg-gray-800 text-white' },
];

export const AI_MODELS: AIModel[] = [
  { id: 'mc-gpt', name: 'MindCraft-GPT' },
  { id: 'coding-exp', name: 'Coding Expert' },
  { id: 'exam-men', name: 'Exam Mentor' },
  { id: 'lang-tut', name: 'Language Tutor' },
  { id: 'writer-pro', name: 'Writer Pro' },
];

export const CHAT_HISTORY: ChatMessage[] = [
  {
    id: 'm1',
    role: 'user',
    content: 'Explain the concept of Recursion in Python with a simple example.',
    timestamp: '10:30 AM'
  },
  {
    id: 'm2',
    role: 'ai',
    content: 'Recursion is a programming technique where a function calls itself to solve a problem. \n\nHere is a simple example calculating the factorial of a number:',
    timestamp: '10:30 AM',
    actions: ['Note this', 'Turn into flashcard', 'Simplify'],
    tags: ['Python', 'Coding']
  },
  {
    id: 'm3',
    role: 'ai',
    content: '```python\ndef factorial(n):\n    if n == 1:\n        return 1\n    else:\n        return n * factorial(n-1)\n\nprint(factorial(5)) # Output: 120\n```\n\nIn this example, `factorial` calls itself with `n-1` until `n` reaches 1 (the base case), preventing an infinite loop.',
    timestamp: '10:30 AM',
    actions: ['Rewrite', 'Simplify', 'Explain Like I\'m 10', 'Generate Notes', 'Practice Questions', 'Flashcards'],
    tags: ['Python', 'Snippet']
  }
];

export const NOTEBOOK_NOTES: Note[] = [
  { id: 'n1', title: 'Python Recursion Basics', source: 'Chat', tags: ['Python', 'Coding'], date: 'Today', preview: 'Recursion is when a function calls itself...' },
  { id: 'n2', title: 'Newton Laws Summary', source: 'Course', tags: ['Physics', 'NEET'], date: 'Yesterday', preview: '1. An object remains at rest...' },
  { id: 'n3', title: 'Spanish Greeting Phrases', source: 'Manual', tags: ['Spanish', 'Language'], date: '2 days ago', preview: 'Hola, Buenos dias, Como estas...' },
];

export const NOTEBOOK_COLLECTIONS: Collection[] = [
  { id: 'c1', title: 'Python Basics', type: 'Topic', count: 12 },
  { id: 'c2', title: 'NEET Physics 2025', type: 'Exam', count: 45 },
  { id: 'c3', title: 'Content Ideas', type: 'Project', count: 8 },
];

export const COPILOT_QUICK_ACTIONS = [
  '🎯 Rewrite',
  '📌 Simplify',
  '🧠 Explain Like I\'m 10',
  '📚 Generate Notes',
  '🎓 Practice Questions',
  '🏷️ Flashcards'
];

export const PROMPT_TEMPLATES: PromptTemplate[] = [
    { id: 'pt1', title: 'Debug Code', description: 'Paste code to find errors', category: 'Coding', icon: Code, colorClass: 'bg-pastel-blue text-blue-700' },
    { id: 'pt2', title: 'Explain Concept', description: 'Deep dive into any topic', category: 'Learning', icon: Lightbulb, colorClass: 'bg-pastel-yellow text-yellow-700' },
    { id: 'pt3', title: 'Exam Revision', description: 'Generate quick summary notes', category: 'Exam', icon: Book, colorClass: 'bg-pastel-peach text-orange-700' },
    { id: 'pt4', title: 'Write Essay', description: 'Draft outlines & content', category: 'Creative', icon: PenLine, colorClass: 'bg-pastel-lavender text-purple-700' },
    { id: 'pt5', title: 'Language Practice', description: 'Conversational roleplay', category: 'Language', icon: Languages, colorClass: 'bg-pastel-mint text-emerald-700' },
    { id: 'pt6', title: 'Research Summary', description: 'Summarize papers or text', category: 'Research', icon: Search, colorClass: 'bg-gray-100 text-gray-700' },
];

// JOBS & MARKETPLACE DATA

export const JOB_CATEGORIES = ['Tech', 'Design', 'Business', 'Research', 'Marketing', 'AI'];

export const AI_CAREER_FEATURES: AICareerFeature[] = [
    { id: 'f1', title: 'Smart AI Job Match', description: 'Based on your skills & history', icon: BrainCircuit, colorClass: 'bg-pastel-blue text-blue-700', actionLabel: 'Generate Match' },
    { id: 'f2', title: 'Resume AI Fixer', description: 'AI improves formatting & keywords', icon: FileCheck, colorClass: 'bg-pastel-mint text-emerald-700', actionLabel: 'Fix Resume' },
    { id: 'f3', title: 'AI Interview Coach', description: 'Practice real interviews', icon: MessageSquare, colorClass: 'bg-pastel-peach text-orange-700', actionLabel: 'Start Session' },
    { id: 'f4', title: 'Portfolio Validator', description: 'Get a score based on proof-of-work', icon: ShieldCheck, colorClass: 'bg-pastel-lavender text-purple-700', actionLabel: 'Analyze Portfolio' },
];

export const APPLICATION_STATS: ApplicationStats = {
    saved: 12,
    applied: 8,
    interview: 2,
    offer: 1,
    rejected: 3
};

export const RECOMMENDED_JOBS: Job[] = [
    {
        id: 'j1',
        title: 'Senior Frontend Engineer',
        company: 'TechFlow',
        logo: 'https://picsum.photos/seed/tf/40/40',
        location: 'Bangalore',
        salary: '₹24L - ₹36L',
        type: 'Full-time',
        experience: '4+ Years',
        tags: ['React', 'Remote'],
        datePosted: '4 Feb 2025',
        description: 'Lead our core product team.',
        isSaved: false,
        category: 'Tech',
        matchScore: 92,
        isVerified: true,
        creditsRequired: 5,
        applicantsCount: 145
    },
    {
        id: 'j2',
        title: 'Product Design Intern',
        company: 'Creativv',
        logo: 'https://picsum.photos/seed/ca/40/40',
        location: 'Mumbai',
        salary: '₹25k / mo',
        type: 'Internship',
        experience: 'Fresher',
        tags: ['Figma', 'UI/UX'],
        datePosted: '5 Feb 2025',
        description: 'Join our design team for a 6-month internship.',
        isSaved: true,
        category: 'Design',
        matchScore: 88,
        isVerified: true,
        creditsRequired: 2,
        applicantsCount: 340
    },
    {
        id: 'j3',
        title: 'AI Research Scientist',
        company: 'DeepMind',
        logo: 'https://picsum.photos/seed/dm/40/40',
        location: 'Remote',
        salary: '$120k - $180k',
        type: 'Full-time',
        experience: 'PhD',
        tags: ['PyTorch', 'LLMs'],
        datePosted: '2 days ago',
        description: 'Work on cutting-edge RAG systems.',
        isSaved: false,
        category: 'Research',
        matchScore: 75,
        creditsRequired: 10,
        applicantsCount: 45
    }
];

export const FREELANCE_TASKS: MarketplaceItem[] = [
    {
        id: 'ft1',
        title: 'Fix React Native Bug',
        type: 'Task',
        category: 'Tech',
        price: '₹2,000',
        duration: '2 Days',
        requiredSkills: ['React Native', 'iOS'],
        tags: ['Urgent', 'Mobile'],
        creditsReward: 50,
        deadline: '24h Left'
    },
    {
        id: 'ft2',
        title: 'Logo Design for Startup',
        type: 'Task',
        category: 'Design',
        price: '₹5,000',
        duration: '1 Week',
        requiredSkills: ['Illustrator', 'Branding'],
        tags: ['Creative'],
        creditsReward: 120,
        deadline: '3 Days'
    }
];

export const CAREER_SERVICES: MarketplaceItem[] = [
    {
        id: 'cs1',
        title: 'Resume Review',
        type: 'Mentorship',
        category: 'Career',
        creator: { name: 'Sarah J.', avatar: 'https://picsum.photos/seed/sarah/40/40', isVerified: true, rating: 4.9 },
        rating: 4.9,
        reviews: 45,
        price: '₹999',
        tags: ['Resume', 'Feedback'],
        image: 'https://picsum.photos/seed/resume/100/100'
    },
    {
        id: 'cs2',
        title: 'Mock Interview (Tech)',
        type: 'Mentorship',
        category: 'Tech',
        creator: { name: 'Alex M.', avatar: 'https://picsum.photos/seed/alex/40/40', isVerified: true, rating: 5.0 },
        rating: 5.0,
        reviews: 20,
        price: '₹1,500',
        tags: ['Interview', 'Coding'],
        image: 'https://picsum.photos/seed/mock/100/100'
    }
];

export const JOB_LISTINGS: Job[] = [
    ...RECOMMENDED_JOBS,
    {
        id: 'j4',
        title: 'Growth Marketing Manager',
        company: 'GrowthX',
        logo: 'https://picsum.photos/seed/gx/40/40',
        location: 'Remote',
        salary: '₹12L - ₹18L',
        type: 'Full-time',
        experience: '3+ Years',
        tags: ['SEO', 'Content'],
        datePosted: '3 Feb 2025',
        description: 'Lead our content strategy.',
        isSaved: false,
        category: 'Marketing',
        matchScore: 60,
        creditsRequired: 5,
        applicantsCount: 89
    },
    {
        id: 'j5',
        title: 'Business Analyst',
        company: 'FinCorp',
        logo: 'https://picsum.photos/seed/ss/40/40',
        location: 'Delhi',
        salary: '₹10L - ₹15L',
        type: 'Full-time',
        experience: '2+ Years',
        tags: ['SQL', 'Excel'],
        datePosted: '1 Feb 2025',
        description: 'Analyze financial data trends.',
        isSaved: false,
        category: 'Business',
        matchScore: 70,
        isVerified: true,
        creditsRequired: 4,
        applicantsCount: 200
    }
];

export const MARKETPLACE_ITEMS: MarketplaceItem[] = [
    {
        id: 'm1',
        title: 'SaaS Landing Page Design',
        type: 'Service',
        category: 'Design',
        creator: { name: 'Alex M.', avatar: 'https://picsum.photos/seed/alex/40/40', isVerified: true },
        rating: 4.9,
        reviews: 124,
        price: '₹15,000',
        tags: ['Figma', 'Web'],
        image: 'https://picsum.photos/seed/landing/400/300'
    },
    {
        id: 'm2',
        title: 'Ultimate Notion Student OS',
        type: 'Template',
        category: 'Productivity',
        creator: { name: 'NotionWiz', avatar: 'https://picsum.photos/seed/wiz/40/40' },
        rating: 4.8,
        reviews: 850,
        price: '₹499',
        tags: ['Notion', 'Study'],
        image: 'https://picsum.photos/seed/notion/400/300'
    }
];

export const CAREER_TOOLS: CareerTool[] = [
    { id: 'ct1', title: 'Resume Builder', description: 'AI-powered resume creation', icon: FileText },
    { id: 'ct2', title: 'Cover Letter', description: 'Generate custom letters', icon: FileText },
    { id: 'ct3', title: 'Interview Bot', description: 'Practice with AI', icon: MessagesSquare },
    { id: 'ct4', title: 'Salary Estimator', description: 'Market rate insights', icon: DollarSign },
];

// NEW JOB DATA

export const SQUADS: Squad[] = [
    {
        id: 's1',
        name: 'Pixel Perfect',
        logo: 'https://picsum.photos/seed/squad1/100/100',
        members: [{id: 'u1', avatar: 'https://picsum.photos/seed/u1/40/40'}, {id: 'u2', avatar: 'https://picsum.photos/seed/u2/40/40'}, {id: 'u3', avatar: 'https://picsum.photos/seed/u3/40/40'}],
        memberCount: 3,
        rating: 4.8,
        skills: ['UI/UX', 'Frontend', 'Figma'],
        openRoles: ['React Dev'],
        isHiring: true,
        description: 'A dedicated team of designers and developers building high-quality web interfaces.'
    },
    {
        id: 's2',
        name: 'Data Raiders',
        logo: 'https://picsum.photos/seed/squad2/100/100',
        members: [{id: 'u4', avatar: 'https://picsum.photos/seed/u4/40/40'}, {id: 'u5', avatar: 'https://picsum.photos/seed/u5/40/40'}],
        memberCount: 5,
        rating: 4.5,
        skills: ['Python', 'SQL', 'ML'],
        openRoles: ['Data Analyst'],
        isHiring: true,
        description: 'Winning Kaggle competitions one dataset at a time.'
    }
];

export const WORKFORCE_TASKS: WorkforceTask[] = [
    {
        id: 'wt1',
        title: 'Label Traffic Signs',
        type: 'Labeling',
        creditsReward: 5,
        timeEstimate: '2 min',
        accuracyRequired: '98%',
        tags: ['Image', 'Easy'],
        participants: 1200
    },
    {
        id: 'wt2',
        title: 'Rate Chatbot Responses',
        type: 'Evaluation',
        creditsReward: 10,
        timeEstimate: '5 min',
        accuracyRequired: '90%',
        tags: ['Text', 'RLHF'],
        participants: 450
    },
    {
        id: 'wt3',
        title: 'Transcribe Medical Audio',
        type: 'Transcription',
        creditsReward: 50,
        timeEstimate: '15 min',
        accuracyRequired: '99%',
        tags: ['Audio', 'Expert'],
        participants: 80
    }
];

export const COMPANIES: Company[] = [
    {
        id: 'c1',
        name: 'TechFlow',
        logo: 'https://picsum.photos/seed/tf/100/100',
        industry: 'Software',
        location: 'Bangalore',
        followers: 12400,
        openJobs: 12,
        isVerified: true,
        description: 'Building the next generation of workflow automation tools.'
    },
    {
        id: 'c2',
        name: 'Creativv',
        logo: 'https://picsum.photos/seed/ca/100/100',
        industry: 'Design Agency',
        location: 'Mumbai',
        followers: 5600,
        openJobs: 4,
        isVerified: true,
        description: 'Award-winning digital design agency.'
    }
];

export const MY_APPLICATIONS: Application[] = [
    {
        id: 'a1',
        jobId: 'j1',
        jobTitle: 'Senior Frontend Engineer',
        companyName: 'TechFlow',
        companyLogo: 'https://picsum.photos/seed/tf/40/40',
        status: 'Interview',
        appliedDate: '2 Feb 2025',
        nextStep: 'Technical Round on Friday',
        matchScore: 92
    },
    {
        id: 'a2',
        jobId: 'j5',
        jobTitle: 'Business Analyst',
        companyName: 'FinCorp',
        companyLogo: 'https://picsum.photos/seed/ss/40/40',
        status: 'Applied',
        appliedDate: '1 Feb 2025',
        matchScore: 70
    },
    {
        id: 'a3',
        jobId: 'j99',
        jobTitle: 'UX Researcher',
        companyName: 'UserZoom',
        companyLogo: 'https://picsum.photos/seed/uz/40/40',
        status: 'Rejected',
        appliedDate: '20 Jan 2025',
        matchScore: 45
    }
];

export const CHALLENGES: Challenge[] = [
    {
        id: 'ch1',
        title: 'Global AI Hackathon 2025',
        organizer: 'OpenAI & Google',
        image: 'https://picsum.photos/seed/hack/600/300',
        prize: '$50,000 Pool',
        deadline: '15 Days Left',
        participants: 5000,
        tags: ['AI', 'Coding'],
        type: 'Hackathon'
    },
    {
        id: 'ch2',
        title: 'Sustainable Design Challenge',
        organizer: 'Adobe',
        image: 'https://picsum.photos/seed/designch/600/300',
        prize: 'MacBook Pro + Internship',
        deadline: '5 Days Left',
        participants: 1200,
        tags: ['Design', 'UI/UX'],
        type: 'Design'
    }
];

// COMMUNITY & CHATS DATA

export const CHAT_THREADS: ChatThread[] = [
    { id: 'dm1', name: 'Rahul Sharma', avatar: 'https://picsum.photos/seed/rahul/40/40', lastMessage: 'Thanks for the notes! Will review.', time: '10:30 AM', unread: 2, type: 'dm', isOnline: true },
    { id: 'dm2', name: 'Dr. Sarah AI', avatar: 'https://picsum.photos/seed/sarah/40/40', lastMessage: 'Your quiz results are ready.', time: 'Yesterday', unread: 0, type: 'dm' },
    { id: 'g1', name: 'NEET 2025 Physics', avatar: 'https://picsum.photos/seed/physics/40/40', lastMessage: 'Anyone solved Q45?', time: '11:00 AM', unread: 5, type: 'group' },
    { id: 'g2', name: 'Python Learners', avatar: 'https://picsum.photos/seed/python/40/40', lastMessage: 'Check out this repo.', time: '1 day ago', unread: 0, type: 'group' }
];

export const COMMUNITIES: Community[] = [
    { id: 'c1', name: 'NEET Aspirants Club', avatar: 'https://picsum.photos/seed/neetclub/40/40', members: '15.2k', description: 'Dedicated to medical entrance exam prep.', isActive: true, isJoined: true },
    { id: 'c2', name: 'React Developers', avatar: 'https://picsum.photos/seed/reactdev/40/40', members: '8.5k', description: 'Discussing all things React ecosystem.', isActive: true, isJoined: false },
    { id: 'c3', name: 'UPSC Daily Prep', avatar: 'https://picsum.photos/seed/upsc/40/40', members: '50k+', description: 'Daily current affairs and answer writing.', isActive: false, isJoined: true },
];

export const DIRECT_MESSAGES: Message[] = [
    { id: 'm1', senderId: 'dm1', text: 'Hey, do you have the PDF for the last lecture?', time: '10:15 AM', isMe: false },
    { id: 'm2', senderId: 'me', text: 'Yes, give me a second. I will attach it.', time: '10:16 AM', isMe: true },
    { id: 'm3', senderId: 'me', text: 'Here it is.', time: '10:17 AM', isMe: true, attachments: ['Physics_Ch4_Notes.pdf'] },
    { id: 'm4', senderId: 'dm1', text: 'Thanks for the notes! Will review.', time: '10:30 AM', isMe: false, actions: ['Summarize', 'Save to Notebook'] },
];

export const COMMUNITY_FEED_POSTS: Post[] = [
     {
        id: 'cp1',
        type: 'live',
        author: { name: 'Priya K.', role: 'Moderator', avatar: 'https://picsum.photos/seed/priya/40/40' },
        time: '2 hours ago',
        title: 'Live Quiz: Thermodynamics',
        content: 'We are hosting a live quiz on "Thermodynamics" this Saturday at 6 PM. Join the Study Room!',
        tags: ['Quiz', 'Physics'],
        likes: 120,
        commentsCount: 34,
        shares: 12,
        isSaved: false
    },
    {
        id: 'cp2',
        type: 'question',
        author: { name: 'Amit Singh', role: 'Member', avatar: 'https://picsum.photos/seed/amit/40/40' },
        time: '4 hours ago',
        title: 'Isothermal vs Adiabatic',
        content: 'Can someone explain the difference between Isothermal and Adiabatic processes with a real-life example?',
        likes: 15,
        commentsCount: 8,
        shares: 2,
        isSaved: true,
        tags: ['Physics', 'Doubt']
    }
];

export const STUDY_ROOMS: StudyRoom[] = [
    { id: 'sr1', name: 'Late Night Study With Me', subject: 'General', participants: 145, isActive: true },
    { id: 'sr2', name: 'JEE Maths Problem Solving', subject: 'Maths', participants: 23, isActive: true },
    { id: 'sr3', name: 'Python Debugging Sesh', subject: 'Coding', participants: 8, isActive: false },
];

// PROFILE DATA

export const USER_PROFILE: UserProfile = {
  id: 'u1',
  name: 'Rahul Kumar',
  username: '@rahul_dev',
  avatar: 'https://picsum.photos/seed/user/200/200',
  role: 'Student',
  location: 'Bangalore, India',
  bio: 'Computer Science undergrad passionate about Full Stack Dev and AI. Preparing for GATE 2026.',
  followers: '1.2k',
  following: '450',
  posts: '84',
  profileScore: 88,
  tags: ['Java', 'React', 'Python', 'GATE Aspirant', 'Open Source'],
  education: 'B.Tech CSE, IIT Madras (2023-2027)',
  organization: 'MindCraft Campus Chapter'
};

export const PROFILE_ACTIVITY: ActivityLog[] = [
  { id: 'a1', text: 'Completed lesson in "Python Zero to Hero"', timestamp: '2 hours ago', type: 'learning', icon: BookOpen },
  { id: 'a2', text: 'Posted in JEE Prep Community: "Physics Mechanics Doubt"', timestamp: '5 hours ago', type: 'community', icon: MessageSquare },
  { id: 'a3', text: 'Took mock test: NEET Physics (Score: 85%)', timestamp: '1 day ago', type: 'exam', icon: FileText },
  { id: 'a4', text: 'Earned "Early Bird" Badge', timestamp: '2 days ago', type: 'system', icon: Award },
];

export const PROFILE_ACHIEVEMENTS: Achievement[] = [
  { id: 'ach1', title: 'Code Warrior', description: 'Completed 50 coding challenges', icon: Code, date: 'Aug 2024' },
  { id: 'ach2', title: 'Consistent Learner', description: '7 day learning streak', icon: Zap, date: 'Sep 2024' },
  { id: 'ach3', title: 'Top 5% in Mock', description: 'Scored 99%ile in Weekly Mock', icon: Trophy, date: 'Oct 2024' },
];

export const PROFILE_CONNECTIONS: Connection[] = [
  { id: 'c1', name: 'Dr. Sarah AI', role: 'Mentor', avatar: 'https://picsum.photos/seed/sarah/40/40', isMutual: true },
  { id: 'c2', name: 'Arjun Singh', role: 'Student', avatar: 'https://picsum.photos/seed/arjun/40/40', isMutual: true },
  { id: 'c3', name: 'CodeMaster Academy', role: 'Institution', avatar: 'https://picsum.photos/seed/code/40/40', isMutual: false },
];

export const PROFILE_PORTFOLIO: PortfolioItem[] = [
  { id: 'p1', title: 'Travel AI Agent', description: 'Built a RAG-based travel planner using Python & LangChain.', tags: ['Python', 'AI', 'Project'] },
  { id: 'p2', title: 'E-commerce UI Kit', description: 'Designed a complete mobile app UI in Figma.', tags: ['Figma', 'UI/UX'] },
];