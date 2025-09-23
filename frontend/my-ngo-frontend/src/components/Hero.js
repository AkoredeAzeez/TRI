'use client';
// components/Hero.jsx
import { Sparkles } from 'lucide-react';
export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-background" />
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
    </section>
  );
}