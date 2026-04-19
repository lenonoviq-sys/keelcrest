// This layout overrides the root navbar + footer so /welcome stands alone.
export const metadata = {
  title: "Private Access, KeelCrest Holding LTD",
  description: "Secure client access to KeelCrest Holding LTD",
  robots: { index: false, follow: false },
};

export default function WelcomeLayout({ children }) {
  return <>{children}</>;
}
