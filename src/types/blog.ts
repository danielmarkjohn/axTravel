// src/types/blog.ts
export interface BlogPost {
    id: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    excerpt: string;
    content: string;
    author: Author;
    image: string;
    tags: string[];
    views: number;
    likes: number;
    featured?: boolean;
    relatedPosts?: string[];
  }
  
  export interface Author {
    id: string;
    name: string;
    role: string;
    avatar: string;
    bio: string;
    social: {
      twitter?: string;
      linkedin?: string;
      github?: string;
    };
  }
  
  export interface BlogCategory {
    id: string;
    name: string;
    description: string;
    icon: string;
    count?: number;
  }
  
  export interface BlogComment {
    id: string;
    postId: string;
    author: Author;
    content: string;
    date: string;
    likes: number;
    replies?: BlogComment[];
  }
  