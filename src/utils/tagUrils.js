export function getTagPath(key = "") {
  key = key?.replace(/[\W_]+/g, "-")?.toLowerCase() || ""
  return `/tag/${key}`
}

export function getTagString(tag) {
  return `#${tag}`
}
