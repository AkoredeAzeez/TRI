'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Stories', href: '#stories' },
    { name: 'Events', href: '#events' },
    { name: 'Donate', href: '#donate' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`navbar-container ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <nav className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="navbar-logo">
            <div className="navbar-logo-icon">
              <Image 
                src="https://res.cloudinary.com/demo/image/upload/v1632391898/logo_sample.png"
                alt="The Redraw Initiative Logo"
                width={24} 
                height={24} 
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white">The Redraw Initiative</span>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-menu">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="navbar-link"
                onClick={closeMobileMenu}
              >
                {link.name}
              </a>
            ))}
            
            {/* CTA Button */}
            <a 
              href="#donate" 
              className="bg-primary-gradient text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Donate Now
            </a>

            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full bg-glass-bg border border-glass-border flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full bg-glass-bg border border-glass-border flex items-center justify-content text-white hover:bg-orange-500 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 rounded-lg bg-glass-bg border border-glass-border flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`}
              >
                <path d={isMobileMenuOpen ? 'm6 6 12 12' : 'm3 6 18 0'} />
                <path d={isMobileMenuOpen ? 'm6 18 12-12' : 'm3 12 18 0'} className={isMobileMenuOpen ? 'opacity-0' : 'opacity-100'} />
                <path d={isMobileMenuOpen ? 'm6 18 12-12' : 'm3 18 18 0'} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="navbar-mobile-menu">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="navbar-link block py-2"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-glass-border">
                <a 
                  href="#donate" 
                  className="block w-full text-center bg-primary-gradient text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
                  onClick={closeMobileMenu}
                >
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}