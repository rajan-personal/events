import React from 'react';

export default function EventsPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Example event cards - replace with your actual event data */}
        {[1, 2, 3].map((id) => (
          <div key={id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Event {id}</h2>
            <p className="text-gray-600 mb-4">Event description goes here...</p>
            <a 
              href={`/events/${id}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View Details →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
