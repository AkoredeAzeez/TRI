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
    <section className="section-container9">
      <div className="container9">
        <div className="section-header9">
          <h2 className="section-title9">Transparency & Governance</h2>
          <div className="section-gradient-line9"></div>
          <p className="section-subtitle9">
            We believe in complete transparency and accountability in all our operations, ensuring every contribution makes the maximum impact for the children we serve.
          </p>
        </div>

        {/* Transparency Pillars */}
        <div className="grid-39 stagger-children9">
          {transparencyPillars.map((pillar, index) => (
            <div key={index} className="card-base9 card-hover9 interactive-glow9">
              <div className="card-icon9">
                {pillar.icon}
              </div>
              <h3 className="card-title9">{pillar.title}</h3>
              <p className="card-description9 mb-6-9">{pillar.description}</p>
              
              <div className="feature-list9">
                {pillar.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item9">
                    <div className="feature-dot9"></div>
                    <span className="feature-text9">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Reports & Documentation */}
        <div className="mt-16-9">
          <div className="text-center9 mb-12-9">
            <h3 className="text-2xl9 mb-4-9">Reports & Documentation</h3>
            <p className="text-lg9 max-w-2xl9">
              Access our comprehensive reports and documentation for complete transparency
            </p>
          </div>

          <div className="grid-29 stagger-children9">
            {reports.map((report, index) => (
              <div key={index} className="card-base9 card-hover9">
                <div className="report-card9">
                  <div className="report-icon9">
                    {report.icon}
                  </div>
                  <div className="report-content9">
                    <div className="report-header9">
                      <h4 className="report-title9">{report.title}</h4>
                      <span className={report.status === 'Available' ? 'status-badge9 status-available9' : 'status-badge9 status-pending9'}>
                        {report.status}
                      </span>
                    </div>
                    <p className="report-type9">{report.type}</p>
                    <p className="report-description9 mb-4-9">{report.description}</p>
                    
                    {report.status === 'Available' ? (
                      <button className="btn-download9">
                        <span>Download</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    ) : (
                      <button className="btn-disabled9">
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
        <div className="mt-16-9">
          <div className="text-center9 mb-12-9">
            <h3 className="text-2xl9 mb-4-9">Our Partnerships</h3>
            <p className="text-lg9 max-w-2xl9">
              Working with trusted partners to maximize our impact and ensure accountability
            </p>
          </div>

          <div className="grid-29 stagger-children9">
            {partnerships.map((partnership, index) => (
              <div key={index} className="card-base9">
                <div className="partnership-header9">
                  <div>
                    <h4 className="partnership-title9">
                      {partnership.name}
                      {partnership.verified && (
                        <CheckCircle className="verified-icon9" />
                      )}
                    </h4>
                    <p className="partnership-type9">{partnership.type}</p>
                  </div>
                </div>
                <p className="partnership-role9">{partnership.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitments Section */}
        <div className="mt-16-9">
          <div className="card-base9 max-w-4xl9 fade-in-up9" style={{animationDelay: '0.4s'}}>
            <div className="text-center9 mb-8-9">
              <div className="card-icon9 mx-auto">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="card-title9">Our Transparency Commitments</h3>
              <p className="card-description9">
                These are the standards we hold ourselves to in every aspect of our work
              </p>
            </div>

            <div className="grid-29 gap-4-9">
              {commitments.map((commitment, index) => (
                <div key={index} className="feature-item9">
                  <div className="feature-dot9"></div>
                  <span className="feature-text9">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center9 mt-16-9">
          <div className="max-w-2xl9">
            <h3 className="text-xl9 mb-4-9">Questions About Our Operations?</h3>
            <p className="text-lg9 mb-6-9">
              We're always happy to provide additional information or clarification about our work and impact.
            </p>
            <div className="grid-29 gap-4-9">
              <button className="btn-primary9">
                Contact Us
              </button>
              <button className="btn-secondary9">
                Request Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}