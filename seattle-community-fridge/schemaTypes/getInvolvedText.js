import { defineField, defineType } from 'sanity'

export const getInvolved = defineType({
  name: 'getinvolved',
  title: 'Homepage Get Involved',
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
