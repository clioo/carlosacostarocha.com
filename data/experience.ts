import { site } from "@/data/site";

export type CompanyMark =
  | { kind: "file"; src: string; alt: string }
  | { kind: "wordmark"; text: string };

export type EvidenceItem = {
  value: string;
  label: string;
  sourceLabel: string;
  sourceHref?: string;
};

export type ExperienceRole = {
  slug: string;
  featured: boolean;
  company: string;
  companyNote?: string;
  href?: string;
  role: string;
  period: string;
  location: string;
  mark: CompanyMark;
  ownership: string;
  evidence: EvidenceItem;
  highlights: string[];
  stack: string[];
  product?: {
    image: string;
    imageAlt: string;
    label: string;
    href: string;
  };
};

export const experience: ExperienceRole[] = [
  {
    slug: "mcgraw-hill",
    featured: true,
    company: "McGraw Hill",
    role: "Software Engineer, AI",
    period: "2024 — present",
    location: "Texas, United States",
    href: "https://www.mheducation.com/",
    mark: { kind: "file", src: "/logos/mcgraw-hill-official.png", alt: "McGraw Hill" },
    ownership:
      "I build and operate AI product workflows for teachers and students, with responsibility spanning orchestration, backend delivery, releases, and observability.",
    evidence: {
      value: "Two production AI products",
      label:
        "A teacher assistant and a student writing assistant deployed across United States and European education platforms.",
      sourceLabel: "Role record",
    },
    highlights: [
      "Designed retrieval and multi-step LLM orchestration for a teacher-facing assistant.",
      "Owned FastAPI and Celery delivery workflows, Kubernetes releases, and production tracing with LangSmith.",
    ],
    stack: ["FastAPI", "Celery", "Kubernetes", "AWS", "Azure", "OpenSearch", "LangSmith"],
  },
  {
    slug: "gliamediq",
    featured: true,
    company: "GliaMediQ",
    role: "Technical Founder & Software Engineer",
    period: "2022 — present",
    location: "Mexico",
    href: "https://gliamediq.com/",
    mark: { kind: "file", src: "/logos/gliamediq-official.png", alt: "GliaMediQ" },
    ownership:
      "I founded GliaMediQ and lead product engineering across backend services, mobile clients, AI-assisted publishing workflows, and cloud operations.",
    evidence: {
      value: "9,000+ published clinical cases",
      label:
        "The live medical education platform also publishes exam questions, mobile study tools, and structured preparation workflows.",
      sourceLabel: "Public product evidence",
      sourceHref: "https://gliamediq.com/",
    },
    highlights: [
      "Built Django and Celery services, Flutter clients, and the Azure and Kubernetes delivery platform.",
      "Implemented observable AI-assisted content workflows with LangSmith and Sentry.",
    ],
    stack: ["Django", "Flutter", "Celery", "LangSmith", "Sentry", "Azure", "Kubernetes"],
    product: {
      image: "/screens/gliamediq-home.webp",
      imageAlt:
        "GliaMediQ medical exam-preparation platform showing a mobile course experience and published learning content.",
      label: "Visit the live product",
      href: "https://gliamediq.com/",
    },
  },
  {
    slug: "uber",
    featured: true,
    company: "Uber",
    companyNote: "Cornershop by Uber",
    role: "Software Engineer L4",
    period: "2022 — 2024",
    location: "United States · remote",
    href: "https://www.uber.com/",
    mark: { kind: "file", src: "/logos/uber.svg", alt: "Uber" },
    ownership:
      "I owned core backend work for lifecycle messaging, search, recommendations, and retention systems at Cornershop by Uber.",
    evidence: {
      value: "Up to 5M messages per market",
      label:
        "High-throughput lifecycle campaigns ran inside strict delivery windows alongside daily recommendation workflows.",
      sourceLabel: "Role record",
    },
    highlights: [
      "Built asynchronous Django and Celery services for high-volume lifecycle campaigns.",
      "Operated Elasticsearch-backed recommendation and incentive workflows under marketplace traffic.",
    ],
    stack: ["Django", "Celery", "Elasticsearch", "Python"],
  },
  {
    slug: "cemex",
    featured: false,
    company: "Cemex",
    role: "Software Engineer",
    period: "2021 — 2022",
    location: "Monterrey, Mexico · remote",
    href: "https://www.cemex.com/",
    mark: { kind: "file", src: "/logos/cemex.svg", alt: "Cemex" },
    ownership:
      "I helped move industrial machine-learning models from prototype to repeatable production services for concrete-plant operations.",
    evidence: {
      value: "Seven countries · two continents",
      label: "The DCO order-taking platform operated across a multi-country footprint.",
      sourceLabel: "Role record",
    },
    highlights: [
      "Productionized inference services with Kubernetes, Azure, and automated model delivery.",
      "Built Databricks pipelines and operational calculations for plant visibility.",
    ],
    stack: ["Kubernetes", "Azure", "Databricks", "MLOps", "Python", "R"],
  },
  {
    slug: "momenry",
    featured: false,
    company: "Momenry",
    role: "Backend Technical Lead",
    period: "2020 — 2022",
    location: "United States · remote",
    mark: { kind: "wordmark", text: "MOMENRY" },
    ownership:
      "I owned backend architecture and technical decisions for a mobile augmented-reality startup in my first formal leadership role.",
    evidence: {
      value: "Backend technical leadership",
      label: "Real-time APIs supported augmented-reality experiences on mobile devices.",
      sourceLabel: "Role record",
    },
    highlights: [
      "Designed Django, Python, and Celery services for mobile AR workflows.",
      "Translated product requirements into architecture, APIs, and delivery plans.",
    ],
    stack: ["Django", "Python", "Celery", "AWS"],
  },
  {
    slug: "softtek",
    featured: false,
    company: "Softtek",
    role: "Software Engineer",
    period: "2019 — 2021",
    location: "Ensenada, Mexico",
    href: "https://www.softtek.com/",
    mark: { kind: "file", src: "/logos/softtek-official.jpg", alt: "Softtek" },
    ownership:
      "I built test automation frameworks with SDETs across multiple client products and domains.",
    evidence: {
      value: "300+ API tests · 53 end-to-end flows",
      label: "Automated coverage protected critical API and browser journeys.",
      sourceLabel: "Role record",
    },
    highlights: ["Built reusable Python and C# automation frameworks for API and web testing."],
    stack: ["Python", "C#", "Selenium"],
  },
  {
    slug: "ahome-government",
    featured: false,
    company: "Ahome Municipal Government",
    role: "Head of Innovation",
    period: "2018 — 2019",
    location: "Sinaloa, Mexico",
    mark: { kind: "wordmark", text: "AHOME" },
    ownership:
      "I designed, built, deployed, and operated a public-works and institutional-goals platform end to end.",
    evidence: {
      value: "Approximately 100 public employees",
      label: "The platform supported evidence review and public-works tracking across municipal teams.",
      sourceLabel: "Role record",
    },
    highlights: [
      "Built the platform with Django REST and Angular and operated it on AWS.",
      "Led domain review and third-party integration work across municipal teams.",
    ],
    stack: ["Django REST", "Angular", "AWS"],
  },
];

