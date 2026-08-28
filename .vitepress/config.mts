import { defineConfig } from "vitepress";

const base = "/MS-4021-Copilot-Immersion-Experience/";

const demos = [
  { text: "1 · Executives", link: "/Instructions/Demos/1-Executives-Demo" },
  { text: "2 · Communications", link: "/Instructions/Demos/2-Communications-Demo" },
  { text: "3 · HR", link: "/Instructions/Demos/3-HR-Demo" },
  { text: "4 · Sales", link: "/Instructions/Demos/4-Sales-Demo" },
  { text: "5 · IT", link: "/Instructions/Demos/5-IT-Demo" },
  { text: "6 · Executive Assistant", link: "/Instructions/Demos/6-Executive-Assistant-Demo" },
  { text: "7 · Business Manager", link: "/Instructions/Demos/7-Business-Manager-Demo" },
  { text: "8 · Marketing", link: "/Instructions/Demos/8-Marketing-Demo" },
  { text: "9 · Operations", link: "/Instructions/Demos/9-Operations-Demo" },
  { text: "10 · Legal", link: "/Instructions/Demos/10-Legal-Demo" },
  { text: "11 · Finance", link: "/Instructions/Demos/11-Finance-Demo" },
  { text: "12 · Researcher & Analyst", link: "/Instructions/Demos/12-Researcher-Analyst-Demo" },
  { text: "13 · Agent Builder", link: "/Instructions/Demos/13-Copilot-studio-Demo" },
];

const execDemos = [
  { text: "Copilot Chat & Pages", link: "/Instructions/Exec/1-business-chat-and-pages" },
  { text: "Copilot Chat (Web only)", link: "/Instructions/Exec/1a-microsoft-365-copilot-chat-web" },
  { text: "Agent Builder", link: "/Instructions/Exec/1b-copilot-studio-agent-builder" },
  { text: "Copilot in Word", link: "/Instructions/Exec/2-copilot-in-word" },
  { text: "Copilot Chat (Work tab)", link: "/Instructions/Exec/3-microsoft-copilot-work" },
  { text: "Copilot in Outlook", link: "/Instructions/Exec/4-copilot-in-outlook" },
  { text: "Copilot in Teams", link: "/Instructions/Exec/5-copilot-in-teams" },
  { text: "Copilot in Excel", link: "/Instructions/Exec/7-copilot-in-excel" },
  { text: "Microsoft Copilot (web) — retired", link: "/Instructions/Exec/6-microsoft-copilot-web" },
];

const rolePrompts = [
  { text: "Executives", link: "/Instructions/Prompts/Exec-immersion" },
  { text: "Communications", link: "/Instructions/Prompts/Communications-Prompts" },
  { text: "HR", link: "/Instructions/Prompts/HR-Prompts" },
  { text: "Sales", link: "/Instructions/Prompts/Sales-Prompts" },
  { text: "IT", link: "/Instructions/Prompts/IT-Prompts" },
  { text: "Executive Assistant", link: "/Instructions/Prompts/EA-Prompts" },
  { text: "Business Manager", link: "/Instructions/Prompts/Business-Manager-Prompts" },
  { text: "Marketing", link: "/Instructions/Prompts/Marketing-Prompts" },
  { text: "Operations", link: "/Instructions/Prompts/Operations-Prompts" },
  { text: "Legal", link: "/Instructions/Prompts/Legal-Prompts" },
  { text: "Finance", link: "/Instructions/Prompts/Finance-Prompts" },
];

const agentPrompts = [
  { text: "Agents · Business Users", link: "/Instructions/Prompts/EU-Agents" },
  { text: "Agents · Executives", link: "/Instructions/Prompts/Exec-Agents" },
];

const workshopPrompts = [
  { text: "Define Your AI Priorities", link: "/Instructions/Prompts/Exec-ai-aspiration" },
  { text: "Design Your 90-day AI Plan", link: "/Instructions/Prompts/Exec-ai-plan" },
  { text: "AI to Impact Workshop", link: "/Instructions/Prompts/AI-to-impact-workshop" },
];

export default defineConfig({
  title: "Copilot Immersion Experience",
  description:
    "Prompts, demos, and guides for the Microsoft 365 Copilot Immersion Experience (MS-4021).",
  base,

  // IMPORTANT: keep this false. It preserves the existing published URLs
  // (e.g. /Instructions/Demos/2-Communications-Demo.html) that slide decks link to.
  cleanUrls: false,

  srcExclude: [
    "readme.md",
    "**/read-me.md",
    "Allfiles/**",
    ".github/**",
    "node_modules/**",
  ],

  ignoreDeadLinks: true,
  lastUpdated: true,

  head: [["link", { rel: "icon", href: `${base}copilot-icon.svg` }]],

  themeConfig: {
    logo: "/copilot-icon.svg",
    siteTitle: "CIE",

    nav: [
      { text: "Home", link: "/" },
      {
        text: "Prompts",
        items: [
          { text: "By role", items: rolePrompts },
          { text: "Agents", items: agentPrompts },
          { text: "Workshops", items: workshopPrompts },
        ],
      },
      { text: "Demos", items: demos },
      { text: "Exec Demos", items: execDemos },
    ],

    search: { provider: "local" },

    sidebar: [
      { text: "Prompts · By role", collapsed: false, items: rolePrompts },
      { text: "Prompts · Agents", collapsed: true, items: agentPrompts },
      { text: "Prompts · Workshops", collapsed: true, items: workshopPrompts },
      { text: "Demos", collapsed: false, items: demos },
      { text: "Executive Demos", collapsed: true, items: execDemos },
    ],

    outline: { level: [2, 3], label: "On this page" },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience",
      },
    ],

    editLink: {
      pattern:
        "https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/edit/master/:path",
      text: "Suggest a change to this page",
    },

    footer: {
      message: "Microsoft 365 Copilot Immersion Experience (MS-4021)",
      copyright: "© Microsoft. All rights reserved.",
    },
  },
});
