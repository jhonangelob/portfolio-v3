type Company = {
  name: string;
  position: string;
};

export type Testimonial = {
  message: string;
  name: string;
  company: Company;
};

export type Testimonials = Testimonial[];
