// Shared project data - single source of truth for all project information
// Placeholder images - replace with actual project images when available
import projectCoverDashboard from "@/assets/project-cover-dashboard.png";
import projectCoverFulfillment from "@/assets/project-cover-fulfillment.png";
import projectCoverAudi from "@/assets/project-cover-audi.png";
import projectCoverPaypal from "@/assets/project-cover-paypal.gif";
import projectCoverAI from "@/assets/project-cover-ai.png";
import rewordingCover from "@/assets/project-cover-Futurist Conference Poster Design.png";

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
    date: "2017",
    image: projectCoverDashboard, // Placeholder - replace with actual image
    description: "Turning an Engineer-Built Security Tool into a Clear, Trustworthy Experience",
    category: "b2b",
    detail: {
      title: "Adobe Firewall Rule Management",
      type: "UX Design",
      date: "2017",
      role: "Experience Designer + Front-End Developer",
      duration: "3 weeks",
      team: "Security Engineers, Product Managers",
      overview: "When I joined Adobe's headquarters in San Jose as the first designer on the team, I quickly realized the Firewall Rule Management (FRM) tool—critical for resolving customer security issues—had been built entirely by engineers. It worked, but it wasn't intuitive. Searching for firewall rules was cumbersome, ticket management was tedious, and engineers had little visibility into teammates' contributions across the workflow. My goal was clear: transform a highly technical, engineer-built tool into a streamlined, user-centered experience.",
      problem: {
        title: "The Challenge: Where am I, and where should I start?",
        description: "Security engineers are primarily focused on maintaining internet security, making firewall rule searches and updates secondary priorities. The existing tool reflected this—it was functional but frustrating. **Unlabeled icons** made navigation time-consuming. The **outdated interface** lacked visual clarity. The **search process was complex** and felt burdensome. Most critically, ticket progress disappeared once work moved across teams. Engineers relied on Slack and email to track what was happening next, creating manual coordination overhead that slowed down critical security work.",
      },
      process: {
        title: "The Approach: Learning, Designing, Building",
        description: "**Learning the System**\n\nBefore I could redesign anything, I needed to understand a world I'd never worked in—firewalls, rules, and security operations. I embedded myself within the team: having informal conversations in the dining room with coworker Ben and engineers from the China team, taking detailed notes. I conducted online research to deepen my understanding of firewall rule logic and performed a UX heuristic evaluation to map usability gaps.\n\n**The Redesign**\n\nOver three weeks, I partnered closely with security engineers and PMs to redesign FRM around speed, visibility, and confidence—without oversimplifying security logic. I streamlined rule search, introduced a dashboard that surfaced what mattered in the moment, and made downstream testing and deployment status visible inside the product.\n\n**Building It**\n\nThere were no front-end engineers available. So I took Codecademy courses, spent a week learning HTML, CSS, and JavaScript, then designed the UI and built all front-end code myself. I partnered with the back-end engineer to integrate the UI and server logic.",
      },
      approach: {
        title: "The Solution: Three Key Improvements",
        description: "**01 Dashboard**\n\nThe redesigned dashboard aligns with Adobe's mission and creative branding. It streamlines the process of searching and configuring firewall rules, highlighting and summarizing firewall change and access requests. Engineers now have a clearer view of request performance at a glance.\n\n**02 Firewall Rule Search**\n\nEngineers can efficiently search firewall rules by hostname or IP address, with **color highlights** indicating which devices are ready for approval. The search process is no longer rigid and unforgiving—it's fast and intuitive.\n\n**03 Configuration Tracking**\n\nAfter engineers approve tickets, the process moves to configuration. They can now track the status and monitor the activities of testing engineers—all visible inside the product, eliminating the need for Slack and email coordination.",
      },
      results: {
        title: "Impact",
        metrics: [
          { label: "Streamlined Workflows", value: "Faster search & approval" },
          { label: "Reduced Coordination", value: "Less manual communication" },
          { label: "Clearer Visibility", value: "System status & ownership" },
        ],
        description: "Despite limited resources, I delivered the entire project on time—both the design and the front-end implementation. The experience strengthened the team's operations and improved engineers' daily workflows.\n\n**A more intuitive, efficient FRM tool** adopted by engineers\n\n**Streamlined ticket search and dashboard experience** that saves time\n\n**Reduced manual communication**, speeding up rule updates\n\n**More time for core security responsibilities** instead of tool navigation\n\nAs the team's first designer, I also established the design culture, design process, and user research practice—laying the foundation for future design work at Adobe.",
      },
      media: [
        // Images will be added to: src/assets/projects/security-tooling/
        { type: "image", src: "/src/assets/projects/security-tooling/cover.jpg" },
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
