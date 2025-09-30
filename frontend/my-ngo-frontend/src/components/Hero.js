import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-container-solid-bg">
      {/* Background image that shows through cutouts */}
      <div className="background-image"></div>
      
      
      {/* Content */}
      <div className="hero-content">
        <div className="hero-icon">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <h1 className="hero-title gradient-text">
          Empowering Children Through Art
        </h1>
        <p className="hero-subtitle">
          Join us to give underprivileged children the tools to create their future
        </p>
        <div className="hero-buttons">
          <button className="btn-futuristic">Donate Now</button>
          <button className="btn-ghost">Volunteer</button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="w-6 h-6">↓</div>
      </div>
    </section>
  );
}