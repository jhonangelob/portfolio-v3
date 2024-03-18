import { type SchemaTypeDefinition } from 'sanity';
import { about } from './schemas/about';
import { projects } from './schemas/projects';
import { experience } from './schemas/experience';
import { technologies } from './schemas/technologies';
import { testimonies } from './schemas/testimonies';
import { certificates } from './schemas/certificates';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, projects, experience, technologies, testimonies, certificates],
};
