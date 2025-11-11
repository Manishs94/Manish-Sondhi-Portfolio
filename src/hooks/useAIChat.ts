
import { useState, useCallback } from 'react';
import { aiService } from '@/lib/ai-service';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isLoading?: boolean;
}

export const useAIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your AI portfolio assistant powered by AWS Bedrock. I can help answer questions about projects, experience, and expertise. What would you like to know?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  const addMessage = useCallback(async (content: string, sender: 'user' | 'ai') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);

    if (sender === 'user') {
      setIsProcessing(true);
      // Add loading message
      const loadingMessage: Message = {
        id: 'loading',
        content: '...',
        sender: 'ai',
        timestamp: new Date(),
        isLoading: true
      };
      setMessages(prev => [...prev, loadingMessage]);

      try {
        const aiResponse = await aiService.generateResponse(content);
        // Replace loading message with actual response
        setMessages(prev => prev.filter(m => m.id !== 'loading').concat({
          id: Date.now().toString(),
          content: aiResponse,
          sender: 'ai',
          timestamp: new Date()
        }));
      } catch (error) {
        console.error('Error getting AI response:', error);
        setMessages(prev => prev.filter(m => m.id !== 'loading').concat({
          id: Date.now().toString(),
          content: "I apologize, but I'm having trouble processing your request at the moment.",
          sender: 'ai',
          timestamp: new Date()
        }));
      } finally {
        setIsProcessing(false);
      }
    }
    
    return newMessage;
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: '1',
        content: "Hi! I'm your AI portfolio assistant powered by AWS Bedrock. I can help answer questions about projects, experience, and expertise. What would you like to know?",
        sender: 'ai',
        timestamp: new Date()
      }
    ]);
  }, []);

  return {
    messages,
    addMessage,
    clearMessages
  };
};
