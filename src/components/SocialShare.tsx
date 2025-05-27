
import React from 'react';
import { Share2, Linkedin, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface SocialShareProps {
  title?: string;
  description?: string;
  url?: string;
  hashtags?: string[];
}

export const SocialShare: React.FC<SocialShareProps> = ({
  title = "Check out this amazing UX portfolio",
  description = "Manish Sondhi's Product & UX Design Portfolio",
  url = window.location.href,
  hashtags = ['UXDesign', 'ProductDesign', 'Portfolio']
}) => {
  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "The portfolio link has been copied to your clipboard.",
      });
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually from your browser.",
        variant: "destructive",
      });
    }
  };

  const shareNatively = async () => {
    console.log('Native share button clicked');
    
    // Check if Web Share API is supported
    if (navigator.share) {
      console.log('Web Share API is supported');
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
        console.log('Share successful');
        toast({
          title: "Shared successfully!",
          description: "Thank you for sharing the portfolio!",
        });
      } catch (err) {
        console.log('Share cancelled or failed:', err);
        // Only show error if it's not a user cancellation
        if (err.name !== 'AbortError') {
          toast({
            title: "Share failed",
            description: "Unable to share. Link copied to clipboard instead.",
          });
          copyToClipboard();
        }
      }
    } else {
      console.log('Web Share API not supported, falling back to clipboard');
      toast({
        title: "Share not supported",
        description: "Link copied to clipboard instead.",
      });
      copyToClipboard();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Share:</span>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={shareOnLinkedIn}
        className="hover:text-blue-600"
        title="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={copyToClipboard}
        className="hover:text-gray-600"
        title="Copy link to clipboard"
      >
        <Link className="w-4 h-4" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={shareNatively}
        className="hover:text-portfolio-accent"
        title="Share with other apps"
      >
        <Share2 className="w-4 h-4" />
      </Button>
    </div>
  );
};
