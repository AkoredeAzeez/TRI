import client from './strapi'

export const programs = client.collection('programs')

export function getAllPrograms() {
  return programs.find()
}

export function getProgramById(id: string) {
  return programs.findOne(id)
}

export function createProgram(data: any) {
  return programs.create({ data })
}

export function updateProgram(id: string, data: any) {
  return programs.update(id, { data })
}
