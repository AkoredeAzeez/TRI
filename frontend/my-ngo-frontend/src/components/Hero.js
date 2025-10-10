import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

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
          Join us to give underprivileged children the tools to create their
          future
        </p>
        <div className="hero-buttons">
          <Link href="/donate" className="btn-futuristic">
            Donate Now
          </Link>
          <Link href="/volunteer" className="btn-ghost">
            Volunteer
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll-indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </a>
    </section>
  );
}
