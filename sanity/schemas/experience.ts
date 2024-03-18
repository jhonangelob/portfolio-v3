import { defineField, defineType } from 'sanity';

export const experience = defineType({
  name: 'experience',
  title: 'Experiences',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      type: 'string',
    }),
    defineField({
      name: 'location',
      type: 'string',
    }),
    defineField({
      name: 'position',
      type: 'string',
    }),
    defineField({
      name: 'date',
      type: 'object',
      fields: [
        { name: 'start', type: 'string' },
        { name: 'end', type: 'string' },
        { name: 'isPresent', type: 'boolean' },
      ],
    }),
  ],
});
