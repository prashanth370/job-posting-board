import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <footer className="bg-white shadow-sm mt-auto">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          © 2024 Job Posting Board. All rights reserved.
        </div>
      </footer>
    </div>
  );
}