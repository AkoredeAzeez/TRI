'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const throttledHandleScroll = throttle(handleScroll, 16);
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Stories', href: '#stories' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`navbar-header ${isVisible ? 'navbar-visible' : 'navbar-hidden'} ${
        isScrolled ? 'navbar-scrolled' : 'navbar-transparent'
      }`}
    >
      <nav className="navbar-nav">
        <div className="navbar-content">
          
          {/* Logo */}
          <div className="navbar-logo-section">
            <a 
              href="#home" 
              onClick={() => handleNavClick('#home')}
              className="navbar-logo-link"
            >
              <div className="navbar-logo-image">
                <Image 
                  src="/img/redraw-logo.png"
                  alt="Redraw Logo"
                  width={100}
                  height={60}
                  priority
                />
              </div>
              <span className="navbar-brand-name navbar-brand-desktop">THE REDRAW INITIATIVE</span>
              <span className="navbar-brand-name navbar-brand-mobile">TRI</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-desktop-menu">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`navbar-link ${
                  isScrolled ? 'navbar-link-scrolled' : 'navbar-link-transparent'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Donate Button */}
          <div className="navbar-donate-desktop">
            <button
              onClick={() => handleNavClick('#donate')}
              className="navbar-donate-btn"
            >
              Donate
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`navbar-mobile-toggle ${
              isScrolled ? 'navbar-mobile-toggle-scrolled' : 'navbar-mobile-toggle-transparent'
            }`}
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className={`navbar-hamburger-icon ${isMobileMenuOpen ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* Close icon */}
            <svg
              className={`navbar-hamburger-icon ${isMobileMenuOpen ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="navbar-mobile-menu">
            <div className="navbar-mobile-menu-content">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="navbar-mobile-link"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#donate')}
                className="navbar-mobile-donate"
              >
                Donate
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}