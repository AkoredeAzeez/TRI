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
    <section id="programs" className="section-container">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Programs</h2>
          <div className="section-gradient-line"></div>
          <p className="section-subtitle">
            We offer comprehensive programs designed to nurture creativity, provide educational opportunities, and transform lives through the power of art.
          </p>
        </div>

        <div className="grid-3 stagger-children">
          {programs.map((program, index) => (
            <div key={index} className="card-base card-hover card-program interactive-glow">
              {/* Program Image with Enhanced Overlay */}
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <Image 
                  src={program.image} 
                  alt={`${program.title} illustration`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Enhanced glass overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                
                {/* Floating stats badge */}
                <div className="absolute top-4 left-4 bg-glass-bg backdrop-blur-md border border-glass-border rounded-lg px-3 py-2">
                  <div className="text-white font-bold text-lg leading-none">{program.stats.number}</div>
                  <div className="text-orange-400 text-xs font-medium">{program.stats.label}</div>
                </div>
                
                {/* Floating icon */}
                <div className="card-icon absolute top-4 right-4 w-12 h-12">
                  {program.icon}
                </div>
              </div>

              {/* Program Content */}
              <div className="space-y-4">
                <h3 className="card-title">{program.title}</h3>
                <p className="card-description">{program.description}</p>
                
                {/* Program Features */}
                <div className="feature-list">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-item">
                      <div className="feature-dot"></div>
                      <span className="feature-text text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-glass-border">
                <button className="w-full bg-primary-gradient text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Programs Stats Section */}
        <div className="stats-grid mt-16 fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="stats-card">
            <div className="stats-number">5</div>
            <div className="stats-label">Active Programs</div>
          </div>
          <div className="stats-card">
            <div className="stats-number">500+</div>
            <div className="stats-label">Children Impacted</div>
          </div>
          <div className="stats-card">
            <div className="stats-number">3</div>
            <div className="stats-label">Years of Service</div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <div className="card-base max-w-2xl mx-auto fade-in-up" style={{animationDelay: '1s'}}>
            <div className="card-icon mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="card-title mb-4">Expanding Our Impact</h3>
            <p className="card-description mb-6">
              We are constantly evolving and adding new programs to better serve our community. More innovative programs may be added in the coming months as we continue to grow and respond to the needs of the children we serve.
            </p>
            <div className="grid-2 gap-4">
              <button className="bg-primary-gradient text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                Get Involved
              </button>
              <button className="bg-glass-bg border border-glass-border text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-gray-900">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}