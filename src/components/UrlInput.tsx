
import React, { useState, useEffect } from 'react';
import { isValidNotionUrl } from '../utils/notionUtils';
import { useFadeIn } from '../utils/animations';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface UrlInputProps {
  onUrlSubmit: (url: string) => void;
}

const UrlInput: React.FC<UrlInputProps> = ({ onUrlSubmit }) => {
  const [url, setUrl] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const fadeIn = useFadeIn(100);
  
  useEffect(() => {
    if (url.trim() === '') {
      setIsValid(null);
      return;
    }
    
    setIsValid(isValidNotionUrl(url));
  }, [url]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onUrlSubmit(url);
    }
  };
  
  const getInputBorderClass = () => {
    if (isValid === null) return '';
    return isValid 
      ? 'border-green-400 focus:border-green-500 focus:ring-green-200' 
      : 'border-red-400 focus:border-red-500 focus:ring-red-200';
  };
  
  return (
    <div className={`${fadeIn.className} transition-all duration-300 ease-in-out`}>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative flex items-center max-w-3xl mx-auto">
          <div className="relative flex-1">
            <Input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Enter any URL to embed..."
              className={`w-full subtle-input text-lg pl-4 pr-12 py-6 h-16 rounded-l-2xl rounded-r-none ${getInputBorderClass()}`}
              aria-label="URL to embed"
            />
            
            {isValid !== null && (
              <div 
                className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isValid ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {isValid ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-scale-in">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-scale-in">
                    <path d="m18 6-12 12" />
                    <path d="m6 6 12 12" />
                  </svg>
                )}
              </div>
            )}
          </div>
          
          <Button 
            type="submit"
            disabled={!isValid}
            className={`apple-button min-h-16 rounded-l-none rounded-r-2xl px-8 font-medium text-lg transition-all ${
              isValid ? 'bg-primary hover:bg-primary/90' : 'bg-gray-400'
            }`}
          >
            Embed
          </Button>
        </div>
        
        {isValid === false && (
          <p className="text-red-500 mt-2 text-sm animate-fade-in ml-2">
            Please enter a valid URL (e.g., https://example.com)
          </p>
        )}
      </form>
    </div>
  );
};

export default UrlInput;
