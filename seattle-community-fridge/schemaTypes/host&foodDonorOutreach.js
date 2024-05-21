import { defineField, defineType } from 'sanity'

export const foodHostDonor = defineType({
  name: 'descriptionhost',
  title: 'Get Involved Host Description',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
    }),
  ],
});
