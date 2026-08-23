// EDIT THIS FILE with counselor-approved resources as pathways and campus programs change.
export type Pathway = {
  id: string;
  label: string;
  eyebrow: string;
  education: string;
  smc: string;
  experience: string;
  questions: string[];
};

export const pathways: Pathway[] = [
  { id: 'md-do', label: 'MD / DO', eyebrow: 'Physician', education: 'Complete prerequisite science, a bachelor’s degree, MCAT, and medical school. MD and DO programs each lead to physician practice with different traditions and curricula.', smc: 'Map your chemistry and biology sequence with a counselor; start building a service story alongside your grades.', experience: 'Primary care volunteering, longitudinal patient contact, research, and thoughtful physician shadowing.', questions: ['Which major lets me protect my science GPA?', 'When should I plan for the MCAT?', 'How can I find a consistent service commitment?'] },
  { id: 'pa', label: 'PA', eyebrow: 'Physician assistant', education: 'Earn a bachelor’s degree, complete prerequisite courses, gain hands-on patient care hours, and apply to an accredited PA program.', smc: 'Use SMC to test anatomy, physiology, and the realities of patient-facing work before committing.', experience: 'EMT, CNA, medical assistant, patient care technician, or sustained clinical volunteering.', questions: ['Which roles count as direct patient care?', 'What prerequisites repeat across PA programs?', 'How do I compare PCE opportunities?'] },
  { id: 'nursing', label: 'Nursing', eyebrow: 'Registered nurse', education: 'Choose an ADN or BSN route, complete prerequisites, pass the NCLEX-RN, and continue growing through specialty or graduate education.', smc: 'Meet with Nursing & Allied Health counseling early and track each program’s science minimums.', experience: 'Caregiving, hospice support, community health outreach, and patient-centered service.', questions: ['Which ADN and BSN pathways accept my coursework?', 'What are the application windows?', 'How can I prepare for TEAS-style exams?'] },
  { id: 'dentistry', label: 'Dentistry', eyebrow: 'Dentist', education: 'Complete a bachelor’s degree and dental prerequisites, take the DAT, and attend dental school before clinical licensure.', smc: 'Prioritize chemistry, biology, and fine-motor practice while looking for dentists who welcome curious observers.', experience: 'Dental office assisting, oral-health outreach, and shadowing general and specialty practices.', questions: ['How many shadowing settings should I see?', 'What does a competitive DAT plan look like?', 'Are my lab courses accepted?'] },
  { id: 'pharmacy', label: 'Pharmacy', eyebrow: 'Pharmacist', education: 'Many PharmD programs accept students after prerequisite college coursework; requirements vary by school and may include PCAT policies.', smc: 'Build a strong chemistry foundation and ask about transfer articulation before choosing upper-division plans.', experience: 'Pharmacy technician work, medication access programs, and public-health education.', questions: ['Do I need a bachelor’s first?', 'Which programs are test-optional?', 'How can I learn the difference between retail and clinical pharmacy?'] },
  { id: 'pt', label: 'PT', eyebrow: 'Physical therapist', education: 'Earn a bachelor’s degree, complete anatomy and science prerequisites, gain observation hours, then apply to a Doctor of Physical Therapy program.', smc: 'Pair anatomy with movement science and keep a careful log of observation hours by setting.', experience: 'Outpatient, inpatient, sports, pediatric, and neurological PT observation.', questions: ['What makes observation hours meaningful?', 'Which anatomy sequence should I take?', 'How do I find a mentor in a smaller clinic?'] },
  { id: 'other', label: 'Other health careers', eyebrow: 'Many ways to care', education: 'Public health, occupational therapy, genetic counseling, radiologic technology, speech-language pathology, and more all have distinct routes.', smc: 'Start with an informational interview and a program’s official prerequisites—not assumptions.', experience: 'Community organizations, campus research, health education, and role-specific observation.', questions: ['What does a normal week look like in this role?', 'What credential or license is required?', 'Which SMC class would help me test the fit?'] },
  { id: 'figuring-it-out', label: 'Still figuring it out', eyebrow: 'A valid pathway', education: 'There is no single correct starting point. Explore before you specialize, and give yourself room to revise the plan.', smc: 'Take one science course, visit a club meeting, and book a counselor conversation. Small evidence beats big pressure.', experience: 'Try one low-barrier volunteer shift, a campus event, or a conversation with someone one step ahead.', questions: ['What parts of health work energize me?', 'Which class can I try next?', 'Who can I talk to without needing a perfect plan?'] },
];

export const studyMatch = [
  { course: 'Chem 10', matches: ['MD / DO', 'PA', 'Pharmacy', 'Dentistry'] },
  { course: 'Chem 11', matches: ['MD / DO', 'PA', 'Pharmacy', 'Dentistry'] },
  { course: 'Chem 12', matches: ['MD / DO', 'Pharmacy', 'Dentistry', 'Research'] },
  { course: 'Bio 21', matches: ['MD / DO', 'PA', 'Nursing', 'PT'] },
  { course: 'Anatomy', matches: ['PA', 'Nursing', 'PT', 'OT'] },
  { course: 'Microbiology', matches: ['Nursing', 'PA', 'Pharmacy', 'Allied health'] },
];