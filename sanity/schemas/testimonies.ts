import { defineField, defineType } from 'sanity';

export const testimonies = defineType({
  name: 'testimonies',
  title: 'Testimonies',
  type: 'document',
  fields: [
    defineField({
      name: 'message',
      type: 'string',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'company',
      type: 'object',
      fields: [
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'position',
          type: 'string',
        },
      ],
    }),
  ],
});
