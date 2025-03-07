'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { HyperText } from '../components/ui/HyperText';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-0 px-0 fixed w-full top-0 z-50 shadow-sm font-secondary h-20">
      <div className="w-full flex justify-between items-center h-full">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-black uppercase px-8 group">
          <HyperText 
            className="text-3xl py-0 font-bold text-black uppercase font-secondary" 
            duration={600}
            as="span"
          >
            SofTune
          </HyperText>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <NavLink href="/#features" width={120}>FEATURES</NavLink>
          <NavLink href="/#pricing" width={100}>PRICING</NavLink>
          <NavLink href="/#about" width={90}>ABOUT</NavLink>
          <NavLink href="/#contact" width={110}>CONTACT</NavLink>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block h-full">
          <Link 
            href="/signup" 
            className="bg-white text-black h-full px-8 flex items-center justify-center space-x-2 hover:bg-black hover:text-white transition-colors group"
          >
            <span className="font-bold text-xl uppercase font-secondary group-hover:text-white transition-colors">
              START NOW
            </span>
            <ArrowRight 
              className="w-6 h-6 text-black group-hover:text-white transition-colors" 
              weight="bold"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black px-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <span className="text-3xl">✕</span>
          ) : (
            <span className="text-3xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-6 px-8">
          <div className="flex flex-col space-y-6">
            <NavLink href="/#features" onClick={() => setIsMenuOpen(false)}>FEATURES</NavLink>
            <NavLink href="/#pricing" onClick={() => setIsMenuOpen(false)}>PRICING</NavLink>
            <NavLink href="/#about" onClick={() => setIsMenuOpen(false)}>ABOUT</NavLink>
            <NavLink href="/#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</NavLink>
            <div className="pt-6">
              <Link 
                href="/signup" 
                className="bg-black text-white h-16 w-full flex items-center justify-center space-x-2 hover:bg-white hover:text-black transition-colors group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="font-bold text-xl uppercase font-secondary text-white group-hover:text-black transition-colors">
                  START NOW
                </span>
                <ArrowRight 
                  className="w-6 h-6 text-white group-hover:text-black transition-colors" 
                  weight="bold"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ 
  href, 
  children, 
  onClick,
  width = 'auto'
}: { 
  href: string; 
  children: React.ReactNode;
  onClick?: () => void;
  width?: number | string;
}) {
  const widthStyle = typeof width === 'number' ? `${width}px` : width;
  
  return (
    <Link 
      href={href} 
      className={`text-black font-bold text-lg uppercase hover:text-gray-600 transition-colors group block text-center`}
      onClick={onClick}
      style={{ width: widthStyle }}
    >
      {typeof children === 'string' ? (
        <div className="overflow-hidden">
          <HyperText 
            className="text-lg py-0 font-bold text-black group-hover:text-gray-600 font-secondary" 
            duration={400}
            as="span"
          >
            {children}
          </HyperText>
        </div>
      ) : (
        children
      )}
    </Link>
  );
} 