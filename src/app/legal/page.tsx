import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { DownloadList } from "@/components/ui/DownloadList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeImages } from "@/constants/home";
import { company, legalDocuments } from "@/constants/legal";
import { site } from "@/constants/nav";
import { ShowHero } from "@/features/shows/components/ShowHero";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Legal",
  description:
    "Company details, incorporation documents and privacy information for Afrikan Warriors Ltd, registered in Northern Ireland.",
  path: "/legal",
});

const facts = [
  { label: "Company", value: company.legalName },
  { label: "Company type", value: company.type },
  { label: "Company number", value: company.number },
  { label: "Registered in", value: company.registeredIn },
  { label: "Incorporated", value: company.incorporated },
  { label: "Registered office", value: company.office.join(", ") },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
] as const;

export default function LegalPage() {
  return (
    <>
      <ShowHero
        image={homeImages.about}
        alt="Afrikan Warriors performers on stage"
        eyebrow="United Kingdom & Ireland"
        title="Legal"
        titlePrimary
        subtitle="Afrikan Warriors Ltd is registered in Northern Ireland and performs in the United Kingdom and Ireland. This page has the company details, the incorporation documents, and how this website uses your information."
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <Button href="#company" size="lg">
            Company Details
          </Button>
          <Button href="/promoters" variant="ghost" size="lg">
            Promoter Files
          </Button>
        </div>
      </ShowHero>

      <div className="mx-auto max-w-container-max space-y-20 px-margin-mobile py-stack-xl md:px-margin-desktop">
        <section id="company" className="scroll-mt-32">
          <SectionHeading
            align="left"
            title={
              <>
                Company <span className="text-primary">Details</span>
              </>
            }
            description="These are the details a UK company is required to show on its website."
            className="mb-10"
          />
          <dl className="divide-y divide-primary/15 border border-primary/20">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-1 gap-1 bg-surface-container px-5 py-5 sm:grid-cols-[12rem_1fr] sm:items-baseline sm:gap-6 sm:px-6"
              >
                <dt className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
                  {fact.label}
                </dt>
                <dd className="min-w-0 font-body-md text-body-md text-on-surface break-words">
                  {"href" in fact ? (
                    <a href={fact.href} className="hover:text-primary">
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 font-body-md text-body-md text-on-surface-variant">
            The public register is the current company record.{" "}
            <a
              href={company.companiesHouse}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              View Afrikan Warriors Ltd on Companies House
            </a>
            .
          </p>
        </section>

        <section id="documents" className="scroll-mt-32">
          <SectionHeading
            align="left"
            title={
              <>
                Company <span className="text-primary">Documents</span>
              </>
            }
            description="Certificate of incorporation and memorandum of association."
            className="mb-10"
          />
          <DownloadList items={legalDocuments} />
          <p className="mt-6 font-body-md text-body-md text-on-surface-variant">
            The risk assessment, logo and insurance confirmation are on the{" "}
            <a href="/promoters" className="text-primary underline-offset-4 hover:underline">
              Promoters
            </a>{" "}
            page. That confirmation is for Rahim Saphy trading as Afrikan
            Warriors, policy STM3/2189, for 17 September 2024 to 16 September
            2025. It is not a certificate in the name of Afrikan Warriors Ltd.
          </p>
        </section>

        <section id="privacy" className="scroll-mt-32">
          <SectionHeading
            align="left"
            title={
              <>
                Privacy <span className="text-primary">Notice</span>
              </>
            }
            description="Afrikan Warriors Ltd is responsible for personal information collected on this website."
            className="mb-10"
          />
          <div className="space-y-8 font-body-md text-body-md text-on-surface-variant">
            <div>
              <h3 className="mb-3 font-headline-md text-xl uppercase text-on-surface">
                What we collect
              </h3>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Booking enquiries: your name, email, and any show, event,
                  date, location, audience, setting, budget or message you send.
                </li>
                <li>
                  Support payments: your name, email, the amount, and any note
                  you add. Card numbers are handled by Stripe. We do not store
                  them.
                </li>
                <li>
                  The technical details our host and Stripe need to run the site
                  and take a payment, including an IP address in server logs.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-headline-md text-xl uppercase text-on-surface">
                Why we use it
              </h3>
              <p>
                To reply to an enquiry you sent, to take a support contribution
                you asked us to process, to keep the accounting record, and to
                keep the site secure. We do not sell personal information.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-headline-md text-xl uppercase text-on-surface">
                Who receives it
              </h3>
              <p>
                The company, at {site.email}. Resend delivers the enquiry and
                payment emails. Stripe processes support payments. Cloudflare
                counts page views without a cookie and does not receive your
                name or email. People in
                the United Kingdom are covered by UK data protection law.
                People in Ireland can rely on the same notice, and can also
                contact the Irish Data Protection Commission.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-headline-md text-xl uppercase text-on-surface">
                How long we keep it
              </h3>
              <p>
                Enquiry messages are kept while we are dealing with the booking
                and for a short time afterwards. Payment records are kept for
                as long as UK company and tax law requires.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-headline-md text-xl uppercase text-on-surface">
                Your rights
              </h3>
              <p>
                You can ask for a copy of your information, a correction, a
                deletion, a restriction, or to object to how we use it. Email{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
                . You can complain to the{" "}
                <a
                  href={company.ico}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Information Commissioner&apos;s Office
                </a>{" "}
                in the United Kingdom. If you are in Ireland, you can also
                complain to the{" "}
                <a
                  href={company.dpc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Data Protection Commission
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section id="cookies" className="scroll-mt-32">
          <SectionHeading
            align="left"
            title="Cookies"
            description="This website does not use advertising cookies or analytics cookies."
            className="mb-8"
          />
          <p className="font-body-md text-body-md text-on-surface-variant">
            Visit counts use Cloudflare Web Analytics. That does not set a
            cookie. When you open a support payment, Stripe sets cookies that
            are needed to take the payment and reduce fraud. Those cookies are
            part of the payment. We do not set optional cookies of our own, so
            there is no cookie banner.
          </p>
        </section>

        <section id="support-payments" className="scroll-mt-32">
          <SectionHeading
            align="left"
            title={
              <>
                Support <span className="text-primary">Payments</span>
              </>
            }
            className="mb-8"
          />
          <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
            <p>
              A payment on the Support page is a voluntary contribution to
              Afrikan Warriors. It is not a ticket, a product, or a confirmed
              booking. The shop is not open yet. Merchandise terms will be
              added when it is.
            </p>
            <p>
              If a payment was taken in error, email {site.email} and we will
              look into it.
            </p>
          </div>
        </section>

        <section id="website" className="scroll-mt-32">
          <SectionHeading
            align="left"
            title={
              <>
                Using This <span className="text-primary">Website</span>
              </>
            }
            className="mb-8"
          />
          <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
            <p>
              Photographs, video, text and the logo belong to Afrikan Warriors
              Ltd unless a credit says otherwise. You may share links to these
              pages. Ask us before using images or the logo in a programme or
              advertisement. The logo file is on the Promoters page.
            </p>
            <p>
              Dates and availability on the site are a guide. A performance is
              confirmed only when we agree it with you in writing. The company
              is registered in Northern Ireland. A booking follows the
              agreement we make with you.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
