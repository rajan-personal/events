import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useEvents } from '../contexts/EventsContext';

export default function EventList() {
  const { events, loading, error } = useEvents();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        Error loading events: {error.message}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Upcoming Events</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/events/${event.id}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold text-gray-900">{event.title}</h2>
              </div>
              {event.description && (
                <p className="mt-2 text-gray-600 line-clamp-2">{event.description}</p>
              )}
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <CalendarDaysIcon className="h-5 w-5 mr-2" />
                  <span>{format(new Date(event.date), 'PPP')}</span>
                </div>
                {event.location && (
                  <div className="flex items-center text-gray-600">
                    <MapPinIcon className="h-5 w-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
