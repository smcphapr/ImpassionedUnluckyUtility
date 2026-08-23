// EDIT THIS FILE each term: replace listings, confirm availability, and update links.
export type OpportunityKind = 'Shadowing' | 'Clinical experience' | 'Volunteering' | 'Research';

export type Opportunity = {
  id: string;
  organization: string;
  type: OpportunityKind;
  location: string;
  description: string;
  linkLabel: string;
  link: string;
  featured?: boolean;
};

export const opportunities: Opportunity[] = [
  {
    id: 'ucla-shadowing',
    organization: 'UCLA Health Student Shadowing Network',
    type: 'Shadowing',
    location: 'Westwood · Application required',
    description: 'Observe care teams across several specialties through a structured, alumni-supported placement.',
    linkLabel: 'View interest form',
    link: '#',
    featured: true,
  },
  {
    id: 'smmc-volunteers',
    organization: 'Santa Monica Medical Center',
    type: 'Clinical experience',
    location: 'Santa Monica · Ongoing',
    description: 'Patient escort, information desk, and family support roles for students ready to start close to campus.',
    linkLabel: 'Read requirements',
    link: '#',
  },
  {
    id: 'wise-sons',
    organization: 'Wise & Healthy Aging',
    type: 'Volunteering',
    location: 'West Los Angeles · Flexible',
    description: 'Build relationships with older adults through activity support and community programming.',
    linkLabel: 'Explore opening',
    link: '#',
  },
  {
    id: 'cedars-research',
    organization: 'Cedars-Sinai Research Internships',
    type: 'Research',
    location: 'Los Angeles · Seasonal',
    description: 'Summer and academic-year opportunities in translational, public health, and clinical research.',
    linkLabel: 'Check the portal',
    link: '#',
  },
  {
    id: 'community-clinic',
    organization: 'Venice Family Clinic',
    type: 'Volunteering',
    location: 'Venice · Training provided',
    description: 'Support a community health center through patient navigation, outreach, and health education.',
    linkLabel: 'Learn more',
    link: '#',
  },
  {
    id: 'physical-therapy-lab',
    organization: 'Motion Lab LA',
    type: 'Shadowing',
    location: 'Culver City · By request',
    description: 'A small outpatient practice welcoming students curious about sports medicine and rehabilitation.',
    linkLabel: 'Send an inquiry',
    link: '#',
  },
];