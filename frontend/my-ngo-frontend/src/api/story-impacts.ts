import client from './strapi'

export const storyImpacts = client.collection('story-impacts')

export function getAllStoryImpacts() {
  return storyImpacts.find()
}

export function getStoryImpactById(id: string) {
  return storyImpacts.findOne(id)
}

export function createStoryImpact(data: any) {
  return storyImpacts.create({ data })
}

export function updateStoryImpact(id: string, data: any) {
  return storyImpacts.update(id, { data })
}
