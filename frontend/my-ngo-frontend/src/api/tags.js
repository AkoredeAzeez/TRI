import client from './strapi'

export const tags = client.collection('tags')

export function getAllTags() {
  return tags.find()
}

export function getTagById(id) {
  return tags.findOne(id)
}

export function createTag(data) {
  return tags.create({ data })
}

export function updateTag(id, data) {
  return tags.update(id, { data })
}
