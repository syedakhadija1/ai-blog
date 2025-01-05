export interface BlogPost {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  authorAvatar: string;
  date: string;
  coverImage: string;
}

export const blogPosts: BlogPost[] = [
  // Existing posts
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
    content: `
      <p>Next.js is a powerful React framework that makes it easy to build fast, SEO-friendly web applications. In this post, we'll explore the key features that make Next.js a great choice for your next project.</p>
      <h2>Why Next.js?</h2>
      <p>Next.js provides an excellent developer experience with features like:</p>
      <ul>
        <li>Server-side rendering</li>
        <li>Static site generation</li>
        <li>API routes</li>
        <li>File-system based routing</li>
      </ul>
      <p>These features help you build better applications with less configuration and more focus on your business logic.</p>
    `,
    author: "Sarah Johnson",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    date: "April 1, 2024",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&h=900",
  },
  {
    slug: "mastering-typescript",
    title: "Mastering TypeScript",
    excerpt: "Discover the power of TypeScript and how it can improve your JavaScript development workflow.",
    content: `
      <p>TypeScript has become an essential tool for modern JavaScript development. Let's dive into why TypeScript is worth learning and how it can benefit your projects.</p>
      <h2>Benefits of TypeScript</h2>
      <p>TypeScript offers several advantages over plain JavaScript:</p>
      <ul>
        <li>Static typing</li>
        <li>Better IDE support</li>
        <li>Early error detection</li>
        <li>Enhanced code maintainability</li>
      </ul>
      <p>By adopting TypeScript, you can catch errors earlier in development and write more maintainable code.</p>
    `,
    author: "Michael Chen",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    date: "March 28, 2024",
    coverImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1600&h=900",
  },
  {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques",
    excerpt: "Explore the latest CSS features and techniques for building beautiful, responsive websites.",
    content: `
      <p>CSS has evolved significantly in recent years, introducing powerful new features that make web design more flexible and maintainable than ever before.</p>
      <h2>Modern CSS Features</h2>
      <p>Let's explore some of the most exciting CSS features:</p>
      <ul>
        <li>CSS Grid</li>
        <li>Flexbox</li>
        <li>Custom Properties</li>
        <li>Container Queries</li>
      </ul>
      <p>These features enable developers to create more sophisticated layouts with less code.</p>
    `,
    author: "Emma Wilson",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
    date: "March 25, 2024",
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=1600&h=900",
  },
  // New posts
  {
    slug: "react-performance-optimization",
    title: "React Performance Optimization Techniques",
    excerpt: "Learn advanced techniques to optimize your React applications for better performance.",
    content: `
      <p>Performance optimization is crucial for creating smooth, responsive React applications. Let's explore some advanced techniques to improve your app's performance.</p>
      <h2>Key Optimization Techniques</h2>
      <ul>
        <li>Code splitting with React.lazy</li>
        <li>Memoization with useMemo and useCallback</li>
        <li>Virtual list implementation</li>
        <li>Bundle size optimization</li>
      </ul>
      <p>Implementing these techniques can significantly improve your application's performance and user experience.</p>
    `,
    author: "David Park",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
    date: "March 22, 2024",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&h=900",
  },
  {
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices",
    excerpt: "Master Tailwind CSS with these essential best practices and tips for efficient development.",
    content: `
      <p>Tailwind CSS has revolutionized the way we write CSS. Here are some best practices to make the most of this utility-first framework.</p>
      <h2>Essential Tips</h2>
      <ul>
        <li>Custom plugin creation</li>
        <li>Component extraction</li>
        <li>Theme configuration</li>
        <li>Responsive design patterns</li>
      </ul>
      <p>Following these practices will help you write maintainable and scalable CSS with Tailwind.</p>
    `,
    author: "Lisa Chen",
    authorAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&h=150",
    date: "March 20, 2024",
    coverImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1600&h=900",
  },
  {
    slug: "state-management-comparison",
    title: "Modern State Management in React",
    excerpt: "Compare different state management solutions for React applications.",
    content: `
      <p>Choosing the right state management solution is crucial for React applications. Let's compare popular options and their use cases.</p>
      <h2>Popular Solutions</h2>
      <ul>
        <li>Redux Toolkit</li>
        <li>Zustand</li>
        <li>Jotai</li>
        <li>React Query</li>
      </ul>
      <p>Understanding these solutions will help you make better architectural decisions for your applications.</p>
    `,
    author: "Alex Thompson",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    date: "March 18, 2024",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&h=900",
  },
  {
    slug: "web-accessibility-guide",
    title: "Complete Guide to Web Accessibility",
    excerpt: "Learn how to make your web applications accessible to everyone.",
    content: `
      <p>Web accessibility is not just a nice-to-have feature; it's a necessity. This guide covers everything you need to know about making your web applications accessible.</p>
      <h2>Key Areas</h2>
      <ul>
        <li>ARIA attributes</li>
        <li>Keyboard navigation</li>
        <li>Color contrast</li>
        <li>Screen reader optimization</li>
      </ul>
      <p>Making your application accessible benefits all users and is essential for compliance.</p>
    `,
    author: "Maria Rodriguez",
    authorAvatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=150&h=150",
    date: "March 15, 2024",
    coverImage: "https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&w=1600&h=900",
  },
  {
    slug: "testing-react-applications",
    title: "Testing React Applications",
    excerpt: "A comprehensive guide to testing React applications with Jest and React Testing Library.",
    content: `
      <p>Testing is crucial for maintaining reliable React applications. Learn how to effectively test your components and application logic.</p>
      <h2>Testing Strategies</h2>
      <ul>
        <li>Unit testing components</li>
        <li>Integration testing</li>
        <li>E2E testing with Cypress</li>
        <li>Test-driven development</li>
      </ul>
      <p>A solid testing strategy will help you catch bugs early and maintain code quality.</p>
    `,
    author: "James Wilson",
    authorAvatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150",
    date: "March 12, 2024",
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1600&h=900",
  },
  {
    slug: "api-design-principles",
    title: "RESTful API Design Principles",
    excerpt: "Learn the best practices for designing clean and efficient RESTful APIs.",
    content: `
      <p>Good API design is fundamental for building scalable web applications. This guide covers essential principles for designing RESTful APIs.</p>
      <h2>Key Principles</h2>
      <ul>
        <li>Resource naming</li>
        <li>HTTP methods usage</li>
        <li>Status codes</li>
        <li>Versioning strategies</li>
      </ul>
      <p>Following these principles will help you create APIs that developers love to use.</p>
    `,
    author: "Chris Anderson",
    authorAvatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=150&h=150",
    date: "March 10, 2024",
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1600&h=900",
  },
  {
    slug: "microservices-architecture",
    title: "Introduction to Microservices",
    excerpt: "Understand the fundamentals of microservices architecture and its implementation.",
    content: `
      <p>Microservices architecture has become increasingly popular for building scalable applications. Learn the key concepts and implementation strategies.</p>
      <h2>Core Concepts</h2>
      <ul>
        <li>Service decomposition</li>
        <li>Inter-service communication</li>
        <li>Data management</li>
        <li>Deployment strategies</li>
      </ul>
      <p>Understanding these concepts will help you build more maintainable and scalable applications.</p>
    `,
    author: "Sophie Taylor",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    date: "March 8, 2024",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&h=900",
  },
  {
    slug: "docker-kubernetes-guide",
    title: "Docker and Kubernetes Essentials",
    excerpt: "Master containerization and orchestration with Docker and Kubernetes.",
    content: `
      <p>Container technology has transformed how we deploy and scale applications. Learn the essentials of Docker and Kubernetes.</p>
      <h2>Key Topics</h2>
      <ul>
        <li>Container basics</li>
        <li>Docker compose</li>
        <li>Kubernetes architecture</li>
        <li>Deployment strategies</li>
      </ul>
      <p>These tools are essential for modern application deployment and scaling.</p>
    `,
    author: "Ryan Martinez",
    authorAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150",
    date: "March 5, 2024",
    coverImage: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1600&h=900",
  }
];