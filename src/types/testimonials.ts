type Company = {
  name: string;
  position: string;
};

export type Testimony = {
  message: string;
  name: string;
  company: Company;
};

export type Testimonies = { data: Testimony[] };
