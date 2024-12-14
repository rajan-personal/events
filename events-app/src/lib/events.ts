import { supabase } from './supabase';

export interface Event {
  id: string;
  title: string;
  description?: string;
  date: Date;
  location?: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface CreateEventInput {
  title: string;
  description?: string;
  date: string | Date;
  location?: string;
}

export interface UpdateEventInput extends Partial<CreateEventInput> {}

export const eventsService = {
  async getEvents() {
    const { data: events, error } = await supabase
      .from('Event')
      .select('*')
      .order('date', { ascending: true });

    if (error) throw error;
    return events.map(event => ({
      ...event,
      date: new Date(event.date),
      createdAt: new Date(event.createdAt),
      updatedAt: new Date(event.updatedAt)
    })) as Event[];
  },

  async getEvent(id: string) {
    const { data: event, error } = await supabase
      .from('Event')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return {
      ...event,
      date: new Date(event.date),
      createdAt: new Date(event.createdAt),
      updatedAt: new Date(event.updatedAt)
    } as Event;
  },

  async createEvent(input: CreateEventInput) {
    const user = await supabase.auth.getUser();
    if (!user.data.user) throw new Error('User not authenticated');

    const now = new Date();
    const { data: event, error } = await supabase
      .from('Event')
      .insert([{
        id: crypto.randomUUID(),
        ...input,
        userId: user.data.user.id,
        date: input.date instanceof Date ? input.date.toISOString() : input.date,
        createdAt: now.toISOString(),
        updatedAt: now.toISOString()
      }])
      .select()
      .single();

    if (error) throw error;
    return {
      ...event,
      date: new Date(event.date),
      createdAt: new Date(event.createdAt),
      updatedAt: new Date(event.updatedAt)
    } as Event;
  },

  async updateEvent(id: string, input: UpdateEventInput) {
    const now = new Date();
    const { data: event, error } = await supabase
      .from('Event')
      .update({
        ...input,
        ...(input.date && { date: input.date }),
        updatedAt: now.toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return {
      ...event,
      date: new Date(event.date),
      createdAt: new Date(event.createdAt),
      updatedAt: new Date(event.updatedAt)
    } as Event;
  },

  async deleteEvent(id: string) {
    const { error } = await supabase
      .from('Event')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },
};