export type OpenSourceProject = {
  slug: string;
  title: string;
  type: string;
  status: string;
  line: string;
  signal: string;
  signalLabel: string;
  stack: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  links: { label: string; href: string }[];
};

export const openSource: OpenSourceProject[] = [
  {
    slug: "opengraph",
    title: "OpenGraph",
    type: "Open-source developer tool",
    status: "Live and open source",
    line: "A local-first visual editor for designing, inspecting, and exporting AI agent graphs, with an optional MCP companion.",
    signal: "A visible system of record",
    signalLabel:
      "The hosted editor and full implementation are public, while local workflows can remain on the developer's machine.",
    stack: ["React", "TypeScript", "React Flow", "Zustand", "MCP"],
    image: "/screens/opengraph-editor.webp",
    imageWidth: 1440,
    imageHeight: 900,
    imageAlt:
      "OpenGraph canvas showing a five-node agent workflow from ingestion through validation.",
    links: [
      { label: "Open the live app", href: "https://www.opengraph.work/" },
      { label: "View source", href: "https://github.com/clioo/opengraph" },
    ],
  },
  {
    slug: "write-that-down",
    title: "Write That Down",
    type: "Open-source macOS app",
    status: "Open source",
    line: "A menu-bar app that detects calls, transcribes microphone and system audio with local models, and writes Markdown notes.",
    signal: "On-device by design",
    signalLabel:
      "Capture, transcription, and storage remain on the Mac without requiring an account.",
    stack: ["Swift 6", "SwiftUI", "AppKit", "WhisperKit", "ScreenCaptureKit"],
    image: "/screens/write-that-down-product.webp",
    imageWidth: 1397,
    imageHeight: 768,
    imageAlt:
      "Write That Down showing an active conversation with a live transcript, recent recordings, and an AI-assisted question and answer panel.",
    links: [{ label: "View source", href: "https://github.com/clioo/write-that-down-patrick" }],
  },
];

export const profile = {
  headline: "Senior Software Engineer & AI Technical Leader",
  summary:
    "Senior software engineer and technical founder working across education, medical training, marketplaces, and industrial systems.",
  education: "B.Sc. Software Engineering — Universidad Autónoma de Sinaloa",
  cvUrl: "/resume.pdf",
  github: site.github,
  linkedin: site.linkedin,
};
