// EDIT THIS FILE each term: update event details, RSVP links, and archive status.
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
    id: 'health-careers-night',
    title: 'Health Careers Night',
    category: 'Panel',
    date: '2026-09-24',
    dateLabel: 'THU · SEP 24',
    time: '5:30–7:30 PM',
    location: 'Student Services Courtyard',
    description: 'A candid evening with SMC alumni in medicine, PA, nursing, dentistry, and allied health.',
    featured: true,
  },
  {
    id: 'application-studio',
    title: 'The Application Studio',
    category: 'Workshop',
    date: '2026-10-08',
    dateLabel: 'THU · OCT 08',
    time: '4:00–6:00 PM',
    location: 'Science Center 153',
    description: 'Bring your personal statement, your questions, or just a blank page. We will make a beginning together.',
  },
  {
    id: 'clinic-connections',
    title: 'Clinic Connections',
    category: 'Community',
    date: '2026-10-22',
    dateLabel: 'THU · OCT 22',
    time: '5:00–6:30 PM',
    location: 'Library 275',
    description: 'Meet local clinics and community health organizations looking for student volunteers.',
  },
  {
    id: 'midterm-study-hall',
    title: 'Midterm Study Hall',
    category: 'Study Hall',
    date: '2026-11-05',
    dateLabel: 'THU · NOV 05',
    time: '3:30–7:00 PM',
    location: 'Math Village 220',
    description: 'Quiet tables, peer accountability, and a snack table for the long haul.',
  },
  {
    id: 'winter-welcome',
    title: 'Winter Welcome Mixer',
    category: 'Community',
    date: '2026-01-29',
    dateLabel: 'THU · JAN 29',
    time: '4:30–6:00 PM',
    location: 'Main Campus Quad',
    description: 'A low-pressure way to find your people and learn what PHPA is planning next.',
    past: true,
  },
  {
    id: 'transfer-stories',
    title: 'Transfer Stories: The Long Way In',
    category: 'Panel',
    date: '2026-03-12',
    dateLabel: 'THU · MAR 12',
    time: '5:00–6:30 PM',
    location: 'Online + Student Services 112',
    description: 'SMC students and alumni share the pivots, pauses, and people that shaped their path.',
    past: true,
  },
];