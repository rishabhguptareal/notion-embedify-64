
import React, { useState, useEffect } from 'react';
import UrlInput from './UrlInput';
import PreviewFrame from './PreviewFrame';
import CopyButton from './CopyButton';
import CustomizationPanel from './CustomizationPanel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { generateEmbedCode, getEmbeddableNotionUrl, isValidNotionUrl } from '../utils/notionUtils';
import { useFadeIn } from '../utils/animations';

const NotionEmbedder: React.FC = () => {
  const [url, setUrl] = useState('');
  const [width, setWidth] = useState('100%');
  const [height, setHeight] = useState('500px');
  const [hideOutline, setHideOutline] = useState(false);
  const [embedCode, setEmbedCode] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  
  const mainFadeIn = useFadeIn(100);
  const contentFadeIn = useFadeIn(300);
  
  // Update embed code when options change
  useEffect(() => {
    if (url) {
      const code = generateEmbedCode(url, { 
        width, 
        height, 
        hideOutline 
      });
      setEmbedCode(code);
    }
  }, [url, width, height, hideOutline]);
  
  const handleUrlSubmit = (submittedUrl: string) => {
    if (!isValidNotionUrl(submittedUrl)) return;
    
    const embeddableUrl = getEmbeddableNotionUrl(submittedUrl);
    
    if (embeddableUrl) {
      setUrl(embeddableUrl);
      setShowPreview(true);
    }
  };
  
  return (
    <div className={`w-full max-w-5xl mx-auto px-4 ${mainFadeIn.className}`}>
      {!showPreview ? (
        <div className="mb-12">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Frame Embedder
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enter any URL below to create an embeddable frame for your website.
              Simple, elegant, and customizable.
            </p>
          </div>
          
          <div className="mt-10">
            <UrlInput onUrlSubmit={handleUrlSubmit} />
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/70 p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Easy to Embed</h3>
              <p className="text-gray-600 text-sm">Copy and paste any URL and get the embed code instantly.</p>
            </div>
            
            <div className="bg-white/70 p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V13" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.5 11.5L19 2M19 2H14M19 2V7" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Responsive</h3>
              <p className="text-gray-600 text-sm">Customize the width and height to fit perfectly on any website.</p>
            </div>
            
            <div className="bg-white/70 p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4.5V6.5M19.5 12H17.5M12 17.5V19.5M6.5 12H4.5M16.5 7.5L15 9M7.5 7.5L9 9M9 15L7.5 16.5M15 15L16.5 16.5M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Customizable</h3>
              <p className="text-gray-600 text-sm">Fine-tune your embed's appearance with easy-to-use controls.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={`space-y-8 ${contentFadeIn.className}`}>
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="preview" className="text-sm">Preview</TabsTrigger>
              <TabsTrigger value="code" className="text-sm">Embed Code</TabsTrigger>
            </TabsList>
            
            <TabsContent value="preview" className="mt-0">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-2/3 h-[500px]">
                  <PreviewFrame 
                    url={url} 
                    width={width} 
                    height={height} 
                    hideOutline={hideOutline} 
                  />
                </div>
                
                <div className="lg:w-1/3">
                  <CustomizationPanel 
                    width={width}
                    height={height}
                    hideOutline={hideOutline}
                    onWidthChange={setWidth}
                    onHeightChange={setHeight}
                    onHideOutlineChange={setHideOutline}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="code" className="mt-0">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-2/3">
                  <div className="subtle-card p-4 h-full bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl shadow-sm">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-auto max-h-[500px]">
                      <pre>{embedCode}</pre>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <CopyButton textToCopy={embedCode} />
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/3">
                  <CustomizationPanel 
                    width={width}
                    height={height}
                    hideOutline={hideOutline}
                    onWidthChange={setWidth}
                    onHeightChange={setHeight}
                    onHideOutlineChange={setHideOutline}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-center">
            <Button 
              onClick={() => {setShowPreview(false); setUrl('');}} 
              variant="outline" 
              className="text-gray-500 hover:text-gray-800 border-gray-300"
            >
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
                <path d="M2.5 2v6h6M21.5 22v-6h-6" />
                <path d="M22 11.5A10 10 0 0 0 3.2 7.2M2 12.5a10 10 0 0 0 18.8 4.2" />
              </svg>
              Start Over
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotionEmbedder;
