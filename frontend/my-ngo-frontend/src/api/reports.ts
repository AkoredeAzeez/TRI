import client from './strapi'

export const reports = client.collection('reports')

export function getAllReports() {
  return reports.find()
}

export function getReportById(id: string) {
  return reports.findOne(id)
}

export function createReport(data: any) {
  return reports.create({ data })
}

export function updateReport(id: string, data: any) {
  return reports.update(id, { data })
}
