import { defineField, defineType } from 'sanity'

export const fridgeHost = defineType({
  name: 'fridgeHost',
  title: 'Get Involved Fridge Host Description',
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