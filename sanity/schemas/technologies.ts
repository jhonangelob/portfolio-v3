import { defineField, defineType } from 'sanity';

export const technologies = defineType({
  name: 'technologies',
  title: 'Technologies',
  type: 'document',
  fields: [
    defineField({
      name: 'tech',
      type: 'string',
    }),
    defineField({
      name: 'development',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'assets', type: 'image' },
            { name: 'name', type: 'string' },
            { name: 'link', type: 'string' },
            { name: 'description', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'others',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'assets', type: 'image' },
            { name: 'name', type: 'string' },
            { name: 'link', type: 'string' },
            { name: 'description', type: 'string' },
          ],
        },
      ],
    }),
  ],
});
