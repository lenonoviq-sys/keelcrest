export default function sitemap() {
  const base = "https://www.keelcrest.com";
  const routes = ["/", "/about", "/leadership", "/contact"];
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1.0 : 0.8,
  }));
}
