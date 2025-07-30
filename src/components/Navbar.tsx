
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton, UserButton, useAuth } from '@clerk/clerk-react';

const Navbar = () => {
  const { isSignedIn } = useAuth();
  
  return (
    <header className="py-4 relative z-10">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="flex">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full -ml-1"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full -ml-1"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full -ml-1"></div>
              </div>
              <span className="text-xl font-bold">Frame Embedder</span>
            </div>
          </Link>
          <div className="flex space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                Home
              </Button>
            </Link>
            <Link to="/embed-tool">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                Tool
              </Button>
            </Link>
            <Link to="#features">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                Features
              </Button>
            </Link>
            <Link to="#pricing">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Button>
            </Link>
            
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                    Sign in
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button size="sm" className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 shadow-sm rounded-full px-5">
                    Sign up
                  </Button>
                </SignUpButton>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
