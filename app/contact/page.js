import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Keel Crest",
  description:
    "Begin a conversation with Keel Crest. We partner with a small number of ambitious brands each season.",
};

const channels = [
  {
    label: "Email",
    value: "hello@keelcrest.com",
    href: "mailto:hello@keelcrest.com",
    icon: MailIcon,
  },
  {
    label: "Telephone",
    value: "+1 (415) 555-0112",
    href: "tel:+14155550112",
    icon: PhoneIcon,
  },
  {
    label: "Studio",
    value: "San Francisco · Remote Worldwide",
    icon: PinIcon,
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 bg-black">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Start a conversation</span>
          <h1 className="section-heading mt-5 text-white">
            Let&rsquo;s create something{" "}
            <span className="gold-text italic">enduring</span>.
          </h1>
          <div className="divider-gold mx-auto mt-8 w-40" />
          <p className="mx-auto mt-8 max-w-xl text-white/70 leading-relaxed">
            We partner with a small number of brands each season. Share the
            contours of your vision — our studio will be in touch within two
            business days.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-5">
            {channels.map(({ label, value, href, icon: Icon }) => {
              const Wrapper = href ? "a" : "div";
              return (
                <Wrapper
                  key={label}
                  {...(href ? { href } : {})}
                  className="luxury-card group flex items-start gap-5 rounded-sm p-6 transition-colors"
                >
                  <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-gold/5 text-gold transition-all duration-500 group-hover:border-gold group-hover:shadow-gold">
                    <Icon />
                  </span>
                  <div>
                    <p className="eyebrow">{label}</p>
                    <p className="mt-2 font-serif text-xl text-white">
                      {value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}

            <div className="luxury-card rounded-sm p-6">
              <p className="eyebrow">Hours</p>
              <p className="mt-2 font-serif text-xl text-white">
                Mon – Fri · 9am – 7pm PT
              </p>
              <p className="mt-2 text-sm text-white/60">
                Weekend correspondence by appointment.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1.2 4.8a1 1 0 0 1-.29 1L7.21 11.21a16 16 0 0 0 5.58 5.58l1.66-1.79a1 1 0 0 1 1-.29l4.8 1.2a1 1 0 0 1 .75 1Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s-7-6.2-7-12a7 7 0 1 1 14 0c0 5.8-7 12-7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
