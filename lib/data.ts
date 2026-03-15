import { BlogPost } from "@/components/BlogCard";

export interface Project {
  id: string;
  title: string;
  description: string;
  author: string;
  authorUsername: string;
  date: string;
  tags: string[];
  replies: number;
  emoji?: string;
}

export interface UserProfile {
  username: string;
  name: string;
  bio: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  skills: string[];
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  posts: BlogPost[];
  projects: Project[];
}

export const SAMPLE_POSTS: BlogPost[] = [
  {
    slug: "getting-started-with-llms",
    title: "Getting Started with Large Language Models",
    excerpt:
      "A comprehensive guide to understanding and working with LLMs — from tokenization to prompt engineering.",
    author: "Ashwin Sunkara",
    authorUsername: "ashwin-sunk",
    date: "Mar 10, 2026",
    readTime: "8 min read",
    tags: ["LLM", "Beginner"],
    coverEmoji: "🧠",
  },
  {
    slug: "building-ai-agents",
    title: "Building AI Agents with Tool Use",
    excerpt:
      "Explore how to build autonomous AI agents that can use tools, browse the web, and execute code.",
    author: "Priya Sharma",
    authorUsername: "priya-s",
    date: "Mar 8, 2026",
    readTime: "12 min read",
    tags: ["Agents", "Advanced"],
    coverEmoji: "🤖",
  },
  {
    slug: "rag-explained",
    title: "Retrieval-Augmented Generation Explained",
    excerpt:
      "Deep dive into RAG — how combining retrieval with generation makes AI systems more accurate and grounded.",
    author: "Carlos Mendes",
    authorUsername: "carlos-m",
    date: "Mar 5, 2026",
    readTime: "10 min read",
    tags: ["RAG", "Architecture"],
    coverEmoji: "📚",
  },
  {
    slug: "ai-ethics-2026",
    title: "AI Ethics in 2026: Where Are We Now?",
    excerpt:
      "Examining the current state of AI ethics, bias mitigation, and responsible deployment practices.",
    author: "Ashwin Sunkara",
    authorUsername: "ashwin-sunk",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    tags: ["Ethics", "Policy"],
    coverEmoji: "⚖️",
  },
  {
    slug: "fine-tuning-guide",
    title: "Fine-Tuning Models on Custom Datasets",
    excerpt:
      "Step-by-step guide to fine-tuning open-source models using LoRA and QLoRA for domain-specific tasks.",
    author: "Priya Sharma",
    authorUsername: "priya-s",
    date: "Feb 22, 2026",
    readTime: "15 min read",
    tags: ["Fine-tuning", "ML"],
    coverEmoji: "🎯",
  },
  {
    slug: "multimodal-ai",
    title: "The Rise of Multimodal AI",
    excerpt:
      "How vision-language models are changing the way we interact with AI — from image understanding to video analysis.",
    author: "Carlos Mendes",
    authorUsername: "carlos-m",
    date: "Feb 18, 2026",
    readTime: "9 min read",
    tags: ["Multimodal", "Vision"],
    coverEmoji: "👁️",
  },
];

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    description:
      "Using NLP to automatically parse and score resumes against job descriptions. Looking for feedback on the matching algorithm.",
    author: "Ashwin Sunkara",
    authorUsername: "ashwin-sunk",
    date: "Mar 12, 2026",
    tags: ["NLP", "HR Tech"],
    replies: 14,
    emoji: "📄",
  },
  {
    id: "local-llm-setup",
    title: "Running LLMs Locally — Setup & Benchmarks",
    description:
      "Documenting my setup for running Llama 3 and Mistral locally. Sharing benchmarks and optimizations.",
    author: "Carlos Mendes",
    authorUsername: "carlos-m",
    date: "Mar 9, 2026",
    tags: ["Local LLM", "Hardware"],
    replies: 32,
    emoji: "💻",
  },
  {
    id: "medical-ai-chatbot",
    title: "Medical FAQ Chatbot — Need Architecture Advice",
    description:
      "Building a RAG-based chatbot for medical FAQs. Struggling with hallucination prevention. Open to suggestions.",
    author: "Priya Sharma",
    authorUsername: "priya-s",
    date: "Mar 7, 2026",
    tags: ["RAG", "Healthcare"],
    replies: 21,
    emoji: "🏥",
  },
  {
    id: "ai-code-reviewer",
    title: "Automated AI Code Review Tool",
    description:
      "Building a tool that uses LLMs to do automated code reviews on PRs. Looking for collaborators.",
    author: "Ashwin Sunkara",
    authorUsername: "ashwin-sunk",
    date: "Mar 3, 2026",
    tags: ["Dev Tools", "Code"],
    replies: 18,
    emoji: "🔍",
  },
];

export const DEMO_PROFILE: UserProfile = {
  username: "ashwin-sunk",
  name: "Ashwin Sunkara",
  bio: "AI researcher and developer passionate about LLMs, agentic systems, and AI education. Building tools that make AI accessible.",
  location: "San Francisco, CA",
  website: "https://ashwin.dev",
  github: "ashwin-sunk",
  linkedin: "ashwin-sunkara",
  skills: [
    "Python", "TypeScript", "PyTorch", "LangChain", "Next.js",
    "RAG Systems", "Fine-tuning", "Prompt Engineering", "FastAPI", "Docker",
  ],
  experience: [
    {
      title: "AI Engineer",
      company: "TechCorp AI",
      period: "2024 – Present",
      description:
        "Building LLM-powered products including RAG pipelines, AI agents, and internal tooling for 50k+ users.",
    },
    {
      title: "ML Engineer",
      company: "DataLab",
      period: "2022 – 2024",
      description:
        "Developed NLP models for document classification and information extraction. Reduced labeling cost by 40% using active learning.",
    },
    {
      title: "Research Intern",
      company: "University AI Lab",
      period: "Summer 2021",
      description:
        "Researched attention mechanisms in transformer models. Co-authored a paper on efficient sparse attention.",
    },
  ],
  education: [
    {
      degree: "M.S. Computer Science (AI Specialization)",
      institution: "Stanford University",
      year: "2022",
    },
    {
      degree: "B.Tech Computer Science",
      institution: "IIT Bombay",
      year: "2020",
    },
  ],
  posts: SAMPLE_POSTS.filter((p) => p.authorUsername === "ashwin-sunk"),
  projects: SAMPLE_PROJECTS.filter((p) => p.authorUsername === "ashwin-sunk"),
};
