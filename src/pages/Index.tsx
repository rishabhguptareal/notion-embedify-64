
import React from 'react';
import { Link } from 'react-router-dom';
import { useFadeIn } from '../utils/animations';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  const headerFadeIn = useFadeIn(100);
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
          <div className={`text-center my-16 ${contentFadeIn.className}`}>
            <h1 className="text-6xl font-bold tracking-tight mb-4">
              <span className="text-black">Embed content</span>
              <br/>
              <span className="text-gray-400">with a single click</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6 mb-10">
              Easily embed any web content into your site with our customizable frame embedder.
              No coding needed.
            </p>
            <Link to="/embed-tool">
              <Button className="rounded-full px-8 py-6 bg-blue-500 hover:bg-blue-600 text-white font-medium text-lg">
                Try it now
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            {/* Yellow Sticky Note */}
            <div className="transform rotate-6 md:translate-y-8">
              <div className="bg-yellow-200 p-6 rounded-md shadow-lg transform hover:-rotate-3 transition-transform">
                <div className="w-6 h-6 bg-red-500 rounded-full absolute -top-3 -right-3"></div>
                <h3 className="text-lg font-handwritten mb-2">
                  Quickly embed content from anywhere on the web with just a URL.
                </h3>
              </div>
            </div>
            
            {/* Middle Space */}
            <div className="flex items-center justify-center">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 gap-2">
                  <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                  <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                  <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
                  <div className="w-6 h-6 bg-gray-900 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Reminder Card */}
            <div className="transform -rotate-6 md:translate-y-4">
              <div className="bg-white p-5 rounded-lg shadow-lg transform hover:rotate-3 transition-transform">
                <h3 className="text-lg font-medium mb-3">Preview</h3>
                <div className="bg-gray-100 p-3 rounded-md mb-3">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600">🔍</span>
                    </div>
                    <div>
                      <p className="font-medium">Live Preview</p>
                      <p className="text-sm text-gray-500">See your embed in real-time</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-md text-sm text-blue-700 flex items-center">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                    <span>Instant updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            {/* Why Use Our Tool */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <h3 className="text-lg font-medium mb-4">Why Use Our Tool</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-md flex items-center justify-center text-white text-xs">1</div>
                      <p className="font-medium">Easy to Use</p>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-yellow-300 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-blue-300 rounded-full border-2 border-white"></div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">No complex setup or coding knowledge required. Just paste your URL and go.</p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center text-white text-xs">2</div>
                      <p className="font-medium">Fully Configurable</p>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-purple-300 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-pink-300 rounded-full border-2 border-white"></div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">Customize appearance and behavior to match your website perfectly.</p>
                </div>
              </div>
            </div>
            
            {/* Integrations Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <h3 className="text-lg font-medium mb-4">Works Everywhere</h3>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-3 rounded-lg shadow-md transform hover:scale-105 transition-transform">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h10v2H7z" />
                      <path d="M7 11h10v2H7z" />
                      <path d="M7 15h10v2H7z" />
                    </svg>
                  </div>
                  <p className="text-center text-sm font-medium">Static Sites</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow-md transform hover:scale-105 transition-transform">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <p className="text-center text-sm font-medium">WordPress</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow-md transform hover:scale-105 transition-transform">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                      <path d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z" />
                      <polygon points="10 15 15 12 10 9" />
                    </svg>
                  </div>
                  <p className="text-center text-sm font-medium">Any CMS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
