import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { CalendarDaysIcon, MapPinIcon, UserGroupIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

// Mock data (same as in EventList)
const events = [
  {
    id: 1,
    title: 'Tech Conference 2024',
    description: 'Join us for the biggest tech conference of the year',
    date: new Date('2024-03-15'),
    location: 'San Francisco, CA',
    attendees: 500,
    category: 'Technology',
    fullDescription: `Join us for the biggest tech conference of the year! This event brings together industry leaders, innovators, and tech enthusiasts for a day of learning and networking.

Featured topics include:
- Artificial Intelligence and Machine Learning
- Web Development Trends
- Cybersecurity
- Cloud Computing
- DevOps Best Practices

The event includes keynote speeches, interactive workshops, networking sessions, and a job fair.`,
  },
  {
    id: 2,
    title: 'Music Festival',
    description: 'A weekend of amazing live performances',
    date: new Date('2024-04-20'),
    location: 'Austin, TX',
    attendees: 1000,
    category: 'Music',
    fullDescription: 'A weekend of amazing live performances featuring top artists...',
  },
  {
    id: 3,
    title: 'Art Exhibition',
    description: 'Showcasing works from local and international artists',
    date: new Date('2024-05-10'),
    location: 'New York, NY',
    attendees: 200,
    category: 'Art',
    fullDescription: 'Showcasing works from local and international artists...',
  },
];

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find(e => e.id === Number(id));

  if (!event) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Event not found</h2>
        <p className="mt-2 text-gray-600">The event you're looking for doesn't exist.</p>
        <Link to="/" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back to Events
      </Link>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {event.category}
          </span>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center text-gray-600">
            <CalendarDaysIcon className="h-6 w-6 mr-3" />
            <span>{format(event.date, 'EEEE, MMMM d, yyyy')}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPinIcon className="h-6 w-6 mr-3" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <UserGroupIcon className="h-6 w-6 mr-3" />
            <span>{event.attendees} attendees</span>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About this Event</h2>
          <div className="prose max-w-none">
            {event.fullDescription.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Register for Event
          </button>
        </div>
      </div>
    </div>
  );
}
