// Shared project data - single source of truth for all project information
// Placeholder images - replace with actual project images when available
import projectCoverDashboard from "@/assets/project-cover-dashboard.png";
import projectCoverFulfillment from "@/assets/project-cover-fulfillment.png";
import projectCoverAudi from "@/assets/project-cover-audi.png";
import projectCoverPaypal from "@/assets/project-cover-paypal.gif";
import projectCoverAI from "@/assets/project-cover-ai.png";
import rewordingCover from "@/assets/project-cover-Futurist Conference Poster Design.png";
import projectCoverAdobeSecurity from "@/assets/projects/security-tooling/Adobe-1.PNG";

// Types
export interface MediaItem {
  type: "image" | "video";
  src: string;
}

export interface ProjectSummary {
  id: string;
  title: string;
  type: string;
  date: string;
  image: string;
  description: string;
  category: "b2b" | "visual-brand" | "design-engineering";
}

export interface ProjectDetail {
  title: string;
  type: string;
  date: string;
  role: string;
  duration: string;
  team: string;
  overview: string;
  problem: {
    title: string;
    description: string;
  };
  process: {
    title: string;
    steps?: string[];
    description?: string;
  };
  approach: {
    title: string;
    description: string;
  };
  results: {
    title: string;
    metrics: { label: string; value: string }[];
    description: string;
  };
  media: MediaItem[];
}

export interface Project extends ProjectSummary {
  detail: ProjectDetail;
}

