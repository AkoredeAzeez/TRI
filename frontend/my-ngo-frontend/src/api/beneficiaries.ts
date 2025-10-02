import client from './strapi'

export const beneficiaries = client.collection('beneficiaries')

export function getAllBeneficiaries() {
  return beneficiaries.find()
}

export function getBeneficiaryById(id: string) {
  return beneficiaries.findOne(id)
}

export function createBeneficiary(data: any) {
  return beneficiaries.create({ data })
}

export function updateBeneficiary(id: string, data: any) {
  return beneficiaries.update(id, { data })
}
