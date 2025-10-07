import client from "./strapi";

export const locations = client.collection("locations");

export function getAllLocations() {
  return locations.find();
}

export function getLocationById(id) {
  return locations.findOne(id);
}

export function createLocation(data) {
  return locations.create({ data });
}

export function updateLocation(id, data) {
  return locations.update(id, { data });
}
