import client from './strapi'

export const donationCampaigns = client.collection('donation-campaigns')

export function getAllDonationCampaigns() {
  return donationCampaigns.find()
}

export function getDonationCampaignById(id: string) {
  return donationCampaigns.findOne(id)
}

export function createDonationCampaign(data: any) {
  return donationCampaigns.create({ data })
}

export function updateDonationCampaign(id: string, data: any) {
  return donationCampaigns.update(id, { data })
}
