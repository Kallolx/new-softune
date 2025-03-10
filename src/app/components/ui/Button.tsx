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
  const baseStyles = "relative block py-4 px-8 font-bold text-xl uppercase text-center overflow-hidden";
  
  const variants = {
    default: "bg-black text-white group hover:text-white before:absolute before:inset-0 before:bg-[#ff4d00] before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-700 before:ease-out",
    white: "bg-[#ff4d00] text-white group hover:text-[#ff4d00] before:absolute before:inset-0 before:bg-white before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-700 before:ease-out"
  };

  return (
    <Link 
      href={href} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Text and icon container */}
      <span className="relative z-10 flex items-center justify-center transition-colors duration-500">
        <span className="font-bold">{children}</span>
        {icon && (
          <span className="ml-2 transition-transform duration-500 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </Link>
  );
} 