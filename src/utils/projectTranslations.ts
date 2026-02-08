import { getProjectDetail, getAllProjectSummaries, type ProjectSummary } from "@/data/projects";
import { Language } from "@/contexts/LanguageContext";

// Helper function to get translated project detail
export const getTranslatedProjectDetail = (projectId: string, language: Language) => {
  const project = getProjectDetail(projectId);
  if (!project) return null;

  // For English, return as-is
  if (language === "en") {
    return project;
  }

  // For Chinese, translate the project
  if (language === "zh") {
    // Import translations dynamically to avoid circular dependency
    const translations: Record<string, Record<string, string>> = {
      "security-tooling": {
        title: "Adobe防火墙规则管理",
        description: "将工程师构建的安全工具转变为清晰、值得信赖的体验",
        overview: "这个项目始于一个看似明确的请求——*\"构建一个仪表板\"*。实际上，团队面临的是一个未定义的决策问题、不明确的所有权以及强大的技术约束。我的责任是超越执行，重新定义问题，并使用设计帮助团队就产品实际需要支持的决策达成一致。",
        "context.title": "背景",
        "context.description": "这是一个0→1的内部安全工具项目。最初的简报听起来很明确：*\"我们需要一个仪表板\"*。但很快，很明显这是一个**被框定为需求的解决方案**，而不是一个明确定义的问题。\n\n没有现有的基准，产品经理仍在探索方向，时间紧迫，技术约束已经被纳入定义中。我的角色不仅仅是设计屏幕，而是**重新定义问题并将团队围绕共同的决策目标锚定**。",
        "problem.title": "真正的挑战",
        "problem.description": "团队并不缺乏数据——他们被数据淹没了。\n\n工程师在多个系统之间跳转，以回答简单但关键的问题：\n- *我现在需要采取行动吗？*\n- *这个问题是否阻碍了重要的事情？*\n- *谁拥有下一步？*\n\n提议的\"仪表板\"有可能成为另一个数据容器。如果我们发布它，我们将在不减少认知负荷的情况下增加表面积。",
        "process.title": "重新定义问题",
        "process.description": "我没有问*\"这个仪表板应该显示什么？\"*，而是围绕**决策时刻**重新构建了对话。\n\n与产品经理和高级工程师一起，我绘制了：\n- 做出决策的关键时刻\n- *在那个时刻*实际需要什么信息\n- 哪些数据可以推迟或完全删除\n\n这个轻量级的对齐练习取代了我们没有时间进行的数周传统研究——并立即澄清了什么重要。",
        "approach.title": "约束下的设计决策",
        "approach.description": "由于缺乏历史先例和时间有限，我做出了一个深思熟虑的决定：\n\n> 这个产品的任务不是显示一切——而是**减少决策时间**。\n\n这导致了几个有意的选择：\n- 优先考虑信号而非原始指标\n- 围绕*\"我是否采取行动？\"*构建界面\n- 将技术约束视为边界，而非借口\n\n一些利益相关者最初推动包含更多数据\"以防万一\"。我通过将每次讨论都基于同一个问题来反驳：*这是否有助于某人做出更快、更自信的决策？*",
        "results.title": "成果",
        "results.description": "最终的MVP将团队围绕单一目标对齐：**决策清晰度**。\n\n我们没有交付一个通用的仪表板，而是交付了一个专注的工具：\n- 显示*现在*需要关注的内容\n- 减少了在系统间搜索的时间\n- 为产品经理和工程师提供了未来迭代的共享心智模型\n\n更重要的是，设计成为了在原本模糊的0→1空间中产品方向的锚点。",
      },
    };

    const projectTranslations = translations[projectId];
    if (!projectTranslations) {
      return project; // Return original if no translation available
    }

    // Create translated project
    const translatedProject: any = {
      ...project,
      title: projectTranslations.title || project.title,
      description: projectTranslations.description || project.description,
      detail: {
        ...project.detail,
        title: projectTranslations.title || project.detail.title,
        overview: projectTranslations.overview || project.detail.overview,
        problem: {
          ...project.detail.problem,
          title: projectTranslations["problem.title"] || project.detail.problem.title,
          description: projectTranslations["problem.description"] || project.detail.problem.description,
        },
        process: {
          ...project.detail.process,
          title: projectTranslations["process.title"] || project.detail.process.title,
          description: projectTranslations["process.description"] || project.detail.process.description,
        },
        approach: project.detail.approach ? {
          ...project.detail.approach,
          title: projectTranslations["approach.title"] || project.detail.approach.title,
          description: projectTranslations["approach.description"] || project.detail.approach.description,
        } : undefined,
        results: {
          ...project.detail.results,
          title: projectTranslations["results.title"] || project.detail.results.title,
          description: projectTranslations["results.description"] || project.detail.results.description,
        },
      },
    };

    // Handle context field if it exists
    if ((project.detail as any).context && projectTranslations["context.title"]) {
      translatedProject.detail.context = {
        ...(project.detail as any).context,
        title: projectTranslations["context.title"],
        description: projectTranslations["context.description"],
      };
    }

    return translatedProject;
  }

  return project;
};

// Helper function to get translated project summaries
export const getTranslatedProjectSummaries = (language: Language): ProjectSummary[] => {
  const summaries = getAllProjectSummaries();
  
  if (language === "en") {
    return summaries;
  }

  // For Chinese, translate summaries
  if (language === "zh") {
    const translations: Record<string, { title: string; description: string }> = {
      "security-tooling": {
        title: "Adobe防火墙规则管理",
        description: "将工程师构建的安全工具转变为清晰、值得信赖的体验",
      },
    };

    return summaries.map((summary) => {
      const translation = translations[summary.id];
      if (translation) {
        return {
          ...summary,
          title: translation.title,
          description: translation.description,
        };
      }
      return summary;
    });
  }

  return summaries;
};
