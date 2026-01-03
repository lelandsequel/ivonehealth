export type DeckSlide = {
  id: string;
  title: string;
  subtitle?: string;
  body: string[];
  bullets?: string[];
  imageSrc?: string;
  imageAlt?: string;
};

export const presentationSlides: DeckSlide[] = [
  {
    id: "intro",
    title: "C&L Strategy — SEO OS",
    subtitle: "How This Site Was Built",
    body: [
      "This presentation explains the SEO/AEO/pSEO system used to build the IV One Health site.",
      "Audience: operators and marketers (not patients). No medical or treatment advice appears in this deck.",
    ],
    bullets: ["Traditional SEO vs system-based SEO", "What pSEO is (and is not)", "Why it works for regulated/YMYL", "What was built (as an example)", "How it compounds"],
  },
  {
    id: "traditional-seo-problem",
    title: "The Core Problem With Traditional SEO",
    subtitle: "Activity Without Infrastructure",
    body: [
      "Traditional SEO is often page-by-page: write one page, optimize one keyword, repeat.",
      "System-based SEO focuses on repeatable templates + structured data + tight internal linking + QA so you can publish many high-quality pages consistently.",
    ],
    bullets: [
      "Traditional: bespoke pages, slower throughput",
      "System-based: scalable page generation with guardrails",
      "Outcome: compounding surface area without compounding chaos",
    ],
    imageSrc: "/deck/01_activity_vs_outcomes.png",
    imageAlt: "Chart showing SEO activity vs operational outcomes",
  },
  {
    id: "philosophy",
    title: "Our Philosophy",
    subtitle: "SEO Is Infrastructure, Not Content",
    body: [
      "Treat SEO like a layered system: a stable foundation, scalable coverage, extractable answers, and conversion UX.",
      "Each layer strengthens the whole system — and upgrades propagate across all pages.",
    ],
    bullets: [
      "Foundation: core site + technical baseline",
      "Coverage: programmatic pages (pSEO)",
      "Authority: answer-first pages (AEO)",
      "Conversion: clear next steps and trust UX",
    ],
    imageSrc: "/deck/02_layered_system.png",
    imageAlt: "Layered diagram showing foundation, pSEO, AEO, and conversion",
  },
  {
    id: "pseo-what-is",
    title: "What Programmatic SEO (pSEO) Actually Is",
    subtitle: "Separation of Structure and Data",
    body: [
      "pSEO creates many pages from a dataset using stable templates.",
      "The key is governance: structure + data + QA so pages are useful, consistent, and compliant.",
    ],
    bullets: [
      "Template controls UX, internal linking, and schema",
      "Data controls coverage and specificity (without keyword stuffing)",
      "QA prevents thin/duplicative pages",
    ],
    imageSrc: "/deck/03_pseo_template_data_pages.png",
    imageAlt: "Diagram showing template + data generating many pages",
  },
  {
    id: "pseo-fails",
    title: "Why Most pSEO Fails",
    subtitle: "Scaling Without Control",
    body: [
      "pSEO fails when it’s treated as a publishing hack instead of a controlled system.",
      "The fix is structured templates, data-driven content, controlled rollout, and quality + compliance guardrails.",
    ],
    bullets: [
      "Wrong: thin pages, city swaps, keyword stuffing, mass indexing, random internal links",
      "Right: structured templates, data-driven content, controlled rollout, intentional linking, quality + compliance",
    ],
    imageSrc: "/deck/04_bad_vs_good_pseo.png",
    imageAlt: "Split screen comparing bad vs controlled pSEO",
  },
  {
    id: "aeo-what-is",
    title: "AEO: Answer Engine Optimization",
    subtitle: "Search Is No Longer Ten Blue Links",
    body: [
      "AI-driven search often surfaces one extracted answer, not a list of links.",
      "AEO makes your pages easy to extract, trust, and cite by structuring pages around direct answers and supporting context.",
    ],
    bullets: [
      "Answer-first structure (clear, conservative wording)",
      "Supporting sections for context and trust",
      "Schema consistency for page type",
    ],
    imageSrc: "/deck/05_ai_search_flow.png",
    imageAlt: "Flow diagram showing question to AI system to highlighted answer",
  },
  {
    id: "compounds",
    title: "Why This Compounds",
    subtitle: "Infrastructure Improves Over Time",
    body: [
      "Each dataset addition creates a new high-quality page with the same governance and structure.",
      "Template improvements upgrade every page, and internal linking gets stronger as coverage grows.",
    ],
    bullets: [
      "Add 1 data record → publish 1 new page (with the same QA rules)",
      "Improve the template → upgrade the whole library",
      "Measure → iterate → cleaner conversion paths (without popups)",
    ],
    imageSrc: "/deck/06_compounding_authority.png",
    imageAlt: "Curve showing compounding authority over time",
  },
  {
    id: "success",
    title: "What Success Looks Like",
    subtitle: "A Realistic Timeline",
    body: [
      "30 days: baseline indexing and early visibility signals.",
      "90 days: broader coverage and more qualified actions as pages mature.",
      "180 days: durable authority and a defensible position built on consistency.",
    ],
    bullets: ["30 / 90 / 180 day expectations (realistic)", "Durable visibility vs short-term hacks"],
    imageSrc: "/deck/07_timeline_30_90_180.png",
    imageAlt: "Timeline showing 30, 90, 180 day expectations",
  },
];


