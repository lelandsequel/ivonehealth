export const SITE = {
  name: "IV One Health",
  city: "Riyadh",
  country: "Saudi Arabia",
  // Keep these conservative; if unset, we avoid rendering placeholder phone numbers in UI.
  phoneE164: process.env.NEXT_PUBLIC_PHONE ?? "",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "info@ivonehealth.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ivonehealth.com",
  logoPath: "/images/logo.svg",
};

export function getAbsoluteUrl(path: string) {
  const base = SITE.siteUrl.replace(/\/+$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}




