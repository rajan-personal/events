import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <div className="prose lg:prose-xl">
          <p className="mb-4">
            Welcome to our events platform! We are dedicated to bringing people together
            through meaningful and engaging events.
          </p>
          <p className="mb-4">
            Our platform makes it easy to discover and participate in events that matter
            to you, whether they're professional conferences, social gatherings, or
            educational workshops.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
