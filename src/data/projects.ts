// Shared project data - single source of truth for all project information
// Placeholder images - replace with actual project images when available
import projectCoverDashboard from "@/assets/project-cover-dashboard.png";
import projectCoverFulfillment from "@/assets/project-cover-fulfillment.png";
import projectCoverAudi from "@/assets/project-cover-audi.png";
import projectCoverPaypal from "@/assets/project-cover-paypal.png";
import projectCoverAirbnb from "@/assets/project-cover-airbnb.png";
import projectCoverAI from "@/assets/project-cover-ai.png";
import rewordingCover from "@/assets/rewording-2025-cover.png";

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
    steps: string[];
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
    type: "Visual + Brand Design",
    date: "2019",
    image: projectCoverPaypal,
    description: "Complete brand redesign and design system for PayPal's website.",
    category: "visual-brand",
    detail: {
      title: "PayPal.com",
      type: "Visual + Brand Design",
      date: "2019",
      role: "Product Designer",
      duration: "16 weeks",
      team: "Cross-functional team",
      overview: "A complete rebrand and redesign of PayPal's website, focusing on simplicity, security, and trust. The new design includes a comprehensive design system and makes financial transactions more accessible for millions of users worldwide.",
      problem: {
        title: "The Problem",
        description: "The existing PayPal website felt outdated and didn't effectively communicate trust and security. Users found it difficult to understand the value proposition and navigate the platform.",
      },
      process: {
        title: "Design Process",
        steps: [
          "Research: Understanding user needs and pain points",
          "Brand Strategy: Defining the new brand identity and design system",
          "Design: Creating a clean, trustworthy interface",
          "Testing: Validating designs with users and iterating",
        ],
      },
      approach: {
        title: "The Approach",
        description: "We focused on creating a clean, trustworthy interface that emphasizes security and ease of use. The design uses clear typography, ample white space, and security indicators to build user confidence. A comprehensive design system ensures consistency across all touchpoints.",
      },
      results: {
        title: "The Results",
        metrics: [
          { label: "User Trust", value: "+55%" },
          { label: "Conversion Rate", value: "+30%" },
          { label: "User Satisfaction", value: "88%" },
        ],
        description: "The redesigned website significantly improved user trust and conversion rates, with high user satisfaction scores.",
      },
      media: [
        // Images will be added to: src/assets/projects/paypal/
        { type: "image", src: "/src/assets/projects/paypal/cover.jpg" },
      ],
    },
  },
  {
    id: "audi",
    title: "Audi.com",
    type: "Visual + Brand Design",
    date: "2018",
    image: projectCoverAudi,
    description: "iOS app and website redesign for Audi's premium automotive brand.",
    category: "visual-brand",
    detail: {
      title: "Audi.com",
      type: "Visual + Brand Design",
      date: "2018",
      role: "Product Designer",
      duration: "12 weeks",
      team: "Cross-functional team",
      overview: "A complete redesign of Audi's website and iOS app, creating a premium digital experience that showcases luxury vehicles through immersive visuals and an intuitive vehicle configurator.",
      problem: {
        title: "The Problem",
        description: "The existing website and app lacked the premium feel expected from a luxury brand and didn't effectively showcase vehicles. The configurator was complex and difficult to use, leading to low engagement.",
      },
      process: {
        title: "Design Process",
        steps: [
          "Discovery: Understanding brand values and user expectations",
          "Definition: Framing the design challenge around premium experience",
          "Development: Creating immersive visuals and simplified configurator",
          "Delivery: Implementing the final design with attention to detail",
        ],
      },
      approach: {
        title: "The Approach",
        description: "We focused on creating a premium digital experience that reflects Audi's brand values. The design emphasizes high-quality visuals, smooth interactions, and an intuitive vehicle configurator that makes customization easy and enjoyable.",
      },
      results: {
        title: "The Results",
        metrics: [
          { label: "Engagement Increase", value: "65%" },
          { label: "Configurator Usage", value: "80%" },
          { label: "Brand Perception", value: "+40%" },
        ],
        description: "The redesigned website and app significantly improved user engagement and brand perception, with high usage of the vehicle configurator feature.",
      },
      media: [
        // Images will be added to: src/assets/projects/audi/
        { type: "image", src: "/src/assets/projects/audi/cover.jpg" },
      ],
    },
  },
  {
    id: "airbnb-connect",
    title: "Airbnb Connect",
    type: "Visual + Brand Design",
    date: "2022",
    image: projectCoverAirbnb,
    description: "Host management tools connecting property owners with travelers.",
    category: "visual-brand",
    detail: {
      title: "Airbnb Connect",
      type: "Visual + Brand Design",
      date: "2022",
      role: "Product Designer",
      duration: "10 weeks",
      team: "3 Designers, 4 Developers",
      overview: "A comprehensive host management platform that connects property owners with travelers through intuitive booking and communication features, streamlining the entire hosting experience.",
      problem: {
        title: "The Problem",
        description: "Hosts struggled to manage multiple properties, bookings, and communications across different platforms. The existing tools were fragmented and didn't provide a unified experience.",
      },
      process: {
        title: "Design Process",
        steps: [
          "User Research: Interviewed hosts to understand their workflows",
          "Analysis: Identified key pain points and opportunities",
          "Design: Created wireframes and prototypes",
          "Testing: Validated with hosts and iterated based on feedback",
        ],
      },
      approach: {
        title: "The Approach",
        description: "We designed a unified platform that consolidates all host management needs into a single, intuitive interface. The design emphasizes quick actions, clear information hierarchy, and seamless communication tools.",
      },
      results: {
        title: "The Results",
        metrics: [
          { label: "Time Saved", value: "40%" },
          { label: "Host Satisfaction", value: "90%" },
          { label: "Booking Efficiency", value: "+35%" },
        ],
        description: "The platform significantly improved host efficiency and satisfaction, with measurable improvements in booking management.",
      },
      media: [
        // Images will be added to: src/assets/projects/airbnb-connect/
        { type: "image", src: "/src/assets/projects/airbnb-connect/cover.jpg" },
      ],
    },
  },
  {
    id: "rewording-poster-design",
    title: "REWORLDING",
    type: "Visual + Brand Design",
    date: "2025",
    image: rewordingCover, // Placeholder - replace with actual image
    description: "A Visual Identity for Global Futures Design - A poster series exploring themes of technology, humanity, and the future through bold typography and AI-generated imagery.",
    category: "visual-brand",
    detail: {
      title: "REWORLDING",
      type: "Visual + Brand Design",
      date: "2025",
      role: "Visual Designer",
      duration: "Project-based",
      team: "Client: FUSE Lab, Tohoku University",
      overview: "A poster series exploring themes of technology, humanity, and the future through bold typography and AI-generated imagery. Created for FUSE Lab at Tohoku University's inaugural conference on democratizing futures thinking.\n\nThe visual system bridges Eastern and Western design sensibilities, representing the global dialogue while highlighting Asia-focused perspectives. Using AI tools, I created abstract visual metaphors for complex concepts like 'productive misalignments,' 'futures literacy,' and 'world modulation.'",
      problem: {
        title: "Scope & Direction",
        description: "Defined the timeline and clarified the scope including web banners and posters. Defined key requirements such as essential information to include in the poster.",
      },
      process: {
        title: "Design Process",
        steps: [
          "Defined the timeline and clarified the scope including web banners and posters",
          "Defined key requirements such as essential information to include in the poster",
          "Used moodboards to gauge client preference and direction",
          "Used AI-assisted Midjourney to explore visual directions and Banana Nano and Figma to finalize designs",
        ],
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
