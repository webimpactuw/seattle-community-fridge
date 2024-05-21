import { defineField, defineType } from 'sanity'

export const socialManage = defineType({
  name: 'descriptionSocialMedia',
  title: 'Get Involved Social Media Manager Description',
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
