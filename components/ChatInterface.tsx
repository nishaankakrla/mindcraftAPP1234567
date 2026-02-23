import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, Mic, Sparkles, Copy, Bookmark, Plus, 
  PanelRightOpen, PanelRightClose, Globe, Bot, 
  RefreshCw, Zap, BrainCircuit, Eraser, StopCircle, Paperclip
} from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage, CopilotMode } from '../types';
import { COPILOT_MODES } from '../constants';

interface ChatInterfaceProps {
    onToggleNotebook?: () => void;
    isNotebookOpen?: boolean;
}

// Simple code block parser
const parseMessageContent = (content: string) => {
    const parts = content.split(/(```[\s\S]*?```)/g);
    return parts.map((part, index) => {
        if (part.startsWith('```') && part.endsWith('```')) {
            // Extract language and code
            const match = part.match(/```(\w*)\n([\s\S]*?)```/);
            const language = match ? match[1] : '';
            const code = match ? match[2] : part.slice(3, -3);
            
            return (
                <div key={index} className="my-4 rounded-xl overflow-hidden border border-gray-200 bg-gray-50/50 shadow-sm">
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
                        <span className="text-xs font-medium text-mc-muted uppercase tracking-wider">{language || 'Code'}</span>
                        <button className="text-xs text-mc-primary hover:text-mc-text flex items-center gap-1 transition-colors font-medium">
                            <Copy size={12} /> Copy
                        </button>
                    </div>
                    <div className="p-4 overflow-x-auto bg-[#FBFBFB]">
                        <pre className="text-sm font-mono text-mc-text whitespace-pre">
                            {code}
                        </pre>
                    </div>
                </div>
            );
        }
        // Regular text with simple paragraph handling
        return (
            <span key={index} className="whitespace-pre-wrap">
                {part}
            </span>
        );
    });
};

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onToggleNotebook, isNotebookOpen }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeMode, setActiveMode] = useState('general');
  const [showThinking, setShowThinking] = useState(false); // Toggle for 'Deep Think' model

  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Initialize or Reset Chat
  const initChat = async (modeId: string) => {
      try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          
          let systemInstruction = "You are MindCraft AI, a helpful and friendly learning assistant.";
          
          switch(modeId) {
              case 'coding':
                  systemInstruction = "You are an expert software engineer and coding tutor. Provide clear explanations, clean code snippets, and best practices. Always explain the 'why' behind the code.";
                  break;
              case 'exam':
                  systemInstruction = "You are an exam preparation mentor. Focus on high-yield topics, mnemonics, and practice questions for competitive exams like JEE, NEET, and UPSC. Be concise and exam-oriented.";
                  break;
              case 'language':
                  systemInstruction = "You are a language tutor. Correct grammar, suggest vocabulary, and converse in the target language to help the user learn.";
                  break;
              case 'creative':
                  systemInstruction = "You are a creative writing assistant. Help with brainstorming, outlining, and refining content. Be imaginative and supportive.";
                  break;
              case 'research':
                   systemInstruction = "You are a research assistant. Provide well-structured summaries, cite sources where possible (simulated), and help synthesize complex information.";
                   break;
          }

          const modelName = showThinking ? 'gemini-3-pro-preview' : 'gemini-2.5-flash';

          chatSessionRef.current = ai.chats.create({
              model: modelName,
              config: {
                  systemInstruction: systemInstruction,
              }
          });

          // Add initial welcome message based on mode
          const welcomeMsg: ChatMessage = {
              id: 'welcome',
              role: 'ai',
              content: getWelcomeMessage(modeId),
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          };
          setMessages([welcomeMsg]);

      } catch (error) {
          console.error("Failed to init chat", error);
      }
  };

  const getWelcomeMessage = (mode: string) => {
      switch(mode) {
          case 'coding': return "Ready to code! What are we building or debugging today?";
          case 'exam': return "Exam mode on. Which subject or topic are we tackling?";
          case 'language': return "Let's learn a new language. How can I help?";
          case 'creative': return "Unleash your creativity. What's on your mind?";
          default: return "Hello! I'm your AI Copilot. How can I help you learn today?";
      }
  };

  // Re-init chat when mode changes
  useEffect(() => {
      initChat(activeMode);
  }, [activeMode, showThinking]);

  // Auto-scroll
  useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
      if (textareaRef.current) {
          textareaRef.current.style.height = 'auto';
          textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
      }
  }, [input]);

  const handleSendMessage = async () => {
      if (!input.trim() || !chatSessionRef.current || isLoading) return;

      const userMsg: ChatMessage = {
          id: Date.now().toString(),
          role: 'user',
          content: input,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, userMsg]);
      setInput('');
      setIsLoading(true);

      // Reset textarea height
      if (textareaRef.current) textareaRef.current.style.height = 'auto';

      try {
          const result = await chatSessionRef.current.sendMessageStream({ message: input });
          
          let fullResponse = "";
          const botMsgId = (Date.now() + 1).toString();
          
          // Add placeholder bot message
          setMessages(prev => [...prev, {
              id: botMsgId,
              role: 'ai',
              content: "",
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }]);

          for await (const chunk of result) {
              const text = chunk.text;
              fullResponse += text;
              
              setMessages(prev => prev.map(msg => 
                  msg.id === botMsgId 
                      ? { ...msg, content: fullResponse }
                      : msg
              ));
          }

      } catch (error) {
          console.error("Error sending message", error);
          setMessages(prev => [...prev, {
              id: Date.now().toString(),
              role: 'ai',
              content: "Sorry, I encountered an error. Please try again.",
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }]);
      } finally {
          setIsLoading(false);
      }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleSendMessage();
      }
  };

  return (
    <div className="flex flex-col h-full bg-mc-bg relative">
        
        {/* 1. Control Toolbar */}
        <div className="shrink-0 z-10 bg-mc-bg pt-2 px-6">
            <div className="flex items-center justify-between py-2 border-b border-mc-border">
                
                {/* Modes - Pill Shapes */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar flex-1 mr-4 pb-1">
                    {COPILOT_MODES.map(mode => {
                        const isActive = activeMode === mode.id;
                        return (
                            <button 
                                key={mode.id}
                                onClick={() => setActiveMode(mode.id)}
                                className={`
                                    flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all border shrink-0
                                    ${isActive 
                                        ? 'bg-mc-active text-mc-text border-mc-active' 
                                        : 'bg-white text-mc-muted border-mc-border hover:bg-gray-50'
                                    }
                                `}
                            >
                                {mode.icon && <mode.icon size={14} className={isActive ? "text-mc-primary" : ""} />}
                                {mode.label}
                            </button>
                        );
                    })}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2 shrink-0">
                    {/* Model Toggle */}
                     <button 
                        onClick={() => setShowThinking(!showThinking)}
                        className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${showThinking ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-mc-muted hover:bg-gray-200'}`}
                    >
                        <BrainCircuit size={14} />
                        {showThinking ? 'Thinking' : 'Flash'}
                    </button>

                    <button 
                        onClick={() => initChat(activeMode)}
                        className="p-2 rounded-full text-mc-muted hover:bg-gray-200 transition-colors"
                        title="Reset Chat"
                    >
                        <RefreshCw size={20} />
                    </button>

                    <button 
                        onClick={onToggleNotebook}
                        className={`
                            p-2 rounded-full transition-all
                            ${isNotebookOpen ? 'bg-mc-primary text-white' : 'text-mc-muted hover:bg-gray-200'}
                        `}
                    >
                        {isNotebookOpen ? <PanelRightClose size={20} /> : <PanelRightOpen size={20} />}
                    </button>
                </div>
            </div>
        </div>

        {/* 2. Chat Stream */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 no-scrollbar pb-40">
            {messages.map((msg) => (
                <div key={msg.id} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[90%] lg:max-w-[80%] ${msg.role === 'user' ? 'flex flex-col items-end' : 'flex flex-col items-start'}`}>
                        
                        {/* Avatar / Role Indicator - Minimalist */}
                        <div className={`flex items-center gap-2 mb-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                             <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${msg.role === 'user' ? 'bg-gray-200 text-mc-text' : 'bg-white text-mc-primary border border-gray-100'}`}>
                                 {msg.role === 'user' ? 'U' : <Sparkles size={14} className="text-gradient" />}
                             </div>
                             <span className="text-xs text-mc-muted font-medium">{msg.role === 'user' ? 'You' : 'MindCraft'}</span>
                        </div>

                        {/* Message Content - NotebookLM style is less bubble, more text block */}
                        <div className={`
                            px-6 py-4 rounded-2xl text-base leading-relaxed
                            ${msg.role === 'user' 
                                ? 'bg-gray-100 text-mc-text rounded-tr-sm' 
                                : 'bg-white text-mc-text rounded-tl-sm shadow-soft border border-gray-100'
                            }
                        `}>
                            {/* Loading State */}
                            {msg.role === 'ai' && !msg.content && isLoading && (
                                <div className="flex gap-1 h-5 items-center">
                                    <span className="w-1.5 h-1.5 bg-mc-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-1.5 h-1.5 bg-mc-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1.5 h-1.5 bg-mc-primary rounded-full animate-bounce"></span>
                                </div>
                            )}
                            
                            {/* Content */}
                            <div className="markdown-content">
                                {parseMessageContent(msg.content)}
                            </div>

                            {/* AI Actions Toolbar (Notebook style) */}
                            {msg.role === 'ai' && msg.content && !isLoading && (
                                <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1">
                                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-gray-100 text-mc-muted text-xs font-medium transition-colors border border-transparent hover:border-gray-200">
                                        <Copy size={14} /> Copy
                                    </button>
                                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-gray-100 text-mc-muted text-xs font-medium transition-colors border border-transparent hover:border-gray-200">
                                        <Bookmark size={14} /> Save to Notebook
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>

        {/* 3. Floating Input Area - NotebookLM Omnibox Style */}
        <div className="absolute bottom-6 left-0 right-0 px-4 md:px-8 max-w-4xl mx-auto z-20">
            <div className={`
                    bg-white rounded-[28px] shadow-float transition-all duration-300 flex flex-col p-2 relative
                    ${isLoading ? 'border border-gray-200 opacity-80' : 'bg-gradient-to-r from-blue-50/50 via-white to-purple-50/50 p-[1px]'}
            `}>
                {/* Inner White Container */}
                <div className="bg-white rounded-[26px] w-full flex flex-col p-2">
                    <textarea 
                        ref={textareaRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={isLoading ? "AI is thinking..." : `Ask anything...`}
                        disabled={isLoading}
                        className="w-full max-h-[200px] bg-transparent border-none resize-none focus:outline-none text-base text-mc-text placeholder:text-mc-muted/60 py-3 px-4 min-h-[56px]"
                        rows={1}
                    />

                    {/* Toolbar Row */}
                    <div className="flex items-center justify-between px-2 pb-1 pt-1">
                        <div className="flex items-center gap-1">
                            <button className="p-2 rounded-full hover:bg-gray-100 text-mc-muted hover:text-mc-primary transition-colors" title="Attach">
                                <Plus size={20} />
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-100 text-mc-muted hover:text-mc-primary transition-colors" title="Voice">
                                <Mic size={20} />
                            </button>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-mc-muted/50 font-medium hidden sm:inline-block mr-2">
                                {input.length}/4000
                            </span>
                            <button 
                                onClick={handleSendMessage}
                                disabled={!input.trim() || isLoading}
                                className={`
                                    w-10 h-10 rounded-full flex items-center justify-center transition-all
                                    ${input.trim() && !isLoading 
                                        ? 'bg-mc-primary text-white shadow-md hover:shadow-lg transform hover:scale-105' 
                                        : 'bg-gray-100 text-gray-300 cursor-not-allowed'}
                                `}
                            >
                                {isLoading ? <StopCircle size={20} className="animate-pulse" /> : <Send size={20} className="ml-0.5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-center text-[10px] text-mc-muted mt-4 font-medium opacity-60">
                MindCraft can make mistakes. Verify important info.
            </p>
        </div>
    </div>
  );
};

export default ChatInterface;