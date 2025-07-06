// src/components/blog/BlogFeed.tsx
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost } from '../../types/blog';
import BlogPostCard from './BlogPostCard';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

interface BlogFeedProps {
  selectedCategory: string;
  posts: BlogPost[];
}

const POSTS_PER_PAGE = 6;

const BlogFeed: React.FC<BlogFeedProps> = ({ selectedCategory, posts }) => {
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([]);
  const [page, setPage] = useState(1);
  
  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const hasMore = displayedPosts.length < filteredPosts.length;

  const loadMorePosts = useCallback(() => {
    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const newPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
    setDisplayedPosts(prev => [...prev, ...newPosts]);
    setPage(prev => prev + 1);
  }, [page, filteredPosts]);

  const { isFetching } = useInfiniteScroll(loadMorePosts, hasMore);

  // Reset when category changes
  React.useEffect(() => {
    setDisplayedPosts(filteredPosts.slice(0, POSTS_PER_PAGE));
    setPage(2);
  }, [selectedCategory, filteredPosts]);

  return (
    <div className="space-y-8">
      <AnimatePresence mode='popLayout'>
        {displayedPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.4,
              delay: index % POSTS_PER_PAGE * 0.1 
            }}
            layout
          >
            <BlogPostCard post={post} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Loading indicator */}
      {isFetching && (
        <div className="flex justify-center py-8">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
            <span className="text-gray-500">Loading more posts...</span>
          </div>
        </div>
      )}

      {/* No posts message */}
      {displayedPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-gray-500 text-xl">
            No posts found in this category.
          </div>
        </motion.div>
      )}

      {/* End of posts message */}
      {!hasMore && displayedPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8 border-t border-gray-200"
        >
          <div className="text-gray-500">
            You've reached the end of the posts
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BlogFeed;
