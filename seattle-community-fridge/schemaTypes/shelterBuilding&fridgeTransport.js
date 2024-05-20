import { defineField, defineType } from 'sanity'

export const shelterBuilding = defineType({
  name: 'descriptionbuild',
  title: 'DescriptionBuild',
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
