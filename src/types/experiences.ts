export type ExperienceDate = {
  start: string;
  end?: string;
  isPresent: boolean;
};

export type Experience = {
  company: string;
  location: string;
  position: string;
  date: ExperienceDate;
  description: string[];
};

export type Experiences = { data: Experience[] };
