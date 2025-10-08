import client from "./strapi";

export const programs = client.collection("programs");

export function getAllPrograms() {
  return programs.find({
    populate: ['heroImage', 'gallery', 'tags', 'partners', 'story_impacts']
  });
}

export function getProgramById(id) {
  return programs.findOne(id, {
    populate: ['heroImage', 'gallery', 'tags', 'partners', 'story_impacts']
  });
}

export function createProgram(data) {
  return programs.create({ data });
}

export function updateProgram(id, data) {
  return programs.update(id, { data });
}
