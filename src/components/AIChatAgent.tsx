
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your AI portfolio assistant. I can help answer questions about projects, experience, and expertise. What would you like to know?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Project-specific responses
    if (message.includes('bank of america') || message.includes('boa') || message.includes('bill pay')) {
      return "The Bank of America Bill Payment redesign was a major project serving 68M+ users. I led the design to reduce drop-offs by 40% and improve user satisfaction by 35%. The project focused on streamlining payment scheduling, enhancing tracking, and adding real-time notifications. Would you like to know more about the specific challenges we solved?";
    }
    
    if (message.includes('cync') || message.includes('loan')) {
      return "The CYNC projects included both Loan Origination System and Advanced Analytics. For the loan system, I achieved 45% faster processing and 60% reduced manual work through automated workflows. The analytics project improved user satisfaction by 35% with WCAG 2.1 compliance. Which CYNC project interests you most?";
    }
    
    // Skills and experience
    if (message.includes('experience') || message.includes('background')) {
      return "I'm a Lead UX/UI Designer with expertise in financial services and enterprise applications. My experience includes leading design teams, conducting user research, and delivering solutions for millions of users. I specialize in accessibility, design systems, and complex workflow optimization.";
    }
    
    if (message.includes('tools') || message.includes('software')) {
      return "I work with industry-standard tools including Figma, Adobe XD, Protopie for prototyping, Miro for collaboration, and various analytics platforms. I'm also experienced with design systems, user testing platforms, and accessibility tools for WCAG compliance.";
    }
    
    if (message.includes('case study') || message.includes('case studies')) {
      return "I have detailed case studies available for Bank of America Bill Payment, CYNC Loan Origination, CYNC Advanced Analytics, and UI/UX Design Process. Each shows my approach from research to implementation with measurable results. Which case study would you like to explore?";
    }
    
    // Process questions
    if (message.includes('process') || message.includes('methodology')) {
      return "My design process follows user-centered principles: Research & Discovery → Define Problems → Ideate Solutions → Prototype & Test → Implement & Iterate. I emphasize accessibility, data-driven decisions, and cross-functional collaboration throughout.";
    }
    
    if (message.includes('contact') || message.includes('hire') || message.includes('work together')) {
      return "I'd love to discuss potential collaboration! You can reach out through the contact form on this portfolio or connect with me directly. I'm open to discussing UX/UI projects, design consulting, or team leadership opportunities.";
    }
    
    // Metrics and results
    if (message.includes('results') || message.includes('metrics') || message.includes('impact')) {
      return "My projects have delivered significant measurable impact: 40% reduction in user drop-offs, 60% reduction in manual work, 45% faster processing times, and consistent improvements in user satisfaction scores. I focus on both user experience and business outcomes.";
    }
    
    // Default responses
    const defaultResponses = [
      "That's a great question! I can tell you about specific projects like the Bank of America Bill Payment redesign or CYNC systems. What aspect interests you most?",
      "I'd be happy to share more details about my design process, tools, or specific case studies. What would you like to explore?",
      "My portfolio showcases work in financial services, enterprise software, and accessible design. Is there a particular area you'd like to know more about?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date()
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
        className={`fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl z-50 transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <Card className="h-full flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-portfolio-accent text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">Portfolio Assistant</span>
              <Badge variant="secondary" className="text-xs">AI</Badge>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-portfolio-accent text-white'
                        : 'bg-gray-100 text-portfolio-text-dark'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === 'ai' && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      {message.sender === 'user' && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      <p className="text-sm leading-relaxed">{message.content}</p>
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
                  onClick={handleSendMessage}
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
