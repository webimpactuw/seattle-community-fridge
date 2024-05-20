import { defineField, defineType } from 'sanity';

export const aboutUsBottomtext = defineType({
  name: 'aboutBottomtext',
  title: 'About Bottom Text',
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
