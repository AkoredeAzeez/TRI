import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-container-solid-bg">
      {/* Background image that shows through cutouts */}
      <div className="background-image"></div>
      
      {/* Individual cutout windows */}
      <div className="cutout-windows">
        <div className="cutout-window cutout-1"></div>
        <div className="cutout-window cutout-2"></div>
        <div className="cutout-window cutout-3"></div>
        <div className="cutout-window cutout-4"></div>
        <div className="cutout-window cutout-5"></div>
        <div className="cutout-window cutout-6"></div>
        <div className="cutout-window cutout-7"></div>
        <div className="cutout-window cutout-8"></div>
        <div className="cutout-window cutout-9"></div>
        <div className="cutout-window cutout-10"></div>
        <div className="cutout-window cutout-11"></div>
        <div className="cutout-window cutout-12"></div>
      </div>
      
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

      <style jsx>{`
        /* ===== HERO COMPONENTS ===== */
        .hero-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #fcf9f9;
        }

        .hero-container-solid-bg {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #fcf9f9; /* White background */
        }

        /* Background image layer (hidden by default) */
        .background-image {
          position: absolute;
          inset: 0;
          background-image: url('/img/hero-background.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          z-index: 1;
          opacity: 0; /* Hidden, only visible through cutout windows */
        }

        /* Individual cutout windows */
        .cutout-windows {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
        }

        .cutout-window {
          position: absolute;
          background-size: cover;
          background-position: center;
          background-attachment: scroll; /* Changed from fixed */
          border-radius: 50% 30% 70% 40%;
          animation: float 8s ease-in-out infinite;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          border: 4px solid rgba(255, 255, 255, 0.9);
          transition: all 0.3s ease;
        }

        .cutout-1 {
          background-image: url('/img/hero-background.jpg');
          background-position: center 20%; /* Different positioning */
        }

        .cutout-2 {
          background-image: url('/img/hero-background.jpg');
          background-position: center 70%; /* Different positioning */
        }

        .cutout-3 {
          background-image: url('/img/hero-background.jpg');
          background-position: left center; /* Different positioning */
        }

        .cutout-4 {
          background-image: url('/img/hero-background.jpg');
          background-position: right center; /* Different positioning */
        }

        .cutout-5 {
          background-image: url('/img/hero-background.jpg');
          background-position: center 40%; /* Different positioning */
        }

        .cutout-6 {
          background-image: url('/img/hero-background.jpg');
          background-position: center 80%; /* Different positioning */
        }

        .cutout-7 {
          background-image: url('/img/hero-background.jpg');
          background-position: left 30%; /* Different positioning */
        }

        .cutout-8 {
          background-image: url('/img/hero-background.jpg');
          background-position: right 60%; /* Different positioning */
        }

        .cutout-9 {
          background-image: url('/img/hero-background.jpg');
          background-position: center 10%; /* Different positioning */
        }

        .cutout-10 {
          background-image: url('/img/hero-background.jpg');
          background-position: center 90%; /* Different positioning */
        }

        .cutout-11 {
          background-image: url('/img/hero-background.jpg');
          background-position: left 70%; /* Different positioning */
        }

        .cutout-12 {
          background-image: url('/img/hero-background.jpg');
          background-position: right 30%; /* Different positioning */
        }

        .cutout-1 {
          width: 180px;
          height: 220px;
          top: 15%;
          left: 10%;
          animation-delay: 0s;
          border-radius: 60% 40% 30% 70%;
        }

        .cutout-2 {
          width: 160px;
          height: 200px;
          top: 20%;
          right: 15%;
          animation-delay: -1s;
          border-radius: 30% 70% 60% 40%;
        }

        .cutout-3 {
          width: 200px;
          height: 180px;
          bottom: 25%;
          left: 8%;
          animation-delay: -2s;
          border-radius: 70% 30% 40% 60%;
        }

        .cutout-4 {
          width: 140px;
          height: 190px;
          bottom: 30%;
          right: 20%;
          animation-delay: -3s;
          border-radius: 40% 60% 70% 30%;
        }

        .cutout-5 {
          width: 170px;
          height: 150px;
          top: 50%;
          left: 50%;
          transform: translateX(-50%);
          animation-delay: -4s;
          border-radius: 50% 50% 30% 70%;
        }

        .cutout-6 {
          width: 120px;
          height: 160px;
          top: 40%;
          right: 8%;
          animation-delay: -5s;
          border-radius: 70% 30% 50% 50%;
        }

        .cutout-7 {
          width: 110px;
          height: 140px;
          top: 35%;
          left: 25%;
          animation-delay: -1.5s;
          border-radius: 40% 70% 50% 30%;
        }

        .cutout-8 {
          width: 130px;
          height: 170px;
          bottom: 40%;
          left: 40%;
          animation-delay: -2.5s;
          border-radius: 60% 40% 80% 20%;
        }

        .cutout-9 {
          width: 90px;
          height: 120px;
          top: 60%;
          right: 35%;
          animation-delay: -3.5s;
          border-radius: 80% 20% 40% 60%;
        }

        .cutout-10 {
          width: 150px;
          height: 130px;
          bottom: 15%;
          right: 40%;
          animation-delay: -4.5s;
          border-radius: 30% 70% 30% 70%;
        }

        .cutout-11 {
          width: 100px;
          height: 110px;
          top: 25%;
          left: 35%;
          animation-delay: -0.5s;
          border-radius: 70% 30% 60% 40%;
        }

        .cutout-12 {
          width: 80px;
          height: 100px;
          bottom: 50%;
          right: 50%;
          animation-delay: -5.5s;
          border-radius: 50% 50% 70% 30%;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(1deg);
          }
          50% {
            transform: translateY(-20px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(224, 145, 50, 0.1); /* Very light apricot overlay */
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 40px 24px;
          max-width: 1200px;
          margin: 0 auto;
          background: rgba(252, 249, 249, 0.85);
          backdrop-filter: blur(0px);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .hero-icon {
          width: 100px;
          height: 100px;
          margin: 0 auto 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e09132; /* Apricot background */
          color: #fcf9f9; /* White icon color */
          border: 5px solid #e09132;
          box-shadow: 0 0 30px rgba(224, 145, 50, 0.8);
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 30px rgba(224, 145, 50, 0.8);
          }
          50% {
            box-shadow: 0 0 40px rgba(224, 145, 50, 1);
          }
        }

        .hero-title {
          font-family: 'Cherish', 'Dancing Script', 'Great Vibes', cursive, serif;
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 300;
          color: #e09132; /* Pure apricot text */
          margin-bottom: 24px;
          line-height: 1.1;
          animation: slideUp 1s ease-out forwards;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 4vw, 1.5rem);
          color: #e09132; /* Pure apricot text */
          font-weight: 600;
          margin-bottom: 48px;
          max-width: 768px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
          animation: slideUp 1s ease-out 0.2s both;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 24px;
          justify-content: center;
          align-items: center;
          animation: slideUp 1s ease-out 0.4s both;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .btn-futuristic {
          background: #e09132; /* Apricot background */
          color: #fcf9f9; /* White text */
          padding: 16px 32px;
          border: 3px solid #e09132;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(224, 145, 50, 0.4);
        }

        .btn-futuristic:hover {
          background: #424530; /* Fern background on hover */
          color: #fcf9f9; /* White text on hover */
          border-color: #424530;
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(66, 69, 48, 0.4);
        }

        .btn-ghost {
          background: transparent;
          color: #e09132; /* Pure apricot text */
          padding: 16px 32px;
          border: 2px solid #e09132; /* Pure apricot border */
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-ghost:hover {
          background: #e09132;
          color: #fcf9f9;
          transform: translateY(-2px);
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
          color: #fcf9f9; /* White color */
          background: #424530; /* Fern background */
          padding: 12px;
          border-radius: 50%;
          border: 2px solid #424530;
          z-index: 10;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        /* Desktop: Enable parallax effect */
        @media (min-width: 768px) {
          .hero-buttons {
            flex-direction: row;
          }
          
          .hero-content {
            margin: 40px;
          }
        }

        /* Mobile adjustments - More beautiful and fuller design */
        @media (max-width: 768px) {
          .hero-content {
            padding: 40px 20px;
            margin: 20px;
          }
          
          .hero-icon {
            width: 90px;
            height: 90px;
            margin-bottom: 28px;
          }
          
          .hero-title {
            margin-bottom: 20px;
            font-size: clamp(2.5rem, 10vw, 4rem);
          }
          
          .hero-subtitle {
            margin-bottom: 40px;
            font-size: clamp(1.1rem, 5vw, 1.4rem);
          }

          .cutout-window {
            background-attachment: scroll;
            border: 3px solid rgba(255, 255, 255, 0.95);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
          }

          /* Larger, more prominent cutouts for tablets */
          .cutout-1 {
            width: 140px;
            height: 170px;
            top: 12%;
            left: 8%;
          }

          .cutout-2 {
            width: 120px;
            height: 150px;
            top: 18%;
            right: 10%;
          }

          .cutout-3 {
            width: 150px;
            height: 140px;
            bottom: 22%;
            left: 5%;
          }

          .cutout-4 {
            width: 110px;
            height: 140px;
            bottom: 28%;
            right: 15%;
          }

          .cutout-5 {
            width: 130px;
            height: 120px;
            top: 45%;
            left: 45%;
          }

          .cutout-6 {
            width: 100px;
            height: 130px;
            top: 35%;
            right: 5%;
          }

          .cutout-7 {
            width: 95px;
            height: 115px;
            top: 30%;
            left: 20%;
          }

          .cutout-8 {
            width: 105px;
            height: 125px;
            bottom: 35%;
            left: 35%;
          }

          .cutout-9 {
            width: 85px;
            height: 105px;
            top: 55%;
            right: 30%;
          }

          .cutout-10 {
            width: 115px;
            height: 100px;
            bottom: 12%;
            right: 35%;
          }

          .cutout-11 {
            width: 90px;
            height: 95px;
            top: 20%;
            left: 30%;
          }

          .cutout-12 {
            width: 75px;
            height: 90px;
            bottom: 45%;
            right: 45%;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            padding: 0 16px;
            position: relative;
            background: rgba(252, 249, 249, 0.85);
            backdrop-filter: blur(0px);
            border-radius: 20px;
            margin: 20px;
            padding: 40px 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }
          
          .hero-icon {
            width: 80px;
            height: 80px;
            margin-bottom: 24px;
          }
          
          .hero-title {
            font-size: clamp(2.2rem, 12vw, 3.5rem);
            margin-bottom: 18px;
          }

          .hero-subtitle {
            font-size: clamp(1rem, 6vw, 1.3rem);
            margin-bottom: 35px;
          }

          .cutout-window {
            background-attachment: scroll;
            border: 2px solid rgba(255, 255, 255, 1);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          }

          /* More cutouts for mobile - fuller coverage */
          .cutout-1 {
            width: 100px;
            height: 120px;
            top: 8%;
            left: 5%;
          }

          .cutout-2 {
            width: 90px;
            height: 110px;
            top: 15%;
            right: 8%;
          }

          .cutout-3 {
            width: 110px;
            height: 100px;
            bottom: 25%;
            left: 3%;
          }

          .cutout-4 {
            width: 80px;
            height: 100px;
            bottom: 30%;
            right: 12%;
          }

          .cutout-5 {
            width: 95px;
            height: 85px;
            top: 40%;
            left: 42%;
          }

          .cutout-6 {
            width: 70px;
            height: 90px;
            top: 32%;
            right: 3%;
          }

          .cutout-7 {
            width: 75px;
            height: 85px;
            top: 25%;
            left: 18%;
          }

          .cutout-8 {
            width: 85px;
            height: 95px;
            bottom: 35%;
            left: 28%;
          }

          .cutout-9 {
            width: 65px;
            height: 80px;
            top: 50%;
            right: 25%;
          }

          .cutout-10 {
            width: 90px;
            height: 75px;
            bottom: 15%;
            right: 28%;
          }

          .cutout-11 {
            width: 70px;
            height: 75px;
            top: 18%;
            left: 25%;
          }

          .cutout-12 {
            width: 60px;
            height: 70px;
            bottom: 40%;
            right: 40%;
          }

          /* Add more mobile-specific cutouts for fuller look */
          .cutout-windows::after {
            content: '';
            position: absolute;
            width: 55px;
            height: 65px;
            background-image: url('/img/hero-background.jpg');
            background-size: cover;
            background-position: center;
            border-radius: 60% 40% 80% 20%;
            top: 60%;
            left: 8%;
            animation: float 7s ease-in-out infinite;
            animation-delay: -6s;
            border: 2px solid rgba(255, 255, 255, 1);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          }

          .cutout-windows::before {
            content: '';
            position: absolute;
            width: 65px;
            height: 55px;
            background-image: url('/img/hero-background.jpg');
            background-size: cover;
            background-position: center;
            border-radius: 40% 60% 30% 70%;
            bottom: 50%;
            right: 8%;
            animation: float 6s ease-in-out infinite;
            animation-delay: -7s;
            border: 2px solid rgba(255, 255, 255, 1);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          }
        }

        /* High resolution displays */
        @media (min-width: 1920px) {
          /* No background adjustments needed for solid background */
        }

        /* Portrait orientation adjustments */
        @media (orientation: portrait) and (max-width: 768px) {
          .hero-container-solid-bg {
            min-height: 100vh;
          }
        }

        /* Landscape orientation adjustments */
        @media (orientation: landscape) and (max-height: 500px) {
          .hero-container-solid-bg {
            min-height: 100vh;
          }
          
          .hero-content {
            padding: 40px 24px;
          }
          
          .hero-icon {
            width: 60px;
            height: 60px;
            margin-bottom: 16px;
          }
          
          .cutout-shape {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}