// src/components/blog/BlogHome.tsx
import React from 'react';
import { blogPosts } from '../../data/blogData';
import BlogFeed from './BlogFeed';
import BlogHero from './BlogHero';


const BlogHome: React.FC = () => {

  return (
    <div className="min-h-screen bg-white">
      <BlogHero />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 py-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <BlogFeed
              selectedCategory={'all'}
              posts={blogPosts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
