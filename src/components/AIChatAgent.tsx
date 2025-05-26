import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ExternalLink, Calendar, Mail, Expand, Minimize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  hasActions?: boolean;
}

const AIChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your AI portfolio assistant. I can help answer questions about projects, experience, and expertise. What would you like to know?",
      sender: 'ai',
      timestamp: new Date(),
      hasActions: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickButtons, setShowQuickButtons] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickStarterQuestions = [
    "Tell me about your experience",
    "Show me your case studies", 
    "What tools do you use?",
    "How do you approach UX design?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): { content: string; hasActions?: boolean } => {
    const message = userMessage.toLowerCase();
    
    // Project-specific responses with deep links
    if (message.includes('bank of america') || message.includes('boa') || message.includes('bill pay')) {
      return {
        content: "The Bank of America Bill Payment redesign was a major project serving 68M+ users. I led the design to reduce drop-offs by 40% and improve user satisfaction by 35%. The project focused on streamlining payment scheduling, enhancing tracking, and adding real-time notifications.\n\n[View the full Bank of America case study](/project/1) to see the complete design process and results.\n\nWould you like to discuss how this approach could work for your project?",
        hasActions: true
      };
    }
    
    if (message.includes('cync') || message.includes('loan')) {
      return {
        content: "The CYNC projects included both Loan Origination System and Advanced Analytics. For the loan system, I achieved 45% faster processing and 60% reduced manual work through automated workflows. The analytics project improved user satisfaction by 35% with WCAG 2.1 compliance.\n\n[Explore the CYNC Loan Origination case study](/project/2) or [view the CYNC Analytics project](/project/3) for detailed insights.\n\nInterested in discussing how similar solutions could benefit your business?",
        hasActions: true
      };
    }
    
    if (message.includes('case study') || message.includes('case studies')) {
      return {
        content: "I have detailed case studies showcasing my design process and measurable results:\n\n• [Bank of America Bill Payment](/project/1) - 68M+ users, 40% drop-off reduction\n• [CYNC Loan Origination](/project/2) - 45% faster processing\n• [CYNC Advanced Analytics](/project/3) - 35% satisfaction improvement\n• [UI/UX Design Process](/project/4) - Comprehensive methodology\n\nEach case study shows my approach from research to implementation. Ready to discuss your next project?",
        hasActions: true
      };
    }
    
    // Skills and experience
    if (message.includes('experience') || message.includes('background')) {
      return {
        content: "I'm a Lead UX/UI Designer with expertise in financial services and enterprise applications. My experience includes leading design teams, conducting user research, and delivering solutions for millions of users. I specialize in accessibility, design systems, and complex workflow optimization.\n\nWant to see how my experience could help with your project? Let's connect!",
        hasActions: true
      };
    }
    
    if (message.includes('tools') || message.includes('software')) {
      return {
        content: "I work with industry-standard tools including Figma, Adobe XD, Protopie for prototyping, Miro for collaboration, and various analytics platforms. I'm also experienced with design systems, user testing platforms, and accessibility tools for WCAG compliance.\n\nCurious about how these tools could streamline your design process?",
        hasActions: true
      };
    }
    
    // Process questions
    if (message.includes('process') || message.includes('methodology') || message.includes('approach')) {
      return {
        content: "My design process follows user-centered principles: Research & Discovery → Define Problems → Ideate Solutions → Prototype & Test → Implement & Iterate. I emphasize accessibility, data-driven decisions, and cross-functional collaboration throughout.\n\n[See my complete design process](/project/4) with real examples and frameworks.\n\nReady to apply this methodology to your project?",
        hasActions: true
      };
    }
    
    if (message.includes('contact') || message.includes('hire') || message.includes('work together')) {
      return {
        content: "I'd love to discuss potential collaboration! You can reach out through the contact form on this portfolio or connect with me directly. I'm open to discussing UX/UI projects, design consulting, or team leadership opportunities.\n\nLet's schedule a conversation about your project needs!",
        hasActions: true
      };
    }
    
    // Metrics and results
    if (message.includes('results') || message.includes('metrics') || message.includes('impact')) {
      return {
        content: "My projects have delivered significant measurable impact: 40% reduction in user drop-offs, 60% reduction in manual work, 45% faster processing times, and consistent improvements in user satisfaction scores. I focus on both user experience and business outcomes.\n\nWant to discuss what results we could achieve for your project?",
        hasActions: true
      };
    }
    
    // Default responses with engagement
    const defaultResponses = [
      {
        content: "That's a great question! I can tell you about specific projects like the [Bank of America Bill Payment redesign](/project/1) or [CYNC systems](/project/2). What aspect interests you most?\n\nOr would you prefer to jump straight into discussing your project needs?",
        hasActions: true
      },
      {
        content: "I'd be happy to share more details about my design process, tools, or specific case studies. You can [explore my portfolio](/#portfolio) or dive into detailed case studies.\n\nReady to discuss how I can help with your project?",
        hasActions: true
      },
      {
        content: "My portfolio showcases work in financial services, enterprise software, and accessible design. [Browse all case studies](/#portfolio) to see the full range of my work.\n\nInterested in collaborating on your next design challenge?",
        hasActions: true
      }
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleQuickQuestion = (question: string) => {
    setShowQuickButtons(false);
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
    setShowQuickButtons(false);

    // Simulate AI thinking time
    setTimeout(() => {
      const response = generateAIResponse(messageText);
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        sender: 'ai',
        timestamp: new Date(),
        hasActions: response.hasActions
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderMessageContent = (content: string) => {
    // Convert markdown-style links to clickable links
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = content.split(linkRegex);
    
    return parts.map((part, index) => {
      if (index % 3 === 1) {
        // This is link text
        const url = parts[index + 1];
        if (url.startsWith('/')) {
          return (
            <Link 
              key={index} 
              to={url} 
              className="text-portfolio-accent hover:underline inline-flex items-center gap-1"
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
              className="text-portfolio-accent hover:underline inline-flex items-center gap-1"
            >
              {part} <ExternalLink className="w-3 h-3" />
            </a>
          );
        }
      } else if (index % 3 === 2) {
        // This is the URL, skip it as it's already processed
        return null;
      } else {
        // This is regular text
        return part;
      }
    });
  };

  const ActionButtons = ({ messageId }: { messageId: string }) => (
    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-200 px-1">
      <Link to="/#contact" onClick={() => setIsOpen(false)}>
        <Button size="sm" variant="outline" className="text-xs px-3 py-1.5">
          <Mail className="w-3 h-3 mr-1" />
          Get in Touch
        </Button>
      </Link>
      <Link to="/#portfolio" onClick={() => setIsOpen(false)}>
        <Button size="sm" variant="outline" className="text-xs px-3 py-1.5">
          <ExternalLink className="w-3 h-3 mr-1" />
          View Portfolio
        </Button>
      </Link>
    </div>
  );

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-40 transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        size="sm"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Chat Window */}
      <div
        className={`fixed ${
          isExpanded 
            ? 'inset-4' 
            : 'bottom-6 right-6 w-96 h-[500px]'
        } bg-white rounded-lg shadow-2xl z-50 transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <Card className="h-full flex flex-col overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-portfolio-accent text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">Portfolio Assistant</span>
              <Badge variant="secondary" className="text-xs">AI</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-white hover:bg-white/20"
              >
                {isExpanded ? <Minimize className="w-4 h-4" /> : <Expand className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            {/* Quick Starter Buttons */}
            {showQuickButtons && messages.length === 1 && (
              <div className="p-4 bg-gray-50 border-b">
                <p className="text-sm text-gray-600 mb-3">Quick questions to get started:</p>
                <div className="grid grid-cols-1 gap-2">
                  {quickStarterQuestions.map((question, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickQuestion(question)}
                      className="text-left justify-start text-xs h-auto py-2"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-portfolio-accent text-white'
                        : 'bg-gray-100 text-portfolio-text-dark'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === 'ai' && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      {message.sender === 'user' && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                          {renderMessageContent(message.content)}
                        </p>
                        {message.hasActions && message.sender === 'ai' && (
                          <ActionButtons messageId={message.id} />
                        )}
                      </div>
                    </div>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about projects, experience, or skills..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  size="sm"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AIChatAgent;
