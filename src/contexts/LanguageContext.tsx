import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | React.ReactNode>) => string | React.ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple translations object
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.work": "Work",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.skipToContent": "Skip to main content",
    // Common
    "common.back": "Back",
    "common.moreProjects": "More Projects",
    "common.email": "Email",
    "common.linkedin": "LinkedIn",
    "common.scheduleCall": "Schedule a Call",
    "common.contact": "Contact",
    "common.home": "Home",
    "common.work": "Work",
    "common.about": "About",
    "common.sunMode": "Sun Mode",
    // Hero Section
    "hero.description1": "I specialize in B2B operational platforms and AI-powered experiences, turning complex processes into simple, scalable solutions. My work focuses on driving efficiency, user adoption, and business impact—from improving internal operations to supporting customer growth.",
    "hero.description2": "Outside of work, I enjoy {writing} and {mentoring}—sharing what I've learned and learning from others along the way.",
    "hero.writing": "writing",
    "hero.mentoring": "mentoring",
    // Footer
    "footer.connect": "Let's connect and work together",
    // Philosophy
    "philosophy.title": "My Approach",
    "philosophy.description": "Using innovation and emotion, I translate complex problems and processes into experiences that are accessible and inclusive to everyone.",
    // Testimonials
    "testimonials.title": "What People Say",
    // About Page
    "about.title": "Hello, I am Sicong",
    "about.now.title": "Now",
    "about.now.p1": "I'm currently learning vibe coding and recently finished the Meta Front-End Developer Specialization (9 courses). I've been listening to a lot of Lenny's Podcast, thinking like a PM about how to acquire users and build great products. I'm more interested in growing as a builder.",
    "about.now.p2": "Most recently, I've been using AI tools for generated content in branding and advertising. I believe in the AI age, the future designer skillset shifts to product strategy, creative direction, distribution, and AI prototyping.",
    "about.amazon.title": "Most recently — Amazon",
    "about.amazon.p1": "I've been working with the Amazon Fresh B2B team, leading innovative design initiatives for warehouse inventory management and vendor product ordering.",
    "about.amazon.p2": "I'm driven by the opportunity to tackle new challenges daily, diving deep into complex contexts and addressing user pain points to create impactful solutions.",
    "about.morgan.title": "Before that — Morgan Stanley",
    "about.morgan.p1": "I spent three years as a Senior Product Designer at Morgan Stanley, specializing in the Lending and Retirement teams. I led initiatives to streamline mortgage applications with autofill features and developed tools to help users schedule calls with financial advisors.",
    "about.morgan.p2": "In addition, I dedicated about 30% of my time to enhancing the design system and advocating for a structured research process. This involved close collaboration with leadership, stakeholders, and engineers to deliver impactful and effective solutions.",
    "about.akqa.title": "Where career began —",
    "about.akqa.p1": "I've always been eager to learn and explore as much as possible. Right after graduating college, I joined the renowned design agency AKQA, believing that working with diverse clients early in my career would help me develop a wide range of skills and gain insights into various industries.",
    "about.akqa.p2": "During my two years at AKQA, I dedicated a year to supporting the redesign of Audi's iOS app and {audiWebsite} website. In 2019, I also collaborated with the team to completely rebrand and redesign {paypalWebsite}, delivering a fresh and cohesive digital experience.",
    "about.akqa.audiWebsite": "Audi.com",
    "about.akqa.paypalWebsite": "PayPal.com",
    "about.outside.title": "Outside of my work",
    "about.outside.p1": "In my spare time, I like reading around 40 books per year. I am also a big fan of watercolor and digital drawing through Procreate.",
    "about.outside.p2": "Currently, I serve as a design mentor through {adplist}, driven by my passion for human connection and meaningful relationships. I enjoy engaging with people, learning from their unique experiences and stories. Having benefited greatly from the support I received as a junior designer, I'm committed to giving back to the community and helping the next generation of designers thrive.",
    "about.outside.adplist": "ADPList",
    // 404 Page
    "404.title": "404",
    "404.message": "Oops! Page not found",
    "404.back": "Return to Home",
    // Location
    "location.shanghai": "SHANGHAI, CHINA",
  },
  zh: {
    // Navigation
    "nav.work": "作品",
    "nav.home": "首页",
    "nav.about": "关于",
    "nav.contact": "联系",
    "nav.skipToContent": "跳转到主要内容",
    // Common
    "common.back": "返回",
    "common.moreProjects": "更多项目",
    "common.email": "邮箱",
    "common.linkedin": "领英",
    "common.scheduleCall": "预约通话",
    "common.contact": "联系",
    "common.home": "首页",
    "common.work": "作品",
    "common.about": "关于",
    "common.sunMode": "阳光模式",
    // Hero Section
    "hero.description1": "我专注于B2B运营平台和AI驱动的体验，将复杂的流程转化为简单、可扩展的解决方案。我的工作专注于提高效率、用户采用率和业务影响——从改善内部运营到支持客户增长。",
    "hero.description2": "工作之余，我喜欢{writing}和{mentoring}——分享我所学到的，并在过程中向他人学习。",
    "hero.writing": "写作",
    "hero.mentoring": "指导",
    // Footer
    "footer.connect": "让我们联系并一起工作",
    // Philosophy
    "philosophy.title": "我的方法",
    "philosophy.description": "运用创新和情感，我将复杂的问题和流程转化为对每个人来说都易于理解和包容的体验。",
    // Testimonials
    "testimonials.title": "人们的评价",
    // About Page
    "about.title": "你好，我是思聪",
    "about.now.title": "现在",
    "about.now.p1": "我目前正在学习氛围编程，最近完成了Meta前端开发专业课程（9门课程）。我一直在听很多Lenny的播客，像产品经理一样思考如何获取用户和构建优秀产品。我更感兴趣的是作为构建者成长。",
    "about.now.p2": "最近，我一直在使用AI工具进行品牌和广告中的生成内容。我相信在AI时代，未来设计师的技能组合将转向产品策略、创意方向、分发和AI原型制作。",
    "about.amazon.title": "最近 — 亚马逊",
    "about.amazon.p1": "我一直在与亚马逊生鲜B2B团队合作，为仓库库存管理和供应商产品订购领导创新设计项目。",
    "about.amazon.p2": "我受到每天应对新挑战的机会驱动，深入探索复杂情境，解决用户痛点，创造有影响力的解决方案。",
    "about.morgan.title": "在此之前 — 摩根士丹利",
    "about.morgan.p1": "我在摩根士丹利担任高级产品设计师三年，专注于贷款和退休团队。我领导了通过自动填充功能简化抵押贷款申请的举措，并开发了帮助用户安排与财务顾问通话的工具。",
    "about.morgan.p2": "此外，我花费了大约30%的时间来增强设计系统并倡导结构化的研究流程。这涉及与领导层、利益相关者和工程师的密切合作，以提供有影响力和有效的解决方案。",
    "about.akqa.title": "职业生涯的起点 —",
    "about.akqa.p1": "我一直渴望尽可能多地学习和探索。大学毕业后，我立即加入了著名的设计机构AKQA，相信在职业生涯早期与不同客户合作将帮助我发展广泛的技能并获得对各个行业的洞察。",
    "about.akqa.p2": "在AKQA的两年中，我花了一年时间支持奥迪iOS应用和{audiWebsite}网站的重设计。2019年，我还与团队合作完全重新品牌和重新设计了{paypalWebsite}，提供了全新且一致的数字体验。",
    "about.akqa.audiWebsite": "Audi.com",
    "about.akqa.paypalWebsite": "PayPal.com",
    "about.outside.title": "工作之外",
    "about.outside.p1": "在业余时间，我喜欢每年阅读大约40本书。我也是水彩画和通过Procreate进行数字绘画的忠实粉丝。",
    "about.outside.p2": "目前，我通过{adplist}担任设计导师，这是出于我对人际联系和有意义关系的热情。我喜欢与人互动，从他们独特的经历和故事中学习。作为初级设计师，我从收到的支持中受益匪浅，我致力于回馈社区并帮助下一代设计师茁壮成长。",
    "about.outside.adplist": "ADPList",
    // 404 Page
    "404.title": "404",
    "404.message": "糟糕！页面未找到",
    "404.back": "返回首页",
    // Location
    "location.shanghai": "中国，上海",
    // Work Page
    "work.title": "作品",
    // Project Detail Page
    "project.back": "返回",
    "project.overview": "概述",
    "project.notFound": "项目未找到",
    "project.problem": "问题",
    "project.challenge": "挑战",
    "project.process": "设计流程",
    "project.approach": "方法",
    "project.solution": "解决方案",
    "project.results": "结果",
    "project.impact": "影响",
    "project.details": "项目详情",
    "project.role": "角色",
    "project.duration": "时长",
    "project.team": "团队",
    "project.client": "客户",
    "project.tools": "工具",
    "project.year": "年份",
    "project.eventDate": "活动日期",
    "project.type": "类型",
    // Project Types
    "projectType.uxDesign": "用户体验设计",
    "projectType.websiteRedesign": "网站重新设计",
    "projectType.websiteiOSApp": "网站、iOS应用",
    "projectType.posterDesign": "海报设计",
    // Common project terms
    "project.common.weeks": "周",
    "project.common.year": "年",
    "project.common.designers": "设计师",
    "project.common.developers": "开发者",
    // Error messages
    "error.title": "出错了",
    "error.message": "发生了意外错误",
    "error.reload": "重新加载页面",
    "error.details": "错误详情",
    // Adobe Security Project
    "project.security.title": "Adobe防火墙规则管理",
    "project.security.description": "将工程师构建的安全工具转变为清晰、值得信赖的体验",
    "project.security.overview": "这个项目始于一个看似明确的请求——*\"构建一个仪表板\"*。实际上，团队面临的是一个未定义的决策问题、不明确的所有权以及强大的技术约束。我的责任是超越执行，重新定义问题，并使用设计帮助团队就产品实际需要支持的决策达成一致。",
    "project.security.context.title": "背景",
    "project.security.context.description": "这是一个0→1的内部安全工具项目。最初的简报听起来很明确：*\"我们需要一个仪表板\"*。但很快，很明显这是一个**被框定为需求的解决方案**，而不是一个明确定义的问题。\n\n没有现有的基准，产品经理仍在探索方向，时间紧迫，技术约束已经被纳入定义中。我的角色不仅仅是设计屏幕，而是**重新定义问题并将团队围绕共同的决策目标锚定**。",
    "project.security.problem.title": "真正的挑战",
    "project.security.problem.description": "团队并不缺乏数据——他们被数据淹没了。\n\n工程师在多个系统之间跳转，以回答简单但关键的问题：\n- *我现在需要采取行动吗？*\n- *这个问题是否阻碍了重要的事情？*\n- *谁拥有下一步？*\n\n提议的\"仪表板\"有可能成为另一个数据容器。如果我们发布它，我们将在不减少认知负荷的情况下增加表面积。",
    "project.security.process.title": "重新定义问题",
    "project.security.process.description": "我没有问*\"这个仪表板应该显示什么？\"*，而是围绕**决策时刻**重新构建了对话。\n\n与产品经理和高级工程师一起，我绘制了：\n- 做出决策的关键时刻\n- *在那个时刻*实际需要什么信息\n- 哪些数据可以推迟或完全删除\n\n这个轻量级的对齐练习取代了我们没有时间进行的数周传统研究——并立即澄清了什么重要。",
    "project.security.approach.title": "约束下的设计决策",
    "project.security.approach.description": "由于缺乏历史先例和时间有限，我做出了一个深思熟虑的决定：\n\n> 这个产品的任务不是显示一切——而是**减少决策时间**。\n\n这导致了几个有意的选择：\n- 优先考虑信号而非原始指标\n- 围绕*\"我是否采取行动？\"*构建界面\n- 将技术约束视为边界，而非借口\n\n一些利益相关者最初推动包含更多数据\"以防万一\"。我通过将每次讨论都基于同一个问题来反驳：*这是否有助于某人做出更快、更自信的决策？*",
    "project.security.results.title": "成果",
    "project.security.results.description": "最终的MVP将团队围绕单一目标对齐：**决策清晰度**。\n\n我们没有交付一个通用的仪表板，而是交付了一个专注的工具：\n- 显示*现在*需要关注的内容\n- 减少了在系统间搜索的时间\n- 为产品经理和工程师提供了未来迭代的共享心智模型\n\n更重要的是，设计成为了在原本模糊的0→1空间中产品方向的锚点。",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string, params?: Record<string, string | React.ReactNode>): string | React.ReactNode => {
    let translation = translations[language][key] || key;
    
    // Handle placeholders like {variable}
    if (params && typeof translation === 'string') {
      Object.keys(params).forEach((paramKey) => {
        const placeholder = `{${paramKey}}`;
        if (translation.includes(placeholder)) {
          translation = translation.replace(placeholder, String(params[paramKey]));
        }
      });
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
