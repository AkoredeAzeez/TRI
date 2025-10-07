import client from './strapi'

export const beneficiaries = client.collection('beneficiaries')

export function getAllBeneficiaries() {
  return beneficiaries.find()
}

export function getBeneficiaryById(id) {
  return beneficiaries.findOne(id)
}

export function createBeneficiary(data) {
  return beneficiaries.create({ data })
}

export function updateBeneficiary(id, data) {
  return beneficiaries.update(id, { data })
}
