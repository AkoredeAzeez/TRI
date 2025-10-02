import client from './strapi'

export const partners = client.collection('partners')

export function getAllPartners() {
  return partners.find()
}

export function getPartnerById(id: string) {
  return partners.findOne(id)
}

export function createPartner(data: any) {
  return partners.create({ data })
}

export function updatePartner(id: string, data: any) {
  return partners.update(id, { data })
}
