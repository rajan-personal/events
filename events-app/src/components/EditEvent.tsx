import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Event, eventsService } from '../lib/events';
import { useEvents } from '../contexts/EventsContext';

export default function EditEvent() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { refreshEvents } = useEvents();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: ''
  });

  useEffect(() => {
    async function loadEvent() {
      if (!id) return;
      
      try {
        setLoading(true);
        const eventData = await eventsService.getEvent(id);
        setEvent(eventData);
        // Format the date as YYYY-MM-DD for the input
        const formattedDate = new Date(eventData.date).toISOString().split('T')[0];
        setFormData({
          title: eventData.title,
          description: eventData.description || '',
          date: formattedDate,
          location: eventData.location || ''
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load event');
      } finally {
        setLoading(false);
      }
    }

    loadEvent();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!event) return;

    try {
      await eventsService.updateEvent(event.id, {
        ...formData,
        date: formData.date
      });
      await refreshEvents();
      navigate(`/events/${event.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update event');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto mt-8">
        <div className="bg-red-50 text-red-600 p-4 rounded-md">
          {error}
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="max-w-2xl mx-auto mt-8">
        <div className="text-center text-gray-600">
          Event not found
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Event</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate(`/events/${event.id}`)}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
