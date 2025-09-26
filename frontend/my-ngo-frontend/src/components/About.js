'use client';
import { Heart, Globe, Zap, User } from 'lucide-react';

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

        {/* Founder Story Section */}
        <div className="founder-section">
          <div className="founder-content">
            <div className="founder-image-container">
              <div className="founder-placeholder-image">
                <User className="founder-icon" />
              </div>
            </div>
            <div className="founder-text-content">
              <div className="founder-header">
                <div className="icon-container story-icon">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="founder-title">Our Story</h3>
              </div>
              <p className="founder-description">
                In 2018, founder Olivia Eze participated in The Bridge Program, an entrepreneurial leadership training.
                Driven by many volunteer experiences and the awareness that Nigerian children were out of school due to financial constraints,
                she founded The Redraw Initiative. What began as a one-off project has evolved into a full-fledged organization,
                empowering children in Nigerian slums with art workshops and auctioning their work to cover tuition fees.
              </p>
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