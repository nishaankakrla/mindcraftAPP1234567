
import React, { useState } from 'react';
import { 
  User, Lock, Bell, Bot, Smartphone, Eye, CreditCard, HardDrive, 
  HelpCircle, LogOut, ChevronRight, Search, Sparkles, Shield, 
  Briefcase, Moon, Sun, Monitor, Globe, Mail, ChevronDown, Check
} from 'lucide-react';
import { USER_PROFILE } from '../constants';

const SettingsView: React.FC = () => {
  const [theme, setTheme] = useState<'Light' | 'Pastel' | 'Dark'>('Pastel');
  const [toggleState, setToggleState] = useState<Record<string, boolean>>({
    notifications: true,
    autoUpdate: true,
    aiSummary: true,
    publicProfile: false,
  });

  const toggle = (key: string) => {
    setToggleState(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // --- REUSABLE COMPONENTS ---

  const SectionHeader = ({ icon: Icon, title, colorClass }: { icon: any, title: string, colorClass: string }) => (
    <div className="flex items-center gap-3 mb-4 px-1">
      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${colorClass}`}>
        <Icon size={16} />
      </div>
      <h2 className="text-sm font-bold text-mc-text uppercase tracking-wide">{title}</h2>
    </div>
  );

  const SettingCard = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-mc-card border border-mc-border rounded-[24px] p-1 shadow-soft mb-8 overflow-hidden">
      {children}
    </div>
  );

  const SettingRow = ({ 
    icon: Icon, 
    label, 
    sublabel, 
    action, 
    isLast 
  }: { 
    icon?: any, 
    label: string, 
    sublabel?: string, 
    action?: React.ReactNode, 
    isLast?: boolean 
  }) => (
    <div className={`
      flex items-center justify-between p-4 hover:bg-mc-light transition-colors cursor-pointer group
      ${!isLast ? 'border-b border-mc-border/30' : ''}
    `}>
      <div className="flex items-center gap-4">
        {Icon && <Icon size={18} className="text-mc-muted group-hover:text-mc-text transition-colors" />}
        <div>
          <p className="text-sm font-bold text-mc-text">{label}</p>
          {sublabel && <p className="text-[10px] text-mc-muted font-medium mt-0.5">{sublabel}</p>}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {action}
      </div>
    </div>
  );

  const Toggle = ({ active, onClick, color = 'bg-mc-text' }: { active: boolean, onClick: () => void, color?: string }) => (
    <button 
      onClick={onClick}
      className={`w-10 h-6 rounded-full relative transition-colors duration-300 ${active ? color : 'bg-mc-light'}`}
    >
      <div className={`absolute top-1 w-4 h-4 bg-mc-card rounded-full shadow-sm transition-transform duration-300 ${active ? 'left-5' : 'left-1'}`}></div>
    </button>
  );

  const ArrowAction = ({ text }: { text?: string }) => (
    <div className="flex items-center gap-2 text-mc-muted group-hover:text-mc-text transition-colors">
      {text && <span className="text-xs font-bold">{text}</span>}
      <ChevronRight size={16} />
    </div>
  );

  return (
    <div className="max-w-[1000px] mx-auto w-full pb-20 px-4 md:px-6 lg:px-8 py-6">
      
      {/* 1. Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 sticky top-0 bg-mc-bg/95 backdrop-blur-sm z-20 py-2">
        <div>
          <h1 className="text-2xl font-bold text-mc-text">Settings</h1>
          <p className="text-xs text-mc-muted font-medium mt-1">Manage your account and preferences.</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-mc-muted" size={16} />
          <input 
            type="text" 
            placeholder="Search settings..." 
            className="w-full h-10 pl-10 pr-4 bg-mc-card border border-mc-border rounded-xl text-sm font-medium focus:outline-none focus:border-mc-text/30 shadow-sm"
          />
        </div>
      </div>

      {/* 2. AI Auto-Setup Banner */}
      <div className="bg-gradient-to-r from-pastel-lavender via-mc-card to-mc-card border border-mc-border rounded-[24px] p-6 mb-8 flex items-center justify-between shadow-soft relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-mc-secondary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <div className="relative z-10 flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full bg-mc-card flex items-center justify-center text-mc-secondary shadow-sm">
                <Sparkles size={24} />
            </div>
            <div>
                <h3 className="text-base font-bold text-mc-text">AI Personalization Setup</h3>
                <p className="text-xs text-mc-muted mt-1 max-w-md">Let MindCraft AI analyze your learning style and configure your notification, display, and study preferences automatically.</p>
            </div>
        </div>
        <button className="relative z-10 px-6 py-2.5 bg-mc-text text-mc-card rounded-full text-xs font-bold hover:scale-105 transition-transform shadow-button">
            Auto-Configure
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LEFT COLUMN */}
        <div className="space-y-2">
            
            {/* PROFILE */}
            <SectionHeader icon={User} title="Profile & Account" colorClass="bg-pastel-blue text-mc-primary" />
            <SettingCard>
                <div className="p-6 flex items-center gap-4 border-b border-mc-border/30">
                    <img src={USER_PROFILE.avatar} alt="Profile" className="w-16 h-16 rounded-full border-2 border-mc-card shadow-sm" />
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-mc-text">{USER_PROFILE.name}</h3>
                        <p className="text-xs text-mc-muted mb-2">{USER_PROFILE.username} • {USER_PROFILE.role}</p>
                        <div className="flex gap-2">
                             <button className="px-3 py-1.5 rounded-full bg-mc-text text-mc-card text-[10px] font-bold">Edit Profile</button>
                             <button className="px-3 py-1.5 rounded-full bg-mc-light text-mc-text text-[10px] font-bold hover:bg-mc-border/20">Share</button>
                        </div>
                    </div>
                </div>
                <SettingRow label="Educational Identity" sublabel="Verified Student" action={<span className="text-[10px] font-bold bg-mc-primary/10 text-mc-primary px-2 py-0.5 rounded-full border border-mc-primary/20 flex items-center gap-1"><Shield size={10}/> Verified</span>} />
                <SettingRow label="Email & Phone" sublabel="Manage contact info" action={<ArrowAction />} />
                <SettingRow label="Linked Accounts" sublabel="Google, LinkedIn" action={<ArrowAction text="2 Connected" />} isLast />
            </SettingCard>

             {/* LEARNING */}
             <SectionHeader icon={Bot} title="AI & Learning" colorClass="bg-pastel-mint text-mc-primary" />
             <SettingCard>
                <SettingRow 
                    label="Auto-Learning Mode" 
                    sublabel="AI proactively suggests lessons" 
                    action={<Toggle active={toggleState.autoUpdate} onClick={() => toggle('autoUpdate')} color="bg-mc-primary" />} 
                />
                <SettingRow label="Preferred Style" sublabel="Video & Interactive" action={<ArrowAction text="Mixed" />} />
                <SettingRow label="Difficulty Level" sublabel="Adaptive based on performance" action={<ArrowAction text="Adaptive" />} />
                <SettingRow label="Notebook LLM" sublabel="Manage AI context memory" action={<ArrowAction />} isLast />
             </SettingCard>

            {/* SECURITY */}
            <SectionHeader icon={Lock} title="Security" colorClass="bg-pastel-peach text-mc-active" />
            <SettingCard>
                <SettingRow label="Password & Login" action={<ArrowAction />} />
                <SettingRow label="Two-Factor Auth" sublabel="Recommended" action={<Toggle active={true} onClick={() => {}} color="bg-mc-active" />} />
                <SettingRow label="Privacy Controls" sublabel="Who can see your progress" action={<ArrowAction />} isLast />
            </SettingCard>

        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-2">
            
            {/* APP & DISPLAY */}
            <SectionHeader icon={Smartphone} title="App & Display" colorClass="bg-pastel-lavender text-mc-secondary" />
            <SettingCard>
                <div className="p-4 border-b border-mc-border/30">
                    <p className="text-sm font-bold text-mc-text mb-3">Theme Preference</p>
                    <div className="grid grid-cols-3 gap-3">
                        {['Light', 'Pastel', 'Dark'].map((t) => (
                            <button 
                                key={t} 
                                onClick={() => setTheme(t as any)}
                                className={`
                                    flex flex-col items-center justify-center p-3 rounded-xl border transition-all
                                    ${theme === t ? 'bg-mc-light border-mc-text ring-1 ring-mc-text/5' : 'bg-mc-card border-mc-border hover:border-mc-text/30'}
                                `}
                            >
                                {t === 'Light' && <Sun size={20} className="mb-2 text-mc-active" />}
                                {t === 'Pastel' && <Sparkles size={20} className="mb-2 text-mc-secondary" />}
                                {t === 'Dark' && <Moon size={20} className="mb-2 text-mc-text" />}
                                <span className="text-[10px] font-bold text-mc-text">{t}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <SettingRow label="Notifications" sublabel="Push & Email" action={<Toggle active={toggleState.notifications} onClick={() => toggle('notifications')} color="bg-mc-secondary" />} />
                <SettingRow label="Card Density" sublabel="Adjust UI spacing" action={<ArrowAction text="Compact" />} isLast />
            </SettingCard>

            {/* SUBSCRIPTIONS */}
            <SectionHeader icon={CreditCard} title="Plan & Billing" colorClass="bg-pastel-yellow text-mc-active" />
            <SettingCard>
                 <div className="p-4 bg-gradient-to-br from-mc-text to-mc-text/80 text-mc-card m-2 rounded-[20px] flex justify-between items-center shadow-lg">
                     <div>
                         <h3 className="text-sm font-bold flex items-center gap-2"><Sparkles size={14} className="text-mc-secondary" /> MindCraft Pro</h3>
                         <p className="text-[10px] opacity-70 mt-1">Renews on 14 Mar 2025</p>
                     </div>
                     <button className="px-3 py-1.5 bg-mc-card text-mc-text text-[10px] font-bold rounded-full">Manage</button>
                 </div>
                 <SettingRow label="Billing History" action={<ArrowAction />} />
                 <SettingRow label="Data Usage" sublabel="Download settings" action={<ArrowAction />} isLast />
            </SettingCard>

            {/* SUPPORT & LEGAL */}
            <SectionHeader icon={HelpCircle} title="Support" colorClass="bg-mc-light text-mc-muted" />
            <SettingCard>
                 <SettingRow label="Help Center" icon={HelpCircle} action={<ArrowAction />} />
                 <SettingRow label="Report Issue" icon={Shield} action={<ArrowAction />} />
                 <SettingRow label="Terms & Privacy" icon={Lock} action={<ArrowAction />} isLast />
            </SettingCard>

        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-mc-border flex flex-col items-center justify-center text-center">
          <button className="flex items-center gap-2 text-xs font-bold text-red-500 hover:bg-red-50 px-4 py-2 rounded-full transition-colors mb-4">
              <LogOut size={14} /> Log Out
          </button>
          <p className="text-[10px] text-mc-muted font-medium">MindCraft App v1.2.4 — Personalized Learning Network</p>
          <p className="text-[10px] text-mc-muted/50 mt-1">© 2024 MindCraft Inc. All rights reserved.</p>
      </div>

    </div>
  );
};

export default SettingsView;
