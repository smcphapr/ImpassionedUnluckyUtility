export type OpportunityKind =
  | "Shadowing"
  | "Clinical experience"
  | "Volunteering"
  | "Research"
  | "Coursework";

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
    id: "ucla-care-extender-fall-2026",
    organization: "UCLA Health Care Extender Program",
    type: "Clinical experience",
    location: "Westwood + Santa Monica",
    description:
      "A year-long clinical volunteer program for college students interested in healthcare. Care Extenders rotate through hospital departments and work alongside patient care teams. Fall 2026 orientation sign-ups open August 25.",
    linkLabel: "View Fall 2026 admissions",
    link: "https://www.uclahealth.org/volunteer/care-extender",
    featured: true,
  },

  {
    id: "cedars-sinai-adult-volunteer",
    organization: "Cedars-Sinai Adult Volunteer Program",
    type: "Volunteering",
    location: "Los Angeles",
    description:
      "Volunteer throughout Cedars-Sinai in patient-facing and hospital support roles. Applications are accepted year-round, with typical four-hour weekly shifts.",
    linkLabel: "Apply to volunteer",
    link: "https://www.cedars-sinai.org/volunteer-services/general.html",
  },

  {
    id: "venice-family-clinic-volunteer",
    organization: "Venice Family Clinic",
    type: "Volunteering",
    location: "West Los Angeles",
    description:
      "Volunteer with one of the Westside’s largest community health organizations. Opportunities can include clinic support, community events, and roles that provide exposure to serving diverse patient populations.",
    linkLabel: "Explore volunteer opportunities",
    link: "https://venicefamilyclinic.org/volunteer/",
  },

  {
    id: "chla-pre-pa-shadowing",
    organization: "Children’s Hospital Los Angeles — Pre-PA Observation",
    type: "Shadowing",
    location: "Los Angeles",
    description:
      "CHLA offers limited pediatric job-shadow opportunities for students who are in the process of applying to an accredited PA program. Observation requests are accepted on a rolling basis and are limited to 40 hours.",
    linkLabel: "View Pre-PA requirements",
    link: "https://www.chla.org/office-advanced-practice/advanced-practice-provider-student-clinical-rotations",
  },
  {
    id: "smc-advanced-human-anatomy-spring-2027",
    organization: "SMC Advanced Human Anatomy (ANA 2) — Spring 2027",
    type: "Coursework",
    location: "SMC Main Campus · MSB 219",
    description:
      "A hands-on, small-group human donor dissection course with a clinical emphasis. Students will explore human anatomy through real tissue dissection, selected medical and surgical procedures, patient assessment skills, and interactive workshops with clinicians and medical students. Taught by Professor Collin Ellis. Meets Fridays from 10:30 AM–4:50 PM (Section 1104). Prerequisite: ANA 1 or department-approved equivalent. Free text/lab manual and study materials provided. Contact the professor with questions about costs or workload.",
    linkLabel: "Contact Professor Ellis",
    link: "mailto:ellis_collin@smc.edu",
    featured: true,
  },
];
