import { defineField, defineType } from 'sanity'

export const volunteerCoord = defineType({
  name: 'descriptionVolunteer',
  title: 'Get Involved Volunteer Coordinator Description',
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
