// Shared project data - single source of truth for all project information
// Placeholder images - replace with actual project images when available
import projectCoverDashboard from "@/assets/project-cover-dashboard.png";
import projectCoverFulfillment from "@/assets/project-cover-fulfillment.png";
import projectCoverAudi from "@/assets/project-cover-audi.png";
import projectCoverPaypal from "@/assets/project-cover-paypal.png";
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
    title: "Security Tooling",
    type: "UX Design",
    date: "2024",
    image: projectCoverDashboard, // Placeholder - replace with actual image
    description: "Enterprise security dashboard for monitoring and managing security operations.",
    category: "b2b",
    detail: {
      title: "Security Tooling",
      type: "UX Design",
      date: "2024",
      role: "Product Designer",
      duration: "10 weeks",
      team: "2 Designers, 3 Developers",
      overview: "An enterprise security dashboard designed to provide comprehensive visibility and control over security operations, enabling teams to monitor threats and manage security policies effectively.",
      problem: {
        title: "The Problem",
        description: "Security teams needed better tools to monitor threats, manage policies, and respond to incidents. The existing tools were fragmented and didn't provide a unified view of security operations.",
      },
      process: {
        title: "Design Process",
        steps: [
          "Research: Understanding security team workflows and requirements",
          "Analysis: Mapping security operations and threat monitoring needs",
          "Design: Creating intuitive dashboards and visualization tools",
          "Testing: Validating with security teams and iterating",
        ],
      },
      approach: {
        title: "The Approach",
        description: "We designed a comprehensive dashboard that consolidates security monitoring, policy management, and incident response into a single, intuitive interface. The design emphasizes clarity, real-time updates, and actionable insights.",
      },
      results: {
        title: "The Results",
        metrics: [
          { label: "Response Time", value: "-40%" },
          { label: "Threat Detection", value: "+60%" },
          { label: "Team Efficiency", value: "+45%" },
        ],
        description: "The dashboard significantly improved security team efficiency and threat detection capabilities.",
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
      overview: "In 2020, AKQA partnered with PayPal to redesign the **PayPal.com** marketing website. The experience had grown fragmented over time, making it difficult for **small business merchants**—PayPal's largest user group—to understand products or take action. Over the course of a year, I worked with designers, researchers, engineers, and PMs to rethink PayPal's **information architecture** and build a **modern, scalable design system**. The goal was simple: reduce complexity, increase trust, and help users move forward with confidence.",
      problem: {
        title: "The Challenge",
        description: "The existing PayPal website had grown fragmented over time, making it difficult for small business merchants—PayPal's largest user group—to understand products or take action. More than **200 hidden pages**, unclear navigation, and no clear sense of hierarchy made it challenging even for experienced users to understand where they were or what PayPal offered.",
      },
      process: {
        title: "The Approach: Finding Structure Inside the Chaos",
        description: "We started with a **heuristic evaluation** of the existing site and uncovered a major issue: more than **200 hidden pages**, unclear navigation, and no clear sense of hierarchy. Even experienced users struggled to understand where they were or what PayPal offered. To ground our decisions, we studied competitors like **Square**, **Stripe**, and **N26**. What stood out wasn't visual style—it was **clarity**. Their navigation was task-driven, user-aware, and designed around real workflows. Using these insights, I led the redesign of PayPal's **information architecture**, restructuring the site around user needs and business stages so merchants could quickly find the right tools—whether they were starting out, managing operations, or scaling.",
      },
      approach: {
        title: "The Solution: Design System + Navigation",
        description: "Navigation alone wasn't enough. We needed a system that could scale. I partnered with the visual design team to create a **cohesive design system** that brought consistency across PayPal's touchpoints while still allowing flexibility. We focused on clear hierarchy, modular components, and layouts that supported focus—not distraction. Personalization was a key principle. The experience allowed merchants to surface the tools they used most, making the product feel tailored and efficient rather than overwhelming.",
      },
      results: {
        title: "Impact",
        metrics: [
          { label: "Client", value: "PayPal through AKQA" },
          { label: "Tools", value: "Figma, UserTesting, InVision, Keynote" },
          { label: "Role", value: "UX/UI Designer" },
          { label: "Year", value: "2020" },
          { label: "Team", value: "4 UX Designers, 1 Design Director, 2 Researchers, 1 PM, 2 Engineers" },
          { label: "User Conversion Increase", value: "32% (2020–2021)" },
        ],
        description: "After launch, PayPal adopted the new **navigation** and **design system**, contributing to a **32% increase in user conversion (2020–2021)**. More importantly, the site became easier to understand, easier to navigate, and better aligned with how merchants actually work. This project reinforced a simple truth: **clarity builds trust**. Research and user feedback helped us strip away complexity and design with empathy. The best outcomes came not from adding more features—but from removing friction.",
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
