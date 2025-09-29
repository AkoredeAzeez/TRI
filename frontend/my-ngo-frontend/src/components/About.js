'use client';
import { Heart, Globe, Zap, User } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const values = ['Creativity', 'Empowerment', 'Community', 'Opportunity', 'Equity', 'Sustainability'];

  return (
    <section id="about" className="about-redesign">
      <div className="container">
        {/* Section Header */}
        <div className="about-header">
          <h2 className="about-main-title">
            About{' '}
            <span className="gradient-text">
              The Redraw Initiative
            </span>
          </h2>
          <div className="about-title-line"></div>
        </div>

        {/* Mission and Vision Cards */}
        <div className="mission-vision-grid">
          <div className="mission-card">
            <div className="card-header-section">
              <div className="icon-container mission-icon">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="card-title-text">Our Mission</h3>
            </div>
            <p className="card-description-text">
              The Redraw Initiative provides children from disadvantaged communities with access to artistic education,
              equipping them with painting and drawing skills to express their creativity. Through hands-on training,
              collaborative and individual projects, and an annual art auction, we enable children to develop confidence,
              build and grow art skills, fund their education and envision a future full of possibilities.
            </p>
          </div>

          <div className="vision-card">
            <div className="card-header-section">
              <div className="icon-container vision-icon">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="card-title-text">Our Vision</h3>
            </div>
            <p className="card-description-text">
              To inspire and empower underprivileged children through the transformative power of art, creating a world
              where every child has access to creative expression and the tools to build their dreams.
            </p>
          </div>
        </div>

        {/* Enhanced Founder Story Section */}
        <div className="founder-section">
          <div className="founder-hero-container">
            {/* Decorative Elements */}
            <div className="founder-decorative-bg">
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
              <div className="floating-shape shape-3"></div>
              <div className="paint-splash splash-1"></div>
              <div className="paint-splash splash-2"></div>
            </div>

            <div className="founder-content-grid">
              {/* Image Section with Enhanced Design */}
              <div className="founder-visual-section">
                <div className="founder-image-frame">
                  <div className="image-border-decoration"></div>
                  <Image 
                    src="/img/headshot.jpg"
                    alt="Olivia Eze - Founder of The Redraw Initiative"
                    width={320}
                    height={320}
                    className="founder-actual-image"
                    priority
                  />
                  <div className="image-overlay-pattern"></div>
                </div>
                
                {/* Quote Bubble */}
                <div className="founder-quote-bubble">
                  <div className="quote-content">
                    <span className="quote-mark"></span>
                    <p className="quote-text">Every child deserves the chance to paint their future</p>
                    <span className="quote-mark closing"></span>
                  </div>
                  <div className="quote-tail"></div>
                </div>
              </div>

              {/* Story Content with Timeline */}
              <div className="founder-story-section">
                <div className="story-header">
                  <div className="header-decoration">
                    <Zap className="story-icon-enhanced" />
                    <div className="icon-pulse"></div>
                  </div>
                  <div className="story-title-container">
                    <h3 className="story-main-title">Meet Olivia Eze</h3>
                    <p className="story-subtitle">Founder & Visionary</p>
                  </div>
                </div>

                {/* Timeline Story */}
                <div className="story-timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot dot-2018"></div>
                    <div className="timeline-content">
                      <span className="timeline-year">2018</span>
                      <p className="timeline-text">
                        Olivia participated in The Bridge Program, an entrepreneurial leadership training that ignited her passion for social change.
                      </p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-dot dot-inspiration"></div>
                    <div className="timeline-content">
                      <span className="timeline-year">The Spark</span>
                      <p className="timeline-text">
                        Through volunteer work, she witnessed firsthand how Nigerian children were denied education due to financial barriers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-dot dot-birth"></div>
                    <div className="timeline-content">
                      <span className="timeline-year">Birth of an Idea</span>
                      <p className="timeline-text">
                        The Redraw Initiative was born - combining art education with practical solutions to fund children's schooling.
                      </p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-dot dot-today"></div>
                    <div className="timeline-content">
                      <span className="timeline-year">Today</span>
                      <p className="timeline-text">
                        What started as a one-off project has blossomed into a full organization, transforming lives through art in Nigerian communities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Impact Stats */}
                <div className="founder-impact-stats">
                  <div className="stat-item">
                    <span className="stat-number">200+</span>
                    <span className="stat-label">Children Empowered</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-number">6</span>
                    <span className="stat-label">Years of Impact</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-number">∞</span>
                    <span className="stat-label">Dreams Unlocked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="values-section">
          <h3 className="values-title">Our Core Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div
                key={value}
                className="value-item"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="value-dot"></div>
                <h4 className="value-text">{value}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}