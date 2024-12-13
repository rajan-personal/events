'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const EVENTS = [
  { id: '1', title: 'Tech Conference 2024', description: 'Annual technology conference featuring the latest innovations.' },
  { id: '2', title: 'Music Festival', description: 'A weekend of amazing live performances.' },
  { id: '3', title: 'Art Exhibition', description: 'Showcasing works from local and international artists.' },
];

export default function EventPage() {
  const params = useParams();
  const eventId = params.id as string;
  
  const event = EVENTS.find(e => e.id === eventId);
  
  if (!event) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
          <p className="mb-6">Sorry, the event you're looking for doesn't exist.</p>
          <Link
            href="/events"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{event.title}</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Event Details</h2>
            <p className="text-gray-600">
              {event.description}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <Link
              href="/events"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
