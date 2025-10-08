import client from "./strapi";

export const beneficiaries = client.collection("beneficiaries");

export function getAllBeneficiaries() {
  return beneficiaries.find({
    populate: ['story_impacts', 'story_impacts.program', 'story_impacts.media']
  });
}

export function getBeneficiaryById(id) {
  return beneficiaries.findOne(id, {
    populate: ['story_impacts', 'story_impacts.program', 'story_impacts.media']
  });
}

export function createBeneficiary(data) {
  return beneficiaries.create({ data });
}

export function updateBeneficiary(id, data) {
  return beneficiaries.update(id, { data });
}
