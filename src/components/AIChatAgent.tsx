import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ExternalLink, Mail, Expand, Minimize, Minus, Download, Sparkles, Brain, Lightbulb, BookOpen, Code, Palette, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  content: string;
  sender: 'ai' | 'user';
  timestamp: Date;
  hasActions?: boolean;
  type?: string;
}

export default function AIChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    content: "👋 Hi! I'm your enhanced AI portfolio assistant. I can provide detailed insights about projects, analyze design patterns, suggest improvements, and help you navigate the portfolio. What would you like to explore?",
    sender: 'ai',
    timestamp: new Date(),
    hasActions: true,
  }]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (customMessage?: string) => {
    const messageText = customMessage || inputValue;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      sender: 'user',
      timestamp: new Date(),
      hasActions: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const doFetch = async () => {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          history: messages.map((m) => ({ content: m.content, sender: m.sender })),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      return json.response;
    };

    try {
      const aiText = await doFetch();
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), content: aiText, sender: 'ai', timestamp: new Date(), hasActions: true },
      ]);
    } catch (firstErr) {
      console.warn('First fetch failed, retrying...', firstErr);
      // Retry once
      try {
        const aiText = await doFetch();
        setMessages((prev) => [
          ...prev,
          { id: Date.now().toString(), content: aiText, sender: 'ai', timestamp: new Date(), hasActions: true },
        ]);
      } catch (secondErr) {
        console.warn('Retry failed, scheduling final attempt...', secondErr);
        // Leave isTyping true and do a final attempt in background
        setTimeout(async () => {
          try {
            const aiText = await doFetch();
            setMessages((prev) => [
              ...prev,
              { id: Date.now().toString(), content: aiText, sender: 'ai', timestamp: new Date(), hasActions: true },
            ]);
          } catch (finalErr) {
            console.error('Final retry failed:', finalErr);
            // Final fallback: use local static responder to ensure user still gets an answer
            try {
              const local = generateAIResponse(messageText);
              setMessages((prev) => [
                ...prev,
                { id: Date.now().toString(), content: local.content, sender: 'ai', timestamp: new Date(), hasActions: local.hasActions || false, type: local.type },
              ]);
            } catch (localErr) {
              console.error('Local responder failed:', localErr);
              setMessages((prev) => [
                ...prev,
                { id: Date.now().toString(), content: "I'm having trouble reaching the AI right now. Please try again.", sender: 'ai', timestamp: new Date(), hasActions: false },
              ]);
            }
          } finally {
            setIsTyping(false);
          }
        }, 2000);
      } finally {
        if (!isTyping) setIsTyping(false);
      }
    } finally {
      // Ensure typing state is turned off unless waiting for final retry
      if (isTyping) setIsTyping(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Scroll to bottom on new messages
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [messages]);

  const generateAIResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('portfolio') || message.includes('overview')) {
      return {
        content: "🎨 **Professional Summary**\n\nI'm an Experienced Lead Product & UI/UX Designer with 8+ years of success delivering user-centered, scalable digital solutions across web and mobile platforms—primarily in the financial, enterprise SaaS, and B2B domains.\n\n**Core Expertise:**\n• Lead end-to-end product design\n• AI-driven design systems integration\n• Human-centered design strategy\n• Cross-functional collaboration\n\n**Key Achievements:**\n• Enhanced UX for 68M+ users at Bank of America\n• Led CYNC Software's financial platform redesign\n• Increased app user satisfaction by 20%\n• Reduced development cycles by 10%\n\n**Current Focus:**\n• AI-driven design systems\n• Generative UX workflows\n• Conversational interface design\n• Predictive UX patterns\n\nWould you like to explore my experience at specific companies or learn more about my technical skills?",
        hasActions: true,
        type: 'overview'
      };
    }

    if (message.includes('experience') || message.includes('background')) {
      return {
        content: "💼 **Professional Experience**\n\n**CYNC Software (2022-Present) - Lead UI/UX Designer:**\n• Led end-to-end product design for complex financial platforms\n• Managed product backlog and Agile ceremonies\n• Integrated AI-driven analytics and behavioral data\n• Developed MVP definitions and user stories\n\n**Bank of America (2018-2022) - UI/UX Designer:**\n• Led Bill Payment Feature design, increasing adoption by 25%\n• Improved mobile app usability by 15%\n• Implemented WCAG compliance and accessibility standards\n• Reduced redesign costs by 20% through early-stage prototyping\n\n**Innovative Design Studio (2018) - UI/UX Designer:**\n• Created wireframes and user flows for mobile/web apps\n• Conducted user research and usability testing\n• Developed responsive layouts and visual systems\n\n**Education & Certification:**\n• Bachelor of Science in Information Technology (SNHU)\n• Google UX Design Professional Certificate\n• GenAI for UX Designers Certification\n\nWould you like to learn more about my work at any of these companies?",
        hasActions: true,
        type: 'experience'
      };
    }

    if (message.includes('skills') || message.includes('technologies')) {
      return {
        content: "🛠 **Key Skills & Technologies**\n\n**UI/UX Design:**\n• Wireframing & Prototyping\n• Information Architecture\n• Adaptive & Generative UX\n• AI-Driven Personalization\n\n**Research & Testing:**\n• AI-Assisted Insight Synthesis\n• Usability Testing & A/B Testing\n• Behavioral Data Analysis\n• Contextual User Modeling\n\n**Design Tools:**\n• Figma (AI Plugins, Design Systems)\n• Adobe XD, Sketch, Miro\n• Uizard, Galileo AI, Midjourney\n• ChatGPT (Prompt Testing)\n\n**Development Collaboration:**\n• HTML5, CSS3, JavaScript\n• Angular & TypeScript\n• AI/ML Integration\n• API Workflow Design\n\n**Specialized Skills:**\n• WCAG 2.2 Accessibility\n• Explainable AI UX\n• Conversational UI Design\n• Predictive UX Patterns\n\nWould you like specific examples of how I've applied these skills in projects?",
        hasActions: true,
        type: 'skills'
      };
    }

    if (message.includes('bank') || message.includes('boa') || message.includes('america')) {
      return {
        content: "🏦 **Bank of America Experience (2018-2022)**\n\n**Bill Payment Feature Redesign:**\n• Increased user adoption by 25%\n• Reduced drop-off rates\n• Optimized mobile experience\n\n**Key Contributions:**\n• Led responsive UI design across platforms\n• Implemented WCAG accessibility standards\n• Conducted extensive user research\n• Improved task completion rates by 15%\n\n**Technical Implementation:**\n• Built with Angular 11, TypeScript\n• Created reusable CSS/HTML templates\n• Integrated analytics tracking\n• Ensured cross-platform consistency\n\n**Process & Tools:**\n• Figma and Adobe XD for prototyping\n• Agile development workflow\n• A/B testing and heatmap analysis\n• User journey mapping\n\n**Impact:**\n• 20% increase in app satisfaction\n• 15% improved mobile usability\n• 10% reduction in drop-off rates\n• 20% savings in redesign costs\n\nWould you like to know more about specific features or methodologies used?",
        hasActions: true,
        type: 'project'
      };
    }

    if (message.includes('cync') || message.includes('loan')) {
      return {
        content: "💰 **CYNC Software Experience (2022-Present)**\n\n**Product Leadership:**\n• Lead UI/UX Designer for financial platforms\n• Product Owner responsibilities\n• Cross-functional team leadership\n\n**Key Projects:**\n\n**Loan & Credit Products:**\n• Security-Based Lending\n• Floor Plan Finance\n• Equipment Finance\n• Auto Finance\n• Commercial Real Estate\n• Wholesale Finance\n\n**Collateral Management:**\n• Real Estate & Property\n• Fleet & Vehicles\n• Equipment & Insurance\n• Advanced Analytics Dashboards\n\n**AI & Innovation:**\n• Integrated AI-driven design systems\n• Developed conversational interfaces\n• Created predictive UX patterns\n• Implemented LLM-based systems\n\n**Process Improvements:**\n• Reduced feature redundancy\n• Improved roadmap accuracy\n• 20% increase in user engagement\n• 30% faster insight generation\n\nWould you like to learn more about specific projects or AI implementations?",
        hasActions: true,
        type: 'project'
      };
    }

    if (message.includes('design') || message.includes('process') || message.includes('methodology')) {
      return {
        content: "🎯 **Design Process & AI Integration**\n\n**User-Centered Approach:**\n• Comprehensive user research\n• Journey mapping & prototyping\n• Usability testing & iteration\n• Data-driven decision making\n\n**AI-Enhanced Design Process:**\n• AI-driven analytics integration\n• Predictive behavior modeling\n• Conversational UX patterns\n• Ethical AI implementation\n\n**Agile Methodology:**\n• Sprint planning & backlog grooming\n• Cross-functional collaboration\n• Iterative development cycles\n• Continuous improvement\n\n**Tools & Frameworks:**\n• Design: Figma, Adobe XD, Sketch\n• AI Tools: Uizard, Galileo AI, ChatGPT\n• Analytics: Google Analytics, Hotjar\n• Documentation: Jira, Confluence\n\n**Specialized Processes:**\n• AI-assisted documentation\n• Model-to-UX integration\n• Prompt engineering\n• Ethical AI design principles\n\nWould you like to learn more about my AI integration approaches or traditional design methods?",
        hasActions: true,
        type: 'process'
      };
    }

    // Default response
    return {
      content: "I can help you explore:\n\n• Portfolio Projects\n• Professional Experience\n• Technical Skills\n• Design Process\n• Contact Information\n\nWhat would you like to learn more about?",
      hasActions: true,
      type: 'general'
    };
  };

  return (
    <div className="relative">
      {isMinimized ? (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6 text-portfolio-accent" />
              <span className="font-medium text-sm">Portfolio Assistant</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(false)}
                className="hover:bg-gray-100 dark:hover:bg-gray-700 w-8 h-8 p-0"
              >
                <Expand className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {!isOpen && (
            <Button
              onClick={() => setIsOpen(true)}
              className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-xl z-40 transition-all duration-300 bg-gradient-to-r from-portfolio-accent to-blue-600 hover:shadow-2xl hover:scale-110"
              size="sm"
            >
              <div className="relative">
                <MessageCircle className="w-7 h-7" />
              </div>
            </Button>
          )}

          <div
        className={`fixed ${
          isExpanded 
            ? 'inset-4' 
            : 'bottom-6 right-6 w-[420px] h-[600px]'
        } bg-white dark:bg-gray-800 rounded-xl shadow-2xl z-50 transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <Card className="h-full flex flex-col overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-portfolio-accent to-blue-600 text-white rounded-t-xl flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bot className="w-6 h-6" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <span className="font-semibold text-lg">Portfolio Assistant</span>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI Enhanced
                  </Badge>
                  <span className="text-xs">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-white hover:bg-white/20 w-8 h-8 p-0"
              >
                {isExpanded ? <Minimize className="w-4 h-4" /> : <Expand className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(true)}
                className="text-white hover:bg-white/20 w-8 h-8 p-0"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsOpen(false);
                  setIsExpanded(false);
                  setIsMinimized(false);
                  setInputValue('');
                  setMessages([{
                    id: '1',
                    content: "👋 Hi! I'm your enhanced AI portfolio assistant. I can provide detailed insights about projects, analyze design patterns, suggest improvements, and help you navigate the portfolio. What would you like to explore?",
                    sender: 'ai',
                    timestamp: new Date(),
                    hasActions: true,
                  }]);
                }}
                className="text-white hover:bg-white/20 w-8 h-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            <ScrollArea className="flex-1">
              <div className="p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 mb-4 ${message.sender === 'ai' ? 'items-start' : 'items-start flex-row-reverse'}`}
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'ai' ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      {message.sender === 'ai' ? (
                        <Bot className="w-5 h-5 text-blue-600" />
                      ) : (
                        <User className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                    <div
                      className={`flex-1 max-w-[80%] p-4 rounded-lg ${
                        message.sender === 'ai'
                          ? 'bg-white border border-gray-200'
                          : 'bg-blue-600 text-white'
                      }`}
                    >
                      <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
                        {message.content}
                      </div>
                      {message.hasActions && message.sender === 'ai' && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {message.type === 'overview' && (
                            <>
                              <Button size="sm" variant="secondary" onClick={() => handleQuickQuestion("Tell me more about your Bank of America project")}>
                                Bank of America Project
                              </Button>
                              <Button size="sm" variant="secondary" onClick={() => handleQuickQuestion("Tell me about your CYNC project")}>
                                CYNC Project
                              </Button>
                            </>
                          )}
                          {message.type === 'skills' && (
                            <>
                              <Button size="sm" variant="secondary" onClick={() => handleQuickQuestion("Show me your React projects")}>
                                React Projects
                              </Button>
                              <Button size="sm" variant="secondary" onClick={() => handleQuickQuestion("Design System Examples")}>
                                Design Systems
                              </Button>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3 mb-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 animate-pulse">
                      <Brain className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1 max-w-[80%] p-3 rounded-lg bg-white border border-gray-200">
                      <div className="text-sm text-gray-700">Thinking</div>
                    </div>
                  </div>
                )}

                {messages.length === 1 && (
                  <div className="max-w-2xl mx-auto space-y-4">
                    <p className="text-sm text-gray-600 pl-2">💡 Try asking:</p>
                    <div className="grid gap-2">
                      <Button
                        variant="outline"
                        className="justify-start h-auto py-3 px-4 text-left hover:bg-blue-50/80 hover:border-blue-200 transition-colors"
                        onClick={() => handleQuickQuestion("Give me a portfolio overview")}
                      >
                        <div className="flex items-center gap-3">
                          <Palette className="w-4 h-4" />
                          <span className="text-sm font-medium">Portfolio Overview</span>
                        </div>
                      </Button>
                      <Button
                        variant="outline"
                        className="justify-start h-auto py-3 px-4 text-left hover:bg-blue-50/80 hover:border-blue-200 transition-colors"
                        onClick={() => handleQuickQuestion("Tell me about your experience and background")}
                      >
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-4 h-4" />
                          <span className="text-sm font-medium">Experience Deep Dive</span>
                        </div>
                      </Button>
                      <Button
                        variant="outline"
                        className="justify-start h-auto py-3 px-4 text-left hover:bg-blue-50/80 hover:border-blue-200 transition-colors"
                        onClick={() => handleQuickQuestion("What technical skills and technologies do you use?")}
                      >
                        <div className="flex items-center gap-3">
                          <Code className="w-4 h-4" />
                          <span className="text-sm font-medium">Technical Skills</span>
                        </div>
                      </Button>
                      <Button
                        variant="outline"
                        className="justify-start h-auto py-3 px-4 text-left hover:bg-blue-50/80 hover:border-blue-200 transition-colors"
                        onClick={() => handleQuickQuestion("Tell me about your design process and methodologies")}
                      >
                        <div className="flex items-center gap-3">
                          <Brain className="w-4 h-4" />
                          <span className="text-sm font-medium">Design Process</span>
                        </div>
                      </Button>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <div className="p-4 border-t bg-white dark:bg-gray-800 flex-shrink-0">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="flex-1"
                  placeholder="Type your message..."
                  disabled={isTyping}
                />
                <Button 
                  onClick={() => handleSendMessage()} 
                  className="bg-portfolio-accent hover:bg-blue-700"
                  disabled={isTyping || !inputValue.trim()}
                >
                  {isTyping ? (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    </div>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
          </div>
        </>
      )}
    </div>
  );
}