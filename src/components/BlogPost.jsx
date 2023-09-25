import React from 'react';

const BlogPost = ({ post }) => {
  if (!post) {
    return <div className="text-red-500">Error: Blog post not found.</div>;
  }

  // Get the base URL of the current page
  const baseUrl = window.location.origin;

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      {/* Construct the image URL based on the base URL and the post.image path */}
      <img
        src={`${baseUrl}${post.image}`}
        alt={post.title}
        className="w-1/2 h-1/2 rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-4">
          Published on: {post.publishDate}
        </p>
        <p className="text-gray-700 mb-4">Author: {post.author}</p>
        <div className="text-gray-800">{post.content}</div>
      </div>
    </div>
  );
};

export default BlogPost;
