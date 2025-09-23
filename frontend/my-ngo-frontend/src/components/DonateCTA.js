'use client';
import { Heart, Calendar, Gift, Wrench, ArrowRight } from 'lucide-react';

export default function DonateCTA() {
  const options = [
    { 
      title: "One-time Donation", 
      description: "Make an immediate impact with a single contribution",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    },
    { 
      title: "Monthly Giving", 
      description: "Provide ongoing support with recurring donations",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500"
    },
    { 
      title: "Quarterly/Annual Support", 
      description: "Structured giving for larger impact",
      icon: <Gift className="w-6 h-6" />,
      color: "from-green-500 to-blue-500"
    },
    { 
      title: "In-Kind Donations", 
      description: "Art supplies, materials, and equipment",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
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
    <section id="donate" className="section-container section-bg-3">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Support Our Mission</h2>
          <div className="section-gradient-line"></div>
          <p className="section-subtitle">
            Your support enables us to continue empowering children through art education and creative expression.
          </p>
        </div>

        <div className="grid-2 mb-16">
          <div className="fade-in-left">
            <div className="card-base card-hover mb-6">
              <h3 className="text-2xl font-bold mb-6 text-white text-center">Donation Options</h3>
              <div className="space-y-4">
                {options.map((opt, index) => (
                  <div 
                    key={opt.title} 
                    className="card-base backdrop-blur-sm bg-white/5 border border-white/10 group cursor-pointer hover:bg-white/10 transition-all duration-300"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${opt.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        {opt.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">
                          {opt.title}
                        </h4>
                        <p className="text-white/70">{opt.description}</p>
                      </div>
                    </div>
                    <div className="interactive-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="fade-in-right">
            <div className="card-base card-hover">
              <h3 className="text-2xl font-bold mb-6 text-white text-center">How We Use Your Donations</h3>
              <div className="feature-list">
                {usage.map((item, index) => (
                  <div 
                    key={item} 
                    className="feature-item opacity-0 animate-slide-up"
                    style={{animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards'}}
                  >
                    <div className="feature-dot"></div>
                    <p className="feature-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-futuristic group">
              <span className="flex items-center">
                Donate Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
            <button className="btn-ghost">
              Learn More
            </button>
          </div>
          
          {/* Additional CTA enhancement */}
          <div className="mt-8 card-base max-w-md mx-auto">
            <p className="text-white/80 text-sm">
              Every donation directly impacts a child's future through art education
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}