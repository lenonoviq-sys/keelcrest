import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

export const metadata = {
  title: "Keel Crest Ltd. — Wealth Solutions for Private Clients",
  description:
    "Keel Crest Ltd. delivers wealth solutions for family offices, corporate, and private clients. Access new wealth opportunities through the growth potential of digital assets.",
  icons: {
    icon: "/logo.png",
  },
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
      </head>
      <body className="min-h-screen bg-night text-parchment antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
