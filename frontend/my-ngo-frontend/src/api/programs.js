import client from "./strapi";

export const programs = client.collection("programs");

export function getAllPrograms() {
  return programs.find();
}

export function getProgramById(id) {
  return programs.findOne(id);
}

export function createProgram(data) {
  return programs.create({ data });
}

export function updateProgram(id, data) {
  return programs.update(id, { data });
}
