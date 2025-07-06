// src/components/blog/BlogPostCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from 'types/blog';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="border-b border-gray-200 pb-8 group">
      <div className="flex flex-col md:flex-row gap-1">
        <div className="xxxl:w-2/3">
          <div className="flex items-center gap-4 mb-3">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm text-gray-600">{post.author.name}</span>
            <span className="text-sm text-gray-400">·</span>
            <span className="text-sm text-gray-600">{post.date}</span>
          </div>
          
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
            <button className="ml-auto text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="xl:w-2/3">
          <Link to={`/blog/${post.id}`}>
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full aspect-[4/3] object-cover rounded-lg group-hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