// Full project data
export const projects: Project[] = [
  // B2B Product Projects
  {
    id: "purchase-order-group",
    title: "Purchase Order Group",
    type: "UX Design",
    date: "2024",
    image: projectCoverDashboard, // Placeholder - replace with actual image
    description: "Vendor workflow system with React components and design system.",
    category: "b2b",
    detail: {
      title: "Purchase Order Group",
      type: "UX Design",
      date: "2024",
      role: "Lead Designer",
      duration: "12 weeks",
      team: "Cross-functional team",
      overview: "A comprehensive vendor workflow system designed to streamline purchase order management. Built with React components and a robust design system to ensure consistency and scalability.",
      problem: {
        title: "The Problem",
        description: "Vendors struggled with complex purchase order workflows across multiple systems. The challenge was to create an intuitive system that handles vendor operations efficiently while maintaining design consistency.",
      },
      process: {
        title: "Design Process",
        steps: [
          "User Research: Conducted interviews with vendors and procurement teams",
          "System Design: Created React component library and design system",
          "Prototyping: Built interactive prototypes for key workflows",
          "Testing: Validated with real users and iterated",
        ],
      },
      approach: {
        title: "The Approach",
        description: "We focused on building a scalable design system with reusable React components. The design emphasizes consistency, efficiency, and user-friendly workflows for vendor operations.",
      },
      results: {
        title: "The Results",
        metrics: [
          { label: "Workflow Efficiency", value: "+50%" },
          { label: "Component Reuse", value: "80%" },
          { label: "User Satisfaction", value: "90%" },
        ],
        description: "The system significantly improved vendor workflow efficiency while establishing a reusable component library for future projects.",
      },
      media: [
        // Images will be added to: src/assets/projects/purchase-order-group/
        { type: "image", src: "/src/assets/projects/purchase-order-group/cover.jpg" },
      ],
    },
  },
  {
    id: "fulfillment-operation-tooling",
    title: "Fulfillment Operation Tooling",
    type: "UX Design",
    date: "2024",
    image: projectCoverFulfillment, // Placeholder - replace with actual image
    description: "Warehouse management platform enabling efficient inventory and shipping operations.",
    category: "b2b",
    detail: {
      title: "Fulfillment Operation Tooling",
      type: "UX Design",
      date: "2024",
      role: "UX Designer",
      duration: "16 weeks",
      team: "3 Designers, 2 Developers",
      overview: "A comprehensive warehouse management platform designed to streamline fulfillment operations, enabling teams to manage inventory, track shipments, and optimize workflows efficiently.",
      problem: {
        title: "The Problem",
        description: "Warehouse teams were using multiple disconnected tools, leading to inefficiencies, errors, and lack of real-time visibility into operations. The system needed to handle high-volume operations while remaining user-friendly.",
      },
      process: {
        title: "Design Process",
        steps: [
          "User Research: Conducted field studies and interviews with warehouse staff",
          "Analysis: Mapped existing workflows and identified bottlenecks",
          "Design: Created wireframes and prototypes for key workflows",
          "Testing: Validated designs with warehouse teams and iterated",
        ],
      },
      approach: {
        title: "The Approach",
        description: "We focused on creating a unified platform that consolidates multiple tools into a single, intuitive interface. The design prioritizes speed, accuracy, and real-time data visibility to support high-volume operations.",
      },
      results: {
        title: "The Results",
        metrics: [
          { label: "Efficiency Increase", value: "35%" },
          { label: "Error Reduction", value: "50%" },
          { label: "Adoption Rate", value: "95%" },
        ],
        description: "The platform significantly improved operational efficiency and reduced errors, with high adoption rates among warehouse teams.",
      },
      media: [
        // Images will be added to: src/assets/projects/fulfillment-operation-tooling/
        { type: "image", src: "/src/assets/projects/fulfillment-operation-tooling/cover.jpg" },
      ],
    },
  },
  {
    id: "security-tooling",
    title: "Adobe Firewall Rule Management",
    type: "UX Design",
    date: "2018",
    image: projectCoverAdobeSecurity,
    description: "Turning an Engineer-Built Security Tool into a Clear, Trustworthy Experience",
    category: "b2b",
    detail: {
      title: "Adobe Firewall Rule Management",
      type: "UX Design",
      date: "2018",
      role: "Experience Designer + Front-End Developer",
      duration: "1 month",
      team: "Security Engineers, Product Managers",
      overview: "This project started with a seemingly clear request — *\"build a dashboard.\"* In reality, the team was facing an undefined decision problem, unclear ownership, and strong technical constraints. My responsibility was to step beyond execution, reframe the problem, and use design to help the team align on what decisions the product actually needed to support.",
      context: {
        title: "Context",
        description: "This was a 0→1 internal security tooling project. The initial brief sounded clear: *\"We need a dashboard.\"* But very quickly it became obvious that this was a **solution framed as a requirement**, not a clearly defined problem.\n\nThere was no existing benchmark, the PM was still exploring direction, timelines were tight, and technical constraints were already baked into the definition. My role was not just to design screens, but to **reframe the problem and anchor the team around a shared decision goal**.",
      },
      problem: {
        title: "The Real Challenge",
        description: "The team wasn't lacking data — they were drowning in it.\n\nEngineers were jumping between multiple systems to answer simple but critical questions:\n- *Do I need to take action right now?*\n- *Is this issue blocking something important?*\n- *Who owns the next step?*\n\nThe proposed \"dashboard\" risked becoming just another data container. If we shipped that, we'd be adding surface area without reducing cognitive load.",
      },
      process: {
        title: "Reframing the Problem",
        description: "Instead of asking *\"What should this dashboard show?\"* I reframed the conversation around **decision moments**.\n\nWith the PM and senior engineers, I mapped:\n- the key moments where decisions were made\n- what information was actually needed *at that moment*\n- what data could be deferred or removed entirely\n\nThis lightweight alignment exercise replaced weeks of traditional research we didn't have time for — and immediately clarified what mattered.",
      },
      approach: {
        title: "Design Decisions Under Constraints",
        description: "Given the lack of historical examples and limited time, I made a deliberate call:\n\n> This product's job is not to display everything — it's to **reduce decision time**.\n\nThat led to several intentional choices:\n- prioritizing signals over raw metrics\n- structuring the interface around *\"Do I act or not?\"*\n- treating technical constraints as boundaries, not excuses\n\nSome stakeholders initially pushed to include more data \"just in case.\" I pushed back by grounding every discussion in the same question: *does this help someone make a faster, more confident decision?*",
      },
      results: {
        title: "Outcome",
        metrics: [
          { label: "COMPANY", value: "Adobe" },
          { label: "TOOLS", value: "Sketch, HTML, CSS and Javascript" },
          { label: "ROLE", value: "Experience Designer + Front-End Developer" },
          { label: "TIMELINE", value: "1 month" },
          { label: "YEAR", value: "2018" },
          { label: "TEAM", value: "Security Engineers, Product Managers" },
        ],
        description: "The final MVP aligned the team around a single purpose: **decision clarity**.\n\nInstead of a generic dashboard, we delivered a focused tool that:\n- surfaced what required attention *now*\n- reduced time spent hunting across systems\n- gave the PM and engineers a shared mental model for future iterations\n\nMore importantly, the design became the anchor for product direction in an otherwise ambiguous 0→1 space.",
      },
      media: [
        // Images are handled in AdobeSecurityProject.tsx custom page
        { type: "image", src: "/src/assets/projects/security-tooling/Adobe-1.PNG" },
      ],
    },
  },
  // Visual + Brand Design Projects
  {
    id: "paypal",
    title: "PayPal.com",
    type: "Website Redesign",
    date: "2020",
    image: projectCoverPaypal,
    description: "Redesign of PayPal.com marketing website with modern information architecture and scalable design system.",
    category: "visual-brand",
    detail: {
      title: "PayPal.com",
      type: "Website Redesign",
      date: "2020",
      role: "UX/UI Designer",
      duration: "1 year",
      team: "4 UX Designers, 1 Design Director, 2 Researchers, 1 PM, 2 Engineers",
      overview: "In 2020, AKQA collaborated with PayPal to overhaul its marketing website. The goal was not just a visual improvement, but to create a seamless, intuitive user experience for both small business merchants and PayPal consumers. I spent one year working with designers, researchers, engineers, and product managers to rethink PayPal's information architecture and build a modern, scalable design system.",
      problem: {
        title: "The Challenge: Uncovering Hidden Problems",
        description: "Despite PayPal's global reach, its website had become a labyrinth. With over **200 hidden pages** and **fragmented navigation**, consumers struggled to manage their finances, and merchants found it difficult to grow their businesses. The experience was frustrating—even for me, the designer working on the project. If I was getting lost, how must it have felt for users?\n\nWe knew we had to rethink everything. Merchants faced overwhelming challenges: setting up payments, managing cash flow, creating invoices, and establishing an online presence. They needed tools that were easy to understand and simple to use. Meanwhile, consumers struggled to send and receive money through PayPal.",
      },
      process: {
        title: "The Approach: Finding Structure Inside the Chaos",
        description: "We started with a **heuristic evaluation** of the existing site and uncovered a major issue: more than **200 hidden pages**, unclear navigation, and no clear sense of hierarchy. Even experienced users struggled to understand where they were or what PayPal offered. To ground our decisions, we studied competitors like **Square**, **Stripe**, and **N26**. What stood out wasn't visual style—it was **clarity**. Their navigation was task-driven, user-aware, and designed around real workflows. Using these insights, I led the redesign of PayPal's **information architecture**, restructuring the site around user needs and business stages so merchants could quickly find the right tools—whether they were starting out, managing operations, or scaling.",
      },
      approach: {
        title: "The Solution: Design System + Navigation",
        description: "Navigation alone wasn't enough. We needed a system that could scale. I partnered with the visual design team to create a **cohesive design system** that brought consistency across PayPal's touchpoints while still allowing flexibility. We focused on clear hierarchy, modular components, and layouts that supported focus—not distraction. Personalization was a key principle. The experience allowed merchants to surface the tools they used most, making the product feel tailored and efficient rather than overwhelming.\n\n### **Apply engaging storytelling and product demonstration techniques through new design system**\n\nThe logged-out experience needs to be radically simplified with a flatter information architecture, clearer content structure, and modernized page design using updated components. The goal is to guide customers directly toward sign-up, minimizing distractions from unnecessary navigation or cross-sell promotions.",
      },
      results: {
        title: "Increase growth through delightful design",
        metrics: [
          { label: "Client", value: "PayPal through AKQA" },
          { label: "Tools", value: "Figma, UserTesting, InVision, Keynote" },
          { label: "Role", value: "UX/UI Designer" },
          { label: "Year", value: "2020" },
          { label: "Team", value: "4 UX Designers, 1 Design Director, 2 Researchers, 1 PM, 2 Engineers" },
          { label: "New Active Accounts (2021)", value: "14.5 million" },
          { label: "Total Active Accounts", value: "403 million" },
          { label: "Year-over-Year Increase", value: "21%" },
        ],
        description: "We delivered the redesigned experience to PayPal in 2020. The client was very pleased with the intuitive navigation and refreshed brand style. PayPal's design team built on this work and launched the new site in 2021.\n\nAfter launch, PayPal saw strong business growth:\n\n- 14.5 million new active accounts added in 2021\n- 403 million total active accounts, a 21% year-over-year increase\n\nI'm proud to have played a key role in helping improve user engagement, service discoverability, and brand perception.",
      },
      media: [
        { type: "image", src: "/src/assets/projects/paypal/Paypal-1.jpeg" },
        { type: "image", src: "/src/assets/projects/paypal/PayPal-2.jpeg" },
        { type: "image", src: "/src/assets/projects/paypal/PayPal-3.jpeg" },
        { type: "image", src: "/src/assets/projects/paypal/PayPal-4.jpeg" },
      ],
    },
  },
  {
    id: "audi",
    title: "Audi E-Tron: Electric Vehicle Charging Experience",
    type: "Website, iOS App",
    date: "2019",
    image: projectCoverAudi,
    description: "Premium Charging feature for Audi E-Tron owners—making electric vehicle ownership feel effortless through the myAudi app and Audi.com.",
    category: "visual-brand",
    detail: {
      title: "Audi E-Tron: Electric Vehicle Charging Experience",
      type: "Website, iOS App",
      date: "2019",
      role: "Visual Designer",
      duration: "Project-based",
      team: "1 UX design director, 1 PM, 3 Engineers",
      overview: "In 2019, Audi launched the E-Tron—their first fully electric vehicle. To encourage adoption and ease the transition for new EV owners, Audi partnered with Electrify America to offer 1,000 kWh of complimentary charging credits (approximately 2,000 miles).\n\nPremium Charging is a feature integrated into the myAudi app and Audi.com that enables customers to enroll in this offer, unlock charging stations, and monitor their free energy credits—designed to make electric vehicle ownership feel as effortless as the luxury cars Audi is known for.",
      problem: {
        title: "The problem nobody saw coming",
        description: "Audi's beautiful new E-Tron was sitting in showrooms, but customers were hesitating. The car was great—the electric vehicle experience? Terrifying. Where do I charge? How much does it cost? What if I run out of battery?\n\nAudi's answer: give every E-Tron owner 1,000 kWh of free charging (about 2,000 miles). But there was a catch—nobody knew how to actually use it.\n\nMy job: Make the entire experience so seamless that new owners would forget they were doing something \"new.\"",
      },
      process: {
        title: "Three moments that mattered",
        description: "**1. Enrollment: Make it feel familiar**\n\nMost people enrolled at the dealership during pickup. But for those who forgot or declined? I designed a self-service flow that felt more like signing up for Spotify than activating a charging network. Simple, welcoming, one clear action.\n\n**2. First charge: Remove all doubt**\n\nThis was make-or-break. I created the experience right in the app:\n\nThe credit gauge: Instead of showing raw numbers, I designed a circular gauge that felt familiar—like a fuel gauge. The green arc animated as credits depleted, with large legible numbers and friendly context: \"800 kWh—enough for about 1,600 miles.\"\n\n**3. Staying in control: Track your free miles**\n\nI designed the charging history to feel less like a transaction log, more like a travel diary. Each session showed location, energy delivered, and range added. Clean data tables with smart whitespace, alternating rows for scannability, and details that appeared on hover.\n\nThe credit gauge became a satisfying way to see their \"free miles\" tick down.",
      },
      approach: {
        title: "Designing for every moment",
        description: "This wasn't just a mobile app—owners would check credits at home on their laptop, monitor charging on their iPad, and start sessions from their phone.\n\nI built a responsive system that felt native to each context:\n\n- **Mobile:** Stacked cards, thumb-friendly buttons, quick actions for charging now\n- **Tablet:** Two-column layouts with split views for browsing while monitoring\n- **Desktop:** Full dashboard with sidebar navigation, history, and settings\n\nEach breakpoint felt intentional, adapted to how people actually used their devices.",
      },
      results: {
        title: "The result",
        metrics: [
          { label: "Client", value: "Audi through AKQA" },
          { label: "Tools", value: "Sketch, Zeplin" },
          { label: "Users Activated", value: "1,000+" },
        ],
        description: "Within a month, 1,000+ users activated the feature. But the real win was the emails—customers saying the app made them finally feel confident going electric. One person recommended the E-Tron to a friend specifically because of how easy charging was.\n\nThe client praised how well it integrated with Audi's brand, setting a foundation for future EV features.",
      },
      media: [
        { type: "image", src: "/src/assets/projects/audi/audi-01.png" },
        { type: "image", src: "/src/assets/projects/audi/audi-02.jpg" },
        { type: "image", src: "/src/assets/projects/audi/audi-03.jpg" },
        { type: "image", src: "/src/assets/projects/audi/audi-04.jpg" },
        { type: "image", src: "/src/assets/projects/audi/audi-05.jpg" },
        { type: "image", src: "/src/assets/projects/audi/audi-06.jpg" },
        { type: "image", src: "/src/assets/projects/audi/audi-07.jpg" },
      ],
    },
  },
  {
    id: "rewording-poster-design",
    title: "Futurist Conference Poster Design",
    type: "Poster Design",
    date: "2025",
    image: rewordingCover, // Placeholder - replace with actual image
    description: "A visual identity for Tohoku University's REWORLDING event—a global dialogue on futures design bringing together practitioners and educators to democratize futures thinking, with a focus on Asia.",
    category: "visual-brand",
    detail: {
      title: "Futurist Conference Poster Design",
      type: "Poster Design",
      date: "2025",
      role: "Visual Designer",
      duration: "Project-based",
      team: "Client: FUSE Lab, Tohoku University",
      overview: "REWORLDING is an academic conference bringing together practitioners and educators worldwide to exchange insights on future design and speculative design.\n\nThis poster series for Tohoku University's inaugural conference explores technology, humanity, and the future through AI-generated imagery. The visual system bridges Eastern and Western design sensibilities, creating abstract metaphors for concepts like 'future thinking,' 'universal,' and 'world modulation.'",
      problem: {
        title: "Scope & Direction",
        description: "Defined the timeline and clarified the scope including web banners and posters. Defined key requirements such as essential information to include in the poster.",
      },
      process: {
        title: "Design Process",
        description: "I collaborated with Tohoku University to define the project timeline, scope, and information hierarchy for web banners and posters. I developed moodboards to explore visual directions and align on design preferences.",
      },
      approach: {
        title: "The Approach",
        description: "Using AI tools (Midjourney, Figma, Banana Nano), I created a visual identity that bridges Eastern and Western design sensibilities. The design represents global dialogue while highlighting Asia-focused perspectives. Abstract visual metaphors were developed for complex concepts like 'productive misalignments,' 'futures literacy,' and 'world modulation,' making these abstract ideas accessible through bold typography and AI-generated imagery.",
      },
      results: {
        title: "Project Details",
        metrics: [
          { label: "Client", value: "FUSE Lab, Tohoku University" },
          { label: "Event Date", value: "2025" },
          { label: "Tools", value: "Midjourney, Figma, Banana Nano" },
        ],
        description: "A Visual Identity for Global Futures Design - Created for FUSE Lab's inaugural conference on democratizing futures thinking, establishing a visual language that makes complex futures concepts accessible through AI-assisted graphic design.",
      },
      media: [
        // Images will be added to: src/assets/projects/rewording-poster-design/
        { type: "image", src: "/src/assets/projects/rewording-poster-design/cover.jpg" },
      ],
    },
  },
];

