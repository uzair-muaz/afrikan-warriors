export const company = {
  legalName: "Afrikan Warriors Ltd",
  number: "NI733070",
  type: "Private company limited by shares",
  registeredIn: "Northern Ireland",
  incorporated: "8 September 2025",
  office: ["12 Enfield Drive", "Belfast", "BT13 3DT", "Northern Ireland"],
  companiesHouse:
    "https://find-and-update.company-information.service.gov.uk/company/NI733070",
  ico: "https://ico.org.uk/make-a-complaint/",
  dpc: "https://www.dataprotection.ie/",
} as const;

export const legalDocuments = [
  {
    label: "Certificate of Incorporation",
    format: "PDF",
    note: "Companies House certificate for Afrikan Warriors Ltd, company number NI733070. Issued in Belfast on 8 September 2025.",
    href: "/documents/legal/certificate-of-incorporation.pdf",
  },
  {
    label: "Memorandum of Association",
    format: "PDF",
    note: "Memorandum of association of Afrikan Warriors Ltd, dated 5 September 2025.",
    href: "/documents/legal/memorandum-of-association.pdf",
  },
] as const;
