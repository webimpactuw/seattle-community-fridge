import { defineField, defineType } from 'sanity'

export const getInvolvedTopText = defineType({
  name: 'involved',
  title: 'Get Involved Top Text',
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
