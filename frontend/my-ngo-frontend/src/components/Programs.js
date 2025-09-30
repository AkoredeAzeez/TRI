'use client';
import Image from 'next/image';
import { Palette, Award, Heart, Users, Zap } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      title: "Art Workshops",
      description: "Regular hands-on training sessions where children learn painting and drawing techniques while expressing their creativity through guided instruction and free exploration.",
      image: "https://res.cloudinary.com/demo/image/upload/v1632391898/artwork_sample.jpg",
      icon: <Palette className="w-6 h-6" />,
      features: ["Weekly sessions", "Professional guidance", "All materials provided", "Age-appropriate techniques"],
      stats: { number: "50+", label: "Children trained monthly" }
    },
    {
      title: "Art Exhibitions",
      description: "Showcasing children's artwork to the community and potential buyers, building confidence and providing exposure while celebrating their creative achievements.",
      image: "https://res.cloudinary.com/demo/image/upload/v1632391898/artwork_sample2.jpg",
      icon: <Award className="w-6 h-6" />,
      features: ["Community showcases", "Art sales platform", "Confidence building", "Public recognition"],
      stats: { number: "12+", label: "Exhibitions annually" }
    },
    {
      title: "Benevolence Days",
      description: "Special community outreach events where we extend our support beyond art education to address broader needs and strengthen community bonds.",
      image: "https://res.cloudinary.com/demo/image/upload/v1632391898/artwork_sample3.jpg",
      icon: <Heart className="w-6 h-6" />,
      features: ["Community outreach", "Family support", "Basic needs assistance", "Social connection"],
      stats: { number: "200+", label: "Families supported" }
    },
    {
      title: "One Child Per Year Scholarship",
      description: "Annual scholarship program providing full educational support to one deserving child through art auction proceeds, changing lives through education.",
      image: "https://res.cloudinary.com/demo/image/upload/v1632391898/artwork_sample4.jpg",
      icon: <Users className="w-6 h-6" />,
      features: ["Full tuition coverage", "Educational materials", "Mentorship program", "Long-term support"],
      stats: { number: "5", label: "Lives transformed" }
    },
    {
      title: "Neurobridge",
      description: "Learning disability diagnosis and reasonable adjustments program to ensure inclusive art education for all children, regardless of their learning differences.",
      image: "https://res.cloudinary.com/demo/image/upload/v1632391898/artwork_sample5.jpg",
      icon: <Zap className="w-6 h-6" />,
      features: ["Professional assessment", "Personalized learning", "Adaptive techniques", "Inclusive environment"],
      stats: { number: "100%", label: "Inclusivity commitment" }
    }
  ];

  return (
    <section id="programs" className="programs-section-container">
      <div className="container">
        <div className="programs-section-header">
          <h2 className="programs-section-title">Our Programs</h2>
          <div className="programs-section-gradient-line"></div>
          <p className="programs-section-subtitle">
            We offer comprehensive programs designed to nurture creativity, provide educational opportunities, and transform lives through the power of art.
          </p>
        </div>

        <div className="programs-grid-3 programs-stagger-children">
          {programs.map((program, index) => (
            <div key={index} className="programs-card-base programs-card-hover">
              {/* Program Image with Enhanced Overlay */}
              <div className="programs-image-container">
                <Image 
                  src={program.image} 
                  alt={`${program.title} illustration`}
                  width={400}
                  height={200}
                  className="programs-image"
                />
                
                {/* Enhanced overlay with gradient */}
                <div className="programs-image-overlay"></div>
                
                {/* Floating stats badge */}
                <div className="programs-stats-badge">
                  <div className="programs-stats-number">{program.stats.number}</div>
                  <div className="programs-stats-label">{program.stats.label}</div>
                </div>
                
                {/* Floating icon */}
                <div className="programs-icon-badge">
                  {program.icon}
                </div>
              </div>

              {/* Program Content */}
              <div className="programs-card-content">
                <h3 className="programs-card-title">{program.title}</h3>
                <p className="programs-card-description">{program.description}</p>
                
                {/* Program Features */}
                <div className="programs-feature-list">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="programs-feature-item">
                      <div className="programs-feature-dot"></div>
                      <span className="programs-feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="programs-card-footer">
                <button className="programs-learn-more-btn">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Programs Stats Section */}
        <div className="programs-stats-grid programs-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="programs-stats-card">
            <div className="programs-stats-number">5</div>
            <div className="programs-stats-card-label">Active Programs</div>
          </div>
          <div className="programs-stats-card">
            <div className="programs-stats-number">500+</div>
            <div className="programs-stats-card-label">Children Impacted</div>
          </div>
          <div className="programs-stats-card">
            <div className="programs-stats-number">3</div>
            <div className="programs-stats-card-label">Years of Service</div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="programs-cta-wrapper">
          <div className="programs-cta-card programs-fade-in-up" style={{animationDelay: '1s'}}>
            <div className="programs-cta-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="programs-cta-title">Expanding Our Impact</h3>
            <p className="programs-cta-description">
              We are constantly evolving and adding new programs to better serve our community. More innovative programs may be added in the coming months as we continue to grow and respond to the needs of the children we serve.
            </p>
            <div className="programs-cta-buttons">
              <button className="programs-cta-btn-primary">
                Get Involved
              </button>
              <button className="programs-cta-btn-secondary">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}