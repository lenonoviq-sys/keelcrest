import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

export const metadata = {
  title: "KeelCrest Holding LTD, Wealth Solutions for Private Clients",
  description:
    "KeelCrest Holding LTD delivers wealth solutions for family offices, corporate, and private clients. Access new wealth opportunities through the growth potential of digital assets.",
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
