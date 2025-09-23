'use client';

export default function Events() {
  return (
    <section id="events" className="section-container">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="section-gradient-line"></div>
          <p className="section-subtitle">
            Join us at our upcoming events and be part of the artistic journey.
          </p>
        </div>
        
        {/* Events Grid - Ready for future events */}
        <div className="grid-3 stagger-children">
          {/* Placeholder for future events */}
          <div className="card-base card-hover interactive-glow">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
            </div>
            <h3 className="card-title">Art Exhibition</h3>
            <p className="card-description">
              Exciting art exhibitions featuring local and international artists coming soon.
            </p>
          </div>
          
          <div className="card-base card-hover interactive-glow">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="card-title">Community Workshops</h3>
            <p className="card-description">
              Hands-on workshops designed to engage the community in various art forms and techniques.
            </p>
          </div>
          
          <div className="card-base card-hover interactive-glow">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="card-title">Special Events</h3>
            <p className="card-description">
              Follow us on social media for announcements about special events and exclusive exhibitions.
            </p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="card-base" style={{maxWidth: '600px', margin: '0 auto', marginTop: '48px'}}>
            <h3 className="card-title">Stay Connected</h3>
            <p className="card-description" style={{marginBottom: '24px'}}>
              Do not miss out on our upcoming events! Follow us on social media for the latest updates and exclusive previews.
            </p>
            <div className="feature-list" style={{maxWidth: '400px', margin: '0 auto'}}>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span className="feature-text">Early access to event announcements</span>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span className="feature-text">Behind-the-scenes content</span>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span className="feature-text">Exclusive artist interviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}