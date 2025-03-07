'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export default function Button({ href, children, icon, className = '' }: ButtonProps) {
  return (
    <Link 
      href={href} 
      className={`relative block w-full bg-black text-white py-4 font-bold text-xl uppercase text-center overflow-hidden group tracking-[-0.04em] ${className}`}
    >
      {/* Shine effect */}
      <span 
        className="absolute top-0 left-0 w-[20%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-10deg] transform -translate-x-full group-hover:translate-x-[500%] transition-transform duration-700 ease-out"
      ></span>
      
      {/* Text and icon container */}
      <span className="relative z-10 flex items-center justify-center">
        <span className="font-bold">{children}</span>
        {icon && (
          <span className="ml-2">
            {icon}
          </span>
        )}
      </span>
    </Link>
  );
} 