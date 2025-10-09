'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getAllDonationCampaigns } from '../../api/donation-campaigns';
import { STRAPI_BASE_URL } from '../../api/strapi';
import './donate.css';

export default function DonatePage() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await getAllDonationCampaigns();
        console.log('✅ Donation campaigns fetched:', response);
        
        if (response.data && response.data.length > 0) {
          // Filter only live campaigns
          const liveCampaigns = response.data.filter(
            campaign => campaign.donationStatus === 'Live'
          );
          setCampaigns(liveCampaigns);
          
          // Auto-select first campaign if available
          if (liveCampaigns.length > 0) {
            setSelectedCampaign(liveCampaigns[0]);
          }
        }
      } catch (error) {
        console.error('❌ Error fetching campaigns:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  // Calculate percentage raised
  const getProgressPercentage = (raised, goal) => {
    if (!raised || !goal) return 0;
    return Math.min((Number(raised) / Number(goal)) * 100, 100);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  // Handle donation amount selection
  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  // Handle custom amount
  const handleCustomAmount = (value) => {
    setCustomAmount(value);
    setDonationAmount('');
  };

  // Handle Paystack checkout (placeholder)
  const handleDonate = (e) => {
    e.preventDefault();
    
    const amount = donationAmount || customAmount;
    
    if (!amount || amount <= 0) {
      alert('Please enter a valid donation amount');
      return;
    }

    if (!donorInfo.email || !donorInfo.name) {
      alert('Please provide your name and email');
      return;
    }

    // PAYSTACK INTEGRATION PLACEHOLDER
    console.log('🚀 Initiating Paystack checkout...');
    console.log('Campaign:', selectedCampaign?.id);
    console.log('Amount:', amount);
    console.log('Donor:', donorInfo);
    
    alert(`Paystack integration pending.\n\nDonation Details:\nCampaign: ${selectedCampaign?.description || 'General Fund'}\nAmount: ${formatCurrency(amount)}\nDonor: ${donorInfo.name}`);
    
    // TODO: Integrate Paystack
    // const handler = PaystackPop.setup({
    //   key: 'YOUR_PAYSTACK_PUBLIC_KEY',
    //   email: donorInfo.email,
    //   amount: amount * 100, // Amount in kobo
    //   currency: 'NGN',
    //   ref: 'TRI_' + Math.floor(Math.random() * 1000000000 + 1),
    //   metadata: {
    //     custom_fields: [
    //       {
    //         display_name: "Campaign",
    //         variable_name: "campaign_id",
    //         value: selectedCampaign?.id
    //       }
    //     ]
    //   },
    //   callback: function(response) {
    //     alert('Payment successful! Reference: ' + response.reference);
    //   },
    //   onClose: function() {
    //     alert('Payment window closed.');
    //   }
    // });
    // handler.openIframe();
  };

  const suggestedAmounts = [5000, 10000, 25000, 50000, 100000];

  return (
    <>
      <Navbar />
      
      <div className="donate-page">
        {/* Hero Section */}
        <section className="donate-hero">
          <div className="donate-hero-content">
            <h1 className="donate-hero-title">Make a Difference Today</h1>
            <div className="donate-hero-line"></div>
            <p className="donate-hero-subtitle">
              Your generous donation helps us empower children through art education and creative expression
            </p>
          </div>
        </section>

        <div className="donate-container">
          {loading ? (
            <div className="donate-loading">
              <p>Loading donation campaigns...</p>
            </div>
          ) : (
            <div className="donate-content">
              {/* Campaigns List */}
              <div className="donate-campaigns-section">
                <h2 className="donate-section-title">Active Campaigns</h2>
                
                {campaigns.length > 0 ? (
                  <div className="donate-campaigns-list">
                    {campaigns.map((campaign) => {
                      const progressPercentage = getProgressPercentage(
                        campaign.raised || 0,
                        campaign.goal
                      );
                      const isSelected = selectedCampaign?.id === campaign.id;
                      const mediaUrl = campaign.media?.url 
                        ? (campaign.media.url.startsWith('http') 
                            ? campaign.media.url 
                            : `${STRAPI_BASE_URL}${campaign.media.url}`)
                        : null;

                      return (
                        <div
                          key={campaign.id}
                          className={`donate-campaign-card ${isSelected ? 'selected' : ''}`}
                          onClick={() => setSelectedCampaign(campaign)}
                        >
                          {mediaUrl && (
                            <div className="donate-campaign-image">
                              <Image
                                src={mediaUrl}
                                alt={campaign.description || 'Campaign'}
                                fill
                                style={{ objectFit: 'cover' }}
                              />
                            </div>
                          )}
                          
                          <div className="donate-campaign-content">
                            <p className="donate-campaign-description">
                              {campaign.description || 'Support our mission'}
                            </p>
                            
                            <div className="donate-campaign-stats">
                              <div className="donate-stat">
                                <span className="donate-stat-label">Raised</span>
                                <span className="donate-stat-value">
                                  {formatCurrency(campaign.raised || 0)}
                                </span>
                              </div>
                              <div className="donate-stat">
                                <span className="donate-stat-label">Goal</span>
                                <span className="donate-stat-value">
                                  {formatCurrency(campaign.goal)}
                                </span>
                              </div>
                            </div>

                            <div className="donate-progress-container">
                              <div className="donate-progress-bar">
                                <div 
                                  className="donate-progress-fill"
                                  style={{ width: `${progressPercentage}%` }}
                                />
                              </div>
                              <span className="donate-progress-text">
                                {progressPercentage.toFixed(0)}% funded
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="donate-empty">
                    <p>No active campaigns at the moment. Your donations still help us continue our mission!</p>
                  </div>
                )}
              </div>

              {/* Donation Form */}
              <div className="donate-form-section">
                <div className="donate-form-card">
                  <h2 className="donate-section-title">Your Donation</h2>
                  
                  {selectedCampaign && (
                    <div className="donate-selected-campaign">
                      <p className="donate-selected-label">Donating to:</p>
                      <p className="donate-selected-name">
                        {selectedCampaign.description || 'General Fund'}
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleDonate}>
                    {/* Suggested Amounts */}
                    <div className="donate-amount-section">
                      <label className="donate-label">Select Amount</label>
                      <div className="donate-amount-grid">
                        {suggestedAmounts.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            className={`donate-amount-btn ${donationAmount === amount ? 'active' : ''}`}
                            onClick={() => handleAmountSelect(amount)}
                          >
                            {formatCurrency(amount)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Custom Amount */}
                    <div className="donate-input-group">
                      <label className="donate-label">Or Enter Custom Amount</label>
                      <input
                        type="number"
                        className="donate-input"
                        placeholder="Enter amount in Naira"
                        value={customAmount}
                        onChange={(e) => handleCustomAmount(e.target.value)}
                        min="100"
                      />
                    </div>

                    {/* Donor Information */}
                    <div className="donate-divider"></div>
                    
                    <div className="donate-input-group">
                      <label className="donate-label">Full Name *</label>
                      <input
                        type="text"
                        className="donate-input"
                        placeholder="Enter your name"
                        value={donorInfo.name}
                        onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="donate-input-group">
                      <label className="donate-label">Email Address *</label>
                      <input
                        type="email"
                        className="donate-input"
                        placeholder="Enter your email"
                        value={donorInfo.email}
                        onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="donate-input-group">
                      <label className="donate-label">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        className="donate-input"
                        placeholder="Enter your phone number"
                        value={donorInfo.phone}
                        onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                      />
                    </div>

                    {/* Donate Button */}
                    <button type="submit" className="donate-submit-btn">
                      <span>Donate {(donationAmount || customAmount) ? formatCurrency(donationAmount || customAmount) : 'Now'}</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>

                    <p className="donate-secure-note">
                      🔒 Secure payment powered by Paystack (Integration pending)
                    </p>
                  </form>
                </div>

                {/* Impact Information */}
                <div className="donate-impact-card">
                  <h3 className="donate-impact-title">Your Impact</h3>
                  <div className="donate-impact-list">
                    <div className="donate-impact-item">
                      <div className="donate-impact-icon">₦5,000</div>
                      <p className="donate-impact-text">Provides art supplies for 2 children for a month</p>
                    </div>
                    <div className="donate-impact-item">
                      <div className="donate-impact-icon">₦25,000</div>
                      <p className="donate-impact-text">Sponsors a child for a complete art workshop series</p>
                    </div>
                    <div className="donate-impact-item">
                      <div className="donate-impact-icon">₦100,000</div>
                      <p className="donate-impact-text">Funds a scholarship for one year of art education</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
