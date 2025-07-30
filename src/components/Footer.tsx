
import React from 'react';
import { useFadeIn } from '../utils/animations';

const Footer = () => {
  const fadeIn = useFadeIn(500);
  
  return (
    <footer className={`py-8 relative z-10 ${fadeIn.className} bg-white/70 backdrop-blur-sm border-t border-gray-100`}>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full -ml-1"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full -ml-1"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full -ml-1"></div>
              </div>
              <span className="text-lg font-bold">Frame Embedder</span>
            </div>
            <p className="text-sm text-gray-500">
              Transform any URL into beautiful embeds for your website. Designed with precision and simplicity in mind.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-gray-700">Product</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900">Features</a></li>
              <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900">Integrations</a></li>
              <li><a href="#" className="hover:text-gray-900">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-gray-700">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-gray-700">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-900">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Frame Embedder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
