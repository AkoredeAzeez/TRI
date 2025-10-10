'use client';
import Link from 'next/link';
import { Heart, Calendar, Gift, Wrench, ArrowRight } from 'lucide-react';

export default function DonateCTA() {
  const options = [
    { 
      title: "One-time Donation", 
      description: "Make an immediate impact with a single contribution",
      icon: <Heart className="w-6 h-6" />,
      iconClass: "donate-icon-primary"
    },
    { 
      title: "Monthly Giving", 
      description: "Provide ongoing support with recurring donations",
      icon: <Calendar className="w-6 h-6" />,
      iconClass: "donate-icon-secondary"
    },
    { 
      title: "Quarterly/Annual Support", 
      description: "Structured giving for larger impact",
      icon: <Gift className="w-6 h-6" />,
      iconClass: "donate-icon-primary"
    },
    { 
      title: "In-Kind Donations", 
      description: "Art supplies, materials, and equipment",
      icon: <Wrench className="w-6 h-6" />,
      iconClass: "donate-icon-gradient"
    },
  ];

  const usage = [
    "Art workshops and training programs",
    "Art materials and supplies",
    "Art exhibitions and showcases",
    "Operational expenses and program management",
    "Scholarship funding through art auction proceeds"
  ];

  return (
    <section id="donate" className="donate-section-container">
      <div className="container">
        <div className="donate-section-header">
          <h2 className="donate-section-title">Support Our Mission</h2>
          <div className="donate-section-gradient-line"></div>
          <p className="donate-section-subtitle">
            Your support enables us to continue empowering children through art education and creative expression.
          </p>
        </div>

        <div className="donate-grid-2">
          <div className="donate-fade-in-left">
            <div className="donate-card-base donate-card-hover">
              <h3>Donation Options</h3>
              <div className="donate-options-list">
                {options.map((opt, index) => (
                  <div 
                    key={opt.title} 
                    className="donate-option-item"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <div className={`donate-option-icon ${opt.iconClass}`}>
                      {opt.icon}
                    </div>
                    <div className="donate-option-content">
                      <h4 className="donate-option-title">
                        {opt.title}
                      </h4>
                      <p className="donate-option-description">{opt.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="donate-fade-in-right">
            <div className="donate-card-base donate-card-hover">
              <h3>How We Use Your Donations</h3>
              <div className="donate-feature-list">
                {usage.map((item, index) => (
                  <div 
                    key={item} 
                    className="donate-feature-item"
                    style={{animationDelay: `${0.2 + index * 0.1}s`}}
                  >
                    <div className="donate-feature-dot"></div>
                    <p className="donate-feature-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="donate-cta-wrapper donate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="donate-button-group">
            <Link href="/donate" className="donate-btn-primary">
              <span style={{ display: 'flex', alignItems: 'center' }}>
                Donate Now
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            <Link href="/volunteer" className="donate-btn-secondary">
              Learn More
            </Link>
          </div>
          
          <div className="donate-card-base donate-impact-message">
            <p>
              Every donation directly impacts a child&apos;s future through art education
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}