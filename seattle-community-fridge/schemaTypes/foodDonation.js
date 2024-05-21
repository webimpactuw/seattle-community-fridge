import { defineField, defineType } from 'sanity'

export const foodDonate = defineType({
  name: 'foodDonate',
  title: 'Get Involved Food Donation Description',
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