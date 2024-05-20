import { defineField, defineType } from 'sanity'

export const openRolesText = defineType({
  name: 'opentext',
  title: 'OpenText',
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
