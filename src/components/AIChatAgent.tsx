import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ExternalLink, Calendar, Mail, Expand, Minimize, Settings, Download, Share2, Sparkles, Brain, Lightbulb, Search, BookOpen, Code, Palette, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  hasActions?: boolean;
  type?: 'text' | 'suggestion' | 'project' | 'insight';
  metadata?: {
    projectId?: number;
    category?: string;
    confidence?: number;
  };
}

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  category: 'portfolio' | 'experience' | 'contact' | 'insights';
}

const AIChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "👋 Hi! I'm your enhanced AI portfolio assistant. I can provide detailed insights about projects, analyze design patterns, suggest improvements, and help you navigate the portfolio. What would you like to explore?",
      sender: 'ai',
      timestamp: new Date(),
      hasActions: true,
      type: 'text'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [activeTab, setActiveTab] = useState('chat');
  const [chatMode, setChatMode] = useState<'general' | 'analysis' | 'suggestions'>('general');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const quickActions: QuickAction[] = [
    {
      id: 'portfolio-overview',
      label: 'Portfolio Overview',
      icon: <Palette className="w-4 h-4" />,
      action: () => handleQuickQuestion("Give me a comprehensive overview of the portfolio"),
      category: 'portfolio'
    },
    {
      id: 'design-analysis',
      label: 'Design Analysis',
      icon: <Brain className="w-4 h-4" />,
      action: () => handleQuickQuestion("Analyze the design patterns and methodologies used"),
      category: 'insights'
    },
    {
      id: 'project-recommendations',
      label: 'Project Recommendations',
      icon: <Target className="w-4 h-4" />,
      action: () => handleQuickQuestion("Recommend projects based on my interests"),
      category: 'portfolio'
    },
    {
      id: 'experience-deep-dive',
      label: 'Experience Deep Dive',
      icon: <BookOpen className="w-4 h-4" />,
      action: () => handleQuickQuestion("Tell me about the professional experience and growth"),
      category: 'experience'
    },
    {
      id: 'technical-skills',
      label: 'Technical Skills',
      icon: <Code className="w-4 h-4" />,
      action: () => handleQuickQuestion("What technical skills and tools are demonstrated?"),
      category: 'experience'
    },
    {
      id: 'collaboration',
      label: 'Let\'s Collaborate',
      icon: <Mail className="w-4 h-4" />,
      action: () => handleQuickQuestion("How can we work together on a project?"),
      category: 'contact'
    }
  ];

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end'
      });
    }
  };

  // Enhanced scroll to bottom with better timing
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [messages]);

  // Auto-scroll when new messages are added
  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages.length]);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const generateAIResponse = (userMessage: string): { content: string; hasActions?: boolean; type?: Message['type']; metadata?: Message['metadata'] } => {
    const message = userMessage.toLowerCase();
    
    // Enhanced responses with more intelligence
    if (message.includes('portfolio overview') || message.includes('comprehensive overview')) {
      return {
        content: "🎨 **Portfolio Overview & Analysis**\n\nThis portfolio showcases a comprehensive range of UX/UI design expertise:\n\n**🏆 Featured Case Studies:**\n• [Bank of America Bill Payment](/project/1) - 68M+ users, 40% drop-off reduction\n• [CYNC Loan Origination System](/project/2) - Complex B2B workflow optimization\n• [CYNC Advanced Analytics](/project/3) - Accessibility-focused design\n\n**🎯 Design Strengths:**\n• User-centered design methodology\n• Complex workflow simplification\n• Accessibility compliance (WCAG 2.1)\n• Cross-platform consistency\n• Data-driven design decisions\n\n**📊 Impact Metrics:**\n• 40-60% improvement in user efficiency\n• 35-45% increase in user satisfaction\n• Full accessibility compliance achieved\n\nWould you like me to dive deeper into any specific project or design approach?",
        hasActions: true,
        type: 'insight',
        metadata: { confidence: 0.95, category: 'portfolio-analysis' }
      };
    }

    if (message.includes('design analysis') || message.includes('design patterns') || message.includes('methodologies')) {
      return {
        content: "🧠 **Design Methodology & Pattern Analysis**\n\n**Core Design Philosophy:**\n• Human-centered design approach\n• Data-informed decision making\n• Iterative design process\n• Accessibility-first mindset\n\n**Key Design Patterns Identified:**\n\n🔄 **Process Framework:**\n1. Research & Discovery\n2. Problem Definition\n3. Ideation & Prototyping\n4. Testing & Validation\n5. Implementation & Iteration\n\n🎨 **UI/UX Patterns:**\n• Progressive disclosure for complex workflows\n• Consistent design system implementation\n• Micro-interactions for user feedback\n• Responsive design across all platforms\n\n📈 **Success Metrics:**\n• Task completion rates: 40-75% improvement\n• User satisfaction: 35-45% increase\n• Error reduction: 40-60%\n• Processing time: 35-50% faster\n\n[Explore the complete design process](/project/4)\n\nWant me to analyze a specific design pattern or methodology?",
        hasActions: true,
        type: 'insight',
        metadata: { confidence: 0.92, category: 'design-analysis' }
      };
    }

    if (message.includes('recommend') || message.includes('suggestions') || message.includes('interests')) {
      return {
        content: "🎯 **Personalized Project Recommendations**\n\nBased on current design trends and portfolio analysis, here are tailored recommendations:\n\n**🏦 For Fintech Enthusiasts:**\n• [Bank of America Bill Payment](/project/1) - Large-scale financial UX\n• [CYNC Loan Origination](/project/2) - B2B financial workflows\n\n**🔧 For Complex System Designers:**\n• [CYNC Advanced Analytics](/project/3) - Data visualization & accessibility\n• [CYNC Collateral Management](/project/6) - Asset tracking systems\n\n**🎨 For UI/UX Process Learners:**\n• [UI/UX Design Process Case Study](/project/4) - Complete methodology\n• [CYNC Insurance Component](/project/9) - Component design\n\n**🚀 For Interactive Design:**\n• [CSS Animations Gallery](/project/5) - Micro-interactions\n• [AI Chatbot Application](/project/13) - Conversational UI\n\n**💡 Recommendation Engine Insights:**\n• 95% of visitors find case studies most valuable\n• B2B workflow projects show highest engagement\n• Accessibility features are increasingly important\n\nWhich type of project interests you most?",
        hasActions: true,
        type: 'suggestion',
        metadata: { confidence: 0.88, category: 'recommendations' }
      };
    }

    if (message.includes('experience') || message.includes('professional') || message.includes('growth') || message.includes('career')) {
      return {
        content: "📈 **Professional Experience & Growth Analysis**\n\n**Career Progression:**\n\n🎯 **Current Role - Lead Product & UI/UX Designer at CYNC Software**\n• Leading end-to-end UX for enterprise SaaS products\n• 20% increase in user engagement achieved\n• 25% reduction in onboarding friction\n• Direct collaboration with CEO and product teams\n\n🏦 **Previous Role - UI/UX Designer at Bank of America**\n• Designed for 68M+ users\n• 15% increase in task completion rates\n• 10% reduction in drop-off rates\n• Full accessibility compliance implementation\n\n📊 **Key Growth Indicators:**\n• Project complexity: From simple interfaces to enterprise systems\n• User base: From thousands to millions of users\n• Impact scale: From feature improvements to system-wide redesigns\n• Leadership: From individual contributor to team lead\n\n🛠 **Skill Evolution:**\n• Technical: Figma, Adobe XD, Protopie, React, TypeScript\n• Research: User interviews, A/B testing, analytics\n• Business: Stakeholder management, strategic planning\n• Accessibility: WCAG 2.1 compliance, inclusive design\n\n[View complete experience details](/experience)\n\nWant to know more about any specific role or skill development?",
        hasActions: true,
        type: 'insight',
        metadata: { confidence: 0.94, category: 'experience-analysis' }
      };
    }

    if (message.includes('technical skills') || message.includes('tools') || message.includes('technologies')) {
      return {
        content: "🛠 **Technical Skills & Tools Mastery**\n\n**Design Tools Expertise:**\n\n🎨 **Primary Design Suite:**\n• **Figma** (Expert) - Design systems, prototyping, collaboration\n• **Adobe XD** (Advanced) - Interactive prototypes, design specs\n• **Sketch** (Proficient) - UI design, symbol libraries\n• **Protopie** (Advanced) - Complex interactions, micro-animations\n\n📊 **Research & Analytics:**\n• **Miro** - Collaborative workshops, journey mapping\n• **Google Analytics** - User behavior analysis\n• **Hotjar/Heatmaps** - User interaction insights\n• **Maze** - Usability testing, user research\n\n💻 **Development Skills:**\n• **React** (Intermediate) - Component-based development\n• **TypeScript** (Intermediate) - Type-safe development\n• **HTML5/CSS3** (Advanced) - Semantic markup, responsive design\n• **Tailwind CSS** - Utility-first styling\n\n🔧 **Workflow & Collaboration:**\n• **Jira** - Agile project management\n• **Confluence** - Documentation, knowledge sharing\n• **Git/GitHub** - Version control, code collaboration\n• **Storybook** - Component documentation\n\n📱 **Specialized Skills:**\n• **WCAG 2.1 Compliance** - Accessibility implementation\n• **Design Systems** - Scalable component libraries\n• **User Research** - Interviews, surveys, testing\n• **A/B Testing** - Data-driven design decisions\n\n**Proficiency Levels:**\n• Expert: Figma, User Research, Accessibility\n• Advanced: Adobe XD, Protopie, HTML/CSS\n• Intermediate: React, TypeScript, Analytics\n\nWhich technical area would you like to explore further?",
        hasActions: true,
        type: 'insight',
        metadata: { confidence: 0.91, category: 'technical-skills' }
      };
    }

    if (message.includes('collaborate') || message.includes('work together') || message.includes('hire') || message.includes('project')) {
      return {
        content: "🤝 **Collaboration Opportunities & Process**\n\n**Available for:**\n\n🎨 **Design Services:**\n• UI/UX Design & Research\n• Design System Development\n• Accessibility Audits & Implementation\n• User Experience Optimization\n• Product Strategy & Consultation\n\n📋 **Project Types:**\n• **Enterprise SaaS** - Complex B2B workflows\n• **Financial Services** - Secure, compliant interfaces\n• **E-commerce** - Conversion-focused design\n• **Mobile Apps** - Cross-platform experiences\n• **Design Systems** - Scalable component libraries\n\n⚡ **Collaboration Process:**\n\n**Phase 1: Discovery (1-2 weeks)**\n• Stakeholder interviews\n• User research & analysis\n• Competitive analysis\n• Project scope definition\n\n**Phase 2: Design (2-6 weeks)**\n• Wireframing & prototyping\n• Visual design & interactions\n• Usability testing\n• Design system creation\n\n**Phase 3: Implementation (2-4 weeks)**\n• Developer handoff\n• Design QA & review\n• User testing & iteration\n• Launch support\n\n💼 **What I Bring:**\n• 7+ years of design experience\n• Proven track record with 68M+ users\n• Accessibility expertise (WCAG 2.1)\n• Cross-functional team leadership\n• Data-driven design approach\n\n📞 **Next Steps:**\n1. [Schedule a consultation call](/contact)\n2. Share your project brief\n3. Receive a detailed proposal\n4. Begin collaboration\n\n**Response Time:** Within 24 hours\n**Availability:** Open for new projects\n\nReady to start your project? Let's discuss your specific needs!",
        hasActions: true,
        type: 'suggestion',
        metadata: { confidence: 0.96, category: 'collaboration' }
      };
    }

    // Enhanced project-specific responses
    if (message.includes('bank of america') || message.includes('boa') || message.includes('bill pay')) {
      return {
        content: "🏦 **Bank of America Bill Payment - Deep Dive Analysis**\n\n**Project Scope & Impact:**\n• **User Base:** 68+ million active users\n• **Challenge:** Complex payment scheduling, poor tracking\n• **Solution:** Streamlined UI with enhanced flexibility\n• **Results:** 40% drop-off reduction, 35% satisfaction increase\n\n**🎯 Key Design Innovations:**\n\n**1. Simplified Payment Flow**\n• Reduced steps from 7 to 4\n• Progressive disclosure for advanced options\n• Smart defaults based on user history\n\n**2. Enhanced Scheduling**\n• Visual calendar interface\n• Recurring payment templates\n• Flexible date selection\n\n**3. Improved Tracking**\n• Real-time payment status\n• Comprehensive payment history\n• Smart notifications & alerts\n\n**4. Accessibility Features**\n• WCAG 2.1 AA compliance\n• Screen reader optimization\n• High contrast mode support\n\n**📊 Measurable Outcomes:**\n• **User Satisfaction:** 35% increase\n• **Task Completion:** 40% improvement\n• **Support Tickets:** 50% reduction\n• **Processing Time:** 25% faster\n\n**🛠 Technical Implementation:**\n• Responsive design across all devices\n• Real-time data synchronization\n• Secure payment processing\n• Performance optimization\n\n[View the complete case study](/project/1)\n\n**Design Lessons Learned:**\n• User research is critical for financial products\n• Accessibility drives adoption\n• Micro-interactions improve confidence\n• Data visualization enhances understanding\n\nWant to explore specific aspects of this project?",
        hasActions: true,
        type: 'project',
        metadata: { projectId: 1, confidence: 0.97, category: 'case-study' }
      };
    }

    // Default enhanced responses
    const enhancedResponses = [
      {
        content: "🤔 **Interesting question!** I can provide detailed insights about:\n\n• **Project Analysis** - Deep dives into case studies and design decisions\n• **Design Process** - Methodologies, frameworks, and best practices\n• **Technical Skills** - Tools, technologies, and implementation approaches\n• **Career Journey** - Professional growth and experience insights\n• **Collaboration** - How we can work together on your projects\n\n**💡 Pro Tip:** Try asking about specific projects like \"Tell me about the CYNC loan system\" or \"How was accessibility implemented?\"\n\nWhat aspect interests you most?",
        hasActions: true,
        type: 'suggestion',
        metadata: { confidence: 0.85, category: 'general' }
      },
      {
        content: "🎯 **Great question!** I'm here to provide comprehensive insights about this portfolio.\n\n**🔍 I can help you:**\n• Analyze design patterns and methodologies\n• Understand project impact and metrics\n• Explore technical implementation details\n• Discuss collaboration opportunities\n• Navigate to specific sections or projects\n\n**📈 Recent Portfolio Highlights:**\n• 68M+ users impacted across projects\n• 40-60% improvement in user efficiency\n• Full accessibility compliance achieved\n• Enterprise-scale system design experience\n\n[Explore all case studies](/#portfolio) or ask me about specific projects!\n\nWhat would you like to dive into?",
        hasActions: true,
        type: 'insight',
        metadata: { confidence: 0.87, category: 'general' }
      }
    ];
    
    return enhancedResponses[Math.floor(Math.random() * enhancedResponses.length)];
  };

  const handleQuickQuestion = (question: string) => {
    setShowQuickActions(false);
    handleSendMessage(question);
  };

  const handleSendMessage = async (customMessage?: string) => {
    const messageText = customMessage || inputValue;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setShowQuickActions(false);

    // Enhanced AI thinking time with more realistic delay
    setTimeout(() => {
      const response = generateAIResponse(messageText);
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        sender: 'ai',
        timestamp: new Date(),
        hasActions: response.hasActions,
        type: response.type,
        metadata: response.metadata
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderMessageContent = (content: string) => {
    // Enhanced markdown rendering
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const parts = content.split(linkRegex);
    
    return parts.map((part, index) => {
      if (index % 3 === 1) {
        const url = parts[index + 1];
        if (url.startsWith('/')) {
          return (
            <Link 
              key={index} 
              to={url} 
              className="text-portfolio-accent hover:underline inline-flex items-center gap-1 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {part} <ExternalLink className="w-3 h-3" />
            </Link>
          );
        } else {
          return (
            <a 
              key={index} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-accent hover:underline inline-flex items-center gap-1 font-medium"
            >
              {part} <ExternalLink className="w-3 h-3" />
            </a>
          );
        }
      } else if (index % 3 === 2) {
        return null;
      } else {
        // Handle bold text and other formatting
        return part.split(boldRegex).map((textPart, textIndex) => {
          if (textIndex % 2 === 1) {
            return <strong key={textIndex} className="font-semibold text-portfolio-text-dark">{textPart}</strong>;
          }
          return textPart;
        });
      }
    });
  };

  const ActionButtons = ({ message }: { message: Message }) => (
    <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gray-200">
      <Button 
        size="sm" 
        variant="outline" 
        className="text-xs px-3 py-1.5 hover:bg-portfolio-accent hover:text-white transition-colors"
        onClick={() => scrollToSection('contact')}
      >
        <Mail className="w-3 h-3 mr-1" />
        Get in Touch
      </Button>
      <Button 
        size="sm" 
        variant="outline" 
        className="text-xs px-3 py-1.5 hover:bg-portfolio-accent hover:text-white transition-colors"
        onClick={() => scrollToSection('portfolio')}
      >
        <ExternalLink className="w-3 h-3 mr-1" />
        View Portfolio
      </Button>
      {message.metadata?.projectId && (
        <Button 
          size="sm" 
          variant="outline" 
          className="text-xs px-3 py-1.5 hover:bg-portfolio-accent hover:text-white transition-colors"
          onClick={() => {
            setIsOpen(false);
            window.open(`/project/${message.metadata?.projectId}`, '_blank');
          }}
        >
          <BookOpen className="w-3 h-3 mr-1" />
          View Project
        </Button>
      )}
    </div>
  );

  const exportChat = () => {
    const chatContent = messages.map(msg => 
      `${msg.sender.toUpperCase()} (${msg.timestamp.toLocaleString()}): ${msg.content}`
    ).join('\n\n');
    
    const blob = new Blob([chatContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-chat-export.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Enhanced Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-xl z-40 transition-all duration-300 bg-gradient-to-r from-portfolio-accent to-blue-600 hover:shadow-2xl hover:scale-110 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        size="sm"
      >
        <div className="relative">
          <MessageCircle className="w-7 h-7" />
          <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300" />
        </div>
      </Button>

      {/* Enhanced Chat Window with Improved Scrolling */}
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
          {/* Enhanced Header */}
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
                onClick={exportChat}
                className="text-white hover:bg-white/20 w-8 h-8 p-0"
                title="Export Chat"
              >
                <Download className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 w-8 h-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          {/* Enhanced Content with Proper Scrolling */}
          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden min-h-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0">
              <TabsList className="grid w-full grid-cols-2 m-2 mb-0 flex-shrink-0">
                <TabsTrigger value="chat" className="text-sm">Chat</TabsTrigger>
                <TabsTrigger value="actions" className="text-sm">Quick Actions</TabsTrigger>
              </TabsList>

              <TabsContent value="chat" className="flex-1 flex flex-col mt-0 min-h-0">
                {/* Chat Mode Selector */}
                <div className="p-3 border-b bg-gray-50 dark:bg-gray-800 flex-shrink-0">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={chatMode === 'general' ? 'default' : 'outline'}
                      onClick={() => setChatMode('general')}
                      className="text-xs"
                    >
                      General
                    </Button>
                    <Button
                      size="sm"
                      variant={chatMode === 'analysis' ? 'default' : 'outline'}
                      onClick={() => setChatMode('analysis')}
                      className="text-xs"
                    >
                      <Brain className="w-3 h-3 mr-1" />
                      Analysis
                    </Button>
                    <Button
                      size="sm"
                      variant={chatMode === 'suggestions' ? 'default' : 'outline'}
                      onClick={() => setChatMode('suggestions')}
                      className="text-xs"
                    >
                      <Lightbulb className="w-3 h-3 mr-1" />
                      Suggestions
                    </Button>
                  </div>
                </div>

                {/* Messages with Enhanced Scrolling */}
                <div className="flex-1 min-h-0 relative">
                  <ScrollArea 
                    className="h-full w-full"
                    ref={scrollAreaRef}
                  >
                    <div className="p-4 space-y-4 min-h-full">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[85%] p-4 rounded-xl ${
                              message.sender === 'user'
                                ? 'bg-gradient-to-r from-portfolio-accent to-blue-600 text-white'
                                : 'bg-gray-100 dark:bg-gray-700 text-portfolio-text-dark dark:text-white'
                            } ${message.type === 'insight' ? 'border-l-4 border-blue-500' : ''} ${
                              message.type === 'suggestion' ? 'border-l-4 border-green-500' : ''
                            } ${message.type === 'project' ? 'border-l-4 border-purple-500' : ''}`}
                          >
                            <div className="flex items-start gap-3">
                              {message.sender === 'ai' && (
                                <div className="flex-shrink-0">
                                  <Bot className="w-5 h-5 mt-0.5" />
                                </div>
                              )}
                              {message.sender === 'user' && (
                                <User className="w-5 h-5 mt-0.5 flex-shrink-0" />
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                                  {renderMessageContent(message.content)}
                                </div>
                                {message.metadata?.confidence && (
                                  <div className="mt-2 text-xs opacity-70">
                                    Confidence: {Math.round(message.metadata.confidence * 100)}%
                                  </div>
                                )}
                                {message.hasActions && message.sender === 'ai' && (
                                  <ActionButtons message={message} />
                                )}
                              </div>
                            </div>
                            <div className="text-xs opacity-70 mt-2 text-right">
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl max-w-[85%]">
                            <div className="flex items-center gap-3">
                              <Bot className="w-5 h-5" />
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Scroll anchor */}
                      <div ref={messagesEndRef} className="h-1" />
                    </div>
                  </ScrollArea>
                </div>

                {/* Enhanced Input */}
                <div className="p-4 border-t bg-white dark:bg-gray-800 flex-shrink-0">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={`Ask about ${chatMode === 'analysis' ? 'design analysis' : chatMode === 'suggestions' ? 'recommendations' : 'anything'}...`}
                      className="flex-1"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={() => handleSendMessage()}
                      disabled={!inputValue.trim() || isTyping}
                      size="sm"
                      className="bg-gradient-to-r from-portfolio-accent to-blue-600 hover:shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="actions" className="flex-1 min-h-0">
                <ScrollArea className="h-full">
                  <div className="p-4 space-y-4">
                    <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
                    
                    {['portfolio', 'experience', 'insights', 'contact'].map(category => (
                      <div key={category}>
                        <h4 className="font-medium text-sm text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
                          {category}
                        </h4>
                        <div className="grid gap-2 mb-4">
                          {quickActions
                            .filter(action => action.category === category)
                            .map(action => (
                              <Button
                                key={action.id}
                                variant="outline"
                                className="justify-start h-auto p-3 text-left"
                                onClick={() => {
                                  setActiveTab('chat');
                                  action.action();
                                }}
                              >
                                <div className="flex items-center gap-3">
                                  {action.icon}
                                  <span className="text-sm">{action.label}</span>
                                </div>
                              </Button>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AIChatAgent;