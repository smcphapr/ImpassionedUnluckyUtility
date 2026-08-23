// EDIT THIS FILE each academic year: add headshots when available and update board roles.
export type BoardMember = {
  id: string;
  name: string;
  role: string;
  path: string;
  year: string;
  specialty: string;
  initials: string;
  email: string;
};

export const boardMembers: BoardMember[] = [
  { id: 'maya-patel', name: 'Maya Patel', role: 'President', path: 'MD / DO', year: 'Class of 2027', specialty: 'Human Biology', initials: 'MP', email: 'maya.patel@smc.edu' },
  { id: 'noah-williams', name: 'Noah Williams', role: 'Vice President', path: 'PA', year: 'Class of 2026', specialty: 'Psychology', initials: 'NW', email: 'noah.williams@smc.edu' },
  { id: 'sophia-chen', name: 'Sophia Chen', role: 'Events Editor', path: 'Nursing', year: 'Class of 2027', specialty: 'Kinesiology', initials: 'SC', email: 'sophia.chen@smc.edu' },
  { id: 'andre-rodriguez', name: 'Andre Rodriguez', role: 'Opportunities Editor', path: 'Dentistry', year: 'Class of 2026', specialty: 'Chemistry', initials: 'AR', email: 'andre.rodriguez@smc.edu' },
  { id: 'jules-okafor', name: 'Jules Okafor', role: 'Study Match Lead', path: 'Pharmacy', year: 'Class of 2028', specialty: 'Life Science', initials: 'JO', email: 'jules.okafor@smc.edu' },
  { id: 'lina-haddad', name: 'Lina Haddad', role: 'Community Editor', path: 'PT', year: 'Class of 2027', specialty: 'Communication Studies', initials: 'LH', email: 'lina.haddad@smc.edu' },
];