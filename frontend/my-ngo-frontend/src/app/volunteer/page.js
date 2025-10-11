'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { submitVolunteerApplication } from '../../api/volunteers';
import { Palette, Heart, Mic, Camera, PenTool, ChevronDown } from 'lucide-react';
import './volunteer.css';

const roles = [
  {
    icon: <Palette />,
    title: 'Art Workshop Facilitator',
    description: 'Lead or assist in our creative workshops for children.',
    tasks: [
      'Prepare art materials',
      'Guide children through projects',
      'Foster a fun and supportive atmosphere',
    ],
  },
  {
    icon: <Heart />,
    title: 'Community Outreach Ambassador',
    description: 'Help us connect with local communities and partners.',
    tasks: [
      'Represent us at local events',
      'Distribute informational materials',
      'Build relationships with community leaders',
    ],
  },
  {
    icon: <Mic />,
    title: 'Event Support Staff',
    description: 'Be the backbone of our exhibitions, fundraisers, and community events.',
    tasks: [
      'Assist with setup and cleanup',
      'Welcome and guide guests',
      'Manage activity stations',
    ],
  },
];

const faqs = [
    {
        question: 'What is the time commitment?',
        answer: 'The time commitment varies depending on the role. Workshop facilitators typically commit to a full workshop series (e.g., 2 hours a week for 6 weeks), while event support is on a per-event basis. We are flexible and can work with your schedule!'
    },
    {
        question: 'Do I need to be an artist to volunteer?',
        answer: 'Not at all! While we welcome artists, we have many roles that do not require artistic skills, such as event support, community outreach, and administrative help. A passion for our mission is the most important qualification.'
    },
    {
        question: 'Are there any age requirements?',
        answer: 'For most roles, volunteers must be 18 years or older. However, we have specific opportunities for youth volunteers (16-17) with parental consent. Please mention your age in the application form.'
    },
    {
        question: 'What is the application process?',
        answer: 'Simply fill out the form on this page! Our volunteer coordinator will review your application and get in touch with you to discuss potential opportunities and next steps. This may include a brief informal interview.'
    }
];

const FAQItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="volunteer-faq-item">
            <button className="volunteer-faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{faq.question}</span>
                <ChevronDown style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
            </button>
            {isOpen && <div className="volunteer-faq-answer">{faq.answer}</div>}
        </div>
    );
};

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitVolunteerApplication(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
    } catch (error) {
      console.error('Failed to submit volunteer application:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="volunteer-page">
        <section className="volunteer-hero">
          <h1 className="volunteer-hero-title">Become a Volunteer</h1>
          <p className="volunteer-hero-subtitle">
            Your time and talent can ignite a creative spark in a childs life. Join us in our mission to empower the next generation through art.
          </p>
        </section>

        <div className="volunteer-container">
          <section className="volunteer-section">
            <h2 className="volunteer-section-title">Volunteer Opportunities</h2>
            <div className="volunteer-roles-grid">
              {roles.map((role) => (
                <div key={role.title} className="volunteer-role-card">
                  <div className="volunteer-role-icon">{role.icon}</div>
                  <h3 className="volunteer-role-title">{role.title}</h3>
                  <p className="volunteer-role-description">{role.description}</p>
                  <ul className="volunteer-role-tasks">
                    {role.tasks.map((task) => (
                      <li key={task} className="volunteer-role-task">{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="volunteer-section">
            <h2 className="volunteer-section-title">Sign Up to Volunteer</h2>
            <div className="volunteer-form-container">
              <form onSubmit={handleSubmit}>
                <div className="volunteer-form-group">
                  <label htmlFor="name" className="volunteer-form-label">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="volunteer-form-input" required />
                </div>
                <div className="volunteer-form-group">
                  <label htmlFor="email" className="volunteer-form-label">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="volunteer-form-input" required />
                </div>
                <div className="volunteer-form-group">
                  <label htmlFor="phone" className="volunteer-form-label">Phone Number (Optional)</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="volunteer-form-input" />
                </div>
                <div className="volunteer-form-group">
                  <label htmlFor="interest" className="volunteer-form-label">Area of Interest</label>
                  <select id="interest" name="interest" value={formData.interest} onChange={handleInputChange} className="volunteer-form-select" required>
                    <option value="" disabled>Select a role</option>
                    {roles.map(role => <option key={role.title} value={role.title}>{role.title}</option>)}
                    <option value="General">General Support</option>
                  </select>
                </div>
                <div className="volunteer-form-group">
                  <label htmlFor="message" className="volunteer-form-label">Tell us why you want to volunteer (Optional)</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="volunteer-form-textarea"></textarea>
                </div>
                <button type="submit" className="volunteer-form-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
                {submitStatus === 'success' && (
                  <p className="submit-message success" style={{marginTop: '1rem'}}>
                    Thank you for your application! We&apos;ll be in touch soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="submit-message error" style={{marginTop: '1rem'}}>
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </div>
          </section>

          <section className="volunteer-section">
            <h2 className="volunteer-section-title">Frequently Asked Questions</h2>
            <div className="volunteer-faq-container">
                {faqs.map((faq, index) => <FAQItem key={index} faq={faq} />)}
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
}
