import client from "./strapi";

export const donationCampaigns = client.collection("donation-campaigns");

export function getAllDonationCampaigns() {
  return donationCampaigns.find({
    populate: ['media']
  });
}

export function getDonationCampaignById(id) {
  return donationCampaigns.findOne(id, {
    populate: ['media']
  });
}

export function createDonationCampaign(data) {
  return donationCampaigns.create({ data });
}

export function updateDonationCampaign(id, data) {
  return donationCampaigns.update(id, { data });
}
