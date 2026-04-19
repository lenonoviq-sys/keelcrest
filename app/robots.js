export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/welcome/"],
      },
    ],
    sitemap: "https://www.keelcrest.com/sitemap.xml",
  };
}
