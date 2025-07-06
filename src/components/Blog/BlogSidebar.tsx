// src/components/blog/BlogSidebar.tsx
import React from 'react';
import { BlogCategory } from 'types/blog';

interface BlogSidebarProps {
  categories: BlogCategory[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div className="space-y-8 sticky top-8">
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search stories"
          className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <svg
          className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Categories */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategorySelect('all')}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === 'all'
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            All Stories
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
