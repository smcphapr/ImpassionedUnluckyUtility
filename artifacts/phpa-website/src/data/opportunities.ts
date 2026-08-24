// EDIT THIS FILE each term: replace these placeholders with confirmed listings,
// locations, descriptions, and links before publishing.
export type OpportunityKind =
  | "Shadowing"
  | "Clinical experience"
  | "Volunteering"
  | "Research";

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
    id: "shadowing-coming-soon",
    organization: "Shadowing opportunities",
    type: "Shadowing",
    location: "Santa Monica / Los Angeles",
    description:
      "We are building a list of shadowing opportunities for SMC students interested in exploring different healthcare careers.",
    linkLabel: "Coming soon",
    link: "#",
    featured: true,
  },
  {
    id: "clinical-coming-soon",
    organization: "Clinical experience",
    type: "Clinical experience",
    location: "Santa Monica / Los Angeles",
    description:
      "Clinical experience listings and programs will be added here as they are confirmed.",
    linkLabel: "Coming soon",
    link: "#",
  },
  {
    id: "volunteering-coming-soon",
    organization: "Volunteering opportunities",
    type: "Volunteering",
    location: "Santa Monica / Los Angeles",
    description:
      "Volunteer opportunities in healthcare and community settings will be added here as they are confirmed.",
    linkLabel: "Coming soon",
    link: "#",
  },
  {
    id: "research-coming-soon",
    organization: "Research opportunities",
    type: "Research",
    location: "Los Angeles",
    description:
      "Research opportunities for SMC students will be shared here as they become available.",
    linkLabel: "Coming soon",
    link: "#",
  },
];
