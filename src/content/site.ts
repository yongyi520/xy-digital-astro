export const site = {
  name: "XY Digital LLC",
  tagline: "Agency Automation & AI Systems",
  domain: "https://xydsolutions.com",
  seo: {
    title: "Your Agency Multiplier | Agency Automations & AI Systems",
    description:
      "XY Digital helps agencies save time with automations, AI agents, and smart systems. Cut busy work, speed up operations, and book a 1-hour consult.",
    keywords: [
      "agency automation",
      "AI systems for agencies",
      "SEO agency automation",
      "AI agents for agencies",
      "lead qualification automation",
      "content automation",
      "agency operations automation"
    ],
    ogImage: "/og-image.jpg"
  },
  email: "sales@xydsolutions.com",
  address: "30 N GOULD ST STE R, SHERIDAN, WY 82801",
  calendlyUrl: "https://calendly.com/yongyi-xydsolutions/meeting",
  nav: [
    { href: "#services", label: "Services" },
    { href: "#service-ladder", label: "Solutions" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" }
  ],
  hero: {
    eyebrow: "Automation-first systems for agencies",
    titleLead: "Your Agency",
    titleAccent: "Multiplier",
    body:
      "We help agencies save time with simple automations first. When you are ready, we can build smarter AI systems that do more work for your team.",
    trust:
      "Made for agencies that want less busy work and more time to grow."
  },
  services: [
    {
      title: "Lead Qualification Automations",
      body:
        "Sort leads faster so your team can focus on the best ones.",
      chips: ["Lead Intake", "Routing", "Qualification"]
    },
    {
      title: "Content Operations Automations",
      body:
        "Make content work move faster from idea to publish."
    },
    {
      title: "Client Delivery Automations",
      body:
        "Cut back-and-forth work in client tasks and delivery."
    },
    {
      title: "Reporting & Internal Ops",
      body:
        "Save time on reports, updates, and repeat team tasks."
    }
  ],
  serviceLadder: {
    title: "Start with automation. Expand into AI systems.",
    body:
      "We start by fixing slow work. Then we can build bigger AI systems when you need more help."
  },
  simpleSolutions: [
    "Clean up the work you already do",
    "Cut repeat tasks",
    "Move faster with fewer mistakes",
    "Save hours every week"
  ],
  advancedSolutions: [
    "AI agents for key jobs",
    "Smart flows that run many steps",
    "Teams of AI agents working together",
    "One smart knowledge base for the whole team"
  ],
  advancedArchitecture: [
    {
      title: "Skills",
      body:
        "Small tools your AI can use again and again."
    },
    {
      title: "Sub-agents",
      body:
        "Small AI helpers that do one job well."
    },
    {
      title: "Agent Orchestration",
      body:
        "A smart flow that tells tools and agents what to do next."
    },
    {
      title: "Teams of AI Agents",
      body:
        "Many AI agents working together like a team."
    },
    {
      title: "Semantic OS",
      body:
        "One main place where your AI gets the right info."
    }
  ],
  process: [
    {
      title: "Audit the workflow",
      body: "We find the slow parts in your work."
    },
    {
      title: "Deploy the automation layer",
      body: "We add automations to save time fast."
    },
    {
      title: "Install the AI system",
      body: "If you want more, we add agents and smart AI systems."
    }
  ],
  footerLinks: [
    { href: "https://calendly.com/yongyi-xydsolutions/meeting", label: "Book a Consult" }
  ]
} as const;
