
import React, { useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail('');
    
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive design insights and updates in your inbox.",
    });

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-portfolio-accent to-blue-600 p-8 rounded-2xl text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white rounded-full p-3">
            <Check className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Welcome aboard!</h3>
        <p className="text-blue-100">Thanks for subscribing to design insights and updates.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-portfolio-accent to-blue-600 p-8 rounded-2xl">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <div className="bg-white/20 rounded-full p-3">
            <Mail className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Design Insights Newsletter</h3>
        <p className="text-blue-100">
          Get weekly insights on design trends, case studies, and creative processes directly in your inbox.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
        />
        <Button 
          type="submit" 
          disabled={isLoading}
          className="bg-white text-portfolio-accent hover:bg-white/90 disabled:opacity-50"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-portfolio-accent border-t-transparent" />
              Subscribing...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              Subscribe <Send className="w-4 h-4" />
            </div>
          )}
        </Button>
      </form>
      
      <p className="text-xs text-blue-100 mt-3 text-center">
        No spam, unsubscribe at any time. Read our privacy policy.
      </p>
    </div>
  );
};

export default NewsletterSignup;
