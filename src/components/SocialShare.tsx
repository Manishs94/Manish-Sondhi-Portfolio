
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
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually from your browser.",
        variant: "destructive",
      });
    }
  };

  const shareNatively = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
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
      >
        <Linkedin className="w-4 h-4" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={copyToClipboard}
        className="hover:text-gray-600"
      >
        <Link className="w-4 h-4" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={shareNatively}
        className="hover:text-portfolio-accent"
      >
        <Share2 className="w-4 h-4" />
      </Button>
    </div>
  );
};
