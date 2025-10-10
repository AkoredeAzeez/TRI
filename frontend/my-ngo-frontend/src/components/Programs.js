'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Palette, Award, Heart, Users, Zap } from 'lucide-react';
import { getAllPrograms } from '../api/programs';

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        const response = await getAllPrograms();
        console.log('✅ Programs fetched successfully:', response);
        console.log('📚 Number of programs:', response.data?.length || 0);
        
        // Log detailed program data
        if (response.data && response.data.length > 0) {
          response.data.forEach((prog, idx) => {
            console.log(`📋 Program ${idx} raw data:`, prog);
            console.log(`📋 Program ${idx} attributes:`, prog.attributes);
          });
        }
        
        setPrograms(response.data || []);
      } catch (err) {
        console.error('❌ Error fetching programs:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  // Map program icons (you can customize this based on tags or program type)
  const getProgramIcon = (index) => {
    const icons = [
      <Palette className="w-6 h-6" key="palette" />,
      <Award className="w-6 h-6" key="award" />,
      <Heart className="w-6 h-6" key="heart" />,
      <Users className="w-6 h-6" key="users" />,
      <Zap className="w-6 h-6" key="zap" />
    ];
    return icons[index % icons.length];
  };

  // Map programs from Strapi to display format
  const programsToDisplay = programs.map((program, index) => {
    // Data is at the top level, not in attributes
    const slug = program.slug || '';
    const title = program.title || 'Program';
    const summary = program.summary || 'Learn more about this program';
    const heroImage = program.heroImage?.url || 'https://res.cloudinary.com/demo/image/upload/v1632391898/artwork_sample.jpg';
    
    console.log(`Program ${index}:`, {
      title,
      slug,
      hasImage: !!program.heroImage,
      hasSummary: !!program.summary
    });
    
    return {
      title,
      summary,
      slug,
      heroImage,
      icon: getProgramIcon(index)
    };
  });

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

        {loading && (
          <p className="text-center9 text-lg9 mt-6-9">Loading programs...</p>
        )}

        {!loading && programsToDisplay.length === 0 && (
          <div className="text-center9 mt-12-9">
            <div className="card-base9 max-w-2xl9" style={{margin: '0 auto'}}>
              <div className="card-icon9 mx-auto">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl9 mb-2-9">Programs Coming Soon</h3>
              <p className="text-lg9">
                We are developing exciting programs to serve our community. Check back soon for updates.
              </p>
            </div>
          </div>
        )}

        <div className="programs-grid-3 programs-stagger-children">
          {programsToDisplay.map((program, index) => (
            <div key={index} className="programs-card-base programs-card-hover">
              {/* Program Image with Enhanced Overlay */}
              <div className="programs-image-container">
                <Image 
                  src={program.heroImage.startsWith('http') ? program.heroImage : `http://localhost:1337${program.heroImage}`}
                  alt={`${program.title} illustration`}
                  width={400}
                  height={200}
                  className="programs-image"
                />
                
                {/* Enhanced overlay with gradient */}
                <div className="programs-image-overlay"></div>
                
                {/* Floating icon */}
                <div className="programs-icon-badge">
                  {program.icon}
                </div>
              </div>

              {/* Program Content */}
              <div className="programs-card-content">
                <h3 className="programs-card-title">{program.title}</h3>
                <p className="programs-card-description">{program.summary}</p>
              </div>

              {/* Action Button */}
              <div className="programs-card-footer">
                {program.slug ? (
                  <Link href={`/programs/${program.slug}`}>
                    <button className="programs-learn-more-btn">
                      Learn More
                    </button>
                  </Link>
                ) : (
                  <button className="programs-learn-more-btn" disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Programs Stats Section */}
        {programsToDisplay.length > 0 && (
          <div className="programs-stats-grid programs-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="programs-stats-card">
              <div className="programs-stats-number">{programsToDisplay.length}</div>
              <div className="programs-stats-card-label">Active Programs</div>
            </div>
            <div className="programs-stats-card">
              <div className="programs-stats-number">100+</div>
              <div className="programs-stats-card-label">Children Impacted</div>
            </div>
            <div className="programs-stats-card">
              <div className="programs-stats-number">6</div>
              <div className="programs-stats-card-label">Years of Service</div>
            </div>
          </div>
        )}

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