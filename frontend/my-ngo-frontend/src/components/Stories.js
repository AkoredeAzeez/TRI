'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, Star, Award, Palette, Users, BookOpen } from 'lucide-react';
import { getAllBeneficiaries } from '../api/beneficiaries';

export default function Stories() {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBeneficiaries = async () => {
      try {
        setLoading(true);
        const response = await getAllBeneficiaries();
        console.log('✅ Beneficiaries fetched:', response);
        console.log('📊 Number of beneficiaries:', response.data?.length || 0);
        console.log('📝 First beneficiary details:', response.data?.[0]);
        setBeneficiaries(response.data || []);
      } catch (err) {
        console.error('Error fetching beneficiaries:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBeneficiaries();
  }, []);

  const impactStats = [
    { 
      label: "Children Empowered", 
      value: beneficiaries.length > 0 ? `${beneficiaries.length}+` : "100+", 
      icon: <Users className="w-6 h-6" />,
      description: "Young lives transformed through art"
    },
    { 
      label: "Art Workshops", 
      value: "4", 
      icon: <Palette className="w-6 h-6" />,
      description: "Creative learning sessions conducted"
    },
    { 
      label: "Scholarships Funded", 
      value: "33", 
      icon: <BookOpen className="w-6 h-6" />,
      description: "Educational dreams made possible"
    }
  ];

  // Build testimonials from beneficiaries and their story impacts
  const testimonials = [];
  
  beneficiaries.forEach((beneficiary, beneficiaryIndex) => {
    console.log(`🔍 Processing beneficiary ${beneficiaryIndex}:`, beneficiary);
    console.log(`   - Name: ${beneficiary.name || beneficiary.initials}`);
    console.log(`   - Story impacts:`, beneficiary.story_impacts);
    
    if (beneficiary.story_impacts && beneficiary.story_impacts.length > 0) {
      beneficiary.story_impacts.forEach((storyImpact, storyIndex) => {
        const iconIndex = (beneficiaryIndex + storyIndex) % 3;
        testimonials.push({
          name: beneficiary.name || beneficiary.initials || 'Anonymous',
          age: storyImpact.date ? new Date(storyImpact.date).getFullYear().toString() : '',
          story: storyImpact.excerpt || storyImpact.body?.replace(/<[^>]*>/g, '').substring(0, 200) || 'No story available',
          impact: storyImpact.program?.name || storyImpact.title || 'Impact Story',
          icon: iconIndex === 0 ? <Star className="w-5 h-5" /> : 
                iconIndex === 1 ? <Heart className="w-5 h-5" /> : 
                <Award className="w-5 h-5" />
        });
      });
    }
  });

  console.log('📋 Total testimonials built:', testimonials.length);
  console.log('📋 Testimonials:', testimonials);

  const milestones = [
    { year: "2018", event: "Founded with 10 children", highlight: true },
    { year: "2019", event: "First art exhibition held", highlight: false },
    { year: "2024", event: "Launched scholarship program", highlight: false },
    { year: "2025", event: "Reached 150+ children impacted", highlight: true }
  ];

  if (loading) {
    return (
      <section id="stories" className="stories-section-container">
        <div className="container">
          <div className="stories-section-header">
            <h2 className="stories-section-title">Loading Stories...</h2>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="stories" className="stories-section-container">
        <div className="container">
          <div className="stories-section-header">
            <h2 className="stories-section-title">Our Impact Stories</h2>
            <p className="stories-section-subtitle">
              Unable to load stories at this time. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="stories" className="stories-section-container">
      <div className="container">
        <div className="stories-section-header">
          <h2 className="stories-section-title">Our Impact Stories</h2>
          <div className="stories-section-gradient-line"></div>
          <p className="stories-section-subtitle">
            Every child we touch through art becomes a story of transformation, hope, and boundless creativity.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="stories-stats-grid stories-stagger-children">
          {impactStats.map((stat, index) => (
            <div key={index} className="stories-stat-card">
              <div className="stories-stat-icon">
                {stat.icon}
              </div>
              <div className="stories-stat-number">{stat.value}</div>
              <div className="stories-stat-label">{stat.label}</div>
              <p className="stories-stat-description">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="stories-testimonials-wrapper">
          <div className="stories-section-subheader">
            <h3 className="stories-subheader-title">Voices of Transformation</h3>
            <p className="stories-subheader-text">
              Real stories from the children and families whose lives have been touched by art
            </p>
          </div>

          {testimonials.length > 0 ? (
            <div className="stories-testimonials-grid stories-stagger-children">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="stories-testimonial-card">
                  <div className="stories-testimonial-header">
                    <div className="stories-testimonial-icon">
                      {testimonial.icon}
                    </div>
                    <div className="stories-testimonial-author-info">
                      <h4 className="stories-testimonial-name">{testimonial.name}</h4>
                      <p className="stories-testimonial-role">{testimonial.age || testimonial.role}</p>
                    </div>
                  </div>
                  
                  <blockquote className="stories-testimonial-quote">
                    &ldquo;{testimonial.story}&rdquo;
                  </blockquote>
                  
                  <div className="stories-testimonial-footer">
                    <div className="stories-impact-dot"></div>
                    <span className="stories-impact-text">{testimonial.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center" style={{ padding: '3rem 0' }}>
              <p className="stories-section-subtitle">No beneficiary stories available at the moment.</p>
            </div>
          )}
        </div>

        {/* Journey Timeline */}
        <div className="stories-timeline-wrapper">
          <div className="stories-section-subheader">
            <h3 className="stories-subheader-title">Our Journey</h3>
            <p className="stories-subheader-text">
              Milestones that mark our growth and impact in the community
            </p>
          </div>

          <div className="stories-timeline-grid">
            {milestones.map((milestone, index) => (
              <div key={index} className={`stories-milestone-card ${milestone.highlight ? 'highlight' : ''}`}>
                <div className={`stories-milestone-year ${milestone.highlight ? 'highlight' : 'normal'}`}>
                  {milestone.year}
                </div>
                <div className="stories-milestone-content">
                  <p className="stories-milestone-event">{milestone.event}</p>
                  {milestone.highlight && (
                    <div className="stories-milestone-badge">
                      <div className="stories-milestone-badge-dot"></div>
                      <span className="stories-milestone-badge-text">Major Milestone</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inspirational Quote Section */}
        <div className="stories-quote-wrapper">
          <div className="stories-quote-card stories-fade-in-up" style={{animationDelay: '1s'}}>
            <div className="stories-quote-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 17h3l2-4V7c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v6l2 4h3c.6 0 1-.4 1-1s-.4-1-1-1H9l-2-4V7h8v6l-2 4h-1c-.6 0-1 .4-1 1s.4 1 1 1z"/>
              </svg>
            </div>
            
            <blockquote className="stories-quote-text">
              &ldquo;Every brushstroke tells a story of hope, every drawing opens a door to possibility, and every exhibition builds bridges between dreams and reality.&rdquo;
            </blockquote>
            
            <div className="stories-quote-features">
              <div className="stories-quote-feature">
                <div className="stories-quote-feature-dot"></div>
                <span className="stories-quote-feature-text">Transforming lives through creative expression</span>
              </div>
              <div className="stories-quote-feature">
                <div className="stories-quote-feature-dot"></div>
                <span className="stories-quote-feature-text">Building confidence one artwork at a time</span>
              </div>
              <div className="stories-quote-feature">
                <div className="stories-quote-feature-dot"></div>
                <span className="stories-quote-feature-text">Creating pathways to brighter futures</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="stories-cta-wrapper">
          <div className="stories-cta-buttons">
            <Link href="/contact" className="stories-cta-btn-primary">
              Share Your Story
            </Link>
            <Link href="/#programs" className="stories-cta-btn-secondary">
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}