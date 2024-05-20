import { defineField, defineType } from 'sanity'

export const volunteerCoord = defineType({
  name: 'descriptionVolunteer',
  title: 'Volunteer Description',
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
