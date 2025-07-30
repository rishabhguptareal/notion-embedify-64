
import React from 'react';
import NotionEmbedder from '../components/NotionEmbedder';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useFadeIn } from '../utils/animations';

const EmbedTool = () => {
  const contentFadeIn = useFadeIn(300);
  
  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0f0] relative overflow-hidden">
      {/* Dotted background pattern */}
      <div className="absolute inset-0 w-full h-full" 
        style={{
          backgroundImage: 'radial-gradient(circle, #d0d0d0 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}>
      </div>
      
      <Navbar />

      <main className="flex-1 py-8 relative z-10">
        <div className="container px-4 mx-auto">
          <div className={`text-center my-8 ${contentFadeIn.className}`}>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              <span className="text-black">Frame Embedder Tool</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2 mb-8">
              Easily embed any web content into your site with our customizable frame embedder.
            </p>
          </div>
          
          <NotionEmbedder />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EmbedTool;
