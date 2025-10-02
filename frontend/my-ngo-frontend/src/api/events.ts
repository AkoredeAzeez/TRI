import client from './strapi'

export const events = client.collection('events')

export function getAllEvents() {
  return events.find()
}

export function getEventById(id: string) {
  return events.findOne(id)
}

export function createEvent(data: any) {
  return events.create({ data })
}

export function updateEvent(id: string, data: any) {
  return events.update(id, { data })
}
