export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://mpxlabs.ai/sitemap.xml",
  };
}