// Helper functions to get project data
export const getProjectSummary = (id: string): ProjectSummary | undefined => {
  const project = projects.find((p) => p.id === id);
  return project ? { 
    id: project.id, 
    title: project.title, 
    type: project.type, 
    date: project.date, 
    image: project.image, 
    description: project.description,
    category: project.category
  } : undefined;
};

export const getProjectDetail = (id: string): ProjectDetail | undefined => {
  const project = projects.find((p) => p.id === id);
  return project?.detail;
};

export const getAllProjectSummaries = (): ProjectSummary[] => {
  return projects.map((p) => ({
    id: p.id,
    title: p.title,
    type: p.type,
    date: p.date,
    image: p.image,
    description: p.description,
    category: p.category,
  }));
};

// Project categories for homepage
export const getB2BProjects = (): ProjectSummary[] => {
  return projects.filter((p) => p.category === "b2b").map((p) => ({
    id: p.id,
    title: p.title,
    type: p.type,
    date: p.date,
    image: p.image,
    description: p.description,
    category: p.category,
  }));
};

export const getVisualBrandProjects = (): ProjectSummary[] => {
  return projects.filter((p) => p.category === "visual-brand").map((p) => ({
    id: p.id,
    title: p.title,
    type: p.type,
    date: p.date,
    image: p.image,
    description: p.description,
    category: p.category,
  }));
};

export const getDesignEngineeringProjects = (): ProjectSummary[] => {
  // No design engineering projects currently
  return [];
};

// Legacy function names for backward compatibility
export const getMarketingProjects = getVisualBrandProjects;
export const getConceptualProjects = getDesignEngineeringProjects;
