import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-500">Author: {post.author}</p>
                <p className="text-sm text-gray-500">Published on: {post.publishDate}</p>
              </div>
              <Link to={`/post/${post.id}`} className="block mt-4 text-blue-600 hover:underline">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
