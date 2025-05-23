
import { useState, useCallback } from 'react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export const useAIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your AI portfolio assistant. I can help answer questions about projects, experience, and expertise. What would you like to know?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);

  const addMessage = useCallback((content: string, sender: 'user' | 'ai') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: '1',
        content: "Hi! I'm your AI portfolio assistant. I can help answer questions about projects, experience, and expertise. What would you like to know?",
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
