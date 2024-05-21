import { defineField, defineType } from 'sanity'

export const fridgeDonate = defineType({
  name: 'fridgeDonate',
  title: 'Get Involved Fridge Donation Description',
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