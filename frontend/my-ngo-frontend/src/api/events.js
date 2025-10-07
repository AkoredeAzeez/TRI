import client from "./strapi";

export const events = client.collection("events");

export function getAllEvents() {
  return events.find();
}

export function getEventById(id) {
  return events.findOne(id);
}

export function createEvent(data) {
  return events.create({ data });
}

export function updateEvent(id, data) {
  return events.update(id, { data });
}
