import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { CalendarDaysIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';

// Mock data
const events = [
  {
    id: 1,
    title: 'Tech Conference 2024',
    description: 'Join us for the biggest tech conference of the year',
    date: new Date('2024-03-15'),
    location: 'San Francisco, CA',
    attendees: 500,
    category: 'Technology',
  },
  {
    id: 2,
    title: 'Music Festival',
    description: 'A weekend of amazing live performances',
    date: new Date('2024-04-20'),
    location: 'Austin, TX',
    attendees: 1000,
    category: 'Music',
  },
  {
    id: 3,
    title: 'Art Exhibition',
    description: 'Showcasing works from local and international artists',
    date: new Date('2024-05-10'),
    location: 'New York, NY',
    attendees: 200,
    category: 'Art',
  },
];

export default function EventList() {
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
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {event.category}
                </span>
              </div>
              <p className="mt-2 text-gray-600">{event.description}</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-500">
                  <CalendarDaysIcon className="h-5 w-5 mr-2" />
                  <span>{format(event.date, 'MMMM d, yyyy')}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
