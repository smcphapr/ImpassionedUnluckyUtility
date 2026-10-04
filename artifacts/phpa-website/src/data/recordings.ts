export type Recording = {
  id: string;
  title: string;
  date: string;
  speaker?: string;
  description: string;
  videoUrl?: string;
  attendanceUrl?: string;
  attendanceEligible: boolean;
};

export const recordings: Recording[] = [];
