'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  variant?: 'default' | 'white';
}

export default function Button({ href, children, icon, className = '', variant = 'default' }: ButtonProps) {
  const baseStyles = "relative block py-4 font-bold text-xl uppercase text-center";
  
  const variants = {
    default: "bg-black text-white overflow-hidden group",
    white: "bg-white text-black hover:bg-zinc-100 transition-colors duration-300"
  };

  return (
    <Link 
      href={href} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {variant === 'default' && (
        <span 
          className="absolute top-0 left-0 w-[20%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-10deg] transform -translate-x-full group-hover:translate-x-[500%] transition-transform duration-700 ease-out"
        ></span>
      )}
      
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