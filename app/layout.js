import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

export const metadata = {
  metadataBase: new URL("https://www.keelcrest.com"),
  title: {
    default: "KeelCrest Holding LTD: Wealth Solutions for Private Clients",
    template: "%s | KeelCrest Holding LTD",
  },
  description:
    "KeelCrest Holding LTD is a private corporate firm that identifies, builds, and stewards digital ventures, turning considered ideas into market-leading products.",
  keywords: [
    "KeelCrest",
    "Keel Crest",
    "KeelCrest Holding",
    "luxury wealth firm",
    "digital ventures",
    "private investment",
    "Findtable",
    "ADDHOTEL",
    "FindSalad",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "KeelCrest Holding LTD",
    description:
      "A private corporate firm turning considered ideas into market-leading digital ventures.",
    url: "https://www.keelcrest.com",
    siteName: "KeelCrest Holding LTD",
    images: [
      {
        url: "/footer-logo.jpg",
        width: 1536,
        height: 1024,
        alt: "KeelCrest Holding LTD",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KeelCrest Holding LTD",
    description:
      "A private corporate firm turning considered ideas into market-leading digital ventures.",
    images: ["/footer-logo.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  // No `userScalable: false` — users must be able to pinch-zoom for accessibility.
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if('scrollRestoration' in history){history.scrollRestoration='manual';}window.scrollTo(0,0);}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen bg-night text-parchment antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
