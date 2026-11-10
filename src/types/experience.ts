export type ExperienceRole = {
  title: string;
  employmentType?: string;
  period: string;
  description?: string;
  skills?: string[];
};

export type Experience = {
  company: string;
  logo: string;
  summary?: string;
  location: string;
  roles: ExperienceRole[];
};
