// trailingSlash: true in next.config means the canonical URL form is /about/ (with slash).
// Sitemap must use the canonical form or Google reports a "Redirect error".
export default function sitemap() {
  const base = "https://www.keelcrest.com";
  const routes = ["/", "/about/", "/leadership/", "/contact/"];
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1.0 : 0.8,
  }));
}
