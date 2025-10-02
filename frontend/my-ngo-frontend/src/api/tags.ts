import client from './strapi'

export const tags = client.collection('tags')

export function getAllTags() {
  return tags.find()
}

export function getTagById(id: string) {
  return tags.findOne(id)
}

export function createTag(data: any) {
  return tags.create({ data })
}

export function updateTag(id: string, data: any) {
  return tags.update(id, { data })
}
