export type Technology = {
  image: any;
  name: string;
  link: string;
  description: string;
};

export type Technologies = {
  data: { development: Technology[]; others: Technology[] }[];
};
