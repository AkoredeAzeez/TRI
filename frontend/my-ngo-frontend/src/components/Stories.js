'use client';
import { Heart, Star, Award, Palette, Users, BookOpen } from 'lucide-react';

export default function Stories() {
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

  const testimonials = [
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

  const milestones = [
    { year: "2021", event: "Founded with 10 children", highlight: true },
    { year: "2022", event: "First art exhibition held" },
    { year: "2023", event: "Launched scholarship program" },
    { year: "2024", event: "Reached 150+ children impacted", highlight: true }
  ];

  return (
    <section id="stories" className="section-container">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Impact Stories</h2>
          <div className="section-gradient-line"></div>
          <p className="section-subtitle">
            Every child we touch through art becomes a story of transformation, hope, and boundless creativity.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="stats-grid stagger-children">
          {impactStats.map((stat, index) => (
            <div key={index} className="card-base card-hover interactive-glow">
              <div className="card-icon mb-4">
                {stat.icon}
              </div>
              <div className="stats-number">{stat.value}</div>
              <div className="stats-label mb-2">{stat.label}</div>
              <p className="text-sm text-gray-400 text-center">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Voices of Transformation</h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Real stories from the children and families whose lives have been touched by art
            </p>
          </div>

          <div className="grid-3 stagger-children">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-base card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-gradient rounded-full flex items-center justify-center text-white">
                    {testimonial.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-orange-400">{testimonial.age || testimonial.role}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-300 italic mb-4 leading-relaxed">
                  "{testimonial.story}"
                </blockquote>
                
                <div className="feature-item mt-4 pt-4 border-t border-glass-border">
                  <div className="feature-dot"></div>
                  <span className="feature-text font-semibold text-orange-400">{testimonial.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Our Journey</h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Milestones that mark our growth and impact in the community
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid-2 gap-6">
              {milestones.map((milestone, index) => (
                <div key={index} className={`card-base ${milestone.highlight ? 'card-hover border-orange-500/30' : ''} flex items-center gap-4`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-white ${milestone.highlight ? 'bg-primary-gradient' : 'bg-glass-bg border border-glass-border'}`}>
                    {milestone.year}
                  </div>
                  <div>
                    <p className="text-white font-medium">{milestone.event}</p>
                    {milestone.highlight && (
                      <div className="feature-item mt-2">
                        <div className="feature-dot"></div>
                        <span className="feature-text text-orange-400 font-semibold">Major Milestone</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inspirational Quote Section */}
        <div className="text-center mt-16 fade-in-up" style={{animationDelay: '1s'}}>
          <div className="card-base max-w-4xl mx-auto">
            <div className="card-icon mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 17h3l2-4V7c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v6l2 4h3c.6 0 1-.4 1-1s-.4-1-1-1H9l-2-4V7h8v6l-2 4h-1c-.6 0-1 .4-1 1s.4 1 1 1z"/>
              </svg>
            </div>
            
            <blockquote className="text-xl md:text-2xl leading-relaxed text-white mb-6 italic">
              "Every brushstroke tells a story of hope, every drawing opens a door to possibility, and every exhibition builds bridges between dreams and reality."
            </blockquote>
            
            <div className="feature-list max-w-2xl mx-auto">
              <div className="feature-item justify-center">
                <div className="feature-dot"></div>
                <span className="feature-text">Transforming lives through creative expression</span>
              </div>
              <div className="feature-item justify-center">
                <div className="feature-dot"></div>
                <span className="feature-text">Building confidence one artwork at a time</span>
              </div>
              <div className="feature-item justify-center">
                <div className="feature-dot"></div>
                <span className="feature-text">Creating pathways to brighter futures</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="grid-2 gap-4 max-w-md mx-auto">
            <button className="bg-primary-gradient text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
              Share Your Story
            </button>
            <button className="bg-glass-bg border border-glass-border text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-gray-900">
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}