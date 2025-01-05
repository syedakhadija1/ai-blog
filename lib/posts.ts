import { Post } from './types'

export const post: Post[] = [
  {
    id: "1",
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
    content: `Web development is evolving rapidly. From AI-powered tools to edge computing, the landscape is changing dramatically. Let's explore the key trends and technologies that are shaping the future of web development.

    ## Key Trends
    1. AI-Powered Development Tools
    2. Edge Computing and CDNs
    3. WebAssembly
    4. Serverless Architecture
    5. Progressive Web Apps

    These technologies are revolutionizing how we build and deploy web applications.`,
    author: "Sarah Johnson",
    date: "2024-03-20",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    readingTime: "5 min",
    category: "Technology"
  },
  {
    id: "2",
    title: "Mastering React Hooks",
    excerpt: "A comprehensive guide to using React Hooks effectively in your applications.",
    content: `React Hooks have revolutionized how we write React components. This guide will help you master the most important hooks and patterns.

    ## Essential Hooks
    1. useState for state management
    2. useEffect for side effects
    3. useContext for context consumption
    4. useRef for mutable references
    
    Learn how to use these hooks effectively in your applications.`,
    author: "Alex Chen",
    date: "2024-03-19",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    readingTime: "8 min",
    category: "React"
  },
  {
    id: "3",
    title: "CSS Architecture Best Practices",
    excerpt: "Learn how to structure your CSS for maintainability and scalability.",
    content: `A well-structured CSS architecture is crucial for maintaining large-scale applications. This article covers best practices and methodologies.`,
    author: "Emma Wilson",
    date: "2024-03-18",
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=1200&q=80",
    readingTime: "6 min",
    category: "CSS"
  },
  {
    id: "4",
    title: "TypeScript Advanced Patterns",
    excerpt: "Deep dive into advanced TypeScript patterns and techniques.",
    content: `TypeScript offers powerful features for type-safe programming. Let's explore advanced patterns and techniques.`,
    author: "Michael Brown",
    date: "2024-03-17",
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1200&q=80",
    readingTime: "10 min",
    category: "TypeScript"
  },
  {
    id: "5",
    title: "Modern API Design",
    excerpt: "Best practices for designing RESTful and GraphQL APIs.",
    content: `API design is crucial for building scalable applications. Learn about REST and GraphQL best practices.`,
    author: "David Kim",
    date: "2024-03-16",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    readingTime: "7 min",
    category: "Backend"
  },
  {
    id: "6",
    title: "Performance Optimization Techniques",
    excerpt: "Optimize your web applications for better performance.",
    content: `Learn how to improve your web application's performance through various optimization techniques.`,
    author: "Lisa Chen",
    date: "2024-03-15",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    readingTime: "9 min",
    category: "Performance"
  },
  {
    id: "7",
    title: "UI/UX Design Principles",
    excerpt: "Essential principles for creating user-friendly interfaces.",
    content: `Discover key principles of UI/UX design that will help you create better user experiences.`,
    author: "Rachel Green",
    date: "2024-03-14",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    readingTime: "6 min",
    category: "Design"
  },
  {
    id: "8",
    title: "Next.js 14 Features",
    excerpt: "Exploring the latest features in Next.js 14.",
    content: `Next.js 14 brings exciting new features. Let's explore what's new and how to use these features effectively.`,
    author: "James Wilson",
    date: "2024-03-13",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    readingTime: "7 min",
    category: "Next.js"
  }
]

export async function getPosts(): Promise<Post[]> {
  return post
}

export async function getPost(id: string): Promise<Post | undefined> {
  return post.find(post => post.id === id)
}