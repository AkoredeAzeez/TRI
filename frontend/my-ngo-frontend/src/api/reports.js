import client from "./strapi";

export const reports = client.collection("reports");

export function getAllReports() {
  return reports.find();
}

export function getReportById(id) {
  return reports.findOne(id);
}

export function createReport(data) {
  return reports.create({ data });
}

export function updateReport(id, data) {
  return reports.update(id, { data });
}
