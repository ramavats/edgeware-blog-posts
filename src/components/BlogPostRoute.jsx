// components/BlogPostRoute.js
import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from './BlogPost';
import blogData from '../data';

function BlogPostRoute() {
  const { id } = useParams();
  const postId = parseInt(id);
  const post = blogData.find((p) => p.id === postId);

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return <BlogPost post={post} />;
}

export default BlogPostRoute;
