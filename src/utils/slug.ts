export function generateDatedSlug(meta) {
  if (!meta || !meta.date || !meta.title) return "";
  const datePath = meta.date.replaceAll("-", "/");
  const titleSlug = meta.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${datePath}/${titleSlug}`;
}
