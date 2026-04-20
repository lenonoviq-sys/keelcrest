import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact, Keelcrest Holding LTD",
  description:
    "Begin a private conversation with Keelcrest Holding LTD A select number of new engagements are considered each quarter.",
};

export default function ContactPage() {
  return (
    <>
      {/* Intro banner */}
      <section className="relative pt-24 pb-12 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28 bg-night overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-4 sm:mb-8">
              <span className="eyebrow">Get in touch</span>
            </div>
            <h1 className="section-title text-parchment text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Begin a{" "}
              <span className="italic text-gold-gradient">
                private conversation
              </span>
            </h1>
            <p className="mt-5 sm:mt-8 max-w-xl text-sm sm:text-base lg:text-lg font-light leading-relaxed text-parchment/65">
              <span className="block font-display italic tracking-wide text-gold-gradient">
                Keelcrest Holding LTD
              </span>
              accepts a limited number of new engagements each quarter. Share the
              contours of your enquiry, our team will respond with discretion.
            </p>
          </div>
        </div>
      </section>

      {/* Main — two column */}
      <section className="relative pb-20 sm:pb-32 lg:pb-44 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="grid gap-12 sm:gap-20 lg:grid-cols-12">
            {/* Left — contact details + image */}
            <aside className="lg:col-span-5 space-y-8 sm:space-y-12">
              <div>
                <p className="label-luxury mb-3 sm:mb-5">Email</p>
                <a
                  href="mailto:info@keelcrest.com"
                  className="font-display text-xl sm:text-2xl md:text-3xl font-light text-parchment transition-colors hover:text-gold-light"
                >
                  info@keelcrest.com
                </a>
              </div>

              <div className="relative w-full aspect-[3/2] -ml-2 sm:-ml-6 lg:-ml-32">
                <Image
                  src="/keelcrest-logo.png"
                  alt="Keelcrest Holding LTD, brand mark"
                  fill
                  quality={95}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-contain object-left"
                />
              </div>
            </aside>

            {/* Right — form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
