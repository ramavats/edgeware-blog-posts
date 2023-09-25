import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPostRoute from './components/BlogPostRoute'; // Import the component for individual blog posts
import blogData from './data';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BlogList posts={blogData} />} />
          <Route path="/post/:id" element={<BlogPostRoute />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
