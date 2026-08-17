export const site = {
  name: "Jesús Carlos Acosta Rocha",
  shortName: "Jesús Carlos Acosta Rocha",
  role: "AI Engineer",
  url: "https://carlosacostarocha.com",
  photo: "/jesus-carlos-acosta-rocha-v1.webp",
  photoUrl: "https://carlosacostarocha.com/jesus-carlos-acosta-rocha-v1.webp",
  description:
    "Jesús Carlos Acosta Rocha is an AI Engineer and technical founder building production AI systems, developer tools, and privacy-minded software.",
  email: "",
  github: "https://github.com/clioo",
  linkedin: "https://www.linkedin.com/in/jesus-a-rocha/",
};

export const evidence = [
  {
    area: "Medical AI",
    detail: "9,000+ clinical cases published in a founder-built medical exam platform.",
    href: "https://gliamediq.com/",
    linkLabel: "See GliaMediQ",
  },
  {
    area: "Distributed systems",
    detail: "Email infrastructure scaled to as many as five million messages per country.",
  },
  {
    area: "Industrial ML",
    detail: "Production deployments operated across seven countries and two continents.",
  },
];

export const selectedProjects = [
  {
    slug: "gliamediq",
    title: "GliaMediQ",
    type: "Founder-built product",
    summary:
      "A medical exam-preparation platform built around a structured clinical knowledge base and AI-assisted educational workflows.",
    outcome:
      "My work spans product development, backend systems, mobile clients, evaluation, observability, and cloud operations.",
    role: "Technical founder and full-stack engineer",
    status: "Live product",
    context:
      "GliaMediQ turns a structured clinical knowledge base into exam-preparation workflows for medical learners. The engineering challenge is not generation alone: content has to be reviewable, observable, and useful across web and mobile clients.",
    contributions: [
      "Built product and backend workflows with Django and Celery.",
      "Developed Flutter clients and systems for publishing structured clinical content.",
      "Added evaluation and observability for AI-assisted workflows with LangSmith.",
      "Operated cloud infrastructure on Azure and Kubernetes.",
    ],
    evidence: "More than 9,000 clinical cases are published on the live platform.",
    stack: "Django, Flutter, Celery, LangSmith, Azure, Kubernetes",
    links: [{ label: "Visit GliaMediQ", href: "https://gliamediq.com/" }],
  },
  {
    slug: "opengraph",
    title: "OpenGraph",
    type: "Open-source developer tool",
    summary:
      "A local-first visual workflow editor for designing, inspecting, and exporting AI agent graphs.",
    outcome:
      "It runs in the browser and can pair with an optional local MCP companion so coding agents can edit the same graph.",
    role: "Creator and maintainer",
    status: "Live and open source",
    context:
      "Agent workflows become difficult to reason about when they exist only as code or configuration. OpenGraph gives the workflow a visual form without turning the browser into the source of truth for private local work.",
    contributions: [
      "Built the visual graph editor with React, TypeScript, and React Flow.",
      "Designed local-first browser state with Zustand.",
      "Created an optional MCP companion so coding agents can work with the same graph.",
      "Published both the hosted editor and the implementation source.",
    ],
    evidence: "The live editor and its source code are publicly available.",
    stack: "React, TypeScript, React Flow, Zustand, MCP",
    links: [
      { label: "Open the live app", href: "https://www.opengraph.work/" },
      { label: "View source", href: "https://github.com/clioo/opengraph" },
    ],
  },
  {
    slug: "write-that-down",
    title: "Write That Down",
    type: "Open-source macOS app",
    summary:
      "A menu-bar app that detects calls, transcribes microphone and system audio with local models, and saves structured Markdown notes.",
    outcome:
      "It is designed for private, account-free capture, with audio and transcripts kept on the Mac.",
    role: "Creator and maintainer",
    status: "Open source",
    context:
      "Meeting capture often sends sensitive audio through a cloud service. Write That Down explores a local alternative: capture the call on the Mac, transcribe it on-device, and leave behind ordinary Markdown.",
    contributions: [
      "Built a native menu-bar experience with SwiftUI and AppKit.",
      "Captured microphone and system audio with ScreenCaptureKit.",
      "Integrated local transcription through WhisperKit.",
      "Kept the workflow account-free, local, and compatible with plain Markdown tools.",
    ],
    evidence: "The complete macOS implementation is published on GitHub.",
    stack: "Swift 6, SwiftUI, AppKit, WhisperKit, ScreenCaptureKit",
    links: [
      { label: "View source", href: "https://github.com/clioo/write-that-down-patrick" },
    ],
  },
];

export const experience = [
  {
    company: "McGraw Hill",
    role: "Software Engineer, AI",
    period: "2024 – Present",
    summary:
      "Building and operating AI assistants for instructors and students across enterprise education platforms.",
    highlights: [
      "LLM workflow orchestration",
      "FastAPI and Celery backends",
      "LangSmith observability",
      "Kubernetes on AWS and Azure",
    ],
  },
  {
    company: "GliaMediQ",
    role: "Technical Founder & Software Engineer",
    period: "2022 – Present",
    summary:
      "Building a medical AI product end to end, from organic acquisition and content workflows to production infrastructure.",
    highlights: [
      "Medical exam preparation",
      "AI-assisted content workflows",
      "Django and Flutter",
      "Kubernetes and Azure",
    ],
  },
  {
    company: "Cornershop by Uber / Uber",
    role: "Software Engineer L4",
    period: "2022 – 2024",
    summary:
      "Built distributed systems for marketing, search, recommendations, and retention at marketplace scale.",
    highlights: [
      "Up to 5M emails per country",
      "Django and Celery",
      "Elasticsearch",
      "Personalized recommendations",
    ],
  },
  {
    company: "Cemex",
    role: "Software Engineer",
    period: "2021 – 2022",
    summary:
      "Turned ML models and data pipelines into reproducible services for concrete-plant operations.",
    highlights: [
      "7 countries across 2 continents",
      "MLOps",
      "Databricks",
      "Kubernetes and Azure",
    ],
  },
  {
    company: "Momenry",
    role: "Software Engineer & Backend Tech Lead",
    period: "2020 – 2022",
    summary:
      "Led backend architecture and APIs for mobile augmented-reality experiences at an early-stage startup.",
    highlights: [
      "Backend technical leadership",
      "Django, Python, and Celery",
      "APIs for AR experiences",
      "Product and investor demos",
    ],
  },
  {
    company: "Softtek",
    role: "Software Engineer",
    period: "2019 – 2021",
    summary:
      "Automated API and web testing to improve coverage and delivery reliability.",
    highlights: ["300+ API tests", "53 end-to-end tests", "Python and C#", "Selenium"],
  },
  {
    company: "Municipal Government",
    role: "Head of Innovation",
    period: "2018 – 2019",
    summary:
      "Designed and operated a platform for tracking public works and institutional goals.",
    highlights: [
      "100 government users",
      "Deployed in 2 cities",
      "Django REST and Angular",
      "AWS operations",
    ],
  },
];

export const posts = [
  {
    slug: "why-this-site-exists",
    title: "Why this site exists",
    summary:
      "A place to document what I build, explain the decisions behind it, and make my work easier to find and understand.",
    date: "2026-08-15",
    readingTime: "3 min read",
  },
];

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
