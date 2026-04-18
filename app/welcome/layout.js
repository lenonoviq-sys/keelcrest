// This layout overrides the root navbar + footer so /welcome stands alone.
export const metadata = {
  title: "Private Access — Keel Crest Ltd.",
  description: "Secure client access to Keel Crest Ltd.",
  robots: { index: false, follow: false },
};

export default function WelcomeLayout({ children }) {
  return <>{children}</>;
}
