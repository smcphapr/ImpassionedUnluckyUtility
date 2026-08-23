// EDIT THIS FILE each term: replace placeholders with confirmed event details,
// RSVP links, and archive status before publishing.
export type EventCategory = 'Workshop' | 'Panel' | 'Community' | 'Study Hall';

export type CampusEvent = {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  dateLabel: string;
  time: string;
  location: string;
  description: string;
  featured?: boolean;
  past?: boolean;
};

export const events: CampusEvent[] = [
  {
    id: 'next-phpa-event',
    title: 'Next PHPA Event',
    category: 'Panel',
    date: '',
    dateLabel: 'DATE TO BE ADDED',
    time: 'Time to be added',
    location: 'Location to be added',
    description: 'Event details will be posted here when they are confirmed.',
    featured: true,
  },
];