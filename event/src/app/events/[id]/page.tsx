import React from 'react';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

export default function EventPage({ params }: Props) {
  // In a real app, you would fetch event data based on the ID
  const eventId = params.id;

  // Example of handling non-existent events
  if (parseInt(eventId) > 3) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Event {eventId}</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Event Details</h2>
            <p className="text-gray-600">
              This is a detailed description of event {eventId}. In a real application,
              this would contain actual event information fetched from a database.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <a
              href="/events"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Events
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
