export interface User {
  id: string;
  name: string;
  email: string;
  image: string | null;
  isPro: boolean;
}

export interface ItemType {
  id: string;
  name: string;
  icon: string;
  color: string;
  count: number;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  isFavorite: boolean;
  itemCount: number;
  typeIds: string[];
}

export interface Item {
  id: string;
  title: string;
  description: string;
  typeId: string;
  collectionId: string | null;
  tags: string[];
  isFavorite: boolean;
  isPinned: boolean;
  createdAt: string;
  content?: string;
  language?: string;
  url?: string;
  fileName?: string;
}

export const currentUser: User = {
  id: "user-1",
  name: "John Doe",
  email: "john@example.com",
  image: null,
  isPro: false,
};

export const itemTypes: ItemType[] = [
  { id: "snippet", name: "Snippets", icon: "Code", color: "#3b82f6", count: 24 },
  { id: "prompt", name: "Prompts", icon: "Sparkles", color: "#8b5cf6", count: 18 },
  { id: "command", name: "Commands", icon: "Terminal", color: "#f97316", count: 15 },
  { id: "note", name: "Notes", icon: "StickyNote", color: "#fde047", count: 12 },
  { id: "file", name: "Files", icon: "File", color: "#6b7280", count: 5 },
  { id: "image", name: "Images", icon: "Image", color: "#ec4899", count: 3 },
  { id: "url", name: "Links", icon: "Link", color: "#10b981", count: 8 },
];

export const collections: Collection[] = [
  {
    id: "react-patterns",
    name: "React Patterns",
    description: "Common React patterns and hooks",
    isFavorite: true,
    itemCount: 12,
    typeIds: ["snippet", "note", "url"],
  },
  {
    id: "python-snippets",
    name: "Python Snippets",
    description: "Useful Python code snippets",
    isFavorite: false,
    itemCount: 8,
    typeIds: ["snippet", "note"],
  },
  {
    id: "context-files",
    name: "Context Files",
    description: "AI context files for projects",
    isFavorite: true,
    itemCount: 5,
    typeIds: ["file", "note"],
  },
  {
    id: "interview-prep",
    name: "Interview Prep",
    description: "Technical interview preparation",
    isFavorite: false,
    itemCount: 24,
    typeIds: ["note", "snippet", "url", "prompt"],
  },
  {
    id: "git-commands",
    name: "Git Commands",
    description: "Frequently used git commands",
    isFavorite: true,
    itemCount: 15,
    typeIds: ["command", "note"],
  },
  {
    id: "ai-prompts",
    name: "AI Prompts",
    description: "Curated AI prompts for coding",
    isFavorite: false,
    itemCount: 18,
    typeIds: ["prompt", "snippet", "note"],
  },
];

export const items: Item[] = [
  {
    id: "item-1",
    title: "useAuth Hook",
    description: "Custom authentication hook for React applications",
    typeId: "snippet",
    collectionId: "react-patterns",
    tags: ["react", "auth", "hooks"],
    isFavorite: true,
    isPinned: true,
    createdAt: "2026-01-15",
    language: "typescript",
    content: `export function useAuth() {
  const { data: session, status } = useSession();

  return {
    user: session?.user ?? null,
    isLoading: status === "loading",
    isAuthenticated: status === "authenticated",
  };
}`,
  },
  {
    id: "item-2",
    title: "API Error Handling Pattern",
    description: "Fetch wrapper with exponential backoff retry logic",
    typeId: "snippet",
    collectionId: "react-patterns",
    tags: ["api", "error-handling", "fetch"],
    isFavorite: false,
    isPinned: true,
    createdAt: "2026-01-12",
    language: "typescript",
    content: `export async function fetchWithRetry(url: string, retries = 3): Promise<Response> {
  for (let attempt = 0; attempt < retries; attempt++) {
    const response = await fetch(url);
    if (response.ok) return response;
    await new Promise((resolve) => setTimeout(resolve, 2 ** attempt * 1000));
  }
  throw new Error(\`Request failed after \${retries} attempts\`);
}`,
  },
  {
    id: "item-3",
    title: "Code Review Prompt",
    description: "Review code for bugs, security issues and readability",
    typeId: "prompt",
    collectionId: "ai-prompts",
    tags: ["ai", "code-review"],
    isFavorite: true,
    isPinned: false,
    createdAt: "2026-01-10",
    content:
      "Review the following code. List bugs, security issues and readability problems, most severe first.",
  },
  {
    id: "item-4",
    title: "Undo Last Commit",
    description: "Undo the last commit and keep the changes staged",
    typeId: "command",
    collectionId: "git-commands",
    tags: ["git", "undo"],
    isFavorite: true,
    isPinned: false,
    createdAt: "2026-01-09",
    language: "bash",
    content: "git reset --soft HEAD~1",
  },
  {
    id: "item-5",
    title: "List Comprehension Examples",
    description: "Filtering and mapping with list comprehensions",
    typeId: "snippet",
    collectionId: "python-snippets",
    tags: ["python", "lists"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-08",
    language: "python",
    content: "even_squares = [n ** 2 for n in range(10) if n % 2 == 0]",
  },
  {
    id: "item-6",
    title: "System Design Notes",
    description: "Key concepts to cover in system design interviews",
    typeId: "note",
    collectionId: "interview-prep",
    tags: ["interview", "system-design"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-06",
    content: "## Topics\n\n- Load balancing\n- Caching\n- Database sharding",
  },
  {
    id: "item-7",
    title: "Project CLAUDE.md Template",
    description: "Starter context file for new projects",
    typeId: "file",
    collectionId: "context-files",
    tags: ["ai", "context"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-05",
    fileName: "CLAUDE.md",
  },
  {
    id: "item-8",
    title: "Auth Flow Diagram",
    description: "Diagram of the login and session flow",
    typeId: "image",
    collectionId: null,
    tags: ["auth", "diagram"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-04",
    fileName: "auth-flow.png",
  },
  {
    id: "item-9",
    title: "React Docs",
    description: "Official React documentation",
    typeId: "url",
    collectionId: "react-patterns",
    tags: ["react", "docs"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-03",
    url: "https://react.dev",
  },
];
