import client from './strapi'

export const storyImpacts = client.collection('story-impacts')

export function getAllStoryImpacts() {
  return storyImpacts.find()
}

export function getStoryImpactById(id) {
  return storyImpacts.findOne(id)
}

export function createStoryImpact(data) {
  return storyImpacts.create({ data })
}

export function updateStoryImpact(id, data) {
  return storyImpacts.update(id, { data })
}
