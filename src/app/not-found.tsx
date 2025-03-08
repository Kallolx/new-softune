'use client';

import { ArrowLeft, Warning } from "@phosphor-icons/react";
import Button from "./components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-zinc-900 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-800 rounded-full blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
          {/* Error Badge */}
          <div className="inline-flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full">
            <Warning weight="fill" className="w-5 h-5 text-zinc-400" />
            <span className="text-sm font-sans text-zinc-400 font-medium">404 Error</span>
          </div>

          {/* Main Content */}
          <h1 className="font-secondary text-6xl md:text-8xl font-bold text-white tracking-[-0.06em]">
            Page Not Found
          </h1>

          <p className="font-sans text-zinc-400 text-lg md:text-xl max-w-xl">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Button 
              href="/"
              variant="white"
              className="px-8 font-sans"
              icon={<ArrowLeft className="w-5 h-5" />}
            >
              Back to Home
            </Button>
          </div>

          {/* Large 404 Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
            <span className="font-secondary text-[20rem] md:text-[30rem] font-bold text-white">
              404
            </span>
          </div>
        </div>
      </div>
    </main>
  );
} 