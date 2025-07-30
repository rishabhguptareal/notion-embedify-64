
import React, { useState } from 'react';
import { useFadeIn } from '../utils/animations';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  successMessage?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ 
  textToCopy,
  label = "Copy Code",
  successMessage = "Embed code copied to clipboard!"
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const fadeIn = useFadeIn(300);
  
  const handleCopy = () => {
    if (!textToCopy) return;
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        
        toast({
          title: "Success!",
          description: successMessage,
          duration: 3000,
        });
        
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
        
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to copy to clipboard",
          duration: 3000,
        });
      });
  };
  
  return (
    <Button
      onClick={handleCopy}
      className={`${fadeIn.className} apple-button group transition-all duration-300 relative overflow-hidden`}
      disabled={!textToCopy}
    >
      <span className={`inline-flex items-center transition-transform duration-300 ${isCopied ? 'transform -translate-y-full opacity-0' : ''}`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="mr-2"
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
        {label}
      </span>
      
      <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isCopied ? 'transform translate-y-0' : 'transform translate-y-full opacity-0'}`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="mr-2"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
        Copied!
      </span>
    </Button>
  );
};

export default CopyButton;
