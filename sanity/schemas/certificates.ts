import { defineField, defineType } from 'sanity';

export const certificates = defineType({
  name: 'certificates',
  title: 'Certificates',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'link',
      type: 'string',
    }),
  ],
});
