import { defineField, defineType } from 'sanity'

export const openRolesText = defineType({
  name: 'opentext',
  title: 'Get Involved Open Roles Text',
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
