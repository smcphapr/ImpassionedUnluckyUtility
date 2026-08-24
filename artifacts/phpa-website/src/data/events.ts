// EDIT THIS FILE each term: replace placeholders with confirmed event details,
// RSVP links, and archive status before publishing.
export type EventCategory = "Workshop" | "Panel" | "Community" | "Study Hall";

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
    id: "lab-coat-sale-sep-8-2026",
    title: "Lab Coat Sale",
    category: "Community",
    date: "2026-09-08",
    dateLabel: "SEP 08",
    time: "11:15 AM–12:30 PM",
    location: "SCI 159",
    description:
      "Need a lab coat for class? Stop by for washed and ready-to-use lab coats and goggles. Lab coats are $10 and goggles are $5. Cash, card, and Zelle accepted. Quantities are limited.",
    featured: true,
    past: false,
  },
];
