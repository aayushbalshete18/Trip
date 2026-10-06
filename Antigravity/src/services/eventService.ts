import { LOCAL_EVENTS, LocalEvent } from '../data/events';

export const eventService = {
  getEvents: (destinationName: string): LocalEvent[] => {
    const key = destinationName.toLowerCase().trim();
    return LOCAL_EVENTS.filter((e) => e.destination.toLowerCase().includes(key) || key.includes(e.destination.toLowerCase()));
  },

  getAllEvents: (): LocalEvent[] => {
    return LOCAL_EVENTS;
  }
};
