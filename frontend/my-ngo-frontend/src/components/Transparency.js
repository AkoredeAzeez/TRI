'use client';
import { FileText, Shield, Users, Eye, Award, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react';

export default function Transparency() {
  const transparencyPillars = [
    {
      title: "Financial Accountability",
      icon: <FileText className="w-6 h-6" />,
      description: "Complete transparency in how we manage and allocate every donation received.",
      features: [
        "Annual financial reports",
        "Monthly budget summaries", 
        "Grant allocation tracking",
        "Donor impact statements"
      ]
    },
    {
      title: "Governance Structure",
      icon: <Shield className="w-6 h-6" />,
      description: "Clear organizational structure with proper oversight and decision-making processes.",
      features: [
        "Board of trustees",
        "Advisory committee",
        "Operational guidelines",
        "Ethical standards"
      ]
    },
    {
      title: "Community Engagement",
      icon: <Users className="w-6 h-6" />,
      description: "Open communication with stakeholders and regular community feedback sessions.",
      features: [
        "Quarterly community meetings",
        "Stakeholder feedback loops",
        "Public program evaluations",
        "Beneficiary testimonials"
      ]
    }
  ];

  const reports = [
    {
      title: "2024 Annual Report",
      status: "Available",
      type: "Financial",
      icon: <FileText className="w-5 h-5" />,
      description: "Complete overview of our 2024 activities and financial performance"
    },
    {
      title: "Q3 2024 Impact Assessment",
      status: "Available", 
      type: "Impact",
      icon: <TrendingUp className="w-5 h-5" />,
      description: "Detailed analysis of program outcomes and beneficiary progress"
    },
    {
      title: "Independent Audit Report",
      status: "Coming Soon",
      type: "Audit",
      icon: <Shield className="w-5 h-5" />,
      description: "Third-party financial audit and compliance review"
    },
    {
      title: "Governance Framework",
      status: "Available",
      type: "Governance",
      icon: <Award className="w-5 h-5" />,
      description: "Our organizational structure and operational guidelines"
    }
  ];

  const partnerships = [
    {
      name: "Lagos State Ministry of Education",
      type: "Government Partner",
      role: "Educational support and curriculum alignment",
      verified: true
    },
    {
      name: "Community Development Association",
      type: "Community Partner", 
      role: "Local outreach and beneficiary identification",
      verified: true
    },
    {
      name: "Independent Auditors Ltd",
      type: "Professional Services",
      role: "Financial auditing and compliance",
      verified: true
    },
    {
      name: "Art Supply Distributors",
      type: "Resource Partner",
      role: "Materials and equipment provision",
      verified: false
    }
  ];

  const commitments = [
    "100% transparency in fund allocation",
    "Regular independent financial audits",
    "Open communication with all stakeholders", 
    "Ethical standards in all operations",
    "Community-driven decision making",
    "Continuous improvement processes"
  ];

  return (
    <section className="section-container">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Transparency & Governance</h2>
          <div className="section-gradient-line"></div>
          <p className="section-subtitle">
            We believe in complete transparency and accountability in all our operations, ensuring every contribution makes the maximum impact for the children we serve.
          </p>
        </div>

        {/* Transparency Pillars */}
        <div className="grid-3 stagger-children">
          {transparencyPillars.map((pillar, index) => (
            <div key={index} className="card-base card-hover interactive-glow">
              <div className="card-icon mb-6">
                {pillar.icon}
              </div>
              <h3 className="card-title">{pillar.title}</h3>
              <p className="card-description mb-6">{pillar.description}</p>
              
              <div className="feature-list">
                {pillar.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Reports & Documentation */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Reports & Documentation</h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Access our comprehensive reports and documentation for complete transparency
            </p>
          </div>

          <div className="grid-2 stagger-children">
            {reports.map((report, index) => (
              <div key={index} className="card-base card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {report.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-white">{report.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        report.status === 'Available' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-orange-500/20 text-orange-400'
                      }`}>
                        {report.status}
                      </span>
                    </div>
                    <p className="text-orange-400 text-sm font-medium mb-2">{report.type}</p>
                    <p className="text-gray-400 text-sm mb-4">{report.description}</p>
                    
                    {report.status === 'Available' ? (
                      <button className="flex items-center gap-2 bg-glass-bg border border-glass-border text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-orange-500 hover:border-orange-500">
                        <span>Download</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    ) : (
                      <button className="bg-gray-600 text-gray-400 px-4 py-2 rounded-lg font-semibold cursor-not-allowed">
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnerships Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Our Partnerships</h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Working with trusted partners to maximize our impact and ensure accountability
            </p>
          </div>

          <div className="grid-2 stagger-children">
            {partnerships.map((partnership, index) => (
              <div key={index} className="card-base">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2">
                      {partnership.name}
                      {partnership.verified && (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      )}
                    </h4>
                    <p className="text-orange-400 text-sm font-medium">{partnership.type}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{partnership.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitments Section */}
        <div className="mt-16">
          <div className="card-base max-w-4xl mx-auto fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="text-center mb-8">
              <div className="card-icon mx-auto mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="card-title">Our Transparency Commitments</h3>
              <p className="card-description">
                These are the standards we hold ourselves to in every aspect of our work
              </p>
            </div>

            <div className="grid-2 gap-4">
              {commitments.map((commitment, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-dot"></div>
                  <span className="feature-text">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Questions About Our Operations?</h3>
            <p className="text-gray-400 mb-6">
              We're always happy to provide additional information or clarification about our work and impact.
            </p>
            <div className="grid-2 gap-4">
              <button className="bg-primary-gradient text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                Contact Us
              </button>
              <button className="bg-glass-bg border border-glass-border text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-gray-900">
                Request Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}