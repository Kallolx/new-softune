'use client';

import { useState, useEffect } from 'react';
import { X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    
    // If no choice has been made, show the banner
    if (!cookieConsent) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div 
          className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-50 p-5 bg-white shadow-xl border border-gray-200 rounded-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <p className="text-sm text-black font-secondary pr-4 font-medium">
                This site uses cookies to improve your experience.
              </p>
              <button 
                onClick={handleDecline} 
                className="text-black/70 hover:text-black"
                aria-label="Close"
              >
                <X size={18} weight="bold" />
              </button>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={handleDecline}
                className="px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors rounded-sm font-secondary uppercase"
              >
                Decline
              </button>
              <button 
                onClick={handleAccept}
                className="px-4 py-2 text-xs font-bold text-white bg-black hover:bg-gray-800 transition-colors rounded-sm font-secondary uppercase"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 