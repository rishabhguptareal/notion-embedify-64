
import React, { useState, useEffect } from 'react';
import { useFadeIn } from '../utils/animations';

interface PreviewFrameProps {
  url: string;
  width: string;
  height: string;
  hideOutline: boolean;
}

const PreviewFrame: React.FC<PreviewFrameProps> = ({ 
  url, 
  width, 
  height, 
  hideOutline 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const fadeIn = useFadeIn(200);
  
  // Reset loading state when URL changes
  useEffect(() => {
    setIsLoading(true);
  }, [url]);
  
  const handleLoad = () => {
    setIsLoading(false);
  };
  
  return (
    <div className={`${fadeIn.className} transition-all duration-500 w-full h-full flex flex-col bg-white rounded-xl shadow-lg overflow-hidden`}>
      <div className="p-3 bg-gray-50 border-b border-gray-200 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 text-center text-sm font-medium text-gray-500 truncate px-4">
          Preview: {url}
        </div>
      </div>
      
      <div className="relative flex-1 bg-white overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-blue-300 border-t-blue-500 rounded-full animate-spin mb-4"></div>
              <p className="text-sm text-gray-500">Loading preview...</p>
              <p className="text-xs text-gray-400 mt-2 max-w-xs text-center">
                Note: Some websites may block iframe embedding due to security settings
              </p>
            </div>
          </div>
        )}
        
        <iframe
          src={url}
          width={width}
          height={height}
          style={{ 
            border: hideOutline ? 'none' : '1px solid rgba(0,0,0,0.05)',
            width: '100%',
            height: '100%',
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
          onLoad={handleLoad}
          title="Embedded Content Preview"
          className="bg-white"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </div>
    </div>
  );
};

export default PreviewFrame;
