function getTagPath(key = "") {
  key = key?.replace(/[\W_]+/g, "-")?.toLowerCase() || ""
  return `/tag/${key}`
}
const pathUrils = {
  getTagPath,
}
export default pathUrils
