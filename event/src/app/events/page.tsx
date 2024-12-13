import React from 'react';
import Link from 'next/link';

const EVENTS = [
  { id: '1', title: 'Tech Conference 2024', description: 'Annual technology conference featuring the latest innovations.' },
  { id: '2', title: 'Music Festival', description: 'A weekend of amazing live performances.' },
  { id: '3', title: 'Art Exhibition', description: 'Showcasing works from local and international artists.' },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">All Events</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <Link
                href={`/events/${event.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
