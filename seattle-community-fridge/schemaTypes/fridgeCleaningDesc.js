import { defineField, defineType } from 'sanity'

export const fridgeCleaningDesc = defineType({
  name: 'descriptionclean',
  title: 'Get Involved Clean Description',
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
