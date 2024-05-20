import { defineField, defineType } from 'sanity'

export const fridgeCleaningDesc = defineType({
  name: 'descriptionclean',
  title: 'DescriptionClean',
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
