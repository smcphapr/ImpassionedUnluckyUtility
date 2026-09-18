// EDIT THIS FILE each term: replace placeholders with confirmed event details,
// RSVP links, and archive status before publishing.
export type EventCategory = "Workshop" | "Panel" | "Community" | "Study Hall";

export type CampusEvent = {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  dateLabel: string;
  dayLabel?: string;
  time: string;
  location: string;
  format?: string;
  description: string;
  callout?: string;
  linkLabel?: string;
  link?: string;
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
    past: true,
  },

  {
    id: "phpa-orientation-fall-2026",
    title: "PHPA Orientation",
    category: "Community",
    date: "2026-09-15",
    dateLabel: "SEP 15",
    time: "11:15 AM – 12:00 PM",
    location: "ZOOM",
    description:
      "Meet the PHPA board, see what we have planned this semester, hear about upcoming events and opportunities, and learn how to get involved. This meeting will be held on Zoom. The Zoom link will be available in our Linktree and posted to our Instagram Story a few hours before the meeting.",
    featured: true,
    past: true,
  },

  {
    id: "ucla-cmsp-info-session-sep-22-2026",
    title: "UCLA California Medicine Scholars Program (CMSP) Info Session",
    category: "Panel",
    date: "2026-09-22",
    dateLabel: "SEP 22",
    dayLabel: "Tuesday",
    time: "11:00 AM–12:00 PM",
    location: "SCI 159 · SMC Main Campus",
    format: "In Person",
    description:
      "Interested in medical school? Learn about the California Medicine Scholars Program and SMC’s participation in UCLA’s LA Med pathway. Hear how the program supports community college students interested in medicine and learn how to apply.",
    callout: "Applications are now open.",
    linkLabel: "Learn More",
    link: "https://californiamedicinescholarsprogram.org/",
    featured: true,
  },
];
