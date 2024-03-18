import { defineField, defineType } from 'sanity';

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'texts',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
