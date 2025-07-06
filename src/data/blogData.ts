// src/data/blogData.ts
import { BlogPost, BlogCategory, Author } from '../types/blog';

export const authors: Author[] = [
  {
    id: 'author-1',
    name: 'Daniel Mark',
    role: 'Senior Architect',
    avatar: 'https://www.svgrepo.com/show/452030/avatar-default.svg',
    bio: 'Tech enthusiast with 10+ years of experience in web development and cloud architecture.',
    social: {
      twitter: 'danielmarkjohn',
      linkedin: 'danielmarkjohn',
      github: 'danielmarkjohn'
    }
  },
  // Add more authors...
];

export const blogCategories: BlogCategory[] = [
  {
    id: 'web',
    name: 'Web Development',
    description: 'Latest trends and best practices in web development',
    icon: '🌐',
    count: 15
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    description: 'Mobile app development insights and tutorials',
    icon: '📱',
    count: 12
  },
  {
    id: 'aiml',
    name: 'AI & Machine Learning',
    description: 'Artificial Intelligence and Machine Learning advances',
    icon: '🤖',
    count: 8
  },
  {
    id: 'devops',
    name: 'DevOps',
    description: 'DevOps practices, tools, and automation',
    icon: '⚙️',
    count: 10
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    description: 'Digital marketing strategies and analytics',
    icon: '📈',
    count: 9
  },
  {
    id: 'social',
    name: 'Social Media',
    description: 'Social media management and strategy',
    icon: '💬',
    count: 7
  },
  {
    id: 'security',
    name: 'Cybersecurity',
    description: 'Security best practices and threat prevention',
    icon: '🔒',
    count: 11
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'web-1',
    title: 'The Future of AI Driven App Development',
    category: 'web',
    date: 'Feb 15, 2025',
    readTime: '8 min read',
    excerpt: 'Explore the upcoming trends and technologies shaping the future of AI Driven App Development.',
    content: `
      # The Future of AI Driven App Development

      As we move further into 2025, the landscape of web development continues to evolve at an unprecedented pace. Let's explore the key trends and technologies that are shaping the future of web development.

      ## 1. Web Components and Micro-Frontends

      The adoption of Web Components has reached new heights, with more organizations embracing this technology for building scalable and maintainable applications. Micro-frontends have become the standard approach for large-scale applications, allowing teams to work independently while maintaining a cohesive user experience.

      ## 2. AI-Powered Development

      Artificial Intelligence is now an integral part of web development, from code completion to automated testing and optimization. Developers are leveraging AI tools to increase productivity and reduce time-to-market for new features.

      ## 3. WebAssembly Evolution

      WebAssembly has matured significantly, enabling high-performance applications directly in the browser. This has opened new possibilities for web-based gaming, video editing, and complex data visualization.

      [Continue with more detailed content...]
    `,
    author: authors[0],
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*IPB1WB5fFubOwSiMO3jfrg.jpeg',
    tags: ['Web Development', 'Future Tech', 'Trends'],
    views: 1520,
    likes: 89,
    featured: true,
    relatedPosts: ['web-2', 'web-3', 'devops-1']
  },
  // Add more posts...
];
