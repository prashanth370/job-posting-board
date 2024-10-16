import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./ui/button";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Job Posting Board</h1>
      <p className="text-xl text-gray-600 mb-8">Find your dream job or post new opportunities. Register or login to get started.</p>
      <div className="space-x-4">
        <Button asChild size="lg">
          <Link to="/register">Register</Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;