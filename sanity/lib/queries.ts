import { groq } from 'next-sanity';

export const ABOUT_QUERY = groq`*[_type == "about"]`;

export const PROJECTS_QUERY = groq`*[_type == "projects"]{
    title,
    repository,
    subtitle,
    description,
    link,
    technologies,
    "image": image.asset->url
  }`;

export const TECHNOLOGIES_QUERY = groq`*[_type == "technologies"]{
    "development" : development[]{
      name,
      link,
      description,
      "image": assets.asset->url
    },
    "others" : others[]{
      name,
      link,
      description,
      "image": assets.asset->url
    }
  }`;

export const EXPERIENCE_QUERY = groq`*[_type == "experience"]{
    company,
    location,
    position,
    date
  }`;

export const TESTIMONIALS_QUERY = groq`*[_type == "testimonies"]{
    message,
    name,
    company
  }`;

export const CERTIFICATE_QUERY = groq`*[_type == "certificates"]{
    title,
    link,
    "source": image.asset->url
  }`;
