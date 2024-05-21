import { defineField, defineType } from 'sanity'

export const homeFree = defineType({
  name: 'homefood',
  title: 'Get Involved Homepage Free Food',
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
