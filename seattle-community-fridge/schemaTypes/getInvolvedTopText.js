import { defineField, defineType } from 'sanity'

export const getInvolvedTopText = defineType({
  name: 'involved',
  title: 'Involved',
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
