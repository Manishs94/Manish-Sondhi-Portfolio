
import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackDownloadCV } from '@/components/Analytics';
import { toast } from '@/hooks/use-toast';

const ResumeDownload = ({ className = "" }: { className?: string }) => {
  const handleDownload = () => {
    // Track the download event
    trackDownloadCV();
    
    // Google Drive direct download link
    const driveFileId = '1mh8jWf6acspgD7GOF8PW2OixRcL59zD5';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Manish_Sondhi_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success toast
    toast({
      title: "Resume Downloaded",
      description: "Thank you for your interest! The resume has been downloaded.",
    });
  };

  return (
    <Button 
      onClick={handleDownload}
      className={`portfolio-button-primary flex items-center gap-2 transition-all duration-300 hover:scale-105 ${className}`}
    >
      <Download className="w-4 h-4" />
      Download Resume
    </Button>
  );
};

export default ResumeDownload;
