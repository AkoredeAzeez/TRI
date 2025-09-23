'use client';
import { Heart, Globe, Zap } from 'lucide-react';

export default function About() {
  const values = ['Creativity', 'Empowerment', 'Community', 'Opportunity', 'Equity', 'Sustainability'];

  return (
    <section id="about" className="section-container section-bg-1">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About{' '}
            <span className="gradient-text">
              The Redraw Initiative
            </span>
          </h2>
          <div className="section-gradient-line"></div>
        </div>

        <div className="grid-2 fade-in-up mb-16">
          <div className="card-base card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              The Redraw Initiative provides children from disadvantaged communities with access to artistic education,
              equipping them with painting and drawing skills to express their creativity. Through hands-on training,
              collaborative and individual projects, and an annual art auction, we enable children to develop confidence,
              build and grow art skills, fund their education and envision a future full of possibilities.
            </p>
          </div>

          <div className="card-base card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              To inspire and empower underprivileged children through the transformative power of art, creating a world
              where every child has access to creative expression and the tools to build their dreams.
            </p>
          </div>
        </div>

        <div className="card-base mb-16 fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center mb-6 justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mr-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Story</h3>
          </div>
          <p className="text-white/80 leading-relaxed text-center max-w-4xl mx-auto">
            In 2018, founder Olivia Eze participated in The Bridge Program, an entrepreneurial leadership training.
            Driven by many volunteer experiences and the awareness that Nigerian children were out of school due to financial constraints,
            she founded The Redraw Initiative. What began as a one-off project has evolved into a full-fledged organization,
            empowering children in Nigerian slums with art workshops and auctioning their work to cover tuition fees.
          </p>
        </div>

        <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {values.map((value, index) => (
              <div
                key={value}
                className="card-base card-hover text-center group relative overflow-hidden"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {/* Gradient background that shows on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-8 h-8 mx-auto mb-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                    {value}
                  </h4>
                </div>

                {/* Interactive glow effect */}
                <div className="interactive-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}