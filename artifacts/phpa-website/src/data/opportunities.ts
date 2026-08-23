// EDIT THIS FILE each term: replace these placeholders with confirmed listings,
// locations, descriptions, and links before publishing.
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
    id: 'shadowing-coming-soon',
    organization: 'Opportunity coming soon',
    type: 'Shadowing',
    location: 'Details to be added',
    description: 'Confirmed shadowing opportunities will be shared here.',
    linkLabel: 'Check back soon',
    link: '#',
    featured: true,
  },
  {
    id: 'clinical-coming-soon',
    organization: 'Opportunity coming soon',
    type: 'Clinical experience',
    location: 'Details to be added',
    description: 'Confirmed clinical experience opportunities will be shared here.',
    linkLabel: 'Check back soon',
    link: '#',
  },
  {
    id: 'volunteering-coming-soon',
    organization: 'Opportunity coming soon',
    type: 'Volunteering',
    location: 'Details to be added',
    description: 'Confirmed volunteering opportunities will be shared here.',
    linkLabel: 'Check back soon',
    link: '#',
  },
  {
    id: 'research-coming-soon',
    organization: 'Opportunity coming soon',
    type: 'Research',
    location: 'Details to be added',
    description: 'Confirmed research opportunities will be shared here.',
    linkLabel: 'Check back soon',
    link: '#',
  },
];