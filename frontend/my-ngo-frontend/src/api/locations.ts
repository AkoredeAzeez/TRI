import client from './strapi'

export const locations = client.collection('locations')

export function getAllLocations() {
  return locations.find()
}

export function getLocationById(id: string) {
  return locations.findOne(id)
}

export function createLocation(data: any) {
  return locations.create({ data })
}

export function updateLocation(id: string, data: any) {
  return locations.update(id, { data })
}
