'use client';
import { useState, useEffect } from 'react';
import { Heart, Star, Award, Palette, Users, BookOpen } from 'lucide-react';
import { getAllStoryImpacts } from '../api/story-impacts';

export default function Stories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const response = await getAllStoryImpacts();
        setStories(response.data || []);
      } catch (err) {
        console.error('Error fetching stories:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  const impactStats = [
    { 
      label: "Children Empowered", 
      value: "150+", 
      icon: <Users className="w-6 h-6" />,
      description: "Young lives transformed through art"
    },
    { 
      label: "Art Workshops", 
      value: "50+", 
      icon: <Palette className="w-6 h-6" />,
      description: "Creative learning sessions conducted"
    },
    { 
      label: "Scholarships Funded", 
      value: "25+", 
      icon: <BookOpen className="w-6 h-6" />,
      description: "Educational dreams made possible"
    }
  ];

  // Default testimonials as fallback
  const defaultTestimonials = [
    {
      name: "Amara O.",
      age: "12 years old",
      story: "Before joining The Redraw Initiative, I was too shy to show my drawings to anyone. Now, my artwork hangs in the community center and I've sold three paintings! Art gave me confidence I never knew I had.",
      impact: "First artwork sold at age 11",
      icon: <Star className="w-5 h-5" />
    },
    {
      name: "Kemi's Mother",
      role: "Parent",
      story: "My daughter struggled in school until she discovered art through this program. Now she uses drawing to help her learn other subjects. Her grades improved and she dreams of becoming an artist.",
      impact: "Academic improvement through art",
      icon: <Heart className="w-5 h-5" />
    },
    {
      name: "David C.",
      age: "14 years old", 
      story: "I received the annual scholarship and now I'm in secondary school. Art changed my life - from selling my paintings, I help support my family while pursuing my education.",
      impact: "Scholarship recipient 2023",
      icon: <Award className="w-5 h-5" />
    }
  ];

  // Use Strapi data if available, otherwise use default testimonials
  const testimonials = stories.length > 0 
    ? stories.map((story, index) => ({
        name: story.attributes?.title || 'Anonymous',
        age: story.attributes?.date ? new Date(story.attributes.date).getFullYear().toString() : '',
        story: story.attributes?.excerpt || story.attributes?.body || 'No story available',
        impact: story.attributes?.program?.data?.attributes?.name || 'Impact Story',
        icon: index % 3 === 0 ? <Star className="w-5 h-5" /> : 
              index % 3 === 1 ? <Heart className="w-5 h-5" /> : 
              <Award className="w-5 h-5" />
      }))
    : defaultTestimonials;

  const milestones = [
    { year: "2021", event: "Founded with 10 children", highlight: true },
    { year: "2022", event: "First art exhibition held", highlight: false },
    { year: "2023", event: "Launched scholarship program", highlight: false },
    { year: "2024", event: "Reached 150+ children impacted", highlight: true }
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
                  "{testimonial.story}"
                </blockquote>
                
                <div className="stories-testimonial-footer">
                  <div className="stories-impact-dot"></div>
                  <span className="stories-impact-text">{testimonial.impact}</span>
                </div>
              </div>
            ))}
          </div>
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
              "Every brushstroke tells a story of hope, every drawing opens a door to possibility, and every exhibition builds bridges between dreams and reality."
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
            <button className="stories-cta-btn-primary">
              Share Your Story
            </button>
            <button className="stories-cta-btn-secondary">
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}